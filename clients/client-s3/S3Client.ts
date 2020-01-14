import {
  AbortMultipartUploadOutput,
  AbortMultipartUploadRequest,
  CompleteMultipartUploadOutput,
  CompleteMultipartUploadRequest,
  CopyObjectOutput,
  CopyObjectRequest,
  CreateBucketOutput,
  CreateBucketRequest,
  CreateMultipartUploadOutput,
  CreateMultipartUploadRequest,
  DeleteBucketAnalyticsConfigurationRequest,
  DeleteBucketCorsRequest,
  DeleteBucketEncryptionRequest,
  DeleteBucketInventoryConfigurationRequest,
  DeleteBucketLifecycleRequest,
  DeleteBucketMetricsConfigurationRequest,
  DeleteBucketPolicyRequest,
  DeleteBucketReplicationRequest,
  DeleteBucketRequest,
  DeleteBucketTaggingRequest,
  DeleteBucketWebsiteRequest,
  DeleteObjectOutput,
  DeleteObjectRequest,
  DeleteObjectTaggingOutput,
  DeleteObjectTaggingRequest,
  DeleteObjectsOutput,
  DeleteObjectsRequest,
  DeletePublicAccessBlockRequest,
  GetBucketAccelerateConfigurationOutput,
  GetBucketAccelerateConfigurationRequest,
  GetBucketAclOutput,
  GetBucketAclRequest,
  GetBucketAnalyticsConfigurationOutput,
  GetBucketAnalyticsConfigurationRequest,
  GetBucketCorsOutput,
  GetBucketCorsRequest,
  GetBucketEncryptionOutput,
  GetBucketEncryptionRequest,
  GetBucketInventoryConfigurationOutput,
  GetBucketInventoryConfigurationRequest,
  GetBucketLifecycleConfigurationOutput,
  GetBucketLifecycleConfigurationRequest,
  GetBucketLocationOutput,
  GetBucketLocationRequest,
  GetBucketLoggingOutput,
  GetBucketLoggingRequest,
  GetBucketMetricsConfigurationOutput,
  GetBucketMetricsConfigurationRequest,
  GetBucketNotificationConfigurationRequest,
  GetBucketPolicyOutput,
  GetBucketPolicyRequest,
  GetBucketPolicyStatusOutput,
  GetBucketPolicyStatusRequest,
  GetBucketReplicationOutput,
  GetBucketReplicationRequest,
  GetBucketRequestPaymentOutput,
  GetBucketRequestPaymentRequest,
  GetBucketTaggingOutput,
  GetBucketTaggingRequest,
  GetBucketVersioningOutput,
  GetBucketVersioningRequest,
  GetBucketWebsiteOutput,
  GetBucketWebsiteRequest,
  GetObjectAclOutput,
  GetObjectAclRequest,
  GetObjectLegalHoldOutput,
  GetObjectLegalHoldRequest,
  GetObjectLockConfigurationOutput,
  GetObjectLockConfigurationRequest,
  GetObjectOutput,
  GetObjectRequest,
  GetObjectRetentionOutput,
  GetObjectRetentionRequest,
  GetObjectTaggingOutput,
  GetObjectTaggingRequest,
  GetObjectTorrentOutput,
  GetObjectTorrentRequest,
  GetPublicAccessBlockOutput,
  GetPublicAccessBlockRequest,
  HeadBucketRequest,
  HeadObjectOutput,
  HeadObjectRequest,
  ListBucketAnalyticsConfigurationsOutput,
  ListBucketAnalyticsConfigurationsRequest,
  ListBucketInventoryConfigurationsOutput,
  ListBucketInventoryConfigurationsRequest,
  ListBucketMetricsConfigurationsOutput,
  ListBucketMetricsConfigurationsRequest,
  ListBucketsOutput,
  ListMultipartUploadsOutput,
  ListMultipartUploadsRequest,
  ListObjectVersionsOutput,
  ListObjectVersionsRequest,
  ListObjectsOutput,
  ListObjectsRequest,
  ListObjectsV2Output,
  ListObjectsV2Request,
  ListPartsOutput,
  ListPartsRequest,
  NotificationConfiguration,
  PutBucketAccelerateConfigurationRequest,
  PutBucketAclRequest,
  PutBucketAnalyticsConfigurationRequest,
  PutBucketCorsRequest,
  PutBucketEncryptionRequest,
  PutBucketInventoryConfigurationRequest,
  PutBucketLifecycleConfigurationRequest,
  PutBucketLoggingRequest,
  PutBucketMetricsConfigurationRequest,
  PutBucketNotificationConfigurationRequest,
  PutBucketPolicyRequest,
  PutBucketReplicationRequest,
  PutBucketRequestPaymentRequest,
  PutBucketTaggingRequest,
  PutBucketVersioningRequest,
  PutBucketWebsiteRequest,
  PutObjectAclOutput,
  PutObjectAclRequest,
  PutObjectLegalHoldOutput,
  PutObjectLegalHoldRequest,
  PutObjectLockConfigurationOutput,
  PutObjectLockConfigurationRequest,
  PutObjectOutput,
  PutObjectRequest,
  PutObjectRetentionOutput,
  PutObjectRetentionRequest,
  PutObjectTaggingOutput,
  PutObjectTaggingRequest,
  PutPublicAccessBlockRequest,
  RestoreObjectOutput,
  RestoreObjectRequest,
  SelectObjectContentOutput,
  SelectObjectContentRequest,
  UploadPartCopyOutput,
  UploadPartCopyRequest,
  UploadPartOutput,
  UploadPartRequest
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import {
  BucketEndpointInputConfig,
  BucketEndpointResolvedConfig,
  resolveBucketEndpointConfig
} from "@aws-sdk/middleware-bucket-endpoint";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { getAddExpectContinuePlugin } from "@aws-sdk/middleware-expect-continue";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import { getValidateBucketNamePlugin } from "@aws-sdk/middleware-sdk-s3";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser
} from "@aws-sdk/types";
import { Readable } from "stream";

