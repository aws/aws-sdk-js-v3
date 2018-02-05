import * as __aws_add_glacier_checksum_headers_browser from '@aws/add-glacier-checksum-headers-browser';
import * as __aws_config_resolver from '@aws/config-resolver';
import * as __aws_core_handler from '@aws/core-handler';
import * as __aws_crypto_sha256_browser from '@aws/crypto-sha256-browser';
import * as __aws_fetch_http_handler from '@aws/fetch-http-handler';
import * as __aws_json_builder from '@aws/json-builder';
import * as __aws_json_error_unmarshaller from '@aws/json-error-unmarshaller';
import * as __aws_json_parser from '@aws/json-parser';
import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_sdk_glacier from '@aws/middleware-sdk-glacier';
import * as __aws_middleware_serializer from '@aws/middleware-serializer';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_protocol_rest from '@aws/protocol-rest';
import * as __aws_retry_middleware from '@aws/retry-middleware';
import * as __aws_signature_v4 from '@aws/signature-v4';
import * as __aws_signing_middleware from '@aws/signing-middleware';
import * as __aws_stream_collector_browser from '@aws/stream-collector-browser';
import * as __aws_types from '@aws/types';
import * as __aws_util_base64_browser from '@aws/util-base64-browser';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import * as __aws_util_utf8_browser from '@aws/util-utf8-browser';
import {GlacierConfiguration, GlacierResolvedConfiguration, configurationProperties} from './GlacierConfiguration';
import {InputTypesUnion} from './types/InputTypesUnion';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export class GlacierClient {
    protected readonly config: GlacierResolvedConfiguration;

    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        InputTypesUnion,
        OutputTypesUnion,
        ReadableStream
    >();

    constructor(configuration: GlacierConfiguration) {
        this.config = __aws_config_resolver.resolveConfiguration(
            configuration,
            configurationProperties,
            this.middlewareStack
        );
        this.middlewareStack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                this.config.bodyLengthChecker
            ),
            {
                step: 'build',
                priority: -80,
                tags: {SET_CONTENT_LENGTH: true}
            }
        );
        if (this.config.maxRetries > 0) {
            this.middlewareStack.add(
                __aws_retry_middleware.retryMiddleware(
                    this.config.maxRetries,
                    this.config.retryDecider,
                    this.config.delayDecider
                ),
                {
                    step: 'finalize',
                    priority: Infinity,
                    tags: {RETRY: true}
                }
            );
        }
        this.middlewareStack.add(
            __aws_middleware_sdk_glacier.validateAccountId,
            {
                step: 'initialize',
                priority: 0,
                tags: {VALIDATE_ACCOUNT_ID: true}
            }
        );
        this.middlewareStack.add(
            __aws_middleware_sdk_glacier.addGlacierApiVersion,
            {
                step: 'build',
                priority: 0,
                tags: {ADD_GLACIER_API_VERSION: true}
            }
        );
        this.middlewareStack.add(
            __aws_add_glacier_checksum_headers_browser.addChecksumHeaders(
            this.config.sha256,
            this.config.utf8Decoder
        ),
            {
                step: 'build',
                priority: 0,
                tags: {ADD_CHECKSUM_HEADERS: true}
            }
        );
    }

    destroy(): void {
        if (!this.config._user_injected_http_handler) {
            this.config.httpHandler.destroy();
        }
    }

    /**
     * This will need to be revised when the command interface lands.
     */
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, GlacierResolvedConfiguration, ReadableStream>): Promise<OutputType>;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, GlacierResolvedConfiguration, ReadableStream>,
        cb: (err: any, data?: OutputType) => void
    ): void;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, GlacierResolvedConfiguration, ReadableStream>,
        cb?: (err: any, data?: OutputType) => void
    ): Promise<OutputType>|void {
        const handler = command.resolveMiddleware(
            this.middlewareStack,
            this.config
        );
        if (cb) {
            handler(command).then(
                (result: OutputType)  => cb(null, result),
                (err: any) => cb(err)
            ).catch(
                // prevent any errors thrown in the callback from triggering an
                // unhandled promise rejection
                () => {}
            );
        } else {
            return handler(command);
        }
    }
}
