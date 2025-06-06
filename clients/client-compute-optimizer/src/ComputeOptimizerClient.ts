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
  defaultComputeOptimizerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  DeleteRecommendationPreferencesCommandInput,
  DeleteRecommendationPreferencesCommandOutput,
} from "./commands/DeleteRecommendationPreferencesCommand";
import {
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput,
} from "./commands/DescribeRecommendationExportJobsCommand";
import {
  ExportAutoScalingGroupRecommendationsCommandInput,
  ExportAutoScalingGroupRecommendationsCommandOutput,
} from "./commands/ExportAutoScalingGroupRecommendationsCommand";
import {
  ExportEBSVolumeRecommendationsCommandInput,
  ExportEBSVolumeRecommendationsCommandOutput,
} from "./commands/ExportEBSVolumeRecommendationsCommand";
import {
  ExportEC2InstanceRecommendationsCommandInput,
  ExportEC2InstanceRecommendationsCommandOutput,
} from "./commands/ExportEC2InstanceRecommendationsCommand";
import {
  ExportECSServiceRecommendationsCommandInput,
  ExportECSServiceRecommendationsCommandOutput,
} from "./commands/ExportECSServiceRecommendationsCommand";
import {
  ExportIdleRecommendationsCommandInput,
  ExportIdleRecommendationsCommandOutput,
} from "./commands/ExportIdleRecommendationsCommand";
import {
  ExportLambdaFunctionRecommendationsCommandInput,
  ExportLambdaFunctionRecommendationsCommandOutput,
} from "./commands/ExportLambdaFunctionRecommendationsCommand";
import {
  ExportLicenseRecommendationsCommandInput,
  ExportLicenseRecommendationsCommandOutput,
} from "./commands/ExportLicenseRecommendationsCommand";
import {
  ExportRDSDatabaseRecommendationsCommandInput,
  ExportRDSDatabaseRecommendationsCommandOutput,
} from "./commands/ExportRDSDatabaseRecommendationsCommand";
import {
  GetAutoScalingGroupRecommendationsCommandInput,
  GetAutoScalingGroupRecommendationsCommandOutput,
} from "./commands/GetAutoScalingGroupRecommendationsCommand";
import {
  GetEBSVolumeRecommendationsCommandInput,
  GetEBSVolumeRecommendationsCommandOutput,
} from "./commands/GetEBSVolumeRecommendationsCommand";
import {
  GetEC2InstanceRecommendationsCommandInput,
  GetEC2InstanceRecommendationsCommandOutput,
} from "./commands/GetEC2InstanceRecommendationsCommand";
import {
  GetEC2RecommendationProjectedMetricsCommandInput,
  GetEC2RecommendationProjectedMetricsCommandOutput,
} from "./commands/GetEC2RecommendationProjectedMetricsCommand";
import {
  GetECSServiceRecommendationProjectedMetricsCommandInput,
  GetECSServiceRecommendationProjectedMetricsCommandOutput,
} from "./commands/GetECSServiceRecommendationProjectedMetricsCommand";
import {
  GetECSServiceRecommendationsCommandInput,
  GetECSServiceRecommendationsCommandOutput,
} from "./commands/GetECSServiceRecommendationsCommand";
import {
  GetEffectiveRecommendationPreferencesCommandInput,
  GetEffectiveRecommendationPreferencesCommandOutput,
} from "./commands/GetEffectiveRecommendationPreferencesCommand";
import {
  GetEnrollmentStatusCommandInput,
  GetEnrollmentStatusCommandOutput,
} from "./commands/GetEnrollmentStatusCommand";
import {
  GetEnrollmentStatusesForOrganizationCommandInput,
  GetEnrollmentStatusesForOrganizationCommandOutput,
} from "./commands/GetEnrollmentStatusesForOrganizationCommand";
import {
  GetIdleRecommendationsCommandInput,
  GetIdleRecommendationsCommandOutput,
} from "./commands/GetIdleRecommendationsCommand";
import {
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput,
} from "./commands/GetLambdaFunctionRecommendationsCommand";
import {
  GetLicenseRecommendationsCommandInput,
  GetLicenseRecommendationsCommandOutput,
} from "./commands/GetLicenseRecommendationsCommand";
import {
  GetRDSDatabaseRecommendationProjectedMetricsCommandInput,
  GetRDSDatabaseRecommendationProjectedMetricsCommandOutput,
} from "./commands/GetRDSDatabaseRecommendationProjectedMetricsCommand";
import {
  GetRDSDatabaseRecommendationsCommandInput,
  GetRDSDatabaseRecommendationsCommandOutput,
} from "./commands/GetRDSDatabaseRecommendationsCommand";
import {
  GetRecommendationPreferencesCommandInput,
  GetRecommendationPreferencesCommandOutput,
} from "./commands/GetRecommendationPreferencesCommand";
import {
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
} from "./commands/GetRecommendationSummariesCommand";
import {
  PutRecommendationPreferencesCommandInput,
  PutRecommendationPreferencesCommandOutput,
} from "./commands/PutRecommendationPreferencesCommand";
import {
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
} from "./commands/UpdateEnrollmentStatusCommand";
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
  | DeleteRecommendationPreferencesCommandInput
  | DescribeRecommendationExportJobsCommandInput
  | ExportAutoScalingGroupRecommendationsCommandInput
  | ExportEBSVolumeRecommendationsCommandInput
  | ExportEC2InstanceRecommendationsCommandInput
  | ExportECSServiceRecommendationsCommandInput
  | ExportIdleRecommendationsCommandInput
  | ExportLambdaFunctionRecommendationsCommandInput
  | ExportLicenseRecommendationsCommandInput
  | ExportRDSDatabaseRecommendationsCommandInput
  | GetAutoScalingGroupRecommendationsCommandInput
  | GetEBSVolumeRecommendationsCommandInput
  | GetEC2InstanceRecommendationsCommandInput
  | GetEC2RecommendationProjectedMetricsCommandInput
  | GetECSServiceRecommendationProjectedMetricsCommandInput
  | GetECSServiceRecommendationsCommandInput
  | GetEffectiveRecommendationPreferencesCommandInput
  | GetEnrollmentStatusCommandInput
  | GetEnrollmentStatusesForOrganizationCommandInput
  | GetIdleRecommendationsCommandInput
  | GetLambdaFunctionRecommendationsCommandInput
  | GetLicenseRecommendationsCommandInput
  | GetRDSDatabaseRecommendationProjectedMetricsCommandInput
  | GetRDSDatabaseRecommendationsCommandInput
  | GetRecommendationPreferencesCommandInput
  | GetRecommendationSummariesCommandInput
  | PutRecommendationPreferencesCommandInput
  | UpdateEnrollmentStatusCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | DeleteRecommendationPreferencesCommandOutput
  | DescribeRecommendationExportJobsCommandOutput
  | ExportAutoScalingGroupRecommendationsCommandOutput
  | ExportEBSVolumeRecommendationsCommandOutput
  | ExportEC2InstanceRecommendationsCommandOutput
  | ExportECSServiceRecommendationsCommandOutput
  | ExportIdleRecommendationsCommandOutput
  | ExportLambdaFunctionRecommendationsCommandOutput
  | ExportLicenseRecommendationsCommandOutput
  | ExportRDSDatabaseRecommendationsCommandOutput
  | GetAutoScalingGroupRecommendationsCommandOutput
  | GetEBSVolumeRecommendationsCommandOutput
  | GetEC2InstanceRecommendationsCommandOutput
  | GetEC2RecommendationProjectedMetricsCommandOutput
  | GetECSServiceRecommendationProjectedMetricsCommandOutput
  | GetECSServiceRecommendationsCommandOutput
  | GetEffectiveRecommendationPreferencesCommandOutput
  | GetEnrollmentStatusCommandOutput
  | GetEnrollmentStatusesForOrganizationCommandOutput
  | GetIdleRecommendationsCommandOutput
  | GetLambdaFunctionRecommendationsCommandOutput
  | GetLicenseRecommendationsCommandOutput
  | GetRDSDatabaseRecommendationProjectedMetricsCommandOutput
  | GetRDSDatabaseRecommendationsCommandOutput
  | GetRecommendationPreferencesCommandOutput
  | GetRecommendationSummariesCommandOutput
  | PutRecommendationPreferencesCommandOutput
  | UpdateEnrollmentStatusCommandOutput;

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
export type ComputeOptimizerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ComputeOptimizerClient class constructor that set the region, credentials and other options.
 */
