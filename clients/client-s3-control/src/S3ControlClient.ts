import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "./commands/DeleteAccessPointPolicyCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import {
  DeleteBucketLifecycleConfigurationCommandInput,
  DeleteBucketLifecycleConfigurationCommandOutput,
} from "./commands/DeleteBucketLifecycleConfigurationCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import { DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput } from "./commands/DeleteJobTaggingCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "./commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "./commands/GetAccessPointPolicyStatusCommand";
import { GetBucketCommandInput, GetBucketCommandOutput } from "./commands/GetBucketCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "./commands/GetJobTaggingCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "./commands/ListRegionalBucketsCommand";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "./commands/PutAccessPointPolicyCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "./commands/PutJobTaggingCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand";
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
  S3ControlInputConfig,
  S3ControlResolvedConfig,
  resolveS3ControlConfig,
} from "@aws-sdk/middleware-sdk-s3-control";
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
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateAccessPointCommandInput
  | CreateBucketCommandInput
  | CreateJobCommandInput
  | DeleteAccessPointCommandInput
  | DeleteAccessPointPolicyCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketLifecycleConfigurationCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteJobTaggingCommandInput
  | DeletePublicAccessBlockCommandInput
  | DescribeJobCommandInput
  | GetAccessPointCommandInput
  | GetAccessPointPolicyCommandInput
  | GetAccessPointPolicyStatusCommandInput
  | GetBucketCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketTaggingCommandInput
  | GetJobTaggingCommandInput
  | GetPublicAccessBlockCommandInput
  | ListAccessPointsCommandInput
  | ListJobsCommandInput
  | ListRegionalBucketsCommandInput
  | PutAccessPointPolicyCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketTaggingCommandInput
  | PutJobTaggingCommandInput
  | PutPublicAccessBlockCommandInput
  | UpdateJobPriorityCommandInput
  | UpdateJobStatusCommandInput;

export type ServiceOutputTypes =
  | CreateAccessPointCommandOutput
  | CreateBucketCommandOutput
  | CreateJobCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteAccessPointPolicyCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketLifecycleConfigurationCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteJobTaggingCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | DescribeJobCommandOutput
  | GetAccessPointCommandOutput
  | GetAccessPointPolicyCommandOutput
  | GetAccessPointPolicyStatusCommandOutput
  | GetBucketCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketTaggingCommandOutput
  | GetJobTaggingCommandOutput
  | GetPublicAccessBlockCommandOutput
  | ListAccessPointsCommandOutput
  | ListJobsCommandOutput
  | ListRegionalBucketsCommandOutput
  | PutAccessPointPolicyCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketTaggingCommandOutput
  | PutJobTaggingCommandOutput
  | PutPublicAccessBlockCommandOutput
  | UpdateJobPriorityCommandOutput
  | UpdateJobStatusCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type S3ControlClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig &
  S3ControlInputConfig;

export type S3ControlClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig &
  S3ControlResolvedConfig;

/**
 * <p>
 *          AWS S3 Control provides access to Amazon S3 control plane operations.
 *
 *       </p>
 */
export class S3ControlClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ControlClientResolvedConfig
> {
  readonly config: S3ControlClientResolvedConfig;

  constructor(configuration: S3ControlClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    let _config_7 = resolveS3ControlConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
