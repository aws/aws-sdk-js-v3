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
    HttpRequest,
    QueryParameterBag
} from '@aws/types';
import {formatUrl} from '@aws/util-format-url';
import {presignRequestQuery} from '@aws/query-request-presigner';
import {QuerySerializer} from "@aws/protocol-query";
import {QueryBuilder} from '@aws/query-builder';

const regARN = new RegExp('arn:[\\w+=/,.@-]+:[\\w+=/,.@-]+:([\\w+=/,.@-]*)?:[0-9]+:[\\w+=/,.@-]+(:[\\w+=/,.@-]+)?(:[\\w+=/,.@-]+)?');

export type RDSInput = {[index: string]: any};

export function buildCrossRegionPresignedUrl<
    Input extends RDSInput,
    Output extends MetadataBearer   
>(
    sourceIdentifierKey: string,
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
        //shallow copy of originalInput object
        const input = {...args.input as RDSInput};
        const region = await regionProvider();
        const sourceIdentifier = input[sourceIdentifierKey];
        if (
            !input.PresignedUrl && 
            isARN(sourceIdentifier) && 
            region !== getEndpointFromARN(sourceIdentifier)
        ) {
            const sourceRegion = getEndpointFromARN(sourceIdentifier);
            const resolvedEndpoint = await endpoint();
            const requestSerializer = new QuerySerializer(
                resolvedEndpoint, 
                new QueryBuilder(base64Encoder, utf8Decoder),
            );
            let request = requestSerializer.serialize(model, input);
            //DestinationRegion is not present in model
            request.query = request.query || {} as QueryParameterBag
            request.query['DestinationRegion'] = region;
            const presignedRequest = await presignRequestQuery(request, {
                //FIXME: need an endpoint provider for given region
                endpoint: {
                    ...resolvedEndpoint,
                    hostname: `rds.${sourceRegion}.amazonaws.com`,
                },
                credentials: await credentialsProvider(),
                sha256,
                signingName: 'rds',
                signingRegion: sourceRegion,
            })
            input.PreSignedUrl = formatUrl(presignedRequest);
        }
        return next({...args, input: input as Input});
    }
}

function isARN(id: string|undefined): boolean {
    if (!id) return false;
    return regARN.test(id);
}

function getEndpointFromARN(arn: string): string {
    const arnArr = arn.split(':');
    if(arnArr.length < 4) {
        throw new Error(`Cannot infer endpoint from '${arn}'`);
    }
    return arnArr[3];
}
