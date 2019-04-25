import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PutBucketWebsite} from '../model/PutBucketWebsite';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketWebsiteInput} from '../types/PutBucketWebsiteInput';
import {PutBucketWebsiteOutput} from '../types/PutBucketWebsiteOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';
export * from '../types/PutBucketWebsiteInput';
export * from '../types/PutBucketWebsiteOutput';
export * from '../types/PutBucketWebsiteExceptionsUnion';

export class PutBucketWebsiteCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutBucketWebsiteInput,
    OutputTypesUnion,
    PutBucketWebsiteOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutBucketWebsiteInput,
        PutBucketWebsiteOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutBucketWebsiteInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<PutBucketWebsiteInput, PutBucketWebsiteOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketWebsite
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
            handler<PutBucketWebsiteInput, PutBucketWebsiteOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}