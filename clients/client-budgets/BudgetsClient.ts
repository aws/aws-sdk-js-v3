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
import { UpdateBudgetActionCommandInput, UpdateBudgetActionCommandOutput } from "./commands/UpdateBudgetActionCommand";
import { UpdateBudgetCommandInput, UpdateBudgetCommandOutput } from "./commands/UpdateBudgetCommand";
import { UpdateNotificationCommandInput, UpdateNotificationCommandOutput } from "./commands/UpdateNotificationCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "./commands/UpdateSubscriberCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
  | DescribeBudgetPerformanceHistoryCommandInput
  | DescribeBudgetsCommandInput
  | DescribeNotificationsForBudgetCommandInput
  | DescribeSubscribersForNotificationCommandInput
  | ExecuteBudgetActionCommandInput
  | UpdateBudgetActionCommandInput
  | UpdateBudgetCommandInput
  | UpdateNotificationCommandInput
  | UpdateSubscriberCommandInput;

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
  | DescribeBudgetPerformanceHistoryCommandOutput
  | DescribeBudgetsCommandOutput
  | DescribeNotificationsForBudgetCommandOutput
  | DescribeSubscribersForNotificationCommandOutput
  | ExecuteBudgetActionCommandOutput
  | UpdateBudgetActionCommandOutput
  | UpdateBudgetCommandOutput
  | UpdateNotificationCommandOutput
  | UpdateSubscriberCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type BudgetsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of BudgetsClient class constructor that set the region, credentials and other options.
 */
export interface BudgetsClientConfig extends BudgetsClientConfigType {}

type BudgetsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of BudgetsClient class. This is resolved and normalized from the {@link BudgetsClientConfig | constructor configuration interface}.
 */
export interface BudgetsClientResolvedConfig extends BudgetsClientResolvedConfigType {}

/**
 * <p>The AWS Budgets API enables you to use AWS Budgets to plan your service usage, service costs, and instance reservations. The API reference provides descriptions, syntax, and usage examples for each of the actions and data types for AWS Budgets. </p>
 * 		       <p>Budgets provide you with a way to see the following information:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>How close your plan is to your budgeted amount or to the free tier limits</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your current estimated charges from AWS, and how much your predicted usage will accrue in charges by the end of the month</p>
 * 			         </li>
 *             <li>
 * 				           <p>How much of your budget has been used</p>
 * 			         </li>
 *          </ul>
 * 		       <p>AWS updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <b>Cost budgets</b> - Plan how much you want to spend on a service.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Usage budgets</b> - Plan how much you want to use one or more services.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>Service Endpoint</p>
 * 		       <p>The AWS Budgets API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>https://budgets.amazonaws.com</p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about costs that are associated with the AWS Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>
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

  constructor(configuration: BudgetsClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
