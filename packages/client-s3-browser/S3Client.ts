import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_config_resolver from "@aws-sdk/config-resolver";
import * as __aws_sdk_core_handler from "@aws-sdk/core-handler";
import * as __aws_sdk_fetch_http_handler from "@aws-sdk/fetch-http-handler";
import * as __aws_sdk_hash_blob_browser from "@aws-sdk/hash-blob-browser";
import * as __aws_sdk_md5_js from "@aws-sdk/md5-js";
import * as __aws_sdk_middleware_content_length from "@aws-sdk/middleware-content-length";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_serializer from "@aws-sdk/middleware-serializer";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_protocol_rest from "@aws-sdk/protocol-rest";
import * as __aws_sdk_query_error_unmarshaller from "@aws-sdk/query-error-unmarshaller";
import * as __aws_sdk_retry_middleware from "@aws-sdk/retry-middleware";
import * as __aws_sdk_s3_error_unmarshaller from "@aws-sdk/s3-error-unmarshaller";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_stream_collector_browser from "@aws-sdk/stream-collector-browser";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as __aws_sdk_url_parser_browser from "@aws-sdk/url-parser-browser";
import * as __aws_sdk_util_base64_browser from "@aws-sdk/util-base64-browser";
import * as __aws_sdk_util_body_length_browser from "@aws-sdk/util-body-length-browser";
import * as __aws_sdk_util_user_agent_browser from "@aws-sdk/util-user-agent-browser";
import * as __aws_sdk_util_utf8_browser from "@aws-sdk/util-utf8-browser";
import * as __aws_sdk_xml_body_builder from "@aws-sdk/xml-body-builder";
import * as __aws_sdk_xml_body_parser from "@aws-sdk/xml-body-parser";
import {
  S3Configuration,
  S3ResolvedConfiguration,
  configurationProperties
} from "./S3Configuration";
import { InputTypesUnion } from "./types/InputTypesUnion";
import { OutputTypesUnion } from "./types/OutputTypesUnion";
import { clientVersion, ServiceMetadata } from "./model/ServiceMetadata";

export class S3Client
  implements
    __aws_sdk_types.AWSClient<InputTypesUnion, OutputTypesUnion, Blob> {
  readonly config: S3ResolvedConfiguration;

  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InputTypesUnion,
    OutputTypesUnion,
    Blob
  >();

  constructor(configuration: S3Configuration) {
    this.config = __aws_sdk_config_resolver.resolveConfiguration(
      configuration,
      configurationProperties,
      this.middlewareStack
    );
    this.middlewareStack.add(
      __aws_sdk_middleware_serializer.serializerMiddleware(
        this.config.serializer
      ),
      {
        step: "serialize",
        priority: 90,
        tags: { SERIALIZER: true }
      }
    );
    this.middlewareStack.add(
      __aws_sdk_middleware_content_length.contentLengthMiddleware(
        this.config.bodyLengthChecker
      ),
      {
        step: "build",
        priority: -80,
        tags: { SET_CONTENT_LENGTH: true }
      }
    );
    if (this.config.maxRetries > 0) {
      this.middlewareStack.add(
        __aws_sdk_retry_middleware.retryMiddleware(
          this.config.maxRetries,
          this.config.retryDecider,
          this.config.delayDecider
        ),
        {
          step: "finalize",
          priority: Infinity,
          tags: { RETRY: true }
        }
      );
    }
    this.middlewareStack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        InputTypesUnion,
        OutputTypesUnion,
        Blob
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    this.middlewareStack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "X-Amz-User-Agent": __aws_sdk_util_user_agent_browser.defaultUserAgent(
          ServiceMetadata.serviceId || ServiceMetadata.endpointPrefix,
          clientVersion
        )
      }),
      {
        step: "build",
        priority: 0,
        tags: { SET_USER_AGENT: true }
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
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      S3ResolvedConfiguration,
      Blob
    >
  ): Promise<OutputType>;
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      S3ResolvedConfiguration,
      Blob
    >,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      S3ResolvedConfiguration,
      Blob
    >,
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void {
    const handler = command.resolveMiddleware(
      this.middlewareStack,
      this.config
    );
    if (cb) {
      handler(command)
        .then((result: OutputType) => cb(null, result), (err: any) => cb(err))
        .catch(
          // prevent any errors thrown in the callback from triggering an
          // unhandled promise rejection
          () => {}
        );
    } else {
      return handler(command);
    }
  }
}