export type ServiceInputTypes =
  | {}
  | AbortMultipartUploadRequest
  | CompleteMultipartUploadRequest
  | CopyObjectRequest
  | CreateBucketRequest
  | CreateMultipartUploadRequest
  | DeleteBucketAnalyticsConfigurationRequest
  | DeleteBucketCorsRequest
  | DeleteBucketEncryptionRequest
  | DeleteBucketInventoryConfigurationRequest
  | DeleteBucketLifecycleRequest
  | DeleteBucketMetricsConfigurationRequest
  | DeleteBucketPolicyRequest
  | DeleteBucketReplicationRequest
  | DeleteBucketRequest
  | DeleteBucketTaggingRequest
  | DeleteBucketWebsiteRequest
  | DeleteObjectRequest
  | DeleteObjectTaggingRequest
  | DeleteObjectsRequest
  | DeletePublicAccessBlockRequest
  | GetBucketAccelerateConfigurationRequest
  | GetBucketAclRequest
  | GetBucketAnalyticsConfigurationRequest
  | GetBucketCorsRequest
  | GetBucketEncryptionRequest
  | GetBucketInventoryConfigurationRequest
  | GetBucketLifecycleConfigurationRequest
  | GetBucketLocationRequest
  | GetBucketLoggingRequest
  | GetBucketMetricsConfigurationRequest
  | GetBucketNotificationConfigurationRequest
  | GetBucketPolicyRequest
  | GetBucketPolicyStatusRequest
  | GetBucketReplicationRequest
  | GetBucketRequestPaymentRequest
  | GetBucketTaggingRequest
  | GetBucketVersioningRequest
  | GetBucketWebsiteRequest
  | GetObjectAclRequest
  | GetObjectLegalHoldRequest
  | GetObjectLockConfigurationRequest
  | GetObjectRequest
  | GetObjectRetentionRequest
  | GetObjectTaggingRequest
  | GetObjectTorrentRequest
  | GetPublicAccessBlockRequest
  | HeadBucketRequest
  | HeadObjectRequest
  | ListBucketAnalyticsConfigurationsRequest
  | ListBucketInventoryConfigurationsRequest
  | ListBucketMetricsConfigurationsRequest
  | ListMultipartUploadsRequest
  | ListObjectVersionsRequest
  | ListObjectsRequest
  | ListObjectsV2Request
  | ListPartsRequest
  | PutBucketAccelerateConfigurationRequest
  | PutBucketAclRequest
  | PutBucketAnalyticsConfigurationRequest
  | PutBucketCorsRequest
  | PutBucketEncryptionRequest
  | PutBucketInventoryConfigurationRequest
  | PutBucketLifecycleConfigurationRequest
  | PutBucketLoggingRequest
  | PutBucketMetricsConfigurationRequest
  | PutBucketNotificationConfigurationRequest
  | PutBucketPolicyRequest
  | PutBucketReplicationRequest
  | PutBucketRequestPaymentRequest
  | PutBucketTaggingRequest
  | PutBucketVersioningRequest
  | PutBucketWebsiteRequest
  | PutObjectAclRequest
  | PutObjectLegalHoldRequest
  | PutObjectLockConfigurationRequest
  | PutObjectRequest
  | PutObjectRetentionRequest
  | PutObjectTaggingRequest
  | PutPublicAccessBlockRequest
  | RestoreObjectRequest
  | SelectObjectContentRequest
  | UploadPartCopyRequest
  | UploadPartRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AbortMultipartUploadOutput
  | CompleteMultipartUploadOutput
  | CopyObjectOutput
  | CreateBucketOutput
  | CreateMultipartUploadOutput
  | DeleteObjectOutput
  | DeleteObjectTaggingOutput
  | DeleteObjectsOutput
  | GetBucketAccelerateConfigurationOutput
  | GetBucketAclOutput
  | GetBucketAnalyticsConfigurationOutput
  | GetBucketCorsOutput
  | GetBucketEncryptionOutput
  | GetBucketInventoryConfigurationOutput
  | GetBucketLifecycleConfigurationOutput
  | GetBucketLocationOutput
  | GetBucketLoggingOutput
  | GetBucketMetricsConfigurationOutput
  | GetBucketPolicyOutput
  | GetBucketPolicyStatusOutput
  | GetBucketReplicationOutput
  | GetBucketRequestPaymentOutput
  | GetBucketTaggingOutput
  | GetBucketVersioningOutput
  | GetBucketWebsiteOutput
  | GetObjectAclOutput
  | GetObjectLegalHoldOutput
  | GetObjectLockConfigurationOutput
  | GetObjectOutput
  | GetObjectRetentionOutput
  | GetObjectTaggingOutput
  | GetObjectTorrentOutput
  | GetPublicAccessBlockOutput
  | HeadObjectOutput
  | ListBucketAnalyticsConfigurationsOutput
  | ListBucketInventoryConfigurationsOutput
  | ListBucketMetricsConfigurationsOutput
  | ListBucketsOutput
  | ListMultipartUploadsOutput
  | ListObjectVersionsOutput
  | ListObjectsOutput
  | ListObjectsV2Output
  | ListPartsOutput
  | NotificationConfiguration
  | PutObjectAclOutput
  | PutObjectLegalHoldOutput
  | PutObjectLockConfigurationOutput
  | PutObjectOutput
  | PutObjectRetentionOutput
  | PutObjectTaggingOutput
  | RestoreObjectOutput
  | SelectObjectContentOutput
  | UploadPartCopyOutput
  | UploadPartOutput;

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
  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes MD5 hashes
   */
  md5?: __HashConstructor;

  /**
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;
}

export type S3ClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  BucketEndpointInputConfig &
  HostHeaderInputConfig;

export type S3ClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  BucketEndpointResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *          <p></p>
 *
 *
 *
 */
export class S3Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ClientResolvedConfig
> {
  readonly config: S3ClientResolvedConfig;

  constructor(configuration: S3ClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveBucketEndpointConfig(_config_5);
    let _config_7 = resolveHostHeaderConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
