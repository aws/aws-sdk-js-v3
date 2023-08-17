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
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import { CreateAwsLogSourceCommandInput, CreateAwsLogSourceCommandOutput } from "./commands/CreateAwsLogSourceCommand";
import {
  CreateCustomLogSourceCommandInput,
  CreateCustomLogSourceCommandOutput,
} from "./commands/CreateCustomLogSourceCommand";
import { CreateDataLakeCommandInput, CreateDataLakeCommandOutput } from "./commands/CreateDataLakeCommand";
import {
  CreateDataLakeExceptionSubscriptionCommandInput,
  CreateDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/CreateDataLakeExceptionSubscriptionCommand";
import {
  CreateDataLakeOrganizationConfigurationCommandInput,
  CreateDataLakeOrganizationConfigurationCommandOutput,
} from "./commands/CreateDataLakeOrganizationConfigurationCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "./commands/CreateSubscriberCommand";
import {
  CreateSubscriberNotificationCommandInput,
  CreateSubscriberNotificationCommandOutput,
} from "./commands/CreateSubscriberNotificationCommand";
import { DeleteAwsLogSourceCommandInput, DeleteAwsLogSourceCommandOutput } from "./commands/DeleteAwsLogSourceCommand";
import {
  DeleteCustomLogSourceCommandInput,
  DeleteCustomLogSourceCommandOutput,
} from "./commands/DeleteCustomLogSourceCommand";
import { DeleteDataLakeCommandInput, DeleteDataLakeCommandOutput } from "./commands/DeleteDataLakeCommand";
import {
  DeleteDataLakeExceptionSubscriptionCommandInput,
  DeleteDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/DeleteDataLakeExceptionSubscriptionCommand";
import {
  DeleteDataLakeOrganizationConfigurationCommandInput,
  DeleteDataLakeOrganizationConfigurationCommandOutput,
} from "./commands/DeleteDataLakeOrganizationConfigurationCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "./commands/DeleteSubscriberCommand";
import {
  DeleteSubscriberNotificationCommandInput,
  DeleteSubscriberNotificationCommandOutput,
} from "./commands/DeleteSubscriberNotificationCommand";
import {
  DeregisterDataLakeDelegatedAdministratorCommandInput,
  DeregisterDataLakeDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDataLakeDelegatedAdministratorCommand";
import {
  GetDataLakeExceptionSubscriptionCommandInput,
  GetDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/GetDataLakeExceptionSubscriptionCommand";
import {
  GetDataLakeOrganizationConfigurationCommandInput,
  GetDataLakeOrganizationConfigurationCommandOutput,
} from "./commands/GetDataLakeOrganizationConfigurationCommand";
import { GetDataLakeSourcesCommandInput, GetDataLakeSourcesCommandOutput } from "./commands/GetDataLakeSourcesCommand";
import { GetSubscriberCommandInput, GetSubscriberCommandOutput } from "./commands/GetSubscriberCommand";
import {
  ListDataLakeExceptionsCommandInput,
  ListDataLakeExceptionsCommandOutput,
} from "./commands/ListDataLakeExceptionsCommand";
import { ListDataLakesCommandInput, ListDataLakesCommandOutput } from "./commands/ListDataLakesCommand";
import { ListLogSourcesCommandInput, ListLogSourcesCommandOutput } from "./commands/ListLogSourcesCommand";
import { ListSubscribersCommandInput, ListSubscribersCommandOutput } from "./commands/ListSubscribersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterDataLakeDelegatedAdministratorCommandInput,
  RegisterDataLakeDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDataLakeDelegatedAdministratorCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDataLakeCommandInput, UpdateDataLakeCommandOutput } from "./commands/UpdateDataLakeCommand";
import {
  UpdateDataLakeExceptionSubscriptionCommandInput,
  UpdateDataLakeExceptionSubscriptionCommandOutput,
} from "./commands/UpdateDataLakeExceptionSubscriptionCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "./commands/UpdateSubscriberCommand";
import {
  UpdateSubscriberNotificationCommandInput,
  UpdateSubscriberNotificationCommandOutput,
} from "./commands/UpdateSubscriberNotificationCommand";
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
  | CreateAwsLogSourceCommandInput
  | CreateCustomLogSourceCommandInput
  | CreateDataLakeCommandInput
  | CreateDataLakeExceptionSubscriptionCommandInput
  | CreateDataLakeOrganizationConfigurationCommandInput
  | CreateSubscriberCommandInput
  | CreateSubscriberNotificationCommandInput
  | DeleteAwsLogSourceCommandInput
  | DeleteCustomLogSourceCommandInput
  | DeleteDataLakeCommandInput
  | DeleteDataLakeExceptionSubscriptionCommandInput
  | DeleteDataLakeOrganizationConfigurationCommandInput
  | DeleteSubscriberCommandInput
  | DeleteSubscriberNotificationCommandInput
  | DeregisterDataLakeDelegatedAdministratorCommandInput
  | GetDataLakeExceptionSubscriptionCommandInput
  | GetDataLakeOrganizationConfigurationCommandInput
  | GetDataLakeSourcesCommandInput
  | GetSubscriberCommandInput
  | ListDataLakeExceptionsCommandInput
  | ListDataLakesCommandInput
  | ListLogSourcesCommandInput
  | ListSubscribersCommandInput
  | ListTagsForResourceCommandInput
  | RegisterDataLakeDelegatedAdministratorCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDataLakeCommandInput
  | UpdateDataLakeExceptionSubscriptionCommandInput
  | UpdateSubscriberCommandInput
  | UpdateSubscriberNotificationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAwsLogSourceCommandOutput
  | CreateCustomLogSourceCommandOutput
  | CreateDataLakeCommandOutput
  | CreateDataLakeExceptionSubscriptionCommandOutput
  | CreateDataLakeOrganizationConfigurationCommandOutput
  | CreateSubscriberCommandOutput
  | CreateSubscriberNotificationCommandOutput
  | DeleteAwsLogSourceCommandOutput
  | DeleteCustomLogSourceCommandOutput
  | DeleteDataLakeCommandOutput
  | DeleteDataLakeExceptionSubscriptionCommandOutput
  | DeleteDataLakeOrganizationConfigurationCommandOutput
  | DeleteSubscriberCommandOutput
  | DeleteSubscriberNotificationCommandOutput
  | DeregisterDataLakeDelegatedAdministratorCommandOutput
  | GetDataLakeExceptionSubscriptionCommandOutput
  | GetDataLakeOrganizationConfigurationCommandOutput
  | GetDataLakeSourcesCommandOutput
  | GetSubscriberCommandOutput
  | ListDataLakeExceptionsCommandOutput
  | ListDataLakesCommandOutput
  | ListLogSourcesCommandOutput
  | ListSubscribersCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterDataLakeDelegatedAdministratorCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDataLakeCommandOutput
  | UpdateDataLakeExceptionSubscriptionCommandOutput
  | UpdateSubscriberCommandOutput
  | UpdateSubscriberNotificationCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
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
export type SecurityLakeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of SecurityLakeClient class constructor that set the region, credentials and other options.
 */
export interface SecurityLakeClientConfig extends SecurityLakeClientConfigType {}

/**
 * @public
 */
export type SecurityLakeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of SecurityLakeClient class. This is resolved and normalized from the {@link SecurityLakeClientConfig | constructor configuration interface}.
 */
export interface SecurityLakeClientResolvedConfig extends SecurityLakeClientResolvedConfigType {}

/**
 * @public
 * <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to
 *          automatically centralize security data from cloud, on-premises, and custom sources into a
 *          data lake that's stored in your Amazon Web Services account. Amazon Web Services Organizations
 *          is an account management service that lets you consolidate multiple Amazon Web Services
 *          accounts into an organization that you create and centrally manage. With Organizations, you
 *          can create member accounts and invite existing accounts to join your organization.
 *          Security Lake helps you analyze security data for a more complete understanding of your
 *          security posture across the entire organization. It can also help you improve the
 *          protection of your workloads, applications, and data.</p>
 *          <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you
 *          retain ownership over your data.</p>
 *          <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of
 *          actions taken by a user, role, or an Amazon Web Services service. In Security Lake, CloudTrail captures API calls for Security Lake as events. The calls captured include calls
 *          from the Security Lake console and code calls to the Security Lake API operations. If you create a
 *          trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for Security Lake. If you don't configure a trail, you can still
 *          view the most recent events in the CloudTrail console in Event history. Using the
 *          information collected by CloudTrail you can determine the request that was made to
 *          Security Lake, the IP address from which the request was made, who made the request, when it
 *          was made, and additional details. To learn more about Security Lake information in CloudTrail, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/securitylake-cloudtrail.html">Amazon Security Lake User Guide</a>.</p>
 *          <p>Security Lake automates the collection of security-related log and event data from
 *          integrated Amazon Web Services and third-party services. It also helps you manage
 *          the lifecycle of data with customizable retention and replication settings. Security Lake
 *          converts ingested data into Apache Parquet format and a standard open-source schema called
 *          the Open Cybersecurity Schema Framework (OCSF).</p>
 *          <p>Other Amazon Web Services and third-party services can subscribe to the data that's stored in Security Lake for
 *          incident response and security data analytics.</p>
 */
export class SecurityLakeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SecurityLakeClientResolvedConfig
> {
  /**
   * The resolved configuration of SecurityLakeClient class. This is resolved and normalized from the {@link SecurityLakeClientConfig | constructor configuration interface}.
   */
  readonly config: SecurityLakeClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SecurityLakeClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
