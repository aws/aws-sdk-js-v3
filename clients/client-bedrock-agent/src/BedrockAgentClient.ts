// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultBedrockAgentHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateAgentKnowledgeBaseCommandInput,
  AssociateAgentKnowledgeBaseCommandOutput,
} from "./commands/AssociateAgentKnowledgeBaseCommand";
import {
  CreateAgentActionGroupCommandInput,
  CreateAgentActionGroupCommandOutput,
} from "./commands/CreateAgentActionGroupCommand";
import { CreateAgentAliasCommandInput, CreateAgentAliasCommandOutput } from "./commands/CreateAgentAliasCommand";
import { CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  DeleteAgentActionGroupCommandInput,
  DeleteAgentActionGroupCommandOutput,
} from "./commands/DeleteAgentActionGroupCommand";
import { DeleteAgentAliasCommandInput, DeleteAgentAliasCommandOutput } from "./commands/DeleteAgentAliasCommand";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import { DeleteAgentVersionCommandInput, DeleteAgentVersionCommandOutput } from "./commands/DeleteAgentVersionCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  DisassociateAgentKnowledgeBaseCommandInput,
  DisassociateAgentKnowledgeBaseCommandOutput,
} from "./commands/DisassociateAgentKnowledgeBaseCommand";
import {
  GetAgentActionGroupCommandInput,
  GetAgentActionGroupCommandOutput,
} from "./commands/GetAgentActionGroupCommand";
import { GetAgentAliasCommandInput, GetAgentAliasCommandOutput } from "./commands/GetAgentAliasCommand";
import { GetAgentCommandInput, GetAgentCommandOutput } from "./commands/GetAgentCommand";
import {
  GetAgentKnowledgeBaseCommandInput,
  GetAgentKnowledgeBaseCommandOutput,
} from "./commands/GetAgentKnowledgeBaseCommand";
import { GetAgentVersionCommandInput, GetAgentVersionCommandOutput } from "./commands/GetAgentVersionCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetIngestionJobCommandInput, GetIngestionJobCommandOutput } from "./commands/GetIngestionJobCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "./commands/GetKnowledgeBaseCommand";
import {
  ListAgentActionGroupsCommandInput,
  ListAgentActionGroupsCommandOutput,
} from "./commands/ListAgentActionGroupsCommand";
import { ListAgentAliasesCommandInput, ListAgentAliasesCommandOutput } from "./commands/ListAgentAliasesCommand";
import {
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput,
} from "./commands/ListAgentKnowledgeBasesCommand";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import { ListAgentVersionsCommandInput, ListAgentVersionsCommandOutput } from "./commands/ListAgentVersionsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListIngestionJobsCommandInput, ListIngestionJobsCommandOutput } from "./commands/ListIngestionJobsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "./commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PrepareAgentCommandInput, PrepareAgentCommandOutput } from "./commands/PrepareAgentCommand";
import { StartIngestionJobCommandInput, StartIngestionJobCommandOutput } from "./commands/StartIngestionJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAgentActionGroupCommandInput,
  UpdateAgentActionGroupCommandOutput,
} from "./commands/UpdateAgentActionGroupCommand";
import { UpdateAgentAliasCommandInput, UpdateAgentAliasCommandOutput } from "./commands/UpdateAgentAliasCommand";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import {
  UpdateAgentKnowledgeBaseCommandInput,
  UpdateAgentKnowledgeBaseCommandOutput,
} from "./commands/UpdateAgentKnowledgeBaseCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import {
  UpdateKnowledgeBaseCommandInput,
  UpdateKnowledgeBaseCommandOutput,
} from "./commands/UpdateKnowledgeBaseCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateAgentKnowledgeBaseCommandInput
  | CreateAgentActionGroupCommandInput
  | CreateAgentAliasCommandInput
  | CreateAgentCommandInput
  | CreateDataSourceCommandInput
  | CreateKnowledgeBaseCommandInput
  | DeleteAgentActionGroupCommandInput
  | DeleteAgentAliasCommandInput
  | DeleteAgentCommandInput
  | DeleteAgentVersionCommandInput
  | DeleteDataSourceCommandInput
  | DeleteKnowledgeBaseCommandInput
  | DisassociateAgentKnowledgeBaseCommandInput
  | GetAgentActionGroupCommandInput
  | GetAgentAliasCommandInput
  | GetAgentCommandInput
  | GetAgentKnowledgeBaseCommandInput
  | GetAgentVersionCommandInput
  | GetDataSourceCommandInput
  | GetIngestionJobCommandInput
  | GetKnowledgeBaseCommandInput
  | ListAgentActionGroupsCommandInput
  | ListAgentAliasesCommandInput
  | ListAgentKnowledgeBasesCommandInput
  | ListAgentVersionsCommandInput
  | ListAgentsCommandInput
  | ListDataSourcesCommandInput
  | ListIngestionJobsCommandInput
  | ListKnowledgeBasesCommandInput
  | ListTagsForResourceCommandInput
  | PrepareAgentCommandInput
  | StartIngestionJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentActionGroupCommandInput
  | UpdateAgentAliasCommandInput
  | UpdateAgentCommandInput
  | UpdateAgentKnowledgeBaseCommandInput
  | UpdateDataSourceCommandInput
  | UpdateKnowledgeBaseCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAgentKnowledgeBaseCommandOutput
  | CreateAgentActionGroupCommandOutput
  | CreateAgentAliasCommandOutput
  | CreateAgentCommandOutput
  | CreateDataSourceCommandOutput
  | CreateKnowledgeBaseCommandOutput
  | DeleteAgentActionGroupCommandOutput
  | DeleteAgentAliasCommandOutput
  | DeleteAgentCommandOutput
  | DeleteAgentVersionCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteKnowledgeBaseCommandOutput
  | DisassociateAgentKnowledgeBaseCommandOutput
  | GetAgentActionGroupCommandOutput
  | GetAgentAliasCommandOutput
  | GetAgentCommandOutput
  | GetAgentKnowledgeBaseCommandOutput
  | GetAgentVersionCommandOutput
  | GetDataSourceCommandOutput
  | GetIngestionJobCommandOutput
  | GetKnowledgeBaseCommandOutput
  | ListAgentActionGroupsCommandOutput
  | ListAgentAliasesCommandOutput
  | ListAgentKnowledgeBasesCommandOutput
  | ListAgentVersionsCommandOutput
  | ListAgentsCommandOutput
  | ListDataSourcesCommandOutput
  | ListIngestionJobsCommandOutput
  | ListKnowledgeBasesCommandOutput
  | ListTagsForResourceCommandOutput
  | PrepareAgentCommandOutput
  | StartIngestionJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentActionGroupCommandOutput
  | UpdateAgentAliasCommandOutput
  | UpdateAgentCommandOutput
  | UpdateAgentKnowledgeBaseCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateKnowledgeBaseCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type BedrockAgentClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of BedrockAgentClient class constructor that set the region, credentials and other options.
 */
export interface BedrockAgentClientConfig extends BedrockAgentClientConfigType {}

/**
 * @public
 */
export type BedrockAgentClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of BedrockAgentClient class. This is resolved and normalized from the {@link BedrockAgentClientConfig | constructor configuration interface}.
 */
export interface BedrockAgentClientResolvedConfig extends BedrockAgentClientResolvedConfigType {}

/**
 * <p>Describes the API operations for creating and managing Amazon Bedrock agents.</p>
 * @public
 */
export class BedrockAgentClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BedrockAgentClientResolvedConfig
> {
  /**
   * The resolved configuration of BedrockAgentClient class. This is resolved and normalized from the {@link BedrockAgentClientConfig | constructor configuration interface}.
   */
  readonly config: BedrockAgentClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BedrockAgentClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultBedrockAgentHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: BedrockAgentClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
