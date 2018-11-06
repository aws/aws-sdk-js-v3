import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {PutBucketInventoryConfiguration} from '../model/PutBucketInventoryConfiguration';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketInventoryConfigurationInput} from '../types/PutBucketInventoryConfigurationInput';
import {PutBucketInventoryConfigurationOutput} from '../types/PutBucketInventoryConfigurationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutBucketInventoryConfigurationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutBucketInventoryConfigurationInput,
    OutputTypesUnion,
    PutBucketInventoryConfigurationOutput,
    S3ResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutBucketInventoryConfigurationInput,
        PutBucketInventoryConfigurationOutput,
        Blob
    >();

    constructor(readonly input: PutBucketInventoryConfigurationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<PutBucketInventoryConfigurationInput, PutBucketInventoryConfigurationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketInventoryConfiguration
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
            handler<PutBucketInventoryConfigurationInput, PutBucketInventoryConfigurationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}