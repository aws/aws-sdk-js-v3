import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PutBucketRequestPayment} from '../model/PutBucketRequestPayment';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketRequestPaymentInput} from '../types/PutBucketRequestPaymentInput';
import {PutBucketRequestPaymentOutput} from '../types/PutBucketRequestPaymentOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutBucketRequestPaymentCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutBucketRequestPaymentInput,
    OutputTypesUnion,
    PutBucketRequestPaymentOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutBucketRequestPaymentInput,
        PutBucketRequestPaymentOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutBucketRequestPaymentInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<PutBucketRequestPaymentInput, PutBucketRequestPaymentOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketRequestPayment
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
            handler<PutBucketRequestPaymentInput, PutBucketRequestPaymentOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}