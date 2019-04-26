import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_middleware_header_default from '@aws-sdk/middleware-header-default';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetBucketAnalyticsConfiguration} from '../model/GetBucketAnalyticsConfiguration';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBucketAnalyticsConfigurationInput} from '../types/GetBucketAnalyticsConfigurationInput';
import {GetBucketAnalyticsConfigurationOutput} from '../types/GetBucketAnalyticsConfigurationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';
export * from '../types/GetBucketAnalyticsConfigurationInput';
export * from '../types/GetBucketAnalyticsConfigurationOutput';
export * from '../types/GetBucketAnalyticsConfigurationExceptionsUnion';

export class GetBucketAnalyticsConfigurationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetBucketAnalyticsConfigurationInput,
    OutputTypesUnion,
    GetBucketAnalyticsConfigurationOutput,
    S3ResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetBucketAnalyticsConfigurationInput,
        GetBucketAnalyticsConfigurationOutput,
        Blob
    >();

    constructor(readonly input: GetBucketAnalyticsConfigurationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<GetBucketAnalyticsConfigurationInput, GetBucketAnalyticsConfigurationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBucketAnalyticsConfiguration
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
            handler<GetBucketAnalyticsConfigurationInput, GetBucketAnalyticsConfigurationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}