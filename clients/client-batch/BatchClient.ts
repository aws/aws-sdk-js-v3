import {
  CancelJobRequest,
  CancelJobResponse,
  CreateComputeEnvironmentRequest,
  CreateComputeEnvironmentResponse,
  CreateJobQueueRequest,
  CreateJobQueueResponse,
  DeleteComputeEnvironmentRequest,
  DeleteComputeEnvironmentResponse,
  DeleteJobQueueRequest,
  DeleteJobQueueResponse,
  DeregisterJobDefinitionRequest,
  DeregisterJobDefinitionResponse,
  DescribeComputeEnvironmentsRequest,
  DescribeComputeEnvironmentsResponse,
  DescribeJobDefinitionsRequest,
  DescribeJobDefinitionsResponse,
  DescribeJobQueuesRequest,
  DescribeJobQueuesResponse,
  DescribeJobsRequest,
  DescribeJobsResponse,
  ListJobsRequest,
  ListJobsResponse,
  RegisterJobDefinitionRequest,
  RegisterJobDefinitionResponse,
  SubmitJobRequest,
  SubmitJobResponse,
  TerminateJobRequest,
  TerminateJobResponse,
  UpdateComputeEnvironmentRequest,
  UpdateComputeEnvironmentResponse,
  UpdateJobQueueRequest,
  UpdateJobQueueResponse,
} from "./models/index";
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
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
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
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CancelJobRequest
  | CreateComputeEnvironmentRequest
  | CreateJobQueueRequest
  | DeleteComputeEnvironmentRequest
  | DeleteJobQueueRequest
  | DeregisterJobDefinitionRequest
  | DescribeComputeEnvironmentsRequest
  | DescribeJobDefinitionsRequest
  | DescribeJobQueuesRequest
  | DescribeJobsRequest
  | ListJobsRequest
  | RegisterJobDefinitionRequest
  | SubmitJobRequest
  | TerminateJobRequest
  | UpdateComputeEnvironmentRequest
  | UpdateJobQueueRequest;

export type ServiceOutputTypes =
  | CancelJobResponse
  | CreateComputeEnvironmentResponse
  | CreateJobQueueResponse
  | DeleteComputeEnvironmentResponse
  | DeleteJobQueueResponse
  | DeregisterJobDefinitionResponse
  | DescribeComputeEnvironmentsResponse
  | DescribeJobDefinitionsResponse
  | DescribeJobQueuesResponse
  | DescribeJobsResponse
  | ListJobsResponse
  | RegisterJobDefinitionResponse
  | SubmitJobResponse
  | TerminateJobResponse
  | UpdateComputeEnvironmentResponse
  | UpdateJobQueueResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type BatchClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type BatchClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *          <p>AWS Batch enables you to run batch computing workloads on the AWS Cloud. Batch computing is a common way for
 *    developers, scientists, and engineers to access large amounts of compute resources, and AWS Batch removes the
 *    undifferentiated heavy lifting of configuring and managing the required infrastructure. AWS Batch will be familiar to
 *    users of traditional batch computing software. This service can efficiently provision resources in response to jobs
 *    submitted in order to eliminate capacity constraints, reduce compute costs, and deliver results quickly.</p>
 *          <p>As a fully managed service, AWS Batch enables developers, scientists, and engineers to run batch computing
 *    workloads of any scale. AWS Batch automatically provisions compute resources and optimizes the workload distribution
 *    based on the quantity and scale of the workloads. With AWS Batch, there is no need to install or manage batch computing
 *    software, which allows you to focus on analyzing results and solving problems. AWS Batch reduces operational
 *    complexities, saves time, and reduces costs, which makes it easy for developers, scientists, and engineers to run
 *    their batch jobs in the AWS Cloud.</p>
 *
 */
export class BatchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BatchClientResolvedConfig
> {
  readonly config: BatchClientResolvedConfig;

  constructor(configuration: BatchClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
  }
}
