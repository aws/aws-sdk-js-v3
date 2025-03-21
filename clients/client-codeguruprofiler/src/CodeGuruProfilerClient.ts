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
  defaultCodeGuruProfilerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AddNotificationChannelsCommandInput,
  AddNotificationChannelsCommandOutput,
} from "./commands/AddNotificationChannelsCommand";
import {
  BatchGetFrameMetricDataCommandInput,
  BatchGetFrameMetricDataCommandOutput,
} from "./commands/BatchGetFrameMetricDataCommand";
import { ConfigureAgentCommandInput, ConfigureAgentCommandOutput } from "./commands/ConfigureAgentCommand";
import {
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput,
} from "./commands/CreateProfilingGroupCommand";
import {
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput,
} from "./commands/DeleteProfilingGroupCommand";
import {
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput,
} from "./commands/DescribeProfilingGroupCommand";
import {
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
} from "./commands/GetFindingsReportAccountSummaryCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "./commands/GetNotificationConfigurationCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "./commands/GetRecommendationsCommand";
import {
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
} from "./commands/ListFindingsReportsCommand";
import { ListProfileTimesCommandInput, ListProfileTimesCommandOutput } from "./commands/ListProfileTimesCommand";
import {
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
} from "./commands/ListProfilingGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PostAgentProfileCommandInput, PostAgentProfileCommandOutput } from "./commands/PostAgentProfileCommand";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "./commands/PutPermissionCommand";
import {
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "./commands/RemoveNotificationChannelCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "./commands/SubmitFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput,
} from "./commands/UpdateProfilingGroupCommand";
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
  | AddNotificationChannelsCommandInput
  | BatchGetFrameMetricDataCommandInput
  | ConfigureAgentCommandInput
  | CreateProfilingGroupCommandInput
  | DeleteProfilingGroupCommandInput
  | DescribeProfilingGroupCommandInput
  | GetFindingsReportAccountSummaryCommandInput
  | GetNotificationConfigurationCommandInput
  | GetPolicyCommandInput
  | GetProfileCommandInput
  | GetRecommendationsCommandInput
  | ListFindingsReportsCommandInput
  | ListProfileTimesCommandInput
  | ListProfilingGroupsCommandInput
  | ListTagsForResourceCommandInput
  | PostAgentProfileCommandInput
  | PutPermissionCommandInput
  | RemoveNotificationChannelCommandInput
  | RemovePermissionCommandInput
  | SubmitFeedbackCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateProfilingGroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddNotificationChannelsCommandOutput
  | BatchGetFrameMetricDataCommandOutput
  | ConfigureAgentCommandOutput
  | CreateProfilingGroupCommandOutput
  | DeleteProfilingGroupCommandOutput
  | DescribeProfilingGroupCommandOutput
  | GetFindingsReportAccountSummaryCommandOutput
  | GetNotificationConfigurationCommandOutput
  | GetPolicyCommandOutput
  | GetProfileCommandOutput
  | GetRecommendationsCommandOutput
  | ListFindingsReportsCommandOutput
  | ListProfileTimesCommandOutput
  | ListProfilingGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | PostAgentProfileCommandOutput
  | PutPermissionCommandOutput
  | RemoveNotificationChannelCommandOutput
  | RemovePermissionCommandOutput
  | SubmitFeedbackCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateProfilingGroupCommandOutput;

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
export type CodeGuruProfilerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CodeGuruProfilerClient class constructor that set the region, credentials and other options.
 */
export interface CodeGuruProfilerClientConfig extends CodeGuruProfilerClientConfigType {}

/**
 * @public
 */
export type CodeGuruProfilerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CodeGuruProfilerClient class. This is resolved and normalized from the {@link CodeGuruProfilerClientConfig | constructor configuration interface}.
 */
export interface CodeGuruProfilerClientResolvedConfig extends CodeGuruProfilerClientResolvedConfigType {}

/**
 * <p>
 *           This section provides documentation for the Amazon CodeGuru Profiler API operations.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides
 *          recommendations that can help you fine-tune your application performance. Using machine learning
 *          algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can
 *          improve efficiency and remove CPU bottlenecks.
 *       </p>
 *          <p>
 *          Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is
 *          running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization.
 *       </p>
 *          <note>
 *             <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM)
 *             languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications
 *             written in Java, it can also generate visualizations and a subset of recommendations for
 *             applications written in other JVM languages and Python.</p>
 *          </note>
 *          <p>
 *          For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in
 *          the <i>Amazon CodeGuru Profiler User Guide</i>.
 *       </p>
 * @public
 */
export class CodeGuruProfilerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeGuruProfilerClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeGuruProfilerClient class. This is resolved and normalized from the {@link CodeGuruProfilerClientConfig | constructor configuration interface}.
   */
  readonly config: CodeGuruProfilerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CodeGuruProfilerClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCodeGuruProfilerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CodeGuruProfilerClientResolvedConfig) =>
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
