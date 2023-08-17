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

import { CreateActivityCommandInput, CreateActivityCommandOutput } from "./commands/CreateActivityCommand";
import {
  CreateStateMachineAliasCommandInput,
  CreateStateMachineAliasCommandOutput,
} from "./commands/CreateStateMachineAliasCommand";
import { CreateStateMachineCommandInput, CreateStateMachineCommandOutput } from "./commands/CreateStateMachineCommand";
import { DeleteActivityCommandInput, DeleteActivityCommandOutput } from "./commands/DeleteActivityCommand";
import {
  DeleteStateMachineAliasCommandInput,
  DeleteStateMachineAliasCommandOutput,
} from "./commands/DeleteStateMachineAliasCommand";
import { DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput } from "./commands/DeleteStateMachineCommand";
import {
  DeleteStateMachineVersionCommandInput,
  DeleteStateMachineVersionCommandOutput,
} from "./commands/DeleteStateMachineVersionCommand";
import { DescribeActivityCommandInput, DescribeActivityCommandOutput } from "./commands/DescribeActivityCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "./commands/DescribeExecutionCommand";
import { DescribeMapRunCommandInput, DescribeMapRunCommandOutput } from "./commands/DescribeMapRunCommand";
import {
  DescribeStateMachineAliasCommandInput,
  DescribeStateMachineAliasCommandOutput,
} from "./commands/DescribeStateMachineAliasCommand";
import {
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
} from "./commands/DescribeStateMachineCommand";
import {
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
} from "./commands/DescribeStateMachineForExecutionCommand";
import { GetActivityTaskCommandInput, GetActivityTaskCommandOutput } from "./commands/GetActivityTaskCommand";
import {
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "./commands/GetExecutionHistoryCommand";
import { ListActivitiesCommandInput, ListActivitiesCommandOutput } from "./commands/ListActivitiesCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import { ListMapRunsCommandInput, ListMapRunsCommandOutput } from "./commands/ListMapRunsCommand";
import {
  ListStateMachineAliasesCommandInput,
  ListStateMachineAliasesCommandOutput,
} from "./commands/ListStateMachineAliasesCommand";
import { ListStateMachinesCommandInput, ListStateMachinesCommandOutput } from "./commands/ListStateMachinesCommand";
import {
  ListStateMachineVersionsCommandInput,
  ListStateMachineVersionsCommandOutput,
} from "./commands/ListStateMachineVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PublishStateMachineVersionCommandInput,
  PublishStateMachineVersionCommandOutput,
} from "./commands/PublishStateMachineVersionCommand";
import { SendTaskFailureCommandInput, SendTaskFailureCommandOutput } from "./commands/SendTaskFailureCommand";
import { SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput } from "./commands/SendTaskHeartbeatCommand";
import { SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput } from "./commands/SendTaskSuccessCommand";
import { StartExecutionCommandInput, StartExecutionCommandOutput } from "./commands/StartExecutionCommand";
import { StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput } from "./commands/StartSyncExecutionCommand";
import { StopExecutionCommandInput, StopExecutionCommandOutput } from "./commands/StopExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateMapRunCommandInput, UpdateMapRunCommandOutput } from "./commands/UpdateMapRunCommand";
import {
  UpdateStateMachineAliasCommandInput,
  UpdateStateMachineAliasCommandOutput,
} from "./commands/UpdateStateMachineAliasCommand";
import { UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput } from "./commands/UpdateStateMachineCommand";
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
  | CreateActivityCommandInput
  | CreateStateMachineAliasCommandInput
  | CreateStateMachineCommandInput
  | DeleteActivityCommandInput
  | DeleteStateMachineAliasCommandInput
  | DeleteStateMachineCommandInput
  | DeleteStateMachineVersionCommandInput
  | DescribeActivityCommandInput
  | DescribeExecutionCommandInput
  | DescribeMapRunCommandInput
  | DescribeStateMachineAliasCommandInput
  | DescribeStateMachineCommandInput
  | DescribeStateMachineForExecutionCommandInput
  | GetActivityTaskCommandInput
  | GetExecutionHistoryCommandInput
  | ListActivitiesCommandInput
  | ListExecutionsCommandInput
  | ListMapRunsCommandInput
  | ListStateMachineAliasesCommandInput
  | ListStateMachineVersionsCommandInput
  | ListStateMachinesCommandInput
  | ListTagsForResourceCommandInput
  | PublishStateMachineVersionCommandInput
  | SendTaskFailureCommandInput
  | SendTaskHeartbeatCommandInput
  | SendTaskSuccessCommandInput
  | StartExecutionCommandInput
  | StartSyncExecutionCommandInput
  | StopExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateMapRunCommandInput
  | UpdateStateMachineAliasCommandInput
  | UpdateStateMachineCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateActivityCommandOutput
  | CreateStateMachineAliasCommandOutput
  | CreateStateMachineCommandOutput
  | DeleteActivityCommandOutput
  | DeleteStateMachineAliasCommandOutput
  | DeleteStateMachineCommandOutput
  | DeleteStateMachineVersionCommandOutput
  | DescribeActivityCommandOutput
  | DescribeExecutionCommandOutput
  | DescribeMapRunCommandOutput
  | DescribeStateMachineAliasCommandOutput
  | DescribeStateMachineCommandOutput
  | DescribeStateMachineForExecutionCommandOutput
  | GetActivityTaskCommandOutput
  | GetExecutionHistoryCommandOutput
  | ListActivitiesCommandOutput
  | ListExecutionsCommandOutput
  | ListMapRunsCommandOutput
  | ListStateMachineAliasesCommandOutput
  | ListStateMachineVersionsCommandOutput
  | ListStateMachinesCommandOutput
  | ListTagsForResourceCommandOutput
  | PublishStateMachineVersionCommandOutput
  | SendTaskFailureCommandOutput
  | SendTaskHeartbeatCommandOutput
  | SendTaskSuccessCommandOutput
  | StartExecutionCommandOutput
  | StartSyncExecutionCommandOutput
  | StopExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateMapRunCommandOutput
  | UpdateStateMachineAliasCommandOutput
  | UpdateStateMachineCommandOutput;

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
export type SFNClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SFNClient class constructor that set the region, credentials and other options.
 */
export interface SFNClientConfig extends SFNClientConfigType {}

/**
 * @public
 */
export type SFNClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SFNClient class. This is resolved and normalized from the {@link SFNClientConfig | constructor configuration interface}.
 */
export interface SFNClientResolvedConfig extends SFNClientResolvedConfigType {}

/**
 * @public
 * <fullname>Step Functions</fullname>
 *          <p>Step Functions is a service that lets you coordinate the components of distributed applications
 *       and microservices using visual workflows.</p>
 *          <p>You can use Step Functions to build applications from individual components, each of which performs
 *       a discrete function, or <i>task</i>, allowing you to scale and change
 *       applications quickly. Step Functions provides a console that helps visualize the components of your
 *       application as a series of steps. Step Functions automatically triggers and tracks each step, and
 *       retries steps when there are errors, so your application executes predictably and in the right
 *       order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any
 *       issues.</p>
 *          <p>Step Functions manages operations and underlying infrastructure to ensure your application is
 *       available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has
 *       access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API.
 *       For more information about Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a>
 *             </i>.</p>
 */
export class SFNClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig
> {
  /**
   * The resolved configuration of SFNClient class. This is resolved and normalized from the {@link SFNClientConfig | constructor configuration interface}.
   */
  readonly config: SFNClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SFNClientConfig>) {
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
