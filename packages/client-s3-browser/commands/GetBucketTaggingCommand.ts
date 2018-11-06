import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_middleware_header_default from '@aws-sdk/middleware-header-default';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetBucketTagging} from '../model/GetBucketTagging';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBucketTaggingInput} from '../types/GetBucketTaggingInput';
import {GetBucketTaggingOutput} from '../types/GetBucketTaggingOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class GetBucketTaggingCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetBucketTaggingInput,
    OutputTypesUnion,
    GetBucketTaggingOutput,
    S3ResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetBucketTaggingInput,
        GetBucketTaggingOutput,
        Blob
    >();

    constructor(readonly input: GetBucketTaggingInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<GetBucketTaggingInput, GetBucketTaggingOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBucketTagging
        };
        stack.add(
            __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
                forcePathStyle: configuration.forcePathStyle,
                preformedBucketEndpoint: configuration.bucketEndpoint,
                useAccelerateEndpoint: configuration.useAccelerateEndpoint,
                useDualstackEndpoint: configuration.useDualstackEndpoint
            }),
            {
                step: 'build',
                priority: 0
            }
        );
        stack.add(
            __aws_sdk_middleware_header_default.headerDefault(
                {'Content-Type': 'application/octet-stream'}
            ),
            {
                step: 'build',
                priority: -50,
                tags: {'Content-Type': true}
            }
        );
        return stack.resolve(
            handler<GetBucketTaggingInput, GetBucketTaggingOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}