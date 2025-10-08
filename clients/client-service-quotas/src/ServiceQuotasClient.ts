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
  defaultServiceQuotasHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput,
} from "./commands/AssociateServiceQuotaTemplateCommand";
import { CreateSupportCaseCommandInput, CreateSupportCaseCommandOutput } from "./commands/CreateSupportCaseCommand";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput,
} from "./commands/DisassociateServiceQuotaTemplateCommand";
import {
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput,
} from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import {
  GetAutoManagementConfigurationCommandInput,
  GetAutoManagementConfigurationCommandOutput,
} from "./commands/GetAutoManagementConfigurationCommand";
import {
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput,
} from "./commands/GetAWSDefaultServiceQuotaCommand";
import {
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput,
} from "./commands/GetRequestedServiceQuotaChangeCommand";
import { GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput } from "./commands/GetServiceQuotaCommand";
import {
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "./commands/ListAWSDefaultServiceQuotasCommand";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import {
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
} from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput } from "./commands/ListServiceQuotasCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
} from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import {
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
} from "./commands/RequestServiceQuotaIncreaseCommand";
import {
  StartAutoManagementCommandInput,
  StartAutoManagementCommandOutput,
} from "./commands/StartAutoManagementCommand";
import { StopAutoManagementCommandInput, StopAutoManagementCommandOutput } from "./commands/StopAutoManagementCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAutoManagementCommandInput,
  UpdateAutoManagementCommandOutput,
} from "./commands/UpdateAutoManagementCommand";
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
  | AssociateServiceQuotaTemplateCommandInput
  | CreateSupportCaseCommandInput
  | DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput
  | DisassociateServiceQuotaTemplateCommandInput
  | GetAWSDefaultServiceQuotaCommandInput
  | GetAssociationForServiceQuotaTemplateCommandInput
  | GetAutoManagementConfigurationCommandInput
  | GetRequestedServiceQuotaChangeCommandInput
  | GetServiceQuotaCommandInput
  | GetServiceQuotaIncreaseRequestFromTemplateCommandInput
  | ListAWSDefaultServiceQuotasCommandInput
  | ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput
  | ListRequestedServiceQuotaChangeHistoryCommandInput
  | ListServiceQuotaIncreaseRequestsInTemplateCommandInput
  | ListServiceQuotasCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | PutServiceQuotaIncreaseRequestIntoTemplateCommandInput
  | RequestServiceQuotaIncreaseCommandInput
  | StartAutoManagementCommandInput
  | StopAutoManagementCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAutoManagementCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateServiceQuotaTemplateCommandOutput
  | CreateSupportCaseCommandOutput
  | DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
  | DisassociateServiceQuotaTemplateCommandOutput
  | GetAWSDefaultServiceQuotaCommandOutput
  | GetAssociationForServiceQuotaTemplateCommandOutput
  | GetAutoManagementConfigurationCommandOutput
  | GetRequestedServiceQuotaChangeCommandOutput
  | GetServiceQuotaCommandOutput
  | GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
  | ListAWSDefaultServiceQuotasCommandOutput
  | ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
  | ListRequestedServiceQuotaChangeHistoryCommandOutput
  | ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
  | ListServiceQuotasCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
  | RequestServiceQuotaIncreaseCommandOutput
  | StartAutoManagementCommandOutput
  | StopAutoManagementCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAutoManagementCommandOutput;

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
export type ServiceQuotasClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ServiceQuotasClient class constructor that set the region, credentials and other options.
 */
export interface ServiceQuotasClientConfig extends ServiceQuotasClientConfigType {}

/**
 * @public
 */
export type ServiceQuotasClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ServiceQuotasClient class. This is resolved and normalized from the {@link ServiceQuotasClientConfig | constructor configuration interface}.
 */
export interface ServiceQuotasClientResolvedConfig extends ServiceQuotasClientResolvedConfigType {}

/**
 * <p>With Service Quotas, you can view and manage your quotas easily as your Amazon Web Services workloads grow.
 *             Quotas, also referred to as limits, are the maximum number of resources that you can
 *             create in your Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
 *          <p>You need Amazon Web Services CLI version 2.13.20 or higher to view and manage resource-level quotas such as <code>Instances
 *         per domain</code> for Amazon OpenSearch Service.</p>
 * @public
 */
export class ServiceQuotasClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ServiceQuotasClientResolvedConfig
> {
  /**
   * The resolved configuration of ServiceQuotasClient class. This is resolved and normalized from the {@link ServiceQuotasClientConfig | constructor configuration interface}.
   */
  readonly config: ServiceQuotasClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ServiceQuotasClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultServiceQuotasHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ServiceQuotasClientResolvedConfig) =>
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
