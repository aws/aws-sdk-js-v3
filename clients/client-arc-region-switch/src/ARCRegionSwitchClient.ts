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
  defaultARCRegionSwitchHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  ApprovePlanExecutionStepCommandInput,
  ApprovePlanExecutionStepCommandOutput,
} from "./commands/ApprovePlanExecutionStepCommand";
import {
  CancelPlanExecutionCommandInput,
  CancelPlanExecutionCommandOutput,
} from "./commands/CancelPlanExecutionCommand";
import { CreatePlanCommandInput, CreatePlanCommandOutput } from "./commands/CreatePlanCommand";
import { DeletePlanCommandInput, DeletePlanCommandOutput } from "./commands/DeletePlanCommand";
import { GetPlanCommandInput, GetPlanCommandOutput } from "./commands/GetPlanCommand";
import {
  GetPlanEvaluationStatusCommandInput,
  GetPlanEvaluationStatusCommandOutput,
} from "./commands/GetPlanEvaluationStatusCommand";
import { GetPlanExecutionCommandInput, GetPlanExecutionCommandOutput } from "./commands/GetPlanExecutionCommand";
import { GetPlanInRegionCommandInput, GetPlanInRegionCommandOutput } from "./commands/GetPlanInRegionCommand";
import {
  ListPlanExecutionEventsCommandInput,
  ListPlanExecutionEventsCommandOutput,
} from "./commands/ListPlanExecutionEventsCommand";
import { ListPlanExecutionsCommandInput, ListPlanExecutionsCommandOutput } from "./commands/ListPlanExecutionsCommand";
import { ListPlansCommandInput, ListPlansCommandOutput } from "./commands/ListPlansCommand";
import { ListPlansInRegionCommandInput, ListPlansInRegionCommandOutput } from "./commands/ListPlansInRegionCommand";
import {
  ListRoute53HealthChecksCommandInput,
  ListRoute53HealthChecksCommandOutput,
} from "./commands/ListRoute53HealthChecksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartPlanExecutionCommandInput, StartPlanExecutionCommandOutput } from "./commands/StartPlanExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdatePlanCommandInput, UpdatePlanCommandOutput } from "./commands/UpdatePlanCommand";
import {
  UpdatePlanExecutionCommandInput,
  UpdatePlanExecutionCommandOutput,
} from "./commands/UpdatePlanExecutionCommand";
import {
  UpdatePlanExecutionStepCommandInput,
  UpdatePlanExecutionStepCommandOutput,
} from "./commands/UpdatePlanExecutionStepCommand";
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
  | ApprovePlanExecutionStepCommandInput
  | CancelPlanExecutionCommandInput
  | CreatePlanCommandInput
  | DeletePlanCommandInput
  | GetPlanCommandInput
  | GetPlanEvaluationStatusCommandInput
  | GetPlanExecutionCommandInput
  | GetPlanInRegionCommandInput
  | ListPlanExecutionEventsCommandInput
  | ListPlanExecutionsCommandInput
  | ListPlansCommandInput
  | ListPlansInRegionCommandInput
  | ListRoute53HealthChecksCommandInput
  | ListTagsForResourceCommandInput
  | StartPlanExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdatePlanCommandInput
  | UpdatePlanExecutionCommandInput
  | UpdatePlanExecutionStepCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ApprovePlanExecutionStepCommandOutput
  | CancelPlanExecutionCommandOutput
  | CreatePlanCommandOutput
  | DeletePlanCommandOutput
  | GetPlanCommandOutput
  | GetPlanEvaluationStatusCommandOutput
  | GetPlanExecutionCommandOutput
  | GetPlanInRegionCommandOutput
  | ListPlanExecutionEventsCommandOutput
  | ListPlanExecutionsCommandOutput
  | ListPlansCommandOutput
  | ListPlansInRegionCommandOutput
  | ListRoute53HealthChecksCommandOutput
  | ListTagsForResourceCommandOutput
  | StartPlanExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdatePlanCommandOutput
  | UpdatePlanExecutionCommandOutput
  | UpdatePlanExecutionStepCommandOutput;

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
export type ARCRegionSwitchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ARCRegionSwitchClient class constructor that set the region, credentials and other options.
 */
export interface ARCRegionSwitchClientConfig extends ARCRegionSwitchClientConfigType {}

/**
 * @public
 */
export type ARCRegionSwitchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ARCRegionSwitchClient class. This is resolved and normalized from the {@link ARCRegionSwitchClientConfig | constructor configuration interface}.
 */
export interface ARCRegionSwitchClientResolvedConfig extends ARCRegionSwitchClientResolvedConfigType {}

/**
 * <p>Amazon Application Recovery Controller (ARC) Region switch helps you to quickly and reliably shift traffic away from an impaired Amazon Web Services Region to a healthy Region. With Region switch, you can create plans that define the steps to shift traffic for your application from one Amazon Web Services Region to another. You can test your plans in practice mode before using them in a real recovery scenario.</p> <p>Region switch provides a structured approach to multi-Region failover, helping you to meet your recovery time objectives (RTOs) and maintain business continuity during regional disruptions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/region-switch.html">Region switch in ARC</a> in the <i>Amazon Application Recovery Controller User Guide</i>.</p>
 * @public
 */
export class ARCRegionSwitchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ARCRegionSwitchClientResolvedConfig
> {
  /**
   * The resolved configuration of ARCRegionSwitchClient class. This is resolved and normalized from the {@link ARCRegionSwitchClientConfig | constructor configuration interface}.
   */
  readonly config: ARCRegionSwitchClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ARCRegionSwitchClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultARCRegionSwitchHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ARCRegionSwitchClientResolvedConfig) =>
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
