import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteBucketWebsite} from '../model/DeleteBucketWebsite';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteBucketWebsiteInput} from '../types/DeleteBucketWebsiteInput';
import {DeleteBucketWebsiteOutput} from '../types/DeleteBucketWebsiteOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class DeleteBucketWebsiteCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteBucketWebsiteInput,
    OutputTypesUnion,
    DeleteBucketWebsiteOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteBucketWebsiteInput,
        DeleteBucketWebsiteOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteBucketWebsiteInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteBucketWebsiteInput, DeleteBucketWebsiteOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteBucketWebsite
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
        return stack.resolve(
            handler<DeleteBucketWebsiteInput, DeleteBucketWebsiteOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}