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
  defaultCloudTrailHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import type { CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import type { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import type { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import type {
  CreateEventDataStoreCommandInput,
  CreateEventDataStoreCommandOutput,
} from "./commands/CreateEventDataStoreCommand";
import type { CreateTrailCommandInput, CreateTrailCommandOutput } from "./commands/CreateTrailCommand";
import type { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import type { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import type {
  DeleteEventDataStoreCommandInput,
  DeleteEventDataStoreCommandOutput,
} from "./commands/DeleteEventDataStoreCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type { DeleteTrailCommandInput, DeleteTrailCommandOutput } from "./commands/DeleteTrailCommand";
import type {
  DeregisterOrganizationDelegatedAdminCommandInput,
  DeregisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/DeregisterOrganizationDelegatedAdminCommand";
import type { DescribeQueryCommandInput, DescribeQueryCommandOutput } from "./commands/DescribeQueryCommand";
import type { DescribeTrailsCommandInput, DescribeTrailsCommandOutput } from "./commands/DescribeTrailsCommand";
import type {
  DisableFederationCommandInput,
  DisableFederationCommandOutput,
} from "./commands/DisableFederationCommand";
import type { EnableFederationCommandInput, EnableFederationCommandOutput } from "./commands/EnableFederationCommand";
import type { GenerateQueryCommandInput, GenerateQueryCommandOutput } from "./commands/GenerateQueryCommand";
import type { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import type { GetDashboardCommandInput, GetDashboardCommandOutput } from "./commands/GetDashboardCommand";
import type {
  GetEventConfigurationCommandInput,
  GetEventConfigurationCommandOutput,
} from "./commands/GetEventConfigurationCommand";
import type {
  GetEventDataStoreCommandInput,
  GetEventDataStoreCommandOutput,
} from "./commands/GetEventDataStoreCommand";
import type {
  GetEventSelectorsCommandInput,
  GetEventSelectorsCommandOutput,
} from "./commands/GetEventSelectorsCommand";
import type { GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import type {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "./commands/GetInsightSelectorsCommand";
import type { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type { GetTrailCommandInput, GetTrailCommandOutput } from "./commands/GetTrailCommand";
import type { GetTrailStatusCommandInput, GetTrailStatusCommandOutput } from "./commands/GetTrailStatusCommand";
import type { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import type { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import type {
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
} from "./commands/ListEventDataStoresCommand";
import type {
  ListImportFailuresCommandInput,
  ListImportFailuresCommandOutput,
} from "./commands/ListImportFailuresCommand";
import type { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import type { ListInsightsDataCommandInput, ListInsightsDataCommandOutput } from "./commands/ListInsightsDataCommand";
import type {
  ListInsightsMetricDataCommandInput,
  ListInsightsMetricDataCommandOutput,
} from "./commands/ListInsightsMetricDataCommand";
import type { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import type { ListQueriesCommandInput, ListQueriesCommandOutput } from "./commands/ListQueriesCommand";
import type { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import type { ListTrailsCommandInput, ListTrailsCommandOutput } from "./commands/ListTrailsCommand";
import type { LookupEventsCommandInput, LookupEventsCommandOutput } from "./commands/LookupEventsCommand";
import type {
  PutEventConfigurationCommandInput,
  PutEventConfigurationCommandOutput,
} from "./commands/PutEventConfigurationCommand";
import type {
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput,
} from "./commands/PutEventSelectorsCommand";
import type {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "./commands/PutInsightSelectorsCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type {
  RegisterOrganizationDelegatedAdminCommandInput,
  RegisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/RegisterOrganizationDelegatedAdminCommand";
import type { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import type {
  RestoreEventDataStoreCommandInput,
  RestoreEventDataStoreCommandOutput,
} from "./commands/RestoreEventDataStoreCommand";
import type {
  SearchSampleQueriesCommandInput,
  SearchSampleQueriesCommandOutput,
} from "./commands/SearchSampleQueriesCommand";
import type {
  StartDashboardRefreshCommandInput,
  StartDashboardRefreshCommandOutput,
} from "./commands/StartDashboardRefreshCommand";
import type {
  StartEventDataStoreIngestionCommandInput,
  StartEventDataStoreIngestionCommandOutput,
} from "./commands/StartEventDataStoreIngestionCommand";
import type { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import type { StartLoggingCommandInput, StartLoggingCommandOutput } from "./commands/StartLoggingCommand";
import type { StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import type {
  StopEventDataStoreIngestionCommandInput,
  StopEventDataStoreIngestionCommandOutput,
} from "./commands/StopEventDataStoreIngestionCommand";
import type { StopImportCommandInput, StopImportCommandOutput } from "./commands/StopImportCommand";
import type { StopLoggingCommandInput, StopLoggingCommandOutput } from "./commands/StopLoggingCommand";
import type { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import type { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import type {
  UpdateEventDataStoreCommandInput,
  UpdateEventDataStoreCommandOutput,
} from "./commands/UpdateEventDataStoreCommand";
import type { UpdateTrailCommandInput, UpdateTrailCommandOutput } from "./commands/UpdateTrailCommand";
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
  | AddTagsCommandInput
  | CancelQueryCommandInput
  | CreateChannelCommandInput
  | CreateDashboardCommandInput
  | CreateEventDataStoreCommandInput
  | CreateTrailCommandInput
  | DeleteChannelCommandInput
  | DeleteDashboardCommandInput
  | DeleteEventDataStoreCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteTrailCommandInput
  | DeregisterOrganizationDelegatedAdminCommandInput
  | DescribeQueryCommandInput
  | DescribeTrailsCommandInput
  | DisableFederationCommandInput
  | EnableFederationCommandInput
  | GenerateQueryCommandInput
  | GetChannelCommandInput
  | GetDashboardCommandInput
  | GetEventConfigurationCommandInput
  | GetEventDataStoreCommandInput
  | GetEventSelectorsCommandInput
  | GetImportCommandInput
  | GetInsightSelectorsCommandInput
  | GetQueryResultsCommandInput
  | GetResourcePolicyCommandInput
  | GetTrailCommandInput
  | GetTrailStatusCommandInput
  | ListChannelsCommandInput
  | ListDashboardsCommandInput
  | ListEventDataStoresCommandInput
  | ListImportFailuresCommandInput
  | ListImportsCommandInput
  | ListInsightsDataCommandInput
  | ListInsightsMetricDataCommandInput
  | ListPublicKeysCommandInput
  | ListQueriesCommandInput
  | ListTagsCommandInput
  | ListTrailsCommandInput
  | LookupEventsCommandInput
  | PutEventConfigurationCommandInput
  | PutEventSelectorsCommandInput
  | PutInsightSelectorsCommandInput
  | PutResourcePolicyCommandInput
  | RegisterOrganizationDelegatedAdminCommandInput
  | RemoveTagsCommandInput
  | RestoreEventDataStoreCommandInput
  | SearchSampleQueriesCommandInput
  | StartDashboardRefreshCommandInput
  | StartEventDataStoreIngestionCommandInput
  | StartImportCommandInput
  | StartLoggingCommandInput
  | StartQueryCommandInput
  | StopEventDataStoreIngestionCommandInput
  | StopImportCommandInput
  | StopLoggingCommandInput
  | UpdateChannelCommandInput
  | UpdateDashboardCommandInput
  | UpdateEventDataStoreCommandInput
  | UpdateTrailCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsCommandOutput
  | CancelQueryCommandOutput
  | CreateChannelCommandOutput
  | CreateDashboardCommandOutput
  | CreateEventDataStoreCommandOutput
  | CreateTrailCommandOutput
  | DeleteChannelCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteEventDataStoreCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteTrailCommandOutput
  | DeregisterOrganizationDelegatedAdminCommandOutput
  | DescribeQueryCommandOutput
  | DescribeTrailsCommandOutput
  | DisableFederationCommandOutput
  | EnableFederationCommandOutput
  | GenerateQueryCommandOutput
  | GetChannelCommandOutput
  | GetDashboardCommandOutput
  | GetEventConfigurationCommandOutput
  | GetEventDataStoreCommandOutput
  | GetEventSelectorsCommandOutput
  | GetImportCommandOutput
  | GetInsightSelectorsCommandOutput
  | GetQueryResultsCommandOutput
  | GetResourcePolicyCommandOutput
  | GetTrailCommandOutput
  | GetTrailStatusCommandOutput
  | ListChannelsCommandOutput
  | ListDashboardsCommandOutput
  | ListEventDataStoresCommandOutput
  | ListImportFailuresCommandOutput
  | ListImportsCommandOutput
  | ListInsightsDataCommandOutput
  | ListInsightsMetricDataCommandOutput
  | ListPublicKeysCommandOutput
  | ListQueriesCommandOutput
  | ListTagsCommandOutput
  | ListTrailsCommandOutput
  | LookupEventsCommandOutput
  | PutEventConfigurationCommandOutput
  | PutEventSelectorsCommandOutput
  | PutInsightSelectorsCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterOrganizationDelegatedAdminCommandOutput
  | RemoveTagsCommandOutput
  | RestoreEventDataStoreCommandOutput
  | SearchSampleQueriesCommandOutput
  | StartDashboardRefreshCommandOutput
  | StartEventDataStoreIngestionCommandOutput
  | StartImportCommandOutput
  | StartLoggingCommandOutput
  | StartQueryCommandOutput
  | StopEventDataStoreIngestionCommandOutput
  | StopImportCommandOutput
  | StopLoggingCommandOutput
  | UpdateChannelCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateEventDataStoreCommandOutput
  | UpdateTrailCommandOutput;

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
export type CloudTrailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CloudTrailClient class constructor that set the region, credentials and other options.
 */
export interface CloudTrailClientConfig extends CloudTrailClientConfigType {}

/**
 * @public
 */
export type CloudTrailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
 */
export interface CloudTrailClientResolvedConfig extends CloudTrailClientResolvedConfigType {}

/**
 * <fullname>CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data
 *          types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. The
 *          recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response
 *          elements returned by the service.</p>
 *          <note>
 *             <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which
 *             consist of libraries and sample code for various programming languages and platforms
 *             (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests,
 *             managing errors, and retrying requests automatically. For more information about the
 *                Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail
 *          User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>
 * @public
 */
export class CloudTrailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudTrailClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
   */
  readonly config: CloudTrailClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudTrailClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCloudTrailHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudTrailClientResolvedConfig) =>
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
