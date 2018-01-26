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
import {formatUrl} from '@aws/util-format-url'
import {SignatureV4} from '@aws/signature-v4'
import {QuerySerializer} from '@aws/protocol-query'
import {QueryBuilder} from '@aws/query-builder'

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
    signingName: string
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
            const presignedUrlEndpoint = {
                ...await endpoint(),
                hostname: `ec2.${input.SourceRegion}.amazonaws.com`,
            };
            const requestSerializer = new QuerySerializer(
                presignedUrlEndpoint, 
                new QueryBuilder(base64Encoder, utf8Decoder, 'ec2'),
            );
            let request = requestSerializer.serialize(model, input);
            request = {
                ...request,
                method: 'GET', //query and ec2 protocols use 'GET' in presigning
                query: appendBodyToQuery(
                    request.query,
                    request.body as string
                ),
                body: undefined
            }
            const signer = new SignatureV4({
                credentials,
                region: input.SourceRegion,
                service: signingName,
                sha256
            })
            const presignedRequest = await signer.presignRequest(
                request,
                expirationTime(60 * 60),
                {unsignableHeaders: new Set().add('content-type')},
            );
            input.PresignedUrl = formatUrl(presignedRequest);
        }
        const revisedArgs = {...args, input: input as Input};
        return next(revisedArgs)
    }
}

function expirationTime(durationSeconds: number): DateInput {
    return Math.round(((new Date()).valueOf() + durationSeconds * 1000) / 1000);
}

function appendBodyToQuery(query?: QueryParameterBag, body?: string): QueryParameterBag | undefined {
    if (!body) return undefined;
    return body.split('&').reduce<QueryParameterBag>(
        (query, curr) => {
            const breakPoint = curr.lastIndexOf('=')
            if (breakPoint <= 0 || breakPoint === curr.length - 1) {
                throw new Error('Invalid query parameter when presigning')
            }
            const key = curr.substring(0, breakPoint);
            const value = curr.substring(breakPoint + 1);
            query[key] = value;
            return query
        }, 
        query ? query : {}
    )
}
