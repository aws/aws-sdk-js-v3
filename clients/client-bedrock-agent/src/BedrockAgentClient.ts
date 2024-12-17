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
  AssociateAgentCollaboratorCommandInput,
  AssociateAgentCollaboratorCommandOutput,
} from "./commands/AssociateAgentCollaboratorCommand";
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
import { CreateFlowAliasCommandInput, CreateFlowAliasCommandOutput } from "./commands/CreateFlowAliasCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import { CreateFlowVersionCommandInput, CreateFlowVersionCommandOutput } from "./commands/CreateFlowVersionCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import { CreatePromptCommandInput, CreatePromptCommandOutput } from "./commands/CreatePromptCommand";
import {
  CreatePromptVersionCommandInput,
  CreatePromptVersionCommandOutput,
} from "./commands/CreatePromptVersionCommand";
import {
  DeleteAgentActionGroupCommandInput,
  DeleteAgentActionGroupCommandOutput,
} from "./commands/DeleteAgentActionGroupCommand";
import { DeleteAgentAliasCommandInput, DeleteAgentAliasCommandOutput } from "./commands/DeleteAgentAliasCommand";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "./commands/DeleteAgentCommand";
import { DeleteAgentVersionCommandInput, DeleteAgentVersionCommandOutput } from "./commands/DeleteAgentVersionCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteFlowAliasCommandInput, DeleteFlowAliasCommandOutput } from "./commands/DeleteFlowAliasCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import { DeleteFlowVersionCommandInput, DeleteFlowVersionCommandOutput } from "./commands/DeleteFlowVersionCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  DeleteKnowledgeBaseDocumentsCommandInput,
  DeleteKnowledgeBaseDocumentsCommandOutput,
} from "./commands/DeleteKnowledgeBaseDocumentsCommand";
import { DeletePromptCommandInput, DeletePromptCommandOutput } from "./commands/DeletePromptCommand";
import {
  DisassociateAgentCollaboratorCommandInput,
  DisassociateAgentCollaboratorCommandOutput,
} from "./commands/DisassociateAgentCollaboratorCommand";
import {
  DisassociateAgentKnowledgeBaseCommandInput,
  DisassociateAgentKnowledgeBaseCommandOutput,
} from "./commands/DisassociateAgentKnowledgeBaseCommand";
import {
  GetAgentActionGroupCommandInput,
  GetAgentActionGroupCommandOutput,
} from "./commands/GetAgentActionGroupCommand";
import { GetAgentAliasCommandInput, GetAgentAliasCommandOutput } from "./commands/GetAgentAliasCommand";
import {
  GetAgentCollaboratorCommandInput,
  GetAgentCollaboratorCommandOutput,
} from "./commands/GetAgentCollaboratorCommand";
import { GetAgentCommandInput, GetAgentCommandOutput } from "./commands/GetAgentCommand";
import {
  GetAgentKnowledgeBaseCommandInput,
  GetAgentKnowledgeBaseCommandOutput,
} from "./commands/GetAgentKnowledgeBaseCommand";
import { GetAgentVersionCommandInput, GetAgentVersionCommandOutput } from "./commands/GetAgentVersionCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetFlowAliasCommandInput, GetFlowAliasCommandOutput } from "./commands/GetFlowAliasCommand";
import { GetFlowCommandInput, GetFlowCommandOutput } from "./commands/GetFlowCommand";
import { GetFlowVersionCommandInput, GetFlowVersionCommandOutput } from "./commands/GetFlowVersionCommand";
import { GetIngestionJobCommandInput, GetIngestionJobCommandOutput } from "./commands/GetIngestionJobCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "./commands/GetKnowledgeBaseCommand";
import {
  GetKnowledgeBaseDocumentsCommandInput,
  GetKnowledgeBaseDocumentsCommandOutput,
} from "./commands/GetKnowledgeBaseDocumentsCommand";
import { GetPromptCommandInput, GetPromptCommandOutput } from "./commands/GetPromptCommand";
import {
  IngestKnowledgeBaseDocumentsCommandInput,
  IngestKnowledgeBaseDocumentsCommandOutput,
} from "./commands/IngestKnowledgeBaseDocumentsCommand";
import {
  ListAgentActionGroupsCommandInput,
  ListAgentActionGroupsCommandOutput,
} from "./commands/ListAgentActionGroupsCommand";
import { ListAgentAliasesCommandInput, ListAgentAliasesCommandOutput } from "./commands/ListAgentAliasesCommand";
import {
  ListAgentCollaboratorsCommandInput,
  ListAgentCollaboratorsCommandOutput,
} from "./commands/ListAgentCollaboratorsCommand";
import {
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput,
} from "./commands/ListAgentKnowledgeBasesCommand";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "./commands/ListAgentsCommand";
import { ListAgentVersionsCommandInput, ListAgentVersionsCommandOutput } from "./commands/ListAgentVersionsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListFlowAliasesCommandInput, ListFlowAliasesCommandOutput } from "./commands/ListFlowAliasesCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import { ListFlowVersionsCommandInput, ListFlowVersionsCommandOutput } from "./commands/ListFlowVersionsCommand";
import { ListIngestionJobsCommandInput, ListIngestionJobsCommandOutput } from "./commands/ListIngestionJobsCommand";
import {
  ListKnowledgeBaseDocumentsCommandInput,
  ListKnowledgeBaseDocumentsCommandOutput,
} from "./commands/ListKnowledgeBaseDocumentsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "./commands/ListKnowledgeBasesCommand";
import { ListPromptsCommandInput, ListPromptsCommandOutput } from "./commands/ListPromptsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PrepareAgentCommandInput, PrepareAgentCommandOutput } from "./commands/PrepareAgentCommand";
import { PrepareFlowCommandInput, PrepareFlowCommandOutput } from "./commands/PrepareFlowCommand";
import { StartIngestionJobCommandInput, StartIngestionJobCommandOutput } from "./commands/StartIngestionJobCommand";
import { StopIngestionJobCommandInput, StopIngestionJobCommandOutput } from "./commands/StopIngestionJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAgentActionGroupCommandInput,
  UpdateAgentActionGroupCommandOutput,
} from "./commands/UpdateAgentActionGroupCommand";
import { UpdateAgentAliasCommandInput, UpdateAgentAliasCommandOutput } from "./commands/UpdateAgentAliasCommand";
import {
  UpdateAgentCollaboratorCommandInput,
  UpdateAgentCollaboratorCommandOutput,
} from "./commands/UpdateAgentCollaboratorCommand";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "./commands/UpdateAgentCommand";
import {
  UpdateAgentKnowledgeBaseCommandInput,
  UpdateAgentKnowledgeBaseCommandOutput,
} from "./commands/UpdateAgentKnowledgeBaseCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateFlowAliasCommandInput, UpdateFlowAliasCommandOutput } from "./commands/UpdateFlowAliasCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import {
  UpdateKnowledgeBaseCommandInput,
  UpdateKnowledgeBaseCommandOutput,
} from "./commands/UpdateKnowledgeBaseCommand";
import { UpdatePromptCommandInput, UpdatePromptCommandOutput } from "./commands/UpdatePromptCommand";
import {
  ValidateFlowDefinitionCommandInput,
  ValidateFlowDefinitionCommandOutput,
} from "./commands/ValidateFlowDefinitionCommand";
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
