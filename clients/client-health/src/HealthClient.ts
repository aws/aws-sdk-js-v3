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

import {
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
} from "./commands/DescribeAffectedAccountsForOrganizationCommand";
import {
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "./commands/DescribeAffectedEntitiesCommand";
import {
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
} from "./commands/DescribeAffectedEntitiesForOrganizationCommand";
import {
  DescribeEntityAggregatesCommandInput,
  DescribeEntityAggregatesCommandOutput,
} from "./commands/DescribeEntityAggregatesCommand";
import {
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
} from "./commands/DescribeEventAggregatesCommand";
import {
  DescribeEventDetailsCommandInput,
  DescribeEventDetailsCommandOutput,
} from "./commands/DescribeEventDetailsCommand";
import {
  DescribeEventDetailsForOrganizationCommandInput,
  DescribeEventDetailsForOrganizationCommandOutput,
} from "./commands/DescribeEventDetailsForOrganizationCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
} from "./commands/DescribeEventsForOrganizationCommand";
import { DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput } from "./commands/DescribeEventTypesCommand";
import {
  DescribeHealthServiceStatusForOrganizationCommandInput,
  DescribeHealthServiceStatusForOrganizationCommandOutput,
} from "./commands/DescribeHealthServiceStatusForOrganizationCommand";
import {
  DisableHealthServiceAccessForOrganizationCommandInput,
  DisableHealthServiceAccessForOrganizationCommandOutput,
} from "./commands/DisableHealthServiceAccessForOrganizationCommand";
import {
  EnableHealthServiceAccessForOrganizationCommandInput,
  EnableHealthServiceAccessForOrganizationCommandOutput,
} from "./commands/EnableHealthServiceAccessForOrganizationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | DescribeAffectedAccountsForOrganizationCommandInput
  | DescribeAffectedEntitiesCommandInput
  | DescribeAffectedEntitiesForOrganizationCommandInput
  | DescribeEntityAggregatesCommandInput
  | DescribeEventAggregatesCommandInput
  | DescribeEventDetailsCommandInput
  | DescribeEventDetailsForOrganizationCommandInput
  | DescribeEventTypesCommandInput
  | DescribeEventsCommandInput
  | DescribeEventsForOrganizationCommandInput
  | DescribeHealthServiceStatusForOrganizationCommandInput
  | DisableHealthServiceAccessForOrganizationCommandInput
  | EnableHealthServiceAccessForOrganizationCommandInput;

export type ServiceOutputTypes =
  | DescribeAffectedAccountsForOrganizationCommandOutput
  | DescribeAffectedEntitiesCommandOutput
  | DescribeAffectedEntitiesForOrganizationCommandOutput
  | DescribeEntityAggregatesCommandOutput
  | DescribeEventAggregatesCommandOutput
  | DescribeEventDetailsCommandOutput
  | DescribeEventDetailsForOrganizationCommandOutput
  | DescribeEventTypesCommandOutput
  | DescribeEventsCommandOutput
  | DescribeEventsForOrganizationCommandOutput
  | DescribeHealthServiceStatusForOrganizationCommandOutput
  | DisableHealthServiceAccessForOrganizationCommandOutput
  | EnableHealthServiceAccessForOrganizationCommandOutput;

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

type HealthClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of HealthClient class constructor that set the region, credentials and other options.
 */
export interface HealthClientConfig extends HealthClientConfigType {}

type HealthClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of HealthClient class. This is resolved and normalized from the {@link HealthClientConfig | constructor configuration interface}.
 */
export interface HealthClientResolvedConfig extends HealthClientResolvedConfigType {}

/**
 * <fullname>Health</fullname>
 *
 *          <p>The Health API provides programmatic access to the Health information that
 *          appears in the <a href="https://phd.aws.amazon.com/phd/home#/">Personal Health Dashboard</a>. You
 *          can use the API operations to get information about events that might affect your Amazon Web Services services and resources.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan from <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a> to use the Health
 *                   API. If you call the Health API from an Amazon Web Services account that
 *                   doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, you receive a
 *                      <code>SubscriptionRequiredException</code> error.</p>
 *                </li>
 *                <li>
 *                   <p>You can use the Health endpoint health.us-east-1.amazonaws.com (HTTPS) to
 *                   call the Health API operations. Health supports a multi-Region
 *                   application architecture and has two regional endpoints in an active-passive
 *                   configuration. You can use the high availability endpoint example to determine
 *                   which Amazon Web Services Region is active, so that you can get the latest information from the
 *                   API. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/health-api.html">Accessing the Health API</a> in the
 *                      <i>Health User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For authentication of requests, Health uses the <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *             Process</a>.</p>
 *          <p>If your Amazon Web Services account is part of Organizations, you can use the Health organizational
 *          view feature. This feature provides a centralized view of Health events across all
 *          accounts in your organization. You can aggregate Health events in real time to
 *          identify accounts in your organization that are affected by an operational event or get
 *          notified of security vulnerabilities. Use the organizational view API operations to enable
 *          this feature and return event information. For more information, see <a href="https://docs.aws.amazon.com/health/latest/ug/aggregate-events.html">Aggregating
 *             Health events</a> in the <i>Health User Guide</i>.</p>
 *          <note>
 *             <p>When you use the Health API operations to return Health events, see the
 *             following recommendations:</p>
 *             <ul>
 *                <li>
 *                   <p>Use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a> parameter to specify whether to return Health
 *                   events that are public or account-specific.</p>
 *                </li>
 *                <li>
 *                   <p>Use pagination to view all events from the response. For example, if you call
 *                   the <code>DescribeEventsForOrganization</code> operation to get all events in your
 *                   organization, you might receive several page results. Specify the
 *                      <code>nextToken</code> in the next request to return more results.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class HealthClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  HealthClientResolvedConfig
> {
  /**
   * The resolved configuration of HealthClient class. This is resolved and normalized from the {@link HealthClientConfig | constructor configuration interface}.
   */
  readonly config: HealthClientResolvedConfig;

  constructor(configuration: HealthClientConfig) {
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
