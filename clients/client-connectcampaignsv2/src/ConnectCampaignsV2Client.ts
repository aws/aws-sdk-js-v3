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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultConnectCampaignsV2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand";
import {
  DeleteCampaignChannelSubtypeConfigCommandInput,
  DeleteCampaignChannelSubtypeConfigCommandOutput,
} from "./commands/DeleteCampaignChannelSubtypeConfigCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand";
import {
  DeleteCampaignCommunicationLimitsCommandInput,
  DeleteCampaignCommunicationLimitsCommandOutput,
} from "./commands/DeleteCampaignCommunicationLimitsCommand";
import {
  DeleteCampaignCommunicationTimeCommandInput,
  DeleteCampaignCommunicationTimeCommandOutput,
} from "./commands/DeleteCampaignCommunicationTimeCommand";
import {
  DeleteConnectInstanceConfigCommandInput,
  DeleteConnectInstanceConfigCommandOutput,
} from "./commands/DeleteConnectInstanceConfigCommand";
import {
  DeleteConnectInstanceIntegrationCommandInput,
  DeleteConnectInstanceIntegrationCommandOutput,
} from "./commands/DeleteConnectInstanceIntegrationCommand";
import {
  DeleteInstanceOnboardingJobCommandInput,
  DeleteInstanceOnboardingJobCommandOutput,
} from "./commands/DeleteInstanceOnboardingJobCommand";
import { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "./commands/DescribeCampaignCommand";
import {
  GetCampaignStateBatchCommandInput,
  GetCampaignStateBatchCommandOutput,
} from "./commands/GetCampaignStateBatchCommand";
import { GetCampaignStateCommandInput, GetCampaignStateCommandOutput } from "./commands/GetCampaignStateCommand";
import {
  GetConnectInstanceConfigCommandInput,
  GetConnectInstanceConfigCommandOutput,
} from "./commands/GetConnectInstanceConfigCommand";
import {
  GetInstanceCommunicationLimitsCommandInput,
  GetInstanceCommunicationLimitsCommandOutput,
} from "./commands/GetInstanceCommunicationLimitsCommand";
import {
  GetInstanceOnboardingJobStatusCommandInput,
  GetInstanceOnboardingJobStatusCommandOutput,
} from "./commands/GetInstanceOnboardingJobStatusCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "./commands/ListCampaignsCommand";
import {
  ListConnectInstanceIntegrationsCommandInput,
  ListConnectInstanceIntegrationsCommandOutput,
} from "./commands/ListConnectInstanceIntegrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PauseCampaignCommandInput, PauseCampaignCommandOutput } from "./commands/PauseCampaignCommand";
import {
  PutConnectInstanceIntegrationCommandInput,
  PutConnectInstanceIntegrationCommandOutput,
} from "./commands/PutConnectInstanceIntegrationCommand";
import {
  PutInstanceCommunicationLimitsCommandInput,
  PutInstanceCommunicationLimitsCommandOutput,
} from "./commands/PutInstanceCommunicationLimitsCommand";
import {
  PutOutboundRequestBatchCommandInput,
  PutOutboundRequestBatchCommandOutput,
} from "./commands/PutOutboundRequestBatchCommand";
import {
  PutProfileOutboundRequestBatchCommandInput,
  PutProfileOutboundRequestBatchCommandOutput,
} from "./commands/PutProfileOutboundRequestBatchCommand";
import { ResumeCampaignCommandInput, ResumeCampaignCommandOutput } from "./commands/ResumeCampaignCommand";
import { StartCampaignCommandInput, StartCampaignCommandOutput } from "./commands/StartCampaignCommand";
import {
  StartInstanceOnboardingJobCommandInput,
  StartInstanceOnboardingJobCommandOutput,
} from "./commands/StartInstanceOnboardingJobCommand";
import { StopCampaignCommandInput, StopCampaignCommandOutput } from "./commands/StopCampaignCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCampaignChannelSubtypeConfigCommandInput,
  UpdateCampaignChannelSubtypeConfigCommandOutput,
} from "./commands/UpdateCampaignChannelSubtypeConfigCommand";
import {
  UpdateCampaignCommunicationLimitsCommandInput,
  UpdateCampaignCommunicationLimitsCommandOutput,
} from "./commands/UpdateCampaignCommunicationLimitsCommand";
import {
  UpdateCampaignCommunicationTimeCommandInput,
  UpdateCampaignCommunicationTimeCommandOutput,
} from "./commands/UpdateCampaignCommunicationTimeCommand";
import {
  UpdateCampaignFlowAssociationCommandInput,
  UpdateCampaignFlowAssociationCommandOutput,
} from "./commands/UpdateCampaignFlowAssociationCommand";
import { UpdateCampaignNameCommandInput, UpdateCampaignNameCommandOutput } from "./commands/UpdateCampaignNameCommand";
import {
  UpdateCampaignScheduleCommandInput,
  UpdateCampaignScheduleCommandOutput,
} from "./commands/UpdateCampaignScheduleCommand";
import {
  UpdateCampaignSourceCommandInput,
  UpdateCampaignSourceCommandOutput,
} from "./commands/UpdateCampaignSourceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateCampaignCommandInput
  | DeleteCampaignChannelSubtypeConfigCommandInput
  | DeleteCampaignCommandInput
  | DeleteCampaignCommunicationLimitsCommandInput
  | DeleteCampaignCommunicationTimeCommandInput
  | DeleteConnectInstanceConfigCommandInput
  | DeleteConnectInstanceIntegrationCommandInput
  | DeleteInstanceOnboardingJobCommandInput
  | DescribeCampaignCommandInput
  | GetCampaignStateBatchCommandInput
  | GetCampaignStateCommandInput
  | GetConnectInstanceConfigCommandInput
  | GetInstanceCommunicationLimitsCommandInput
  | GetInstanceOnboardingJobStatusCommandInput
  | ListCampaignsCommandInput
  | ListConnectInstanceIntegrationsCommandInput
  | ListTagsForResourceCommandInput
  | PauseCampaignCommandInput
  | PutConnectInstanceIntegrationCommandInput
  | PutInstanceCommunicationLimitsCommandInput
  | PutOutboundRequestBatchCommandInput
  | PutProfileOutboundRequestBatchCommandInput
  | ResumeCampaignCommandInput
  | StartCampaignCommandInput
  | StartInstanceOnboardingJobCommandInput
  | StopCampaignCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCampaignChannelSubtypeConfigCommandInput
  | UpdateCampaignCommunicationLimitsCommandInput
  | UpdateCampaignCommunicationTimeCommandInput
  | UpdateCampaignFlowAssociationCommandInput
  | UpdateCampaignNameCommandInput
  | UpdateCampaignScheduleCommandInput
  | UpdateCampaignSourceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateCampaignCommandOutput
  | DeleteCampaignChannelSubtypeConfigCommandOutput
  | DeleteCampaignCommandOutput
  | DeleteCampaignCommunicationLimitsCommandOutput
  | DeleteCampaignCommunicationTimeCommandOutput
  | DeleteConnectInstanceConfigCommandOutput
  | DeleteConnectInstanceIntegrationCommandOutput
  | DeleteInstanceOnboardingJobCommandOutput
  | DescribeCampaignCommandOutput
  | GetCampaignStateBatchCommandOutput
  | GetCampaignStateCommandOutput
  | GetConnectInstanceConfigCommandOutput
  | GetInstanceCommunicationLimitsCommandOutput
  | GetInstanceOnboardingJobStatusCommandOutput
  | ListCampaignsCommandOutput
  | ListConnectInstanceIntegrationsCommandOutput
  | ListTagsForResourceCommandOutput
  | PauseCampaignCommandOutput
  | PutConnectInstanceIntegrationCommandOutput
  | PutInstanceCommunicationLimitsCommandOutput
  | PutOutboundRequestBatchCommandOutput
  | PutProfileOutboundRequestBatchCommandOutput
  | ResumeCampaignCommandOutput
  | StartCampaignCommandOutput
  | StartInstanceOnboardingJobCommandOutput
  | StopCampaignCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCampaignChannelSubtypeConfigCommandOutput
  | UpdateCampaignCommunicationLimitsCommandOutput
  | UpdateCampaignCommunicationTimeCommandOutput
  | UpdateCampaignFlowAssociationCommandOutput
  | UpdateCampaignNameCommandOutput
  | UpdateCampaignScheduleCommandOutput
  | UpdateCampaignSourceCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type ConnectCampaignsV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ConnectCampaignsV2Client class constructor that set the region, credentials and other options.
 */
export interface ConnectCampaignsV2ClientConfig extends ConnectCampaignsV2ClientConfigType {}

/**
 * @public
 */
export type ConnectCampaignsV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ConnectCampaignsV2Client class. This is resolved and normalized from the {@link ConnectCampaignsV2ClientConfig | constructor configuration interface}.
 */
export interface ConnectCampaignsV2ClientResolvedConfig extends ConnectCampaignsV2ClientResolvedConfigType {}

/**
 * Provide APIs to create and manage Amazon Connect Campaigns.
 * @public
 */
export class ConnectCampaignsV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConnectCampaignsV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of ConnectCampaignsV2Client class. This is resolved and normalized from the {@link ConnectCampaignsV2ClientConfig | constructor configuration interface}.
   */
  readonly config: ConnectCampaignsV2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ConnectCampaignsV2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultConnectCampaignsV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ConnectCampaignsV2ClientResolvedConfig) =>
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
