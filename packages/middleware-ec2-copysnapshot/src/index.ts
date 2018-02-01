import {
    MetadataBearer, 
    Middleware,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    Provider,
    RequestSerializer,
    HashConstructor,
    DateInput,
    QueryParameterBag,
    Credentials,
    HttpEndpoint,
    Encoder,
    Decoder
} from '@aws/types';
import {formatUrl} from '@aws/util-format-url';
import {QuerySerializer} from '@aws/protocol-query';
import {QueryBuilder} from '@aws/query-builder';
import {presignRequestQuery} from '@aws/presign-request-query';

export interface CopySnapshotInput {
    SourceRegion: string,
    DestinationRegion?: string,
    PresignedUrl?: string
}

//an initialize middleware to add PresignUrl to input
export function addPresignedUrl<
    Input extends CopySnapshotInput,
    Output extends MetadataBearer
>(
    region: Provider<string>,
    credentials: Provider<Credentials>,
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
        const {input: originalInput} = args;
        //shallow copy of originalInput object
        let input = {
            ...originalInput as CopySnapshotInput
        }
        if (!originalInput.PresignedUrl) {
            //DestinationRegion should always be client region
            input.DestinationRegion = await region();
            //construct a presigned url using source region endpoint
            const requestSerializer = new QuerySerializer(
                await endpoint(), 
                new QueryBuilder(base64Encoder, utf8Decoder, 'ec2'),
            );
            let request = requestSerializer.serialize(model, input);
            const presignedRequest = await presignRequestQuery(request, {
                //FIXME: need an endpoint provider for given region
                endpoint: {
                    ...await endpoint(),
                    hostname: `ec2.${input.SourceRegion}.amazonaws.com`,
                },
                credentials: await credentials(),
                sha256,
                signingName: 'ec2',
                signingRegion: input.SourceRegion,
            })
            input.PresignedUrl = formatUrl(presignedRequest);
        }
        const revisedArgs = {...args, input: input as Input};
        return next(revisedArgs)
    }
}
