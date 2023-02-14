// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@aws-sdk/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import { getAddExpectContinuePlugin } from "@aws-sdk/middleware-expect-continue";
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
  getValidateBucketNamePlugin,
  resolveS3Config,
  S3InputConfig,
  S3ResolvedConfig,
} from "@aws-sdk/middleware-sdk-s3";
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
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  GetAwsChunkedEncodingStream,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { Readable } from "stream";

import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import { CopyObjectCommandInput, CopyObjectCommandOutput } from "./commands/CopyObjectCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "./commands/CreateMultipartUploadCommand";
import {
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "./commands/DeleteBucketAnalyticsConfigurationCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import { DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput } from "./commands/DeleteBucketCorsCommand";
import {
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "./commands/DeleteBucketEncryptionCommand";
import {
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "./commands/DeleteBucketInventoryConfigurationCommand";
import {
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "./commands/DeleteBucketLifecycleCommand";
import {
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "./commands/DeleteBucketMetricsConfigurationCommand";
import {
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "./commands/DeleteBucketOwnershipControlsCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "./commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import {
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "./commands/DeleteBucketWebsiteCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import { DeleteObjectsCommandInput, DeleteObjectsCommandOutput } from "./commands/DeleteObjectsCommand";
import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "./commands/DeleteObjectTaggingCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import {
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "./commands/GetBucketAccelerateConfigurationCommand";
import { GetBucketAclCommandInput, GetBucketAclCommandOutput } from "./commands/GetBucketAclCommand";
import {
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "./commands/GetBucketAnalyticsConfigurationCommand";
import { GetBucketCorsCommandInput, GetBucketCorsCommandOutput } from "./commands/GetBucketCorsCommand";
import {
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "./commands/GetBucketEncryptionCommand";
import {
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/GetBucketIntelligentTieringConfigurationCommand";
import {
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "./commands/GetBucketInventoryConfigurationCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput } from "./commands/GetBucketLocationCommand";
import { GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput } from "./commands/GetBucketLoggingCommand";
import {
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "./commands/GetBucketMetricsConfigurationCommand";
import {
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "./commands/GetBucketNotificationConfigurationCommand";
import {
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "./commands/GetBucketOwnershipControlsCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand";
import {
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "./commands/GetBucketPolicyStatusCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "./commands/GetBucketReplicationCommand";
import {
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "./commands/GetBucketRequestPaymentCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "./commands/GetBucketVersioningCommand";
import { GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput } from "./commands/GetBucketWebsiteCommand";
import { GetObjectAclCommandInput, GetObjectAclCommandOutput } from "./commands/GetObjectAclCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import { GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput } from "./commands/GetObjectLegalHoldCommand";
import {
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "./commands/GetObjectLockConfigurationCommand";
import { GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput } from "./commands/GetObjectRetentionCommand";
import { GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput } from "./commands/GetObjectTaggingCommand";
import { GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput } from "./commands/GetObjectTorrentCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import { HeadBucketCommandInput, HeadBucketCommandOutput } from "./commands/HeadBucketCommand";
import { HeadObjectCommandInput, HeadObjectCommandOutput } from "./commands/HeadObjectCommand";
import {
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "./commands/ListBucketAnalyticsConfigurationsCommand";
import {
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "./commands/ListBucketIntelligentTieringConfigurationsCommand";
import {
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "./commands/ListBucketInventoryConfigurationsCommand";
import {
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "./commands/ListBucketMetricsConfigurationsCommand";
import { ListBucketsCommandInput, ListBucketsCommandOutput } from "./commands/ListBucketsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import { ListObjectsCommandInput, ListObjectsCommandOutput } from "./commands/ListObjectsCommand";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "./commands/ListObjectsV2Command";
import { ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput } from "./commands/ListObjectVersionsCommand";
import { ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand";
import {
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "./commands/PutBucketAccelerateConfigurationCommand";
import { PutBucketAclCommandInput, PutBucketAclCommandOutput } from "./commands/PutBucketAclCommand";
import {
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "./commands/PutBucketAnalyticsConfigurationCommand";
import { PutBucketCorsCommandInput, PutBucketCorsCommandOutput } from "./commands/PutBucketCorsCommand";
import {
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "./commands/PutBucketEncryptionCommand";
import {
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/PutBucketIntelligentTieringConfigurationCommand";
import {
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "./commands/PutBucketInventoryConfigurationCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput } from "./commands/PutBucketLoggingCommand";
import {
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "./commands/PutBucketMetricsConfigurationCommand";
import {
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "./commands/PutBucketNotificationConfigurationCommand";
import {
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "./commands/PutBucketOwnershipControlsCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "./commands/PutBucketReplicationCommand";
import {
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "./commands/PutBucketRequestPaymentCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "./commands/PutBucketVersioningCommand";
import { PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput } from "./commands/PutBucketWebsiteCommand";
import { PutObjectAclCommandInput, PutObjectAclCommandOutput } from "./commands/PutObjectAclCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand";
import { PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput } from "./commands/PutObjectLegalHoldCommand";
import {
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "./commands/PutObjectLockConfigurationCommand";
import { PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput } from "./commands/PutObjectRetentionCommand";
import { PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput } from "./commands/PutObjectTaggingCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import { RestoreObjectCommandInput, RestoreObjectCommandOutput } from "./commands/RestoreObjectCommand";
import {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "./commands/SelectObjectContentCommand";
import { UploadPartCommandInput, UploadPartCommandOutput } from "./commands/UploadPartCommand";
import { UploadPartCopyCommandInput, UploadPartCopyCommandOutput } from "./commands/UploadPartCopyCommand";
import {
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "./commands/WriteGetObjectResponseCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AbortMultipartUploadCommandInput
  | CompleteMultipartUploadCommandInput
  | CopyObjectCommandInput
  | CreateBucketCommandInput
  | CreateMultipartUploadCommandInput
  | DeleteBucketAnalyticsConfigurationCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketCorsCommandInput
  | DeleteBucketEncryptionCommandInput
  | DeleteBucketIntelligentTieringConfigurationCommandInput
  | DeleteBucketInventoryConfigurationCommandInput
  | DeleteBucketLifecycleCommandInput
  | DeleteBucketMetricsConfigurationCommandInput
  | DeleteBucketOwnershipControlsCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketReplicationCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteBucketWebsiteCommandInput
  | DeleteObjectCommandInput
  | DeleteObjectTaggingCommandInput
  | DeleteObjectsCommandInput
  | DeletePublicAccessBlockCommandInput
  | GetBucketAccelerateConfigurationCommandInput
  | GetBucketAclCommandInput
  | GetBucketAnalyticsConfigurationCommandInput
  | GetBucketCorsCommandInput
  | GetBucketEncryptionCommandInput
  | GetBucketIntelligentTieringConfigurationCommandInput
  | GetBucketInventoryConfigurationCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketLocationCommandInput
  | GetBucketLoggingCommandInput
  | GetBucketMetricsConfigurationCommandInput
  | GetBucketNotificationConfigurationCommandInput
  | GetBucketOwnershipControlsCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketPolicyStatusCommandInput
  | GetBucketReplicationCommandInput
  | GetBucketRequestPaymentCommandInput
  | GetBucketTaggingCommandInput
  | GetBucketVersioningCommandInput
  | GetBucketWebsiteCommandInput
  | GetObjectAclCommandInput
  | GetObjectAttributesCommandInput
  | GetObjectCommandInput
  | GetObjectLegalHoldCommandInput
  | GetObjectLockConfigurationCommandInput
  | GetObjectRetentionCommandInput
  | GetObjectTaggingCommandInput
  | GetObjectTorrentCommandInput
  | GetPublicAccessBlockCommandInput
  | HeadBucketCommandInput
  | HeadObjectCommandInput
  | ListBucketAnalyticsConfigurationsCommandInput
  | ListBucketIntelligentTieringConfigurationsCommandInput
  | ListBucketInventoryConfigurationsCommandInput
  | ListBucketMetricsConfigurationsCommandInput
  | ListBucketsCommandInput
  | ListMultipartUploadsCommandInput
  | ListObjectVersionsCommandInput
  | ListObjectsCommandInput
  | ListObjectsV2CommandInput
  | ListPartsCommandInput
  | PutBucketAccelerateConfigurationCommandInput
  | PutBucketAclCommandInput
  | PutBucketAnalyticsConfigurationCommandInput
  | PutBucketCorsCommandInput
  | PutBucketEncryptionCommandInput
  | PutBucketIntelligentTieringConfigurationCommandInput
  | PutBucketInventoryConfigurationCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketLoggingCommandInput
  | PutBucketMetricsConfigurationCommandInput
  | PutBucketNotificationConfigurationCommandInput
  | PutBucketOwnershipControlsCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketReplicationCommandInput
  | PutBucketRequestPaymentCommandInput
  | PutBucketTaggingCommandInput
  | PutBucketVersioningCommandInput
  | PutBucketWebsiteCommandInput
  | PutObjectAclCommandInput
  | PutObjectCommandInput
  | PutObjectLegalHoldCommandInput
  | PutObjectLockConfigurationCommandInput
  | PutObjectRetentionCommandInput
  | PutObjectTaggingCommandInput
  | PutPublicAccessBlockCommandInput
  | RestoreObjectCommandInput
  | SelectObjectContentCommandInput
  | UploadPartCommandInput
  | UploadPartCopyCommandInput
  | WriteGetObjectResponseCommandInput;

export type ServiceOutputTypes =
  | AbortMultipartUploadCommandOutput
  | CompleteMultipartUploadCommandOutput
  | CopyObjectCommandOutput
  | CreateBucketCommandOutput
  | CreateMultipartUploadCommandOutput
  | DeleteBucketAnalyticsConfigurationCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketCorsCommandOutput
  | DeleteBucketEncryptionCommandOutput
  | DeleteBucketIntelligentTieringConfigurationCommandOutput
  | DeleteBucketInventoryConfigurationCommandOutput
  | DeleteBucketLifecycleCommandOutput
  | DeleteBucketMetricsConfigurationCommandOutput
  | DeleteBucketOwnershipControlsCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketReplicationCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteBucketWebsiteCommandOutput
  | DeleteObjectCommandOutput
  | DeleteObjectTaggingCommandOutput
  | DeleteObjectsCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | GetBucketAccelerateConfigurationCommandOutput
  | GetBucketAclCommandOutput
  | GetBucketAnalyticsConfigurationCommandOutput
  | GetBucketCorsCommandOutput
  | GetBucketEncryptionCommandOutput
  | GetBucketIntelligentTieringConfigurationCommandOutput
  | GetBucketInventoryConfigurationCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketLocationCommandOutput
  | GetBucketLoggingCommandOutput
  | GetBucketMetricsConfigurationCommandOutput
  | GetBucketNotificationConfigurationCommandOutput
  | GetBucketOwnershipControlsCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketPolicyStatusCommandOutput
  | GetBucketReplicationCommandOutput
  | GetBucketRequestPaymentCommandOutput
  | GetBucketTaggingCommandOutput
  | GetBucketVersioningCommandOutput
  | GetBucketWebsiteCommandOutput
  | GetObjectAclCommandOutput
  | GetObjectAttributesCommandOutput
  | GetObjectCommandOutput
  | GetObjectLegalHoldCommandOutput
  | GetObjectLockConfigurationCommandOutput
  | GetObjectRetentionCommandOutput
  | GetObjectTaggingCommandOutput
  | GetObjectTorrentCommandOutput
  | GetPublicAccessBlockCommandOutput
  | HeadBucketCommandOutput
  | HeadObjectCommandOutput
  | ListBucketAnalyticsConfigurationsCommandOutput
  | ListBucketIntelligentTieringConfigurationsCommandOutput
  | ListBucketInventoryConfigurationsCommandOutput
  | ListBucketMetricsConfigurationsCommandOutput
  | ListBucketsCommandOutput
  | ListMultipartUploadsCommandOutput
  | ListObjectVersionsCommandOutput
  | ListObjectsCommandOutput
  | ListObjectsV2CommandOutput
  | ListPartsCommandOutput
  | PutBucketAccelerateConfigurationCommandOutput
  | PutBucketAclCommandOutput
  | PutBucketAnalyticsConfigurationCommandOutput
  | PutBucketCorsCommandOutput
  | PutBucketEncryptionCommandOutput
  | PutBucketIntelligentTieringConfigurationCommandOutput
  | PutBucketInventoryConfigurationCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketLoggingCommandOutput
  | PutBucketMetricsConfigurationCommandOutput
  | PutBucketNotificationConfigurationCommandOutput
  | PutBucketOwnershipControlsCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketReplicationCommandOutput
  | PutBucketRequestPaymentCommandOutput
  | PutBucketTaggingCommandOutput
  | PutBucketVersioningCommandOutput
  | PutBucketWebsiteCommandOutput
  | PutObjectAclCommandOutput
  | PutObjectCommandOutput
  | PutObjectLegalHoldCommandOutput
  | PutObjectLockConfigurationCommandOutput
  | PutObjectRetentionCommandOutput
  | PutObjectTaggingCommandOutput
  | PutPublicAccessBlockCommandOutput
  | RestoreObjectCommandOutput
  | SelectObjectContentCommandOutput
  | UploadPartCommandOutput
  | UploadPartCopyCommandOutput
  | WriteGetObjectResponseCommandOutput;

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
   * Whether to escape request path when signing the request.
   */
  signingEscapePath?: boolean;

  /**
   * Whether to override the request region with the region inferred from requested resource's ARN. Defaults to false.
   */
  useArnRegion?: boolean | Provider<boolean>;
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
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes MD5 hashes.
   * @internal
   */
  md5?: __ChecksumConstructor | __HashConstructor;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes SHA1 hashes.
   * @internal
   */
  sha1?: __ChecksumConstructor | __HashConstructor;

  /**
   * A function that returns Readable Stream which follows aws-chunked encoding stream.
   * @internal
   */
  getAwsChunkedEncodingStream?: GetAwsChunkedEncodingStream;

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

type S3ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  S3InputConfig &
  UserAgentInputConfig &
  EventStreamSerdeInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of S3Client class constructor that set the region, credentials and other options.
 */
export interface S3ClientConfig extends S3ClientConfigType {}

type S3ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  S3ResolvedConfig &
  UserAgentResolvedConfig &
  EventStreamSerdeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of S3Client class. This is resolved and normalized from the {@link S3ClientConfig | constructor configuration interface}.
 */
export interface S3ClientResolvedConfig extends S3ClientResolvedConfigType {}

/**
 * <p></p>
 */
export class S3Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ClientResolvedConfig
> {
  /**
   * The resolved configuration of S3Client class. This is resolved and normalized from the {@link S3ClientConfig | constructor configuration interface}.
   */
  readonly config: S3ClientResolvedConfig;

  constructor(configuration: S3ClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveS3Config(_config_6);
    const _config_8 = resolveUserAgentConfig(_config_7);
    const _config_9 = resolveEventStreamSerdeConfig(_config_8);
    super(_config_9);
    this.config = _config_9;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
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
