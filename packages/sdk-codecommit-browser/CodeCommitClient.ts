import * as __aws_config_resolver from '@aws/config-resolver';
import * as __aws_core_handler from '@aws/core-handler';
import * as __aws_crypto_sha256_browser from '@aws/crypto-sha256-browser';
import * as __aws_fetch_http_handler from '@aws/fetch-http-handler';
import * as __aws_json_builder from '@aws/json-builder';
import * as __aws_json_parser from '@aws/json-parser';
import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_serializer from '@aws/middleware-serializer';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_protocol_json_rpc from '@aws/protocol-json-rpc';
import * as __aws_signature_v4 from '@aws/signature-v4';
import * as __aws_signing_middleware from '@aws/signing-middleware';
import * as __aws_stream_collector_browser from '@aws/stream-collector-browser';
import * as __aws_types from '@aws/types';
import * as __aws_util_base64_browser from '@aws/util-base64-browser';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import * as __aws_util_utf8_browser from '@aws/util-utf8-browser';
import {CodeCommitConfiguration, CodeCommitResolvedConfiguration, configurationProperties} from './CodeCommitConfiguration';
import {InputTypesUnion} from './types/InputTypesUnion';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export class CodeCommitClient {
    protected readonly config: CodeCommitResolvedConfiguration;

    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        InputTypesUnion,
        OutputTypesUnion,
        ReadableStream
    >();

    constructor(configuration: CodeCommitConfiguration) {
        this.config = __aws_config_resolver.resolveConfiguration(
            configuration,
            configurationProperties,
            this.middlewareStack
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
    >(command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, CodeCommitResolvedConfiguration, ReadableStream>): Promise<OutputType>;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, CodeCommitResolvedConfiguration, ReadableStream>,
        cb: (err: any, data?: OutputType) => void
    ): void;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, CodeCommitResolvedConfiguration, ReadableStream>,
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
