// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import {
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/core/event-streams";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
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
  defaultDevOpsAgentHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateServiceCommandInput, AssociateServiceCommandOutput } from "./commands/AssociateServiceCommand";
import type { CreateAgentSpaceCommandInput, CreateAgentSpaceCommandOutput } from "./commands/CreateAgentSpaceCommand";
import type {
  CreateBacklogTaskCommandInput,
  CreateBacklogTaskCommandOutput,
} from "./commands/CreateBacklogTaskCommand";
import type { CreateChatCommandInput, CreateChatCommandOutput } from "./commands/CreateChatCommand";
import type {
  CreatePrivateConnectionCommandInput,
  CreatePrivateConnectionCommandOutput,
} from "./commands/CreatePrivateConnectionCommand";
import type { DeleteAgentSpaceCommandInput, DeleteAgentSpaceCommandOutput } from "./commands/DeleteAgentSpaceCommand";
import type {
  DeletePrivateConnectionCommandInput,
  DeletePrivateConnectionCommandOutput,
} from "./commands/DeletePrivateConnectionCommand";
import type {
  DeregisterServiceCommandInput,
  DeregisterServiceCommandOutput,
} from "./commands/DeregisterServiceCommand";
import type {
  DescribePrivateConnectionCommandInput,
  DescribePrivateConnectionCommandOutput,
} from "./commands/DescribePrivateConnectionCommand";
import type {
  DisableOperatorAppCommandInput,
  DisableOperatorAppCommandOutput,
} from "./commands/DisableOperatorAppCommand";
import type {
  DisassociateServiceCommandInput,
  DisassociateServiceCommandOutput,
} from "./commands/DisassociateServiceCommand";
import type {
  EnableOperatorAppCommandInput,
  EnableOperatorAppCommandOutput,
} from "./commands/EnableOperatorAppCommand";
import type { GetAccountUsageCommandInput, GetAccountUsageCommandOutput } from "./commands/GetAccountUsageCommand";
import type { GetAgentSpaceCommandInput, GetAgentSpaceCommandOutput } from "./commands/GetAgentSpaceCommand";
import type { GetAssociationCommandInput, GetAssociationCommandOutput } from "./commands/GetAssociationCommand";
import type { GetBacklogTaskCommandInput, GetBacklogTaskCommandOutput } from "./commands/GetBacklogTaskCommand";
import type { GetOperatorAppCommandInput, GetOperatorAppCommandOutput } from "./commands/GetOperatorAppCommand";
import type {
  GetRecommendationCommandInput,
  GetRecommendationCommandOutput,
} from "./commands/GetRecommendationCommand";
import type { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import type { ListAgentSpacesCommandInput, ListAgentSpacesCommandOutput } from "./commands/ListAgentSpacesCommand";
import type { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand";
import type { ListBacklogTasksCommandInput, ListBacklogTasksCommandOutput } from "./commands/ListBacklogTasksCommand";
import type { ListChatsCommandInput, ListChatsCommandOutput } from "./commands/ListChatsCommand";
import type { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import type { ListGoalsCommandInput, ListGoalsCommandOutput } from "./commands/ListGoalsCommand";
import type {
  ListJournalRecordsCommandInput,
  ListJournalRecordsCommandOutput,
} from "./commands/ListJournalRecordsCommand";
import type {
  ListPendingMessagesCommandInput,
  ListPendingMessagesCommandOutput,
} from "./commands/ListPendingMessagesCommand";
import type {
  ListPrivateConnectionsCommandInput,
  ListPrivateConnectionsCommandOutput,
} from "./commands/ListPrivateConnectionsCommand";
import type {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "./commands/ListRecommendationsCommand";
import type { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "./commands/ListWebhooksCommand";
import type { RegisterServiceCommandInput, RegisterServiceCommandOutput } from "./commands/RegisterServiceCommand";
import type { SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAgentSpaceCommandInput, UpdateAgentSpaceCommandOutput } from "./commands/UpdateAgentSpaceCommand";
import type {
  UpdateAssociationCommandInput,
  UpdateAssociationCommandOutput,
} from "./commands/UpdateAssociationCommand";
import type {
  UpdateBacklogTaskCommandInput,
  UpdateBacklogTaskCommandOutput,
} from "./commands/UpdateBacklogTaskCommand";
import type { UpdateGoalCommandInput, UpdateGoalCommandOutput } from "./commands/UpdateGoalCommand";
import type {
  UpdateOperatorAppIdpConfigCommandInput,
  UpdateOperatorAppIdpConfigCommandOutput,
} from "./commands/UpdateOperatorAppIdpConfigCommand";
import type {
  UpdatePrivateConnectionCertificateCommandInput,
  UpdatePrivateConnectionCertificateCommandOutput,
} from "./commands/UpdatePrivateConnectionCertificateCommand";
import type {
  UpdateRecommendationCommandInput,
  UpdateRecommendationCommandOutput,
} from "./commands/UpdateRecommendationCommand";
import type {
  ValidateAwsAssociationsCommandInput,
  ValidateAwsAssociationsCommandOutput,
} from "./commands/ValidateAwsAssociationsCommand";
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
  | AssociateServiceCommandInput
  | CreateAgentSpaceCommandInput
  | CreateBacklogTaskCommandInput
  | CreateChatCommandInput
  | CreatePrivateConnectionCommandInput
  | DeleteAgentSpaceCommandInput
  | DeletePrivateConnectionCommandInput
  | DeregisterServiceCommandInput
  | DescribePrivateConnectionCommandInput
  | DisableOperatorAppCommandInput
  | DisassociateServiceCommandInput
  | EnableOperatorAppCommandInput
  | GetAccountUsageCommandInput
  | GetAgentSpaceCommandInput
  | GetAssociationCommandInput
  | GetBacklogTaskCommandInput
  | GetOperatorAppCommandInput
  | GetRecommendationCommandInput
  | GetServiceCommandInput
  | ListAgentSpacesCommandInput
  | ListAssociationsCommandInput
  | ListBacklogTasksCommandInput
  | ListChatsCommandInput
  | ListExecutionsCommandInput
  | ListGoalsCommandInput
  | ListJournalRecordsCommandInput
  | ListPendingMessagesCommandInput
  | ListPrivateConnectionsCommandInput
  | ListRecommendationsCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | ListWebhooksCommandInput
  | RegisterServiceCommandInput
  | SendMessageCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentSpaceCommandInput
  | UpdateAssociationCommandInput
  | UpdateBacklogTaskCommandInput
  | UpdateGoalCommandInput
  | UpdateOperatorAppIdpConfigCommandInput
  | UpdatePrivateConnectionCertificateCommandInput
  | UpdateRecommendationCommandInput
  | ValidateAwsAssociationsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateServiceCommandOutput
  | CreateAgentSpaceCommandOutput
  | CreateBacklogTaskCommandOutput
  | CreateChatCommandOutput
  | CreatePrivateConnectionCommandOutput
  | DeleteAgentSpaceCommandOutput
  | DeletePrivateConnectionCommandOutput
  | DeregisterServiceCommandOutput
  | DescribePrivateConnectionCommandOutput
  | DisableOperatorAppCommandOutput
  | DisassociateServiceCommandOutput
  | EnableOperatorAppCommandOutput
  | GetAccountUsageCommandOutput
  | GetAgentSpaceCommandOutput
  | GetAssociationCommandOutput
  | GetBacklogTaskCommandOutput
  | GetOperatorAppCommandOutput
  | GetRecommendationCommandOutput
  | GetServiceCommandOutput
  | ListAgentSpacesCommandOutput
  | ListAssociationsCommandOutput
  | ListBacklogTasksCommandOutput
  | ListChatsCommandOutput
  | ListExecutionsCommandOutput
  | ListGoalsCommandOutput
  | ListJournalRecordsCommandOutput
  | ListPendingMessagesCommandOutput
  | ListPrivateConnectionsCommandOutput
  | ListRecommendationsCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebhooksCommandOutput
  | RegisterServiceCommandOutput
  | SendMessageCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentSpaceCommandOutput
  | UpdateAssociationCommandOutput
  | UpdateBacklogTaskCommandOutput
  | UpdateGoalCommandOutput
  | UpdateOperatorAppIdpConfigCommandOutput
  | UpdatePrivateConnectionCertificateCommandOutput
  | UpdateRecommendationCommandOutput
  | ValidateAwsAssociationsCommandOutput;

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
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type DevOpsAgentClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of DevOpsAgentClient class constructor that set the region, credentials and other options.
 */
export interface DevOpsAgentClientConfig extends DevOpsAgentClientConfigType {}

/**
 * @public
 */
export type DevOpsAgentClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DevOpsAgentClient class. This is resolved and normalized from the {@link DevOpsAgentClientConfig | constructor configuration interface}.
 */
export interface DevOpsAgentClientResolvedConfig extends DevOpsAgentClientResolvedConfigType {}

/**
 * <p>AWS DevOps Agent is your always-available operations teammate. It resolves and proactively prevents incidents, optimizes application reliability and performance, and handles on-demand SRE tasks across AWS, multicloud, and on-premises environments. AWS DevOps Agent investigates incidents as an experienced DevOps engineer would. It learns your applications and their relationships. It works with your observability tools, runbooks, code repositories, and CI/CD pipelines. The agent correlates telemetry, code, and deployment data across all of them. </p>
 * @public
 */
export class DevOpsAgentClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DevOpsAgentClientResolvedConfig
> {
  /**
   * The resolved configuration of DevOpsAgentClient class. This is resolved and normalized from the {@link DevOpsAgentClientConfig | constructor configuration interface}.
   */
  readonly config: DevOpsAgentClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DevOpsAgentClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDevOpsAgentHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DevOpsAgentClientResolvedConfig) =>
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
