import * as __aws_sdk_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_sdk_hash_node from '@aws-sdk/hash-node';
import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_ssec_middleware from '@aws-sdk/ssec-middleware';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UploadPartCopy} from '../model/UploadPartCopy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UploadPartCopyInput} from '../types/UploadPartCopyInput';
import {UploadPartCopyOutput} from '../types/UploadPartCopyOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';
export * from '../types/UploadPartCopyInput';
export * from '../types/UploadPartCopyOutput';
export * from '../types/UploadPartCopyExceptionsUnion';

export class UploadPartCopyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UploadPartCopyInput,
    OutputTypesUnion,
    UploadPartCopyOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UploadPartCopyInput,
        UploadPartCopyOutput,
        _stream.Readable
    >();

    constructor(readonly input: UploadPartCopyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_sdk_types.Handler<UploadPartCopyInput, UploadPartCopyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UploadPartCopy
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
            __aws_sdk_ssec_middleware.ssecMiddleware<UploadPartCopyInput>({
                base64Encoder: configuration.base64Encoder,
                hashConstructor: configuration.md5,
                ssecProperties: {
                    $serverSideEncryptionKey: {
                        targetProperty: 'SSECustomerKey',
                        hashTargetProperty: 'SSECustomerKeyMD5',
                    },
                    $copySourceServerSideEncryptionKey: {
                        targetProperty: 'CopySourceSSECustomerKey',
                        hashTargetProperty: 'CopySourceSSECustomerKeyMD5',
                    }
                },
                utf8Decoder: configuration.utf8Decoder,
            }),
            {
                step: 'initialize',
                priority: 0
            }
        );
        return stack.resolve(
            handler<UploadPartCopyInput, UploadPartCopyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}