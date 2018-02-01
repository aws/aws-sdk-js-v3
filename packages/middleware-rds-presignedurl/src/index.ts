import {
    Credentials,
    Decoder,
    Encoder,
    MetadataBearer,
    Middleware,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    HashConstructor,
    HttpEndpoint,
    Provider,
} from '@aws/types';
import {formatUrl} from '@aws/util-format-url';
import {presignRequestQuery} from '@aws/presign-request-query';
import {QuerySerializer} from "@aws/protocol-query";
import {QueryBuilder} from '@aws/query-builder';

const arnPattern = "arn:[\\w+=/,.@-]+:[\\w+=/,.@-]+:([\\w+=/,.@-]*)?:[0-9]+:[\\w+=/,.@-]+(:[\\w+=/,.@-]+)?(:[\\w+=/,.@-]+)?";

export type RDSInput = {[index: string]: any};

export function buildCrossRegionPresignedUrl<
    Input extends RDSInput,
    Output extends MetadataBearer   
>(
    sourceIdentifierKeyName: string,
    regionProvider: Provider<string>,
    credentialsProvider: Provider<Credentials>,
    endpoint: Provider<HttpEndpoint>,
    base64Encoder: Encoder,
    utf8Decoder: Decoder,
    sha256: HashConstructor,
): Middleware<Input, Output> {
    return (
        next: Handler<Input, Output>,
        {model}: HandlerExecutionContext
    ): Handler<Input, Output> => async (
        args: HandlerArguments<Input>
    ): Promise<Output> => {
        const {input: originInput} = args;
        const input = {...(originInput as RDSInput)};
        const region = await regionProvider();
        const sourceIdentifier = input[sourceIdentifierKeyName] as string || (function(){
            throw new Error(`required member name ${sourceIdentifierKeyName}.`)
        })();
        if (
            !input.PresignedUrl && 
            isARN(sourceIdentifier) && 
            region !== getEndpointFromARN(sourceIdentifier)
        ) {
            const requestSerializer = new QuerySerializer(
                await endpoint(), 
                new QueryBuilder(base64Encoder, utf8Decoder),
            );
            let request = requestSerializer.serialize(model, input);
            const presignedRequest = await presignRequestQuery(request, {
                endpoint: {
                    ...await endpoint(),
                    hostname: `rds.${input.SourceRegion}.amazonaws.com`,
                },
                credentials: await credentialsProvider(),
                sha256,
                signingName: 'rds',
                signingRegion: getEndpointFromARN(sourceIdentifier),
            })
            input.PresignedUrl = formatUrl(presignedRequest);
        }
        return next({...args, input: input as Input});
    }
}

function isARN(id: string): boolean {
    const regARN = new RegExp(arnPattern);
    return regARN.test(id)
}

function getEndpointFromARN(arn: string): string {
    const arnArr = arn.split(':');
    if(arnArr.length < 3) {
        throw new Error(`Cannot infer endpoint from '${arn}'`);
    }
    return arnArr[3];
}
