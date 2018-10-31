import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PutBucketNotificationConfiguration} from '../model/PutBucketNotificationConfiguration';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketNotificationConfigurationInput} from '../types/PutBucketNotificationConfigurationInput';
import {PutBucketNotificationConfigurationOutput} from '../types/PutBucketNotificationConfigurationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutBucketNotificationConfigurationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutBucketNotificationConfigurationInput,
    OutputTypesUnion,
    PutBucketNotificationConfigurationOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutBucketNotificationConfigurationInput,
        PutBucketNotificationConfigurationOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutBucketNotificationConfigurationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<PutBucketNotificationConfigurationInput, PutBucketNotificationConfigurationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketNotificationConfiguration
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
            handler<PutBucketNotificationConfigurationInput, PutBucketNotificationConfigurationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}