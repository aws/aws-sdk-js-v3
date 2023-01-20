// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
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
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
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
} from "@aws-sdk/types";

import { CreateAwsLogSourceCommandInput, CreateAwsLogSourceCommandOutput } from "./commands/CreateAwsLogSourceCommand";
import {
  CreateCustomLogSourceCommandInput,
  CreateCustomLogSourceCommandOutput,
} from "./commands/CreateCustomLogSourceCommand";
import {
  CreateDatalakeAutoEnableCommandInput,
  CreateDatalakeAutoEnableCommandOutput,
} from "./commands/CreateDatalakeAutoEnableCommand";
import { CreateDatalakeCommandInput, CreateDatalakeCommandOutput } from "./commands/CreateDatalakeCommand";
import {
  CreateDatalakeDelegatedAdminCommandInput,
  CreateDatalakeDelegatedAdminCommandOutput,
} from "./commands/CreateDatalakeDelegatedAdminCommand";
import {
  CreateDatalakeExceptionsSubscriptionCommandInput,
  CreateDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/CreateDatalakeExceptionsSubscriptionCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "./commands/CreateSubscriberCommand";
import {
  CreateSubscriptionNotificationConfigurationCommandInput,
  CreateSubscriptionNotificationConfigurationCommandOutput,
} from "./commands/CreateSubscriptionNotificationConfigurationCommand";
import { DeleteAwsLogSourceCommandInput, DeleteAwsLogSourceCommandOutput } from "./commands/DeleteAwsLogSourceCommand";
import {
  DeleteCustomLogSourceCommandInput,
  DeleteCustomLogSourceCommandOutput,
} from "./commands/DeleteCustomLogSourceCommand";
import {
  DeleteDatalakeAutoEnableCommandInput,
  DeleteDatalakeAutoEnableCommandOutput,
} from "./commands/DeleteDatalakeAutoEnableCommand";
import { DeleteDatalakeCommandInput, DeleteDatalakeCommandOutput } from "./commands/DeleteDatalakeCommand";
import {
  DeleteDatalakeDelegatedAdminCommandInput,
  DeleteDatalakeDelegatedAdminCommandOutput,
} from "./commands/DeleteDatalakeDelegatedAdminCommand";
import {
  DeleteDatalakeExceptionsSubscriptionCommandInput,
  DeleteDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/DeleteDatalakeExceptionsSubscriptionCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "./commands/DeleteSubscriberCommand";
import {
  DeleteSubscriptionNotificationConfigurationCommandInput,
  DeleteSubscriptionNotificationConfigurationCommandOutput,
} from "./commands/DeleteSubscriptionNotificationConfigurationCommand";
import {
  GetDatalakeAutoEnableCommandInput,
  GetDatalakeAutoEnableCommandOutput,
} from "./commands/GetDatalakeAutoEnableCommand";
import { GetDatalakeCommandInput, GetDatalakeCommandOutput } from "./commands/GetDatalakeCommand";
import {
  GetDatalakeExceptionsExpiryCommandInput,
  GetDatalakeExceptionsExpiryCommandOutput,
} from "./commands/GetDatalakeExceptionsExpiryCommand";
import {
  GetDatalakeExceptionsSubscriptionCommandInput,
  GetDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/GetDatalakeExceptionsSubscriptionCommand";
import { GetDatalakeStatusCommandInput, GetDatalakeStatusCommandOutput } from "./commands/GetDatalakeStatusCommand";
import { GetSubscriberCommandInput, GetSubscriberCommandOutput } from "./commands/GetSubscriberCommand";
import {
  ListDatalakeExceptionsCommandInput,
  ListDatalakeExceptionsCommandOutput,
} from "./commands/ListDatalakeExceptionsCommand";
import { ListLogSourcesCommandInput, ListLogSourcesCommandOutput } from "./commands/ListLogSourcesCommand";
import { ListSubscribersCommandInput, ListSubscribersCommandOutput } from "./commands/ListSubscribersCommand";
import { UpdateDatalakeCommandInput, UpdateDatalakeCommandOutput } from "./commands/UpdateDatalakeCommand";
import {
  UpdateDatalakeExceptionsExpiryCommandInput,
  UpdateDatalakeExceptionsExpiryCommandOutput,
} from "./commands/UpdateDatalakeExceptionsExpiryCommand";
import {
  UpdateDatalakeExceptionsSubscriptionCommandInput,
  UpdateDatalakeExceptionsSubscriptionCommandOutput,
} from "./commands/UpdateDatalakeExceptionsSubscriptionCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "./commands/UpdateSubscriberCommand";
import {
  UpdateSubscriptionNotificationConfigurationCommandInput,
  UpdateSubscriptionNotificationConfigurationCommandOutput,
} from "./commands/UpdateSubscriptionNotificationConfigurationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateAwsLogSourceCommandInput
  | CreateCustomLogSourceCommandInput
  | CreateDatalakeAutoEnableCommandInput
  | CreateDatalakeCommandInput
  | CreateDatalakeDelegatedAdminCommandInput
  | CreateDatalakeExceptionsSubscriptionCommandInput
  | CreateSubscriberCommandInput
  | CreateSubscriptionNotificationConfigurationCommandInput
  | DeleteAwsLogSourceCommandInput
  | DeleteCustomLogSourceCommandInput
  | DeleteDatalakeAutoEnableCommandInput
  | DeleteDatalakeCommandInput
  | DeleteDatalakeDelegatedAdminCommandInput
  | DeleteDatalakeExceptionsSubscriptionCommandInput
  | DeleteSubscriberCommandInput
  | DeleteSubscriptionNotificationConfigurationCommandInput
  | GetDatalakeAutoEnableCommandInput
  | GetDatalakeCommandInput
  | GetDatalakeExceptionsExpiryCommandInput
  | GetDatalakeExceptionsSubscriptionCommandInput
  | GetDatalakeStatusCommandInput
  | GetSubscriberCommandInput
  | ListDatalakeExceptionsCommandInput
  | ListLogSourcesCommandInput
  | ListSubscribersCommandInput
  | UpdateDatalakeCommandInput
  | UpdateDatalakeExceptionsExpiryCommandInput
  | UpdateDatalakeExceptionsSubscriptionCommandInput
  | UpdateSubscriberCommandInput
  | UpdateSubscriptionNotificationConfigurationCommandInput;

export type ServiceOutputTypes =
  | CreateAwsLogSourceCommandOutput
  | CreateCustomLogSourceCommandOutput
  | CreateDatalakeAutoEnableCommandOutput
  | CreateDatalakeCommandOutput
  | CreateDatalakeDelegatedAdminCommandOutput
  | CreateDatalakeExceptionsSubscriptionCommandOutput
  | CreateSubscriberCommandOutput
  | CreateSubscriptionNotificationConfigurationCommandOutput
  | DeleteAwsLogSourceCommandOutput
  | DeleteCustomLogSourceCommandOutput
  | DeleteDatalakeAutoEnableCommandOutput
  | DeleteDatalakeCommandOutput
  | DeleteDatalakeDelegatedAdminCommandOutput
  | DeleteDatalakeExceptionsSubscriptionCommandOutput
  | DeleteSubscriberCommandOutput
  | DeleteSubscriptionNotificationConfigurationCommandOutput
  | GetDatalakeAutoEnableCommandOutput
  | GetDatalakeCommandOutput
  | GetDatalakeExceptionsExpiryCommandOutput
  | GetDatalakeExceptionsSubscriptionCommandOutput
  | GetDatalakeStatusCommandOutput
  | GetSubscriberCommandOutput
  | ListDatalakeExceptionsCommandOutput
  | ListLogSourcesCommandOutput
  | ListSubscribersCommandOutput
  | UpdateDatalakeCommandOutput
  | UpdateDatalakeExceptionsExpiryCommandOutput
  | UpdateDatalakeExceptionsSubscriptionCommandOutput
  | UpdateSubscriberCommandOutput
  | UpdateSubscriptionNotificationConfigurationCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

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
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type SecurityLakeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of SecurityLakeClient class constructor that set the region, credentials and other options.
 */
export interface SecurityLakeClientConfig extends SecurityLakeClientConfigType {}

type SecurityLakeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of SecurityLakeClient class. This is resolved and normalized from the {@link SecurityLakeClientConfig | constructor configuration interface}.
 */
export interface SecurityLakeClientResolvedConfig extends SecurityLakeClientResolvedConfigType {}

/**
 * <note>
 *             <p>Amazon Security Lake is in preview release. Your use of the Security Lake preview is subject to
 *             Section 2 of the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service
 *                Terms</a>("Betas and Previews").</p>
 *          </note>
 *          <p>Amazon Security Lake is a fully managed security data lake service. You can use Security Lake to
 *          automatically centralize security data from cloud, on-premises, and custom sources into a
 *          data lake that's stored in your Amazon Web Servicesaccount. Amazon Web Services Organizations
 *          is an account management service that lets you consolidate multiple Amazon Web Services
 *          accounts into an organization that you create and centrally manage. With Organizations, you
 *          can create member accounts and invite existing accounts to join your organization.
 *          Security Lake helps you analyze security data for a more complete understanding of your
 *          security posture across the entire organization. It can also help you improve the
 *          protection of your workloads, applications, and data.</p>
 *          <p>The data lake is backed by Amazon Simple Storage Service (Amazon S3) buckets, and you
 *          retain ownership over your data.   </p>
 *          <p>Amazon Security Lake integrates with CloudTrail, a service that provides a record of
 *          actions taken by a user, role, or an Amazon Web Services service in Security Lake CloudTrail captures API calls for Security Lake as events. The calls captured include calls
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

  constructor(configuration: SecurityLakeClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
