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
  defaultBudgetsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateBudgetActionCommandInput, CreateBudgetActionCommandOutput } from "./commands/CreateBudgetActionCommand";
import { CreateBudgetCommandInput, CreateBudgetCommandOutput } from "./commands/CreateBudgetCommand";
import { CreateNotificationCommandInput, CreateNotificationCommandOutput } from "./commands/CreateNotificationCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "./commands/CreateSubscriberCommand";
import { DeleteBudgetActionCommandInput, DeleteBudgetActionCommandOutput } from "./commands/DeleteBudgetActionCommand";
import { DeleteBudgetCommandInput, DeleteBudgetCommandOutput } from "./commands/DeleteBudgetCommand";
import { DeleteNotificationCommandInput, DeleteNotificationCommandOutput } from "./commands/DeleteNotificationCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "./commands/DeleteSubscriberCommand";
import {
  DescribeBudgetActionCommandInput,
  DescribeBudgetActionCommandOutput,
} from "./commands/DescribeBudgetActionCommand";
import {
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
} from "./commands/DescribeBudgetActionHistoriesCommand";
import {
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
} from "./commands/DescribeBudgetActionsForAccountCommand";
import {
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "./commands/DescribeBudgetActionsForBudgetCommand";
import { DescribeBudgetCommandInput, DescribeBudgetCommandOutput } from "./commands/DescribeBudgetCommand";
import {
  DescribeBudgetNotificationsForAccountCommandInput,
  DescribeBudgetNotificationsForAccountCommandOutput,
} from "./commands/DescribeBudgetNotificationsForAccountCommand";
import {
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "./commands/DescribeBudgetPerformanceHistoryCommand";
import { DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput } from "./commands/DescribeBudgetsCommand";
import {
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "./commands/DescribeNotificationsForBudgetCommand";
import {
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
} from "./commands/DescribeSubscribersForNotificationCommand";
import {
  ExecuteBudgetActionCommandInput,
  ExecuteBudgetActionCommandOutput,
} from "./commands/ExecuteBudgetActionCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBudgetActionCommandInput, UpdateBudgetActionCommandOutput } from "./commands/UpdateBudgetActionCommand";
import { UpdateBudgetCommandInput, UpdateBudgetCommandOutput } from "./commands/UpdateBudgetCommand";
import { UpdateNotificationCommandInput, UpdateNotificationCommandOutput } from "./commands/UpdateNotificationCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "./commands/UpdateSubscriberCommand";
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
  | CreateBudgetActionCommandInput
  | CreateBudgetCommandInput
  | CreateNotificationCommandInput
  | CreateSubscriberCommandInput
  | DeleteBudgetActionCommandInput
  | DeleteBudgetCommandInput
  | DeleteNotificationCommandInput
  | DeleteSubscriberCommandInput
  | DescribeBudgetActionCommandInput
  | DescribeBudgetActionHistoriesCommandInput
  | DescribeBudgetActionsForAccountCommandInput
  | DescribeBudgetActionsForBudgetCommandInput
  | DescribeBudgetCommandInput
  | DescribeBudgetNotificationsForAccountCommandInput
  | DescribeBudgetPerformanceHistoryCommandInput
  | DescribeBudgetsCommandInput
  | DescribeNotificationsForBudgetCommandInput
  | DescribeSubscribersForNotificationCommandInput
  | ExecuteBudgetActionCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBudgetActionCommandInput
  | UpdateBudgetCommandInput
  | UpdateNotificationCommandInput
  | UpdateSubscriberCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateBudgetActionCommandOutput
  | CreateBudgetCommandOutput
  | CreateNotificationCommandOutput
  | CreateSubscriberCommandOutput
  | DeleteBudgetActionCommandOutput
  | DeleteBudgetCommandOutput
  | DeleteNotificationCommandOutput
  | DeleteSubscriberCommandOutput
  | DescribeBudgetActionCommandOutput
  | DescribeBudgetActionHistoriesCommandOutput
  | DescribeBudgetActionsForAccountCommandOutput
  | DescribeBudgetActionsForBudgetCommandOutput
  | DescribeBudgetCommandOutput
  | DescribeBudgetNotificationsForAccountCommandOutput
  | DescribeBudgetPerformanceHistoryCommandOutput
  | DescribeBudgetsCommandOutput
  | DescribeNotificationsForBudgetCommandOutput
  | DescribeSubscribersForNotificationCommandOutput
  | ExecuteBudgetActionCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBudgetActionCommandOutput
  | UpdateBudgetCommandOutput
  | UpdateNotificationCommandOutput
  | UpdateSubscriberCommandOutput;

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
export type BudgetsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BudgetsClient class constructor that set the region, credentials and other options.
 */
export interface BudgetsClientConfig extends BudgetsClientConfigType {}

/**
 * @public
 */
export type BudgetsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BudgetsClient class. This is resolved and normalized from the {@link BudgetsClientConfig | constructor configuration interface}.
 */
export interface BudgetsClientResolvedConfig extends BudgetsClientResolvedConfigType {}

/**
 * <p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p>
 *          <p>Budgets provide you with a way to see the following information:</p>
 *          <ul>
 *             <li>
 *                <p>How close your plan is to your budgeted amount or to the free tier limits</p>
 *             </li>
 *             <li>
 *                <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p>
 *             </li>
 *             <li>
 *                <p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p>
 *             </li>
 *             <li>
 *                <p>How much of your budget has been used</p>
 *             </li>
 *          </ul>
 *          <p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Cost budgets</b> - Plan how much you want to spend on a service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Usage budgets</b> - Plan how much you want to use one or more services.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p>
 *             </li>
 *          </ul>
 *          <p>Service Endpoint</p>
 *          <p>The Amazon Web Services Budgets API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>https://budgets.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>
 * @public
 */
export class BudgetsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BudgetsClientResolvedConfig
> {
  /**
   * The resolved configuration of BudgetsClient class. This is resolved and normalized from the {@link BudgetsClientConfig | constructor configuration interface}.
   */
  readonly config: BudgetsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BudgetsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultBudgetsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BudgetsClientResolvedConfig) =>
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
