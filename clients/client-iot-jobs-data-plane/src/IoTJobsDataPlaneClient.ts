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
  defaultIoTJobsDataPlaneHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
} from "./commands/DescribeJobExecutionCommand";
import {
  GetPendingJobExecutionsCommandInput,
  GetPendingJobExecutionsCommandOutput,
} from "./commands/GetPendingJobExecutionsCommand";
import {
  StartNextPendingJobExecutionCommandInput,
  StartNextPendingJobExecutionCommandOutput,
} from "./commands/StartNextPendingJobExecutionCommand";
import { UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput } from "./commands/UpdateJobExecutionCommand";
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
  | DescribeJobExecutionCommandInput
  | GetPendingJobExecutionsCommandInput
  | StartNextPendingJobExecutionCommandInput
  | UpdateJobExecutionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | DescribeJobExecutionCommandOutput
  | GetPendingJobExecutionsCommandOutput
  | StartNextPendingJobExecutionCommandOutput
  | UpdateJobExecutionCommandOutput;

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
export type IoTJobsDataPlaneClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  RetryInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of IoTJobsDataPlaneClient class constructor that set the region, credentials and other options.
 */
export interface IoTJobsDataPlaneClientConfig extends IoTJobsDataPlaneClientConfigType {}

/**
 * @public
 */
export type IoTJobsDataPlaneClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of IoTJobsDataPlaneClient class. This is resolved and normalized from the {@link IoTJobsDataPlaneClientConfig | constructor configuration interface}.
 */
export interface IoTJobsDataPlaneClientResolvedConfig extends IoTJobsDataPlaneClientResolvedConfigType {}

/**
 * <p>AWS IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to
 *          and executed on one or more devices connected to AWS IoT. For example, you can define a job that instructs a
 *          set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform
 *          remote troubleshooting operations.</p>
 *          <p> To create a job, you make a job document which is a description of the remote operations to be
 *          performed, and you specify a list of targets that should perform the operations. The targets can be individual
 *          things, thing groups or both.</p>
 *          <p> AWS IoT Jobs sends a message to inform the targets that a job is available. The target starts the
 *          execution of the job by downloading the job document, performing the operations it specifies, and reporting its
 *          progress to AWS IoT. The Jobs service provides commands to track the progress of a job on a specific target and
 *          for all the targets of the job</p>
 * @public
 */
export class IoTJobsDataPlaneClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTJobsDataPlaneClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTJobsDataPlaneClient class. This is resolved and normalized from the {@link IoTJobsDataPlaneClientConfig | constructor configuration interface}.
   */
  readonly config: IoTJobsDataPlaneClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<IoTJobsDataPlaneClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveUserAgentConfig(_config_4);
    const _config_6 = resolveRetryConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
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
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultIoTJobsDataPlaneHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: IoTJobsDataPlaneClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
