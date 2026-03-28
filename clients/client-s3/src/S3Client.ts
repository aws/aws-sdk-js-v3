// smithy-typescript generated code
import { getAddExpectContinuePlugin } from "@aws-sdk/middleware-expect-continue";
import {
  type FlexibleChecksumsInputConfig,
  type FlexibleChecksumsResolvedConfig,
  resolveFlexibleChecksumsConfig,
} from "@aws-sdk/middleware-flexible-checksums";
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type S3InputConfig,
  type S3ResolvedConfig,
  getRegionRedirectMiddlewarePlugin,
  getS3ExpressHttpSigningPlugin,
  getS3ExpressPlugin,
  getValidateBucketNamePlugin,
  resolveS3Config,
} from "@aws-sdk/middleware-sdk-s3";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import type { GetAwsChunkedEncodingStream } from "@aws-sdk/types";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import {
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";
import type { Readable as Readable } from "node:stream";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultS3HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import type {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import type { CopyObjectCommandInput, CopyObjectCommandOutput } from "./commands/CopyObjectCommand";
import type { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import type {
  CreateBucketMetadataConfigurationCommandInput,
  CreateBucketMetadataConfigurationCommandOutput,
} from "./commands/CreateBucketMetadataConfigurationCommand";
import type {
  CreateBucketMetadataTableConfigurationCommandInput,
  CreateBucketMetadataTableConfigurationCommandOutput,
} from "./commands/CreateBucketMetadataTableConfigurationCommand";
import type {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "./commands/CreateMultipartUploadCommand";
import {
  type CreateSessionCommandInput,
  type CreateSessionCommandOutput,
  CreateSessionCommand,
} from "./commands/CreateSessionCommand";
import type {
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "./commands/DeleteBucketAnalyticsConfigurationCommand";
import type { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import type { DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput } from "./commands/DeleteBucketCorsCommand";
import type {
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "./commands/DeleteBucketEncryptionCommand";
import type {
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/DeleteBucketIntelligentTieringConfigurationCommand";
import type {
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "./commands/DeleteBucketInventoryConfigurationCommand";
import type {
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "./commands/DeleteBucketLifecycleCommand";
import type {
  DeleteBucketMetadataConfigurationCommandInput,
  DeleteBucketMetadataConfigurationCommandOutput,
} from "./commands/DeleteBucketMetadataConfigurationCommand";
import type {
  DeleteBucketMetadataTableConfigurationCommandInput,
  DeleteBucketMetadataTableConfigurationCommandOutput,
} from "./commands/DeleteBucketMetadataTableConfigurationCommand";
import type {
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "./commands/DeleteBucketMetricsConfigurationCommand";
import type {
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "./commands/DeleteBucketOwnershipControlsCommand";
import type {
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
} from "./commands/DeleteBucketPolicyCommand";
import type {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "./commands/DeleteBucketReplicationCommand";
import type {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import type {
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "./commands/DeleteBucketWebsiteCommand";
import type { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import type { DeleteObjectsCommandInput, DeleteObjectsCommandOutput } from "./commands/DeleteObjectsCommand";
import type {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "./commands/DeleteObjectTaggingCommand";
import type {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import type { GetBucketAbacCommandInput, GetBucketAbacCommandOutput } from "./commands/GetBucketAbacCommand";
import type {
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "./commands/GetBucketAccelerateConfigurationCommand";
import type { GetBucketAclCommandInput, GetBucketAclCommandOutput } from "./commands/GetBucketAclCommand";
import type {
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "./commands/GetBucketAnalyticsConfigurationCommand";
import type { GetBucketCorsCommandInput, GetBucketCorsCommandOutput } from "./commands/GetBucketCorsCommand";
import type {
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "./commands/GetBucketEncryptionCommand";
import type {
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/GetBucketIntelligentTieringConfigurationCommand";
import type {
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "./commands/GetBucketInventoryConfigurationCommand";
import type {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import type {
  GetBucketLocationCommandInput,
  GetBucketLocationCommandOutput,
} from "./commands/GetBucketLocationCommand";
import type { GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput } from "./commands/GetBucketLoggingCommand";
import type {
  GetBucketMetadataConfigurationCommandInput,
  GetBucketMetadataConfigurationCommandOutput,
} from "./commands/GetBucketMetadataConfigurationCommand";
import type {
  GetBucketMetadataTableConfigurationCommandInput,
  GetBucketMetadataTableConfigurationCommandOutput,
} from "./commands/GetBucketMetadataTableConfigurationCommand";
import type {
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "./commands/GetBucketMetricsConfigurationCommand";
import type {
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "./commands/GetBucketNotificationConfigurationCommand";
import type {
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "./commands/GetBucketOwnershipControlsCommand";
import type { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand";
import type {
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "./commands/GetBucketPolicyStatusCommand";
import type {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "./commands/GetBucketReplicationCommand";
import type {
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "./commands/GetBucketRequestPaymentCommand";
import type { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand";
import type {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "./commands/GetBucketVersioningCommand";
import type { GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput } from "./commands/GetBucketWebsiteCommand";
import type { GetObjectAclCommandInput, GetObjectAclCommandOutput } from "./commands/GetObjectAclCommand";
import type {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import type { GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import type {
  GetObjectLegalHoldCommandInput,
  GetObjectLegalHoldCommandOutput,
} from "./commands/GetObjectLegalHoldCommand";
import type {
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "./commands/GetObjectLockConfigurationCommand";
import type {
  GetObjectRetentionCommandInput,
  GetObjectRetentionCommandOutput,
} from "./commands/GetObjectRetentionCommand";
import type { GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput } from "./commands/GetObjectTaggingCommand";
import type { GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput } from "./commands/GetObjectTorrentCommand";
import type {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import type { HeadBucketCommandInput, HeadBucketCommandOutput } from "./commands/HeadBucketCommand";
import type { HeadObjectCommandInput, HeadObjectCommandOutput } from "./commands/HeadObjectCommand";
import type {
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "./commands/ListBucketAnalyticsConfigurationsCommand";
import type {
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "./commands/ListBucketIntelligentTieringConfigurationsCommand";
import type {
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "./commands/ListBucketInventoryConfigurationsCommand";
import type {
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "./commands/ListBucketMetricsConfigurationsCommand";
import type { ListBucketsCommandInput, ListBucketsCommandOutput } from "./commands/ListBucketsCommand";
import type {
  ListDirectoryBucketsCommandInput,
  ListDirectoryBucketsCommandOutput,
} from "./commands/ListDirectoryBucketsCommand";
import type {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import type { ListObjectsCommandInput, ListObjectsCommandOutput } from "./commands/ListObjectsCommand";
import type { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "./commands/ListObjectsV2Command";
import type {
  ListObjectVersionsCommandInput,
  ListObjectVersionsCommandOutput,
} from "./commands/ListObjectVersionsCommand";
import type { ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand";
import type { PutBucketAbacCommandInput, PutBucketAbacCommandOutput } from "./commands/PutBucketAbacCommand";
import type {
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "./commands/PutBucketAccelerateConfigurationCommand";
import type { PutBucketAclCommandInput, PutBucketAclCommandOutput } from "./commands/PutBucketAclCommand";
import type {
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "./commands/PutBucketAnalyticsConfigurationCommand";
import type { PutBucketCorsCommandInput, PutBucketCorsCommandOutput } from "./commands/PutBucketCorsCommand";
import type {
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "./commands/PutBucketEncryptionCommand";
import type {
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/PutBucketIntelligentTieringConfigurationCommand";
import type {
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "./commands/PutBucketInventoryConfigurationCommand";
import type {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import type { PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput } from "./commands/PutBucketLoggingCommand";
import type {
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "./commands/PutBucketMetricsConfigurationCommand";
import type {
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "./commands/PutBucketNotificationConfigurationCommand";
import type {
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "./commands/PutBucketOwnershipControlsCommand";
import type { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand";
import type {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "./commands/PutBucketReplicationCommand";
import type {
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "./commands/PutBucketRequestPaymentCommand";
import type { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand";
import type {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "./commands/PutBucketVersioningCommand";
import type { PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput } from "./commands/PutBucketWebsiteCommand";
import type { PutObjectAclCommandInput, PutObjectAclCommandOutput } from "./commands/PutObjectAclCommand";
import type { PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand";
import type {
  PutObjectLegalHoldCommandInput,
  PutObjectLegalHoldCommandOutput,
} from "./commands/PutObjectLegalHoldCommand";
import type {
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "./commands/PutObjectLockConfigurationCommand";
import type {
  PutObjectRetentionCommandInput,
  PutObjectRetentionCommandOutput,
} from "./commands/PutObjectRetentionCommand";
import type { PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput } from "./commands/PutObjectTaggingCommand";
import type {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import type { RenameObjectCommandInput, RenameObjectCommandOutput } from "./commands/RenameObjectCommand";
import type { RestoreObjectCommandInput, RestoreObjectCommandOutput } from "./commands/RestoreObjectCommand";
import type {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "./commands/SelectObjectContentCommand";
import type {
  UpdateBucketMetadataInventoryTableConfigurationCommandInput,
  UpdateBucketMetadataInventoryTableConfigurationCommandOutput,
} from "./commands/UpdateBucketMetadataInventoryTableConfigurationCommand";
import type {
  UpdateBucketMetadataJournalTableConfigurationCommandInput,
  UpdateBucketMetadataJournalTableConfigurationCommandOutput,
} from "./commands/UpdateBucketMetadataJournalTableConfigurationCommand";
import type {
  UpdateObjectEncryptionCommandInput,
  UpdateObjectEncryptionCommandOutput,
} from "./commands/UpdateObjectEncryptionCommand";
import type { UploadPartCommandInput, UploadPartCommandOutput } from "./commands/UploadPartCommand";
import type { UploadPartCopyCommandInput, UploadPartCopyCommandOutput } from "./commands/UploadPartCopyCommand";
import type {
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "./commands/WriteGetObjectResponseCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AbortMultipartUploadCommandInput
  | CompleteMultipartUploadCommandInput
  | CopyObjectCommandInput
  | CreateBucketCommandInput
  | CreateBucketMetadataConfigurationCommandInput
  | CreateBucketMetadataTableConfigurationCommandInput
  | CreateMultipartUploadCommandInput
  | CreateSessionCommandInput
  | DeleteBucketAnalyticsConfigurationCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketCorsCommandInput
  | DeleteBucketEncryptionCommandInput
  | DeleteBucketIntelligentTieringConfigurationCommandInput
  | DeleteBucketInventoryConfigurationCommandInput
  | DeleteBucketLifecycleCommandInput
  | DeleteBucketMetadataConfigurationCommandInput
  | DeleteBucketMetadataTableConfigurationCommandInput
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
  | GetBucketAbacCommandInput
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
  | GetBucketMetadataConfigurationCommandInput
  | GetBucketMetadataTableConfigurationCommandInput
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
  | ListDirectoryBucketsCommandInput
  | ListMultipartUploadsCommandInput
  | ListObjectVersionsCommandInput
  | ListObjectsCommandInput
  | ListObjectsV2CommandInput
  | ListPartsCommandInput
  | PutBucketAbacCommandInput
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
  | RenameObjectCommandInput
  | RestoreObjectCommandInput
  | SelectObjectContentCommandInput
  | UpdateBucketMetadataInventoryTableConfigurationCommandInput
  | UpdateBucketMetadataJournalTableConfigurationCommandInput
  | UpdateObjectEncryptionCommandInput
  | UploadPartCommandInput
  | UploadPartCopyCommandInput
  | WriteGetObjectResponseCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AbortMultipartUploadCommandOutput
  | CompleteMultipartUploadCommandOutput
  | CopyObjectCommandOutput
  | CreateBucketCommandOutput
  | CreateBucketMetadataConfigurationCommandOutput
  | CreateBucketMetadataTableConfigurationCommandOutput
  | CreateMultipartUploadCommandOutput
  | CreateSessionCommandOutput
  | DeleteBucketAnalyticsConfigurationCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketCorsCommandOutput
  | DeleteBucketEncryptionCommandOutput
  | DeleteBucketIntelligentTieringConfigurationCommandOutput
  | DeleteBucketInventoryConfigurationCommandOutput
  | DeleteBucketLifecycleCommandOutput
  | DeleteBucketMetadataConfigurationCommandOutput
  | DeleteBucketMetadataTableConfigurationCommandOutput
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
  | GetBucketAbacCommandOutput
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
  | GetBucketMetadataConfigurationCommandOutput
  | GetBucketMetadataTableConfigurationCommandOutput
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
  | ListDirectoryBucketsCommandOutput
  | ListMultipartUploadsCommandOutput
  | ListObjectVersionsCommandOutput
  | ListObjectsCommandOutput
  | ListObjectsV2CommandOutput
  | ListPartsCommandOutput
  | PutBucketAbacCommandOutput
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
  | RenameObjectCommandOutput
  | RestoreObjectCommandOutput
  | SelectObjectContentCommandOutput
  | UpdateBucketMetadataInventoryTableConfigurationCommandOutput
  | UpdateBucketMetadataJournalTableConfigurationCommandOutput
  | UpdateObjectEncryptionCommandOutput
  | UploadPartCommandOutput
  | UploadPartCopyCommandOutput
  | WriteGetObjectResponseCommandOutput;

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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
  /**
   * Whether to escape request path when signing the request.
   */
  signingEscapePath?: boolean;

  /**
   * Whether to override the request region with the region inferred from requested resource's ARN. Defaults to undefined.
   */
  useArnRegion?: boolean | undefined | __Provider<boolean | undefined>;
  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;

}

/**
 * @public
 */
export type S3ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  FlexibleChecksumsInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  S3InputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of S3Client class constructor that set the region, credentials and other options.
 */
export interface S3ClientConfig extends S3ClientConfigType {}

/**
 * @public
 */
export type S3ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  FlexibleChecksumsResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  S3ResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of S3Client class. This is resolved and normalized from the {@link S3ClientConfig | constructor configuration interface}.
 */
export interface S3ClientResolvedConfig extends S3ClientResolvedConfigType {}

/**
 * <p></p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<S3ClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveFlexibleChecksumsConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveRegionConfig(_config_4);
    const _config_6 = resolveHostHeaderConfig(_config_5);
    const _config_7 = resolveEndpointConfig(_config_6);
    const _config_8 = resolveEventStreamSerdeConfig(_config_7);
    const _config_9 = resolveHttpAuthSchemeConfig(_config_8);
    const _config_10 = resolveS3Config(_config_9, { session: [() => this, CreateSessionCommand] });
    const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
    this.config = _config_11;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultS3HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: S3ClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
            "aws.auth#sigv4a": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
    this.middlewareStack.use(getS3ExpressPlugin(this.config));
    this.middlewareStack.use(getS3ExpressHttpSigningPlugin(this.config));
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
