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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultSFNHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
import { RedriveExecutionCommandInput, RedriveExecutionCommandOutput } from "./commands/RedriveExecutionCommand";
import { SendTaskFailureCommandInput, SendTaskFailureCommandOutput } from "./commands/SendTaskFailureCommand";
import { SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput } from "./commands/SendTaskHeartbeatCommand";
import { SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput } from "./commands/SendTaskSuccessCommand";
import { StartExecutionCommandInput, StartExecutionCommandOutput } from "./commands/StartExecutionCommand";
import { StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput } from "./commands/StartSyncExecutionCommand";
import { StopExecutionCommandInput, StopExecutionCommandOutput } from "./commands/StopExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestStateCommandInput, TestStateCommandOutput } from "./commands/TestStateCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateMapRunCommandInput, UpdateMapRunCommandOutput } from "./commands/UpdateMapRunCommand";
import {
  UpdateStateMachineAliasCommandInput,
  UpdateStateMachineAliasCommandOutput,
} from "./commands/UpdateStateMachineAliasCommand";
import { UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput } from "./commands/UpdateStateMachineCommand";
import {
  ValidateStateMachineDefinitionCommandInput,
  ValidateStateMachineDefinitionCommandOutput,
} from "./commands/ValidateStateMachineDefinitionCommand";
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
  | RedriveExecutionCommandInput
  | SendTaskFailureCommandInput
  | SendTaskHeartbeatCommandInput
  | SendTaskSuccessCommandInput
  | StartExecutionCommandInput
  | StartSyncExecutionCommandInput
  | StopExecutionCommandInput
  | TagResourceCommandInput
  | TestStateCommandInput
  | UntagResourceCommandInput
  | UpdateMapRunCommandInput
  | UpdateStateMachineAliasCommandInput
  | UpdateStateMachineCommandInput
  | ValidateStateMachineDefinitionCommandInput;

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
  | RedriveExecutionCommandOutput
  | SendTaskFailureCommandOutput
  | SendTaskHeartbeatCommandOutput
  | SendTaskSuccessCommandOutput
  | StartExecutionCommandOutput
  | StartSyncExecutionCommandOutput
  | StopExecutionCommandOutput
  | TagResourceCommandOutput
  | TestStateCommandOutput
  | UntagResourceCommandOutput
  | UpdateMapRunCommandOutput
  | UpdateStateMachineAliasCommandOutput
  | UpdateStateMachineCommandOutput
  | ValidateStateMachineDefinitionCommandOutput;

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
export type SFNClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SFNClient class constructor that set the region, credentials and other options.
 */
export interface SFNClientConfig extends SFNClientConfigType {}

/**
 * @public
 */
export type SFNClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SFNClient class. This is resolved and normalized from the {@link SFNClientConfig | constructor configuration interface}.
 */
export interface SFNClientResolvedConfig extends SFNClientResolvedConfigType {}

/**
 * <fullname>Step Functions</fullname>
 *          <p>With Step Functions, you can create workflows, also called <i>state machines</i>, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines.</p>
 *          <p>Through the Step Functions API, you can create, list, update, and delete state machines, activities, and other data types. You can start, stop, and redrive your state machines. Your activity workers can send task success, heartbeat, and failure responses.</p>
 *          <p>With API calls, you can also manage other aspects of your workflow, such as tags, versions, and aliases.</p>
 *          <p>For more information about developing solutions with Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a>
 *             </i>.</p>
 *          <important>
 *             <p>If you use the Step Functions API actions using Amazon Web Services SDK integrations, make sure the API actions are in camel case and parameter names are in Pascal case. For example, you might use Step Functions API action <code>startSyncExecution</code> and specify its parameter as <code>StateMachineArn</code>.</p>
 *          </important>
 * @public
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
        httpAuthSchemeParametersProvider: defaultSFNHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SFNClientResolvedConfig) =>
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
