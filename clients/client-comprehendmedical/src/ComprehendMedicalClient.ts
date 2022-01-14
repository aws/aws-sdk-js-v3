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
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  DescribeEntitiesDetectionV2JobCommandInput,
  DescribeEntitiesDetectionV2JobCommandOutput,
} from "./commands/DescribeEntitiesDetectionV2JobCommand";
import {
  DescribeICD10CMInferenceJobCommandInput,
  DescribeICD10CMInferenceJobCommandOutput,
} from "./commands/DescribeICD10CMInferenceJobCommand";
import {
  DescribePHIDetectionJobCommandInput,
  DescribePHIDetectionJobCommandOutput,
} from "./commands/DescribePHIDetectionJobCommand";
import {
  DescribeRxNormInferenceJobCommandInput,
  DescribeRxNormInferenceJobCommandOutput,
} from "./commands/DescribeRxNormInferenceJobCommand";
import {
  DescribeSNOMEDCTInferenceJobCommandInput,
  DescribeSNOMEDCTInferenceJobCommandOutput,
} from "./commands/DescribeSNOMEDCTInferenceJobCommand";
import { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "./commands/DetectEntitiesCommand";
import { DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput } from "./commands/DetectEntitiesV2Command";
import { DetectPHICommandInput, DetectPHICommandOutput } from "./commands/DetectPHICommand";
import { InferICD10CMCommandInput, InferICD10CMCommandOutput } from "./commands/InferICD10CMCommand";
import { InferRxNormCommandInput, InferRxNormCommandOutput } from "./commands/InferRxNormCommand";
import { InferSNOMEDCTCommandInput, InferSNOMEDCTCommandOutput } from "./commands/InferSNOMEDCTCommand";
import {
  ListEntitiesDetectionV2JobsCommandInput,
  ListEntitiesDetectionV2JobsCommandOutput,
} from "./commands/ListEntitiesDetectionV2JobsCommand";
import {
  ListICD10CMInferenceJobsCommandInput,
  ListICD10CMInferenceJobsCommandOutput,
} from "./commands/ListICD10CMInferenceJobsCommand";
import {
  ListPHIDetectionJobsCommandInput,
  ListPHIDetectionJobsCommandOutput,
} from "./commands/ListPHIDetectionJobsCommand";
import {
  ListRxNormInferenceJobsCommandInput,
  ListRxNormInferenceJobsCommandOutput,
} from "./commands/ListRxNormInferenceJobsCommand";
import {
  ListSNOMEDCTInferenceJobsCommandInput,
  ListSNOMEDCTInferenceJobsCommandOutput,
} from "./commands/ListSNOMEDCTInferenceJobsCommand";
import {
  StartEntitiesDetectionV2JobCommandInput,
  StartEntitiesDetectionV2JobCommandOutput,
} from "./commands/StartEntitiesDetectionV2JobCommand";
import {
  StartICD10CMInferenceJobCommandInput,
  StartICD10CMInferenceJobCommandOutput,
} from "./commands/StartICD10CMInferenceJobCommand";
import {
  StartPHIDetectionJobCommandInput,
  StartPHIDetectionJobCommandOutput,
} from "./commands/StartPHIDetectionJobCommand";
import {
  StartRxNormInferenceJobCommandInput,
  StartRxNormInferenceJobCommandOutput,
} from "./commands/StartRxNormInferenceJobCommand";
import {
  StartSNOMEDCTInferenceJobCommandInput,
  StartSNOMEDCTInferenceJobCommandOutput,
} from "./commands/StartSNOMEDCTInferenceJobCommand";
import {
  StopEntitiesDetectionV2JobCommandInput,
  StopEntitiesDetectionV2JobCommandOutput,
} from "./commands/StopEntitiesDetectionV2JobCommand";
import {
  StopICD10CMInferenceJobCommandInput,
  StopICD10CMInferenceJobCommandOutput,
} from "./commands/StopICD10CMInferenceJobCommand";
import {
  StopPHIDetectionJobCommandInput,
  StopPHIDetectionJobCommandOutput,
} from "./commands/StopPHIDetectionJobCommand";
import {
  StopRxNormInferenceJobCommandInput,
  StopRxNormInferenceJobCommandOutput,
} from "./commands/StopRxNormInferenceJobCommand";
import {
  StopSNOMEDCTInferenceJobCommandInput,
  StopSNOMEDCTInferenceJobCommandOutput,
} from "./commands/StopSNOMEDCTInferenceJobCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | DescribeEntitiesDetectionV2JobCommandInput
  | DescribeICD10CMInferenceJobCommandInput
  | DescribePHIDetectionJobCommandInput
  | DescribeRxNormInferenceJobCommandInput
  | DescribeSNOMEDCTInferenceJobCommandInput
  | DetectEntitiesCommandInput
  | DetectEntitiesV2CommandInput
  | DetectPHICommandInput
  | InferICD10CMCommandInput
  | InferRxNormCommandInput
  | InferSNOMEDCTCommandInput
  | ListEntitiesDetectionV2JobsCommandInput
  | ListICD10CMInferenceJobsCommandInput
  | ListPHIDetectionJobsCommandInput
  | ListRxNormInferenceJobsCommandInput
  | ListSNOMEDCTInferenceJobsCommandInput
  | StartEntitiesDetectionV2JobCommandInput
  | StartICD10CMInferenceJobCommandInput
  | StartPHIDetectionJobCommandInput
  | StartRxNormInferenceJobCommandInput
  | StartSNOMEDCTInferenceJobCommandInput
  | StopEntitiesDetectionV2JobCommandInput
  | StopICD10CMInferenceJobCommandInput
  | StopPHIDetectionJobCommandInput
  | StopRxNormInferenceJobCommandInput
  | StopSNOMEDCTInferenceJobCommandInput;

export type ServiceOutputTypes =
  | DescribeEntitiesDetectionV2JobCommandOutput
  | DescribeICD10CMInferenceJobCommandOutput
  | DescribePHIDetectionJobCommandOutput
  | DescribeRxNormInferenceJobCommandOutput
  | DescribeSNOMEDCTInferenceJobCommandOutput
  | DetectEntitiesCommandOutput
  | DetectEntitiesV2CommandOutput
  | DetectPHICommandOutput
  | InferICD10CMCommandOutput
  | InferRxNormCommandOutput
  | InferSNOMEDCTCommandOutput
  | ListEntitiesDetectionV2JobsCommandOutput
  | ListICD10CMInferenceJobsCommandOutput
  | ListPHIDetectionJobsCommandOutput
  | ListRxNormInferenceJobsCommandOutput
  | ListSNOMEDCTInferenceJobsCommandOutput
  | StartEntitiesDetectionV2JobCommandOutput
  | StartICD10CMInferenceJobCommandOutput
  | StartPHIDetectionJobCommandOutput
  | StartRxNormInferenceJobCommandOutput
  | StartSNOMEDCTInferenceJobCommandOutput
  | StopEntitiesDetectionV2JobCommandOutput
  | StopICD10CMInferenceJobCommandOutput
  | StopPHIDetectionJobCommandOutput
  | StopRxNormInferenceJobCommandOutput
  | StopSNOMEDCTInferenceJobCommandOutput;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type ComprehendMedicalClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ComprehendMedicalClient class constructor that set the region, credentials and other options.
 */
export interface ComprehendMedicalClientConfig extends ComprehendMedicalClientConfigType {}

type ComprehendMedicalClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ComprehendMedicalClient class. This is resolved and normalized from the {@link ComprehendMedicalClientConfig | constructor configuration interface}.
 */
export interface ComprehendMedicalClientResolvedConfig extends ComprehendMedicalClientResolvedConfigType {}

/**
 * <p> Comprehend Medical; extracts structured information from unstructured clinical text. Use these actions
 *       to gain insight in your documents. </p>
 */
export class ComprehendMedicalClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ComprehendMedicalClientResolvedConfig
> {
  /**
   * The resolved configuration of ComprehendMedicalClient class. This is resolved and normalized from the {@link ComprehendMedicalClientConfig | constructor configuration interface}.
   */
  readonly config: ComprehendMedicalClientResolvedConfig;

  constructor(configuration: ComprehendMedicalClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
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
