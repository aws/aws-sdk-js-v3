// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  getHostPrefixDeduplicationPlugin,
  resolveS3ControlConfig,
  S3ControlInputConfig,
  S3ControlResolvedConfig,
} from "@aws-sdk/middleware-sdk-s3-control";
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
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
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
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { Readable } from "stream";

import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand";
import {
  CreateAccessPointForObjectLambdaCommandInput,
  CreateAccessPointForObjectLambdaCommandOutput,
} from "./commands/CreateAccessPointForObjectLambdaCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateMultiRegionAccessPointCommandInput,
  CreateMultiRegionAccessPointCommandOutput,
} from "./commands/CreateMultiRegionAccessPointCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand";
import {
  DeleteAccessPointForObjectLambdaCommandInput,
  DeleteAccessPointForObjectLambdaCommandOutput,
} from "./commands/DeleteAccessPointForObjectLambdaCommand";
import {
  DeleteAccessPointPolicyCommandInput,
  DeleteAccessPointPolicyCommandOutput,
} from "./commands/DeleteAccessPointPolicyCommand";
import {
  DeleteAccessPointPolicyForObjectLambdaCommandInput,
  DeleteAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/DeleteAccessPointPolicyForObjectLambdaCommand";
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
  DeleteMultiRegionAccessPointCommandInput,
  DeleteMultiRegionAccessPointCommandOutput,
} from "./commands/DeleteMultiRegionAccessPointCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import {
  DeleteStorageLensConfigurationCommandInput,
  DeleteStorageLensConfigurationCommandOutput,
} from "./commands/DeleteStorageLensConfigurationCommand";
import {
  DeleteStorageLensConfigurationTaggingCommandInput,
  DeleteStorageLensConfigurationTaggingCommandOutput,
} from "./commands/DeleteStorageLensConfigurationTaggingCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeMultiRegionAccessPointOperationCommandInput,
  DescribeMultiRegionAccessPointOperationCommandOutput,
} from "./commands/DescribeMultiRegionAccessPointOperationCommand";
import { GetAccessPointCommandInput, GetAccessPointCommandOutput } from "./commands/GetAccessPointCommand";
import {
  GetAccessPointConfigurationForObjectLambdaCommandInput,
  GetAccessPointConfigurationForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointConfigurationForObjectLambdaCommand";
import {
  GetAccessPointForObjectLambdaCommandInput,
  GetAccessPointForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointForObjectLambdaCommand";
import {
  GetAccessPointPolicyCommandInput,
  GetAccessPointPolicyCommandOutput,
} from "./commands/GetAccessPointPolicyCommand";
import {
  GetAccessPointPolicyForObjectLambdaCommandInput,
  GetAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointPolicyForObjectLambdaCommand";
import {
  GetAccessPointPolicyStatusCommandInput,
  GetAccessPointPolicyStatusCommandOutput,
} from "./commands/GetAccessPointPolicyStatusCommand";
import {
  GetAccessPointPolicyStatusForObjectLambdaCommandInput,
  GetAccessPointPolicyStatusForObjectLambdaCommandOutput,
} from "./commands/GetAccessPointPolicyStatusForObjectLambdaCommand";
import { GetBucketCommandInput, GetBucketCommandOutput } from "./commands/GetBucketCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "./commands/GetBucketVersioningCommand";
import { GetJobTaggingCommandInput, GetJobTaggingCommandOutput } from "./commands/GetJobTaggingCommand";
import {
  GetMultiRegionAccessPointCommandInput,
  GetMultiRegionAccessPointCommandOutput,
} from "./commands/GetMultiRegionAccessPointCommand";
import {
  GetMultiRegionAccessPointPolicyCommandInput,
  GetMultiRegionAccessPointPolicyCommandOutput,
} from "./commands/GetMultiRegionAccessPointPolicyCommand";
import {
  GetMultiRegionAccessPointPolicyStatusCommandInput,
  GetMultiRegionAccessPointPolicyStatusCommandOutput,
} from "./commands/GetMultiRegionAccessPointPolicyStatusCommand";
import {
  GetMultiRegionAccessPointRoutesCommandInput,
  GetMultiRegionAccessPointRoutesCommandOutput,
} from "./commands/GetMultiRegionAccessPointRoutesCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import {
  GetStorageLensConfigurationCommandInput,
  GetStorageLensConfigurationCommandOutput,
} from "./commands/GetStorageLensConfigurationCommand";
import {
  GetStorageLensConfigurationTaggingCommandInput,
  GetStorageLensConfigurationTaggingCommandOutput,
} from "./commands/GetStorageLensConfigurationTaggingCommand";
import { ListAccessPointsCommandInput, ListAccessPointsCommandOutput } from "./commands/ListAccessPointsCommand";
import {
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
} from "./commands/ListAccessPointsForObjectLambdaCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput,
} from "./commands/ListMultiRegionAccessPointsCommand";
import {
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "./commands/ListRegionalBucketsCommand";
import {
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "./commands/ListStorageLensConfigurationsCommand";
import {
  PutAccessPointConfigurationForObjectLambdaCommandInput,
  PutAccessPointConfigurationForObjectLambdaCommandOutput,
} from "./commands/PutAccessPointConfigurationForObjectLambdaCommand";
import {
  PutAccessPointPolicyCommandInput,
  PutAccessPointPolicyCommandOutput,
} from "./commands/PutAccessPointPolicyCommand";
import {
  PutAccessPointPolicyForObjectLambdaCommandInput,
  PutAccessPointPolicyForObjectLambdaCommandOutput,
} from "./commands/PutAccessPointPolicyForObjectLambdaCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "./commands/PutBucketVersioningCommand";
import { PutJobTaggingCommandInput, PutJobTaggingCommandOutput } from "./commands/PutJobTaggingCommand";
import {
  PutMultiRegionAccessPointPolicyCommandInput,
  PutMultiRegionAccessPointPolicyCommandOutput,
} from "./commands/PutMultiRegionAccessPointPolicyCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import {
  PutStorageLensConfigurationCommandInput,
  PutStorageLensConfigurationCommandOutput,
} from "./commands/PutStorageLensConfigurationCommand";
import {
  PutStorageLensConfigurationTaggingCommandInput,
  PutStorageLensConfigurationTaggingCommandOutput,
} from "./commands/PutStorageLensConfigurationTaggingCommand";
import {
  SubmitMultiRegionAccessPointRoutesCommandInput,
  SubmitMultiRegionAccessPointRoutesCommandOutput,
} from "./commands/SubmitMultiRegionAccessPointRoutesCommand";
import { UpdateJobPriorityCommandInput, UpdateJobPriorityCommandOutput } from "./commands/UpdateJobPriorityCommand";
import { UpdateJobStatusCommandInput, UpdateJobStatusCommandOutput } from "./commands/UpdateJobStatusCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateAccessPointCommandInput
  | CreateAccessPointForObjectLambdaCommandInput
  | CreateBucketCommandInput
  | CreateJobCommandInput
  | CreateMultiRegionAccessPointCommandInput
  | DeleteAccessPointCommandInput
  | DeleteAccessPointForObjectLambdaCommandInput
  | DeleteAccessPointPolicyCommandInput
  | DeleteAccessPointPolicyForObjectLambdaCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketLifecycleConfigurationCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteJobTaggingCommandInput
  | DeleteMultiRegionAccessPointCommandInput
  | DeletePublicAccessBlockCommandInput
  | DeleteStorageLensConfigurationCommandInput
  | DeleteStorageLensConfigurationTaggingCommandInput
  | DescribeJobCommandInput
  | DescribeMultiRegionAccessPointOperationCommandInput
  | GetAccessPointCommandInput
  | GetAccessPointConfigurationForObjectLambdaCommandInput
  | GetAccessPointForObjectLambdaCommandInput
  | GetAccessPointPolicyCommandInput
  | GetAccessPointPolicyForObjectLambdaCommandInput
  | GetAccessPointPolicyStatusCommandInput
  | GetAccessPointPolicyStatusForObjectLambdaCommandInput
  | GetBucketCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketTaggingCommandInput
  | GetBucketVersioningCommandInput
  | GetJobTaggingCommandInput
  | GetMultiRegionAccessPointCommandInput
  | GetMultiRegionAccessPointPolicyCommandInput
  | GetMultiRegionAccessPointPolicyStatusCommandInput
  | GetMultiRegionAccessPointRoutesCommandInput
  | GetPublicAccessBlockCommandInput
  | GetStorageLensConfigurationCommandInput
  | GetStorageLensConfigurationTaggingCommandInput
  | ListAccessPointsCommandInput
  | ListAccessPointsForObjectLambdaCommandInput
  | ListJobsCommandInput
  | ListMultiRegionAccessPointsCommandInput
  | ListRegionalBucketsCommandInput
  | ListStorageLensConfigurationsCommandInput
  | PutAccessPointConfigurationForObjectLambdaCommandInput
  | PutAccessPointPolicyCommandInput
  | PutAccessPointPolicyForObjectLambdaCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketTaggingCommandInput
  | PutBucketVersioningCommandInput
  | PutJobTaggingCommandInput
  | PutMultiRegionAccessPointPolicyCommandInput
  | PutPublicAccessBlockCommandInput
  | PutStorageLensConfigurationCommandInput
  | PutStorageLensConfigurationTaggingCommandInput
  | SubmitMultiRegionAccessPointRoutesCommandInput
  | UpdateJobPriorityCommandInput
  | UpdateJobStatusCommandInput;

export type ServiceOutputTypes =
  | CreateAccessPointCommandOutput
  | CreateAccessPointForObjectLambdaCommandOutput
  | CreateBucketCommandOutput
  | CreateJobCommandOutput
  | CreateMultiRegionAccessPointCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteAccessPointForObjectLambdaCommandOutput
  | DeleteAccessPointPolicyCommandOutput
  | DeleteAccessPointPolicyForObjectLambdaCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketLifecycleConfigurationCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteJobTaggingCommandOutput
  | DeleteMultiRegionAccessPointCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | DeleteStorageLensConfigurationCommandOutput
  | DeleteStorageLensConfigurationTaggingCommandOutput
  | DescribeJobCommandOutput
  | DescribeMultiRegionAccessPointOperationCommandOutput
  | GetAccessPointCommandOutput
  | GetAccessPointConfigurationForObjectLambdaCommandOutput
  | GetAccessPointForObjectLambdaCommandOutput
  | GetAccessPointPolicyCommandOutput
  | GetAccessPointPolicyForObjectLambdaCommandOutput
  | GetAccessPointPolicyStatusCommandOutput
  | GetAccessPointPolicyStatusForObjectLambdaCommandOutput
  | GetBucketCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketTaggingCommandOutput
  | GetBucketVersioningCommandOutput
  | GetJobTaggingCommandOutput
  | GetMultiRegionAccessPointCommandOutput
  | GetMultiRegionAccessPointPolicyCommandOutput
  | GetMultiRegionAccessPointPolicyStatusCommandOutput
  | GetMultiRegionAccessPointRoutesCommandOutput
  | GetPublicAccessBlockCommandOutput
  | GetStorageLensConfigurationCommandOutput
  | GetStorageLensConfigurationTaggingCommandOutput
  | ListAccessPointsCommandOutput
  | ListAccessPointsForObjectLambdaCommandOutput
  | ListJobsCommandOutput
  | ListMultiRegionAccessPointsCommandOutput
  | ListRegionalBucketsCommandOutput
  | ListStorageLensConfigurationsCommandOutput
  | PutAccessPointConfigurationForObjectLambdaCommandOutput
  | PutAccessPointPolicyCommandOutput
  | PutAccessPointPolicyForObjectLambdaCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketTaggingCommandOutput
  | PutBucketVersioningCommandOutput
  | PutJobTaggingCommandOutput
  | PutMultiRegionAccessPointPolicyCommandOutput
  | PutPublicAccessBlockCommandOutput
  | PutStorageLensConfigurationCommandOutput
  | PutStorageLensConfigurationTaggingCommandOutput
  | SubmitMultiRegionAccessPointRoutesCommandOutput
  | UpdateJobPriorityCommandOutput
  | UpdateJobStatusCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value.
   * @internal
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;

  /**
   * A constructor for a class implementing the {@link __checksum} interface
   * that computes MD5 hashes.
   * @internal
   */
  md5?: __ChecksumConstructor | __HashConstructor;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type S3ControlClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  S3ControlInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of S3ControlClient class constructor that set the region, credentials and other options.
 */
export interface S3ControlClientConfig extends S3ControlClientConfigType {}

type S3ControlClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  S3ControlResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of S3ControlClient class. This is resolved and normalized from the {@link S3ControlClientConfig | constructor configuration interface}.
 */
export interface S3ControlClientResolvedConfig extends S3ControlClientResolvedConfigType {}

/**
 * <p> Amazon Web Services S3 Control provides access to Amazon S3 control plane actions. </p>
 */
export class S3ControlClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ControlClientResolvedConfig
> {
  /**
   * The resolved configuration of S3ControlClient class. This is resolved and normalized from the {@link S3ControlClientConfig | constructor configuration interface}.
   */
  readonly config: S3ControlClientResolvedConfig;

  constructor(configuration: S3ControlClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveS3ControlConfig(_config_6);
    const _config_8 = resolveUserAgentConfig(_config_7);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getHostPrefixDeduplicationPlugin(this.config));
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