export interface ComputeOptimizerClientConfig extends ComputeOptimizerClientConfigType {}

/**
 * @public
 */
export type ComputeOptimizerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ComputeOptimizerClient class. This is resolved and normalized from the {@link ComputeOptimizerClientConfig | constructor configuration interface}.
 */
export interface ComputeOptimizerClientResolvedConfig extends ComputeOptimizerClientResolvedConfigType {}

/**
 * <p>Compute Optimizer is a service that analyzes the configuration and utilization
 *             metrics of your Amazon Web Services compute resources, such as Amazon EC2
 *             instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate.
 *             It reports whether your resources are optimal, and generates
 *             optimization recommendations to reduce the cost and improve the performance of your
 *             workloads. Compute Optimizer also provides recent utilization metric data, in addition
 *             to projected utilization metric data for the recommendations, which you can use to
 *             evaluate which recommendation provides the best price-performance trade-off. The
 *             analysis of your usage patterns can help you decide when to move or resize your running
 *             resources, and still meet your performance and capacity requirements. For more
 *             information about Compute Optimizer, including the required permissions to use the
 *             service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.</p>
 * @public
 */
export class ComputeOptimizerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ComputeOptimizerClientResolvedConfig
> {
  /**
   * The resolved configuration of ComputeOptimizerClient class. This is resolved and normalized from the {@link ComputeOptimizerClientConfig | constructor configuration interface}.
   */
  readonly config: ComputeOptimizerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ComputeOptimizerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultComputeOptimizerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ComputeOptimizerClientResolvedConfig) =>
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
