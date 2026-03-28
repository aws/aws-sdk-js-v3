// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultBedrockAgentHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateAgentCollaboratorCommandInput,
  AssociateAgentCollaboratorCommandOutput,
} from "./commands/AssociateAgentCollaboratorCommand";
import type {
  AssociateAgentKnowledgeBaseCommandInput,
  AssociateAgentKnowledgeBaseCommandOutput,
} from "./commands/AssociateAgentKnowledgeBaseCommand";
import type {
  CreateAgentActionGroupCommandInput,
  CreateAgentActionGroupCommandOutput,
} from "./commands/CreateAgentActionGroupCommand";
import type { CreateAgentAliasCommandInput, CreateAgentAliasCommandOutput } from "./commands/CreateAgentAliasCommand";
import type { CreateAgentCommandInput, CreateAgentCommandOutput } from "./commands/CreateAgentCommand";
import type { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import type { CreateFlowAliasCommandInput, CreateFlowAliasCommandOutput } from "./commands/CreateFlowAliasCommand";
import type { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import type {
  CreateFlowVersionCommandInput,
  CreateFlowVersionCommandOutput,
} from "./commands/CreateFlowVersionCommand";
import type {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import type { CreatePromptCommandInput, CreatePromptCommandOutput } from "./commands/CreatePromptCommand";
import type {
  CreatePromptVersionCommandInput,
  CreatePromptVersionCommandOutput,
} from "./commands/CreatePromptVersionCommand";
import type {
  DeleteAgentActionGroupCommandInput,
  DeleteAgentActionGroupCommandOutput,
} from "./commands/DeleteAgentActionGroupCommand";
import type { DeleteAgentAliasCommandInput, DeleteAgentAliasCommandOutput } from "./commands/DeleteAgentAliasCommand";
import type { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import type {
  DeleteAgentVersionCommandInput,
  DeleteAgentVersionCommandOutput,
} from "./commands/DeleteAgentVersionCommand";
import type { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import type { DeleteFlowAliasCommandInput, DeleteFlowAliasCommandOutput } from "./commands/DeleteFlowAliasCommand";
import type { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import type {
  DeleteFlowVersionCommandInput,
  DeleteFlowVersionCommandOutput,
} from "./commands/DeleteFlowVersionCommand";
import type {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import type {
  DeleteKnowledgeBaseDocumentsCommandInput,
  DeleteKnowledgeBaseDocumentsCommandOutput,
} from "./commands/DeleteKnowledgeBaseDocumentsCommand";
import type { DeletePromptCommandInput, DeletePromptCommandOutput } from "./commands/DeletePromptCommand";
import type {
  DisassociateAgentCollaboratorCommandInput,
  DisassociateAgentCollaboratorCommandOutput,
} from "./commands/DisassociateAgentCollaboratorCommand";
import type {
  DisassociateAgentKnowledgeBaseCommandInput,
  DisassociateAgentKnowledgeBaseCommandOutput,
} from "./commands/DisassociateAgentKnowledgeBaseCommand";
import type {
  GetAgentActionGroupCommandInput,
  GetAgentActionGroupCommandOutput,
} from "./commands/GetAgentActionGroupCommand";
import type { GetAgentAliasCommandInput, GetAgentAliasCommandOutput } from "./commands/GetAgentAliasCommand";
import type {
  GetAgentCollaboratorCommandInput,
  GetAgentCollaboratorCommandOutput,
} from "./commands/GetAgentCollaboratorCommand";
import type { GetAgentCommandInput, GetAgentCommandOutput } from "./commands/GetAgentCommand";
import type {
  GetAgentKnowledgeBaseCommandInput,
  GetAgentKnowledgeBaseCommandOutput,
} from "./commands/GetAgentKnowledgeBaseCommand";
import type { GetAgentVersionCommandInput, GetAgentVersionCommandOutput } from "./commands/GetAgentVersionCommand";
import type { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import type { GetFlowAliasCommandInput, GetFlowAliasCommandOutput } from "./commands/GetFlowAliasCommand";
import type { GetFlowCommandInput, GetFlowCommandOutput } from "./commands/GetFlowCommand";
import type { GetFlowVersionCommandInput, GetFlowVersionCommandOutput } from "./commands/GetFlowVersionCommand";
import type { GetIngestionJobCommandInput, GetIngestionJobCommandOutput } from "./commands/GetIngestionJobCommand";
import type { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "./commands/GetKnowledgeBaseCommand";
import type {
  GetKnowledgeBaseDocumentsCommandInput,
  GetKnowledgeBaseDocumentsCommandOutput,
} from "./commands/GetKnowledgeBaseDocumentsCommand";
import type { GetPromptCommandInput, GetPromptCommandOutput } from "./commands/GetPromptCommand";
import type {
  IngestKnowledgeBaseDocumentsCommandInput,
  IngestKnowledgeBaseDocumentsCommandOutput,
} from "./commands/IngestKnowledgeBaseDocumentsCommand";
import type {
  ListAgentActionGroupsCommandInput,
  ListAgentActionGroupsCommandOutput,
} from "./commands/ListAgentActionGroupsCommand";
import type { ListAgentAliasesCommandInput, ListAgentAliasesCommandOutput } from "./commands/ListAgentAliasesCommand";
import type {
  ListAgentCollaboratorsCommandInput,
  ListAgentCollaboratorsCommandOutput,
} from "./commands/ListAgentCollaboratorsCommand";
import type {
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput,
} from "./commands/ListAgentKnowledgeBasesCommand";
import type { ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import type {
  ListAgentVersionsCommandInput,
  ListAgentVersionsCommandOutput,
} from "./commands/ListAgentVersionsCommand";
import type { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import type { ListFlowAliasesCommandInput, ListFlowAliasesCommandOutput } from "./commands/ListFlowAliasesCommand";
import type { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import type { ListFlowVersionsCommandInput, ListFlowVersionsCommandOutput } from "./commands/ListFlowVersionsCommand";
import type {
  ListIngestionJobsCommandInput,
  ListIngestionJobsCommandOutput,
} from "./commands/ListIngestionJobsCommand";
import type {
  ListKnowledgeBaseDocumentsCommandInput,
  ListKnowledgeBaseDocumentsCommandOutput,
} from "./commands/ListKnowledgeBaseDocumentsCommand";
import type {
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import type { ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PrepareAgentCommandInput, PrepareAgentCommandOutput } from "./commands/PrepareAgentCommand";
import type { PrepareFlowCommandInput, PrepareFlowCommandOutput } from "./commands/PrepareFlowCommand";
import type {
  StartIngestionJobCommandInput,
  StartIngestionJobCommandOutput,
} from "./commands/StartIngestionJobCommand";
import type { StopIngestionJobCommandInput, StopIngestionJobCommandOutput } from "./commands/StopIngestionJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAgentActionGroupCommandInput,
  UpdateAgentActionGroupCommandOutput,
} from "./commands/UpdateAgentActionGroupCommand";
import type { UpdateAgentAliasCommandInput, UpdateAgentAliasCommandOutput } from "./commands/UpdateAgentAliasCommand";
import type {
  UpdateAgentCollaboratorCommandInput,
  UpdateAgentCollaboratorCommandOutput,
} from "./commands/UpdateAgentCollaboratorCommand";
import type { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import type {
  UpdateAgentKnowledgeBaseCommandInput,
  UpdateAgentKnowledgeBaseCommandOutput,
} from "./commands/UpdateAgentKnowledgeBaseCommand";
import type { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import type { UpdateFlowAliasCommandInput, UpdateFlowAliasCommandOutput } from "./commands/UpdateFlowAliasCommand";
import type { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import type {
  UpdateKnowledgeBaseCommandInput,
  UpdateKnowledgeBaseCommandOutput,
} from "./commands/UpdateKnowledgeBaseCommand";
import type { UpdatePromptCommandInput, UpdatePromptCommandOutput } from "./commands/UpdatePromptCommand";
import type {
  ValidateFlowDefinitionCommandInput,
  ValidateFlowDefinitionCommandOutput,
} from "./commands/ValidateFlowDefinitionCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateAgentCollaboratorCommandInput
  | AssociateAgentKnowledgeBaseCommandInput
  | CreateAgentActionGroupCommandInput
  | CreateAgentAliasCommandInput
  | CreateAgentCommandInput
  | CreateDataSourceCommandInput
  | CreateFlowAliasCommandInput
  | CreateFlowCommandInput
  | CreateFlowVersionCommandInput
  | CreateKnowledgeBaseCommandInput
  | CreatePromptCommandInput
  | CreatePromptVersionCommandInput
  | DeleteAgentActionGroupCommandInput
  | DeleteAgentAliasCommandInput
  | DeleteAgentCommandInput
  | DeleteAgentVersionCommandInput
  | DeleteDataSourceCommandInput
  | DeleteFlowAliasCommandInput
  | DeleteFlowCommandInput
  | DeleteFlowVersionCommandInput
  | DeleteKnowledgeBaseCommandInput
  | DeleteKnowledgeBaseDocumentsCommandInput
  | DeletePromptCommandInput
  | DisassociateAgentCollaboratorCommandInput
  | DisassociateAgentKnowledgeBaseCommandInput
  | GetAgentActionGroupCommandInput
  | GetAgentAliasCommandInput
  | GetAgentCollaboratorCommandInput
  | GetAgentCommandInput
  | GetAgentKnowledgeBaseCommandInput
  | GetAgentVersionCommandInput
  | GetDataSourceCommandInput
  | GetFlowAliasCommandInput
  | GetFlowCommandInput
  | GetFlowVersionCommandInput
  | GetIngestionJobCommandInput
  | GetKnowledgeBaseCommandInput
  | GetKnowledgeBaseDocumentsCommandInput
  | GetPromptCommandInput
  | IngestKnowledgeBaseDocumentsCommandInput
  | ListAgentActionGroupsCommandInput
  | ListAgentAliasesCommandInput
  | ListAgentCollaboratorsCommandInput
  | ListAgentKnowledgeBasesCommandInput
  | ListAgentVersionsCommandInput
  | ListAgentsCommandInput
  | ListDataSourcesCommandInput
  | ListFlowAliasesCommandInput
  | ListFlowVersionsCommandInput
  | ListFlowsCommandInput
  | ListIngestionJobsCommandInput
  | ListKnowledgeBaseDocumentsCommandInput
  | ListKnowledgeBasesCommandInput
  | ListPromptsCommandInput
  | ListTagsForResourceCommandInput
  | PrepareAgentCommandInput
  | PrepareFlowCommandInput
  | StartIngestionJobCommandInput
  | StopIngestionJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentActionGroupCommandInput
  | UpdateAgentAliasCommandInput
  | UpdateAgentCollaboratorCommandInput
  | UpdateAgentCommandInput
  | UpdateAgentKnowledgeBaseCommandInput
  | UpdateDataSourceCommandInput
  | UpdateFlowAliasCommandInput
  | UpdateFlowCommandInput
  | UpdateKnowledgeBaseCommandInput
  | UpdatePromptCommandInput
  | ValidateFlowDefinitionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAgentCollaboratorCommandOutput
  | AssociateAgentKnowledgeBaseCommandOutput
  | CreateAgentActionGroupCommandOutput
  | CreateAgentAliasCommandOutput
  | CreateAgentCommandOutput
  | CreateDataSourceCommandOutput
  | CreateFlowAliasCommandOutput
  | CreateFlowCommandOutput
  | CreateFlowVersionCommandOutput
  | CreateKnowledgeBaseCommandOutput
  | CreatePromptCommandOutput
  | CreatePromptVersionCommandOutput
  | DeleteAgentActionGroupCommandOutput
  | DeleteAgentAliasCommandOutput
  | DeleteAgentCommandOutput
  | DeleteAgentVersionCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteFlowAliasCommandOutput
  | DeleteFlowCommandOutput
  | DeleteFlowVersionCommandOutput
  | DeleteKnowledgeBaseCommandOutput
  | DeleteKnowledgeBaseDocumentsCommandOutput
  | DeletePromptCommandOutput
  | DisassociateAgentCollaboratorCommandOutput
  | DisassociateAgentKnowledgeBaseCommandOutput
  | GetAgentActionGroupCommandOutput
  | GetAgentAliasCommandOutput
  | GetAgentCollaboratorCommandOutput
  | GetAgentCommandOutput
  | GetAgentKnowledgeBaseCommandOutput
  | GetAgentVersionCommandOutput
  | GetDataSourceCommandOutput
  | GetFlowAliasCommandOutput
  | GetFlowCommandOutput
  | GetFlowVersionCommandOutput
  | GetIngestionJobCommandOutput
  | GetKnowledgeBaseCommandOutput
  | GetKnowledgeBaseDocumentsCommandOutput
  | GetPromptCommandOutput
  | IngestKnowledgeBaseDocumentsCommandOutput
  | ListAgentActionGroupsCommandOutput
  | ListAgentAliasesCommandOutput
  | ListAgentCollaboratorsCommandOutput
  | ListAgentKnowledgeBasesCommandOutput
  | ListAgentVersionsCommandOutput
  | ListAgentsCommandOutput
  | ListDataSourcesCommandOutput
  | ListFlowAliasesCommandOutput
  | ListFlowVersionsCommandOutput
  | ListFlowsCommandOutput
  | ListIngestionJobsCommandOutput
  | ListKnowledgeBaseDocumentsCommandOutput
  | ListKnowledgeBasesCommandOutput
  | ListPromptsCommandOutput
  | ListTagsForResourceCommandOutput
  | PrepareAgentCommandOutput
  | PrepareFlowCommandOutput
  | StartIngestionJobCommandOutput
  | StopIngestionJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentActionGroupCommandOutput
  | UpdateAgentAliasCommandOutput
  | UpdateAgentCollaboratorCommandOutput
  | UpdateAgentCommandOutput
  | UpdateAgentKnowledgeBaseCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateFlowAliasCommandOutput
  | UpdateFlowCommandOutput
  | UpdateKnowledgeBaseCommandOutput
  | UpdatePromptCommandOutput
  | ValidateFlowDefinitionCommandOutput;

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
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
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
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
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
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultBedrockAgentHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BedrockAgentClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
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
}
