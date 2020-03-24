import * as __aws_sdk_config_resolver from "@aws-sdk/config-resolver";
import * as __aws_sdk_core_handler from "@aws-sdk/core-handler";
import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_json_builder from "@aws-sdk/json-builder";
import * as __aws_sdk_json_error_unmarshaller from "@aws-sdk/json-error-unmarshaller";
import * as __aws_sdk_json_parser from "@aws-sdk/json-parser";
import * as __aws_sdk_middleware_content_length from "@aws-sdk/middleware-content-length";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_serializer from "@aws-sdk/middleware-serializer";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_node_http_handler from "@aws-sdk/node-http-handler";
import * as __aws_sdk_protocol_rest from "@aws-sdk/protocol-rest";
import * as __aws_sdk_region_provider from "@aws-sdk/region-provider";
import * as __aws_sdk_retry_middleware from "@aws-sdk/retry-middleware";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_stream_collector_node from "@aws-sdk/stream-collector-node";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as __aws_sdk_url_parser_node from "@aws-sdk/url-parser-node";
import * as __aws_sdk_util_base64_node from "@aws-sdk/util-base64-node";
import * as __aws_sdk_util_body_length_node from "@aws-sdk/util-body-length-node";
import * as __aws_sdk_util_user_agent_node from "@aws-sdk/util-user-agent-node";
import * as __aws_sdk_util_utf8_node from "@aws-sdk/util-utf8-node";
import {
  RDSDataConfiguration,
  RDSDataResolvedConfiguration,
  configurationProperties
} from "./RDSDataConfiguration";
import {version as clientVersion} from './package.json'
import {HttpOptions} from '@aws-sdk/types'

/**
 * To remove this when move to Smithy model
 */
const ServiceMetadata = {
  endpointPrefix: "rds-data",
  serviceId: "RDS Data"
};

type InputTypesUnion = any;
type OutputTypesUnion = any;

export class RDSDataClient {
  readonly config: RDSDataResolvedConfiguration;

  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InputTypesUnion,
    OutputTypesUnion
    >();

  constructor(configuration: RDSDataConfiguration) {
    this.config = __aws_sdk_config_resolver.resolveConfiguration(
      configuration,
      configurationProperties,
      this.middlewareStack
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
        OutputTypesUnion
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    this.middlewareStack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "User-Agent": __aws_sdk_util_user_agent_node.defaultUserAgent(
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
    if (
      !this.config._user_injected_http_handler &&
      typeof this.config.httpHandler.destroy === 'function'
    ) {
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
      RDSDataResolvedConfiguration
    >,
    options?: HttpOptions
  ): Promise<OutputType>;
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      RDSDataResolvedConfiguration
    >,
    options: HttpOptions,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends InputTypesUnion, OutputType extends OutputTypesUnion>(
    command: __aws_sdk_types.Command<
      InputTypesUnion,
      InputType,
      OutputTypesUnion,
      OutputType,
      RDSDataResolvedConfiguration
    >,
    options?: HttpOptions,
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void {
    const handler = command.resolveMiddleware(
      this.middlewareStack,
      this.config,
      options
    );
    if (cb) {
      handler(command)
        .then(result => cb(null, result.output), (err: any) => cb(err))
        .catch(
          // prevent any errors thrown in the callback from triggering an
          // unhandled promise rejection
          () => {}
        );
    } else {
      return handler(command).then(result => result.output);
    }
  }
}
