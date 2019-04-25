import * as __aws_sdk_apply_body_checksum_middleware from '@aws-sdk/apply-body-checksum-middleware';
import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_md5_js from '@aws-sdk/md5-js';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as __aws_sdk_util_base64_browser from '@aws-sdk/util-base64-browser';
import {PutBucketReplication} from '../model/PutBucketReplication';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketReplicationInput} from '../types/PutBucketReplicationInput';
import {PutBucketReplicationOutput} from '../types/PutBucketReplicationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';
export * from '../types/PutBucketReplicationInput';
export * from '../types/PutBucketReplicationOutput';
export * from '../types/PutBucketReplicationExceptionsUnion';

export class PutBucketReplicationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutBucketReplicationInput,
    OutputTypesUnion,
    PutBucketReplicationOutput,
    S3ResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutBucketReplicationInput,
        PutBucketReplicationOutput,
        Blob
    >();

    constructor(readonly input: PutBucketReplicationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<PutBucketReplicationInput, PutBucketReplicationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketReplication
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
            __aws_sdk_apply_body_checksum_middleware.applyBodyChecksumMiddleware(
            'Content-MD5',
            configuration.md5,
            configuration.base64Encoder,
            configuration.streamHasher
        ),
            {
                step: 'build',
                priority: 0,
                tags: {BODY_CHECKSUM: true}
            }
        );
        return stack.resolve(
            handler<PutBucketReplicationInput, PutBucketReplicationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}