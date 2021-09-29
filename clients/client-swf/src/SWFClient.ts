import {
  CountClosedWorkflowExecutionsCommandInput,
  CountClosedWorkflowExecutionsCommandOutput,
} from "./commands/CountClosedWorkflowExecutionsCommand";
import {
  CountOpenWorkflowExecutionsCommandInput,
  CountOpenWorkflowExecutionsCommandOutput,
} from "./commands/CountOpenWorkflowExecutionsCommand";
import {
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput,
} from "./commands/CountPendingActivityTasksCommand";
import {
  CountPendingDecisionTasksCommandInput,
  CountPendingDecisionTasksCommandOutput,
} from "./commands/CountPendingDecisionTasksCommand";
import {
  DeprecateActivityTypeCommandInput,
  DeprecateActivityTypeCommandOutput,
} from "./commands/DeprecateActivityTypeCommand";
import { DeprecateDomainCommandInput, DeprecateDomainCommandOutput } from "./commands/DeprecateDomainCommand";
import {
  DeprecateWorkflowTypeCommandInput,
  DeprecateWorkflowTypeCommandOutput,
} from "./commands/DeprecateWorkflowTypeCommand";
import {
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput,
} from "./commands/DescribeActivityTypeCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import {
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput,
} from "./commands/DescribeWorkflowExecutionCommand";
import {
  DescribeWorkflowTypeCommandInput,
  DescribeWorkflowTypeCommandOutput,
} from "./commands/DescribeWorkflowTypeCommand";
import {
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput,
} from "./commands/GetWorkflowExecutionHistoryCommand";
import { ListActivityTypesCommandInput, ListActivityTypesCommandOutput } from "./commands/ListActivityTypesCommand";
import {
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "./commands/ListClosedWorkflowExecutionsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "./commands/ListOpenWorkflowExecutionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput } from "./commands/ListWorkflowTypesCommand";
import {
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
} from "./commands/PollForActivityTaskCommand";
import {
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "./commands/PollForDecisionTaskCommand";
import {
  RecordActivityTaskHeartbeatCommandInput,
  RecordActivityTaskHeartbeatCommandOutput,
} from "./commands/RecordActivityTaskHeartbeatCommand";
import {
  RegisterActivityTypeCommandInput,
  RegisterActivityTypeCommandOutput,
} from "./commands/RegisterActivityTypeCommand";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "./commands/RegisterDomainCommand";
import {
  RegisterWorkflowTypeCommandInput,
  RegisterWorkflowTypeCommandOutput,
} from "./commands/RegisterWorkflowTypeCommand";
import {
  RequestCancelWorkflowExecutionCommandInput,
  RequestCancelWorkflowExecutionCommandOutput,
} from "./commands/RequestCancelWorkflowExecutionCommand";
import {
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput,
} from "./commands/RespondActivityTaskCanceledCommand";
import {
  RespondActivityTaskCompletedCommandInput,
  RespondActivityTaskCompletedCommandOutput,
} from "./commands/RespondActivityTaskCompletedCommand";
import {
  RespondActivityTaskFailedCommandInput,
  RespondActivityTaskFailedCommandOutput,
} from "./commands/RespondActivityTaskFailedCommand";
import {
  RespondDecisionTaskCompletedCommandInput,
  RespondDecisionTaskCompletedCommandOutput,
} from "./commands/RespondDecisionTaskCompletedCommand";
import {
  SignalWorkflowExecutionCommandInput,
  SignalWorkflowExecutionCommandOutput,
} from "./commands/SignalWorkflowExecutionCommand";
import {
  StartWorkflowExecutionCommandInput,
  StartWorkflowExecutionCommandOutput,
} from "./commands/StartWorkflowExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateWorkflowExecutionCommandInput,
  TerminateWorkflowExecutionCommandOutput,
} from "./commands/TerminateWorkflowExecutionCommand";
import {
  UndeprecateActivityTypeCommandInput,
  UndeprecateActivityTypeCommandOutput,
} from "./commands/UndeprecateActivityTypeCommand";
import { UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput } from "./commands/UndeprecateDomainCommand";
import {
  UndeprecateWorkflowTypeCommandInput,
  UndeprecateWorkflowTypeCommandOutput,
} from "./commands/UndeprecateWorkflowTypeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
  | CountClosedWorkflowExecutionsCommandInput
  | CountOpenWorkflowExecutionsCommandInput
  | CountPendingActivityTasksCommandInput
  | CountPendingDecisionTasksCommandInput
  | DeprecateActivityTypeCommandInput
  | DeprecateDomainCommandInput
  | DeprecateWorkflowTypeCommandInput
  | DescribeActivityTypeCommandInput
  | DescribeDomainCommandInput
  | DescribeWorkflowExecutionCommandInput
  | DescribeWorkflowTypeCommandInput
  | GetWorkflowExecutionHistoryCommandInput
  | ListActivityTypesCommandInput
  | ListClosedWorkflowExecutionsCommandInput
  | ListDomainsCommandInput
  | ListOpenWorkflowExecutionsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkflowTypesCommandInput
  | PollForActivityTaskCommandInput
  | PollForDecisionTaskCommandInput
  | RecordActivityTaskHeartbeatCommandInput
  | RegisterActivityTypeCommandInput
  | RegisterDomainCommandInput
  | RegisterWorkflowTypeCommandInput
  | RequestCancelWorkflowExecutionCommandInput
  | RespondActivityTaskCanceledCommandInput
  | RespondActivityTaskCompletedCommandInput
  | RespondActivityTaskFailedCommandInput
  | RespondDecisionTaskCompletedCommandInput
  | SignalWorkflowExecutionCommandInput
  | StartWorkflowExecutionCommandInput
  | TagResourceCommandInput
  | TerminateWorkflowExecutionCommandInput
  | UndeprecateActivityTypeCommandInput
  | UndeprecateDomainCommandInput
  | UndeprecateWorkflowTypeCommandInput
  | UntagResourceCommandInput;

export type ServiceOutputTypes =
  | CountClosedWorkflowExecutionsCommandOutput
  | CountOpenWorkflowExecutionsCommandOutput
  | CountPendingActivityTasksCommandOutput
  | CountPendingDecisionTasksCommandOutput
  | DeprecateActivityTypeCommandOutput
  | DeprecateDomainCommandOutput
  | DeprecateWorkflowTypeCommandOutput
  | DescribeActivityTypeCommandOutput
  | DescribeDomainCommandOutput
  | DescribeWorkflowExecutionCommandOutput
  | DescribeWorkflowTypeCommandOutput
  | GetWorkflowExecutionHistoryCommandOutput
  | ListActivityTypesCommandOutput
  | ListClosedWorkflowExecutionsCommandOutput
  | ListDomainsCommandOutput
  | ListOpenWorkflowExecutionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkflowTypesCommandOutput
  | PollForActivityTaskCommandOutput
  | PollForDecisionTaskCommandOutput
  | RecordActivityTaskHeartbeatCommandOutput
  | RegisterActivityTypeCommandOutput
  | RegisterDomainCommandOutput
  | RegisterWorkflowTypeCommandOutput
  | RequestCancelWorkflowExecutionCommandOutput
  | RespondActivityTaskCanceledCommandOutput
  | RespondActivityTaskCompletedCommandOutput
  | RespondActivityTaskFailedCommandOutput
  | RespondDecisionTaskCompletedCommandOutput
  | SignalWorkflowExecutionCommandOutput
  | StartWorkflowExecutionCommandOutput
  | TagResourceCommandOutput
  | TerminateWorkflowExecutionCommandOutput
  | UndeprecateActivityTypeCommandOutput
  | UndeprecateDomainCommandOutput
  | UndeprecateWorkflowTypeCommandOutput
  | UntagResourceCommandOutput;

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
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

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

type SWFClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of SWFClient class constructor that set the region, credentials and other options.
 */
export interface SWFClientConfig extends SWFClientConfigType {}

type SWFClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of SWFClient class. This is resolved and normalized from the {@link SWFClientConfig | constructor configuration interface}.
 */
export interface SWFClientResolvedConfig extends SWFClientResolvedConfigType {}

/**
 * <fullname>Amazon Simple Workflow Service</fullname>
 *
 *          <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
 *       coordinate work across distributed components. In Amazon SWF, a <i>task</i>
 *       represents a logical unit of work that is performed by a component of your workflow.
 *       Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
 *       concurrency in accordance with the logical flow of the application.</p>
 *
 *          <p>Amazon SWF gives you full control over implementing tasks and coordinating them without
 *       worrying about underlying complexities such as tracking their progress and maintaining their
 *       state.</p>
 *
 *          <p>This documentation serves as reference only. For a broader overview of the Amazon SWF
 *       programming model, see the <i>
 *                <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
 *             </i>.</p>
 */
export class SWFClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SWFClientResolvedConfig
> {
  /**
   * The resolved configuration of SWFClient class. This is resolved and normalized from the {@link SWFClientConfig | constructor configuration interface}.
   */
  readonly config: SWFClientResolvedConfig;

  constructor(configuration: SWFClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
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
