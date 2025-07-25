// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AbortMultipartUploadCommand,
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import {
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import { CopyObjectCommand, CopyObjectCommandInput, CopyObjectCommandOutput } from "./commands/CopyObjectCommand";
import {
  CreateBucketCommand,
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
} from "./commands/CreateBucketCommand";
import {
  CreateBucketMetadataConfigurationCommand,
  CreateBucketMetadataConfigurationCommandInput,
  CreateBucketMetadataConfigurationCommandOutput,
} from "./commands/CreateBucketMetadataConfigurationCommand";
import {
  CreateBucketMetadataTableConfigurationCommand,
  CreateBucketMetadataTableConfigurationCommandInput,
  CreateBucketMetadataTableConfigurationCommandOutput,
} from "./commands/CreateBucketMetadataTableConfigurationCommand";
import {
  CreateMultipartUploadCommand,
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "./commands/CreateMultipartUploadCommand";
import {
  CreateSessionCommand,
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
} from "./commands/CreateSessionCommand";
import {
  DeleteBucketAnalyticsConfigurationCommand,
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "./commands/DeleteBucketAnalyticsConfigurationCommand";
import {
  DeleteBucketCommand,
  DeleteBucketCommandInput,
  DeleteBucketCommandOutput,
} from "./commands/DeleteBucketCommand";
import {
  DeleteBucketCorsCommand,
  DeleteBucketCorsCommandInput,
  DeleteBucketCorsCommandOutput,
} from "./commands/DeleteBucketCorsCommand";
import {
  DeleteBucketEncryptionCommand,
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "./commands/DeleteBucketEncryptionCommand";
import {
  DeleteBucketIntelligentTieringConfigurationCommand,
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
  DeleteBucketInventoryConfigurationCommand,
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "./commands/DeleteBucketInventoryConfigurationCommand";
import {
  DeleteBucketLifecycleCommand,
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "./commands/DeleteBucketLifecycleCommand";
import {
  DeleteBucketMetadataConfigurationCommand,
  DeleteBucketMetadataConfigurationCommandInput,
  DeleteBucketMetadataConfigurationCommandOutput,
} from "./commands/DeleteBucketMetadataConfigurationCommand";
import {
  DeleteBucketMetadataTableConfigurationCommand,
  DeleteBucketMetadataTableConfigurationCommandInput,
  DeleteBucketMetadataTableConfigurationCommandOutput,
} from "./commands/DeleteBucketMetadataTableConfigurationCommand";
import {
  DeleteBucketMetricsConfigurationCommand,
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "./commands/DeleteBucketMetricsConfigurationCommand";
import {
  DeleteBucketOwnershipControlsCommand,
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "./commands/DeleteBucketOwnershipControlsCommand";
import {
  DeleteBucketPolicyCommand,
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
} from "./commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommand,
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "./commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommand,
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import {
  DeleteBucketWebsiteCommand,
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "./commands/DeleteBucketWebsiteCommand";
import {
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "./commands/DeleteObjectCommand";
import {
  DeleteObjectsCommand,
  DeleteObjectsCommandInput,
  DeleteObjectsCommandOutput,
} from "./commands/DeleteObjectsCommand";
import {
  DeleteObjectTaggingCommand,
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "./commands/DeleteObjectTaggingCommand";
import {
  DeletePublicAccessBlockCommand,
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import {
  GetBucketAccelerateConfigurationCommand,
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "./commands/GetBucketAccelerateConfigurationCommand";
import {
  GetBucketAclCommand,
  GetBucketAclCommandInput,
  GetBucketAclCommandOutput,
} from "./commands/GetBucketAclCommand";
import {
  GetBucketAnalyticsConfigurationCommand,
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "./commands/GetBucketAnalyticsConfigurationCommand";
import {
  GetBucketCorsCommand,
  GetBucketCorsCommandInput,
  GetBucketCorsCommandOutput,
} from "./commands/GetBucketCorsCommand";
import {
  GetBucketEncryptionCommand,
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "./commands/GetBucketEncryptionCommand";
import {
  GetBucketIntelligentTieringConfigurationCommand,
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/GetBucketIntelligentTieringConfigurationCommand";
import {
  GetBucketInventoryConfigurationCommand,
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "./commands/GetBucketInventoryConfigurationCommand";
import {
  GetBucketLifecycleConfigurationCommand,
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import {
  GetBucketLocationCommand,
  GetBucketLocationCommandInput,
  GetBucketLocationCommandOutput,
} from "./commands/GetBucketLocationCommand";
import {
  GetBucketLoggingCommand,
  GetBucketLoggingCommandInput,
  GetBucketLoggingCommandOutput,
} from "./commands/GetBucketLoggingCommand";
import {
  GetBucketMetadataConfigurationCommand,
  GetBucketMetadataConfigurationCommandInput,
  GetBucketMetadataConfigurationCommandOutput,
} from "./commands/GetBucketMetadataConfigurationCommand";
import {
  GetBucketMetadataTableConfigurationCommand,
  GetBucketMetadataTableConfigurationCommandInput,
  GetBucketMetadataTableConfigurationCommandOutput,
} from "./commands/GetBucketMetadataTableConfigurationCommand";
import {
  GetBucketMetricsConfigurationCommand,
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "./commands/GetBucketMetricsConfigurationCommand";
import {
  GetBucketNotificationConfigurationCommand,
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "./commands/GetBucketNotificationConfigurationCommand";
import {
  GetBucketOwnershipControlsCommand,
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "./commands/GetBucketOwnershipControlsCommand";
import {
  GetBucketPolicyCommand,
  GetBucketPolicyCommandInput,
  GetBucketPolicyCommandOutput,
} from "./commands/GetBucketPolicyCommand";
import {
  GetBucketPolicyStatusCommand,
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "./commands/GetBucketPolicyStatusCommand";
import {
  GetBucketReplicationCommand,
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "./commands/GetBucketReplicationCommand";
import {
  GetBucketRequestPaymentCommand,
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "./commands/GetBucketRequestPaymentCommand";
import {
  GetBucketTaggingCommand,
  GetBucketTaggingCommandInput,
  GetBucketTaggingCommandOutput,
} from "./commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommand,
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "./commands/GetBucketVersioningCommand";
import {
  GetBucketWebsiteCommand,
  GetBucketWebsiteCommandInput,
  GetBucketWebsiteCommandOutput,
} from "./commands/GetBucketWebsiteCommand";
import {
  GetObjectAclCommand,
  GetObjectAclCommandInput,
  GetObjectAclCommandOutput,
} from "./commands/GetObjectAclCommand";
import {
  GetObjectAttributesCommand,
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import { GetObjectCommand, GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import {
  GetObjectLegalHoldCommand,
  GetObjectLegalHoldCommandInput,
  GetObjectLegalHoldCommandOutput,
} from "./commands/GetObjectLegalHoldCommand";
import {
  GetObjectLockConfigurationCommand,
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "./commands/GetObjectLockConfigurationCommand";
import {
  GetObjectRetentionCommand,
  GetObjectRetentionCommandInput,
  GetObjectRetentionCommandOutput,
} from "./commands/GetObjectRetentionCommand";
import {
  GetObjectTaggingCommand,
  GetObjectTaggingCommandInput,
  GetObjectTaggingCommandOutput,
} from "./commands/GetObjectTaggingCommand";
import {
  GetObjectTorrentCommand,
  GetObjectTorrentCommandInput,
  GetObjectTorrentCommandOutput,
} from "./commands/GetObjectTorrentCommand";
import {
  GetPublicAccessBlockCommand,
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import { HeadBucketCommand, HeadBucketCommandInput, HeadBucketCommandOutput } from "./commands/HeadBucketCommand";
import { HeadObjectCommand, HeadObjectCommandInput, HeadObjectCommandOutput } from "./commands/HeadObjectCommand";
import {
  ListBucketAnalyticsConfigurationsCommand,
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "./commands/ListBucketAnalyticsConfigurationsCommand";
import {
  ListBucketIntelligentTieringConfigurationsCommand,
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "./commands/ListBucketIntelligentTieringConfigurationsCommand";
import {
  ListBucketInventoryConfigurationsCommand,
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "./commands/ListBucketInventoryConfigurationsCommand";
import {
  ListBucketMetricsConfigurationsCommand,
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "./commands/ListBucketMetricsConfigurationsCommand";
import { ListBucketsCommand, ListBucketsCommandInput, ListBucketsCommandOutput } from "./commands/ListBucketsCommand";
import {
  ListDirectoryBucketsCommand,
  ListDirectoryBucketsCommandInput,
  ListDirectoryBucketsCommandOutput,
} from "./commands/ListDirectoryBucketsCommand";
import {
  ListMultipartUploadsCommand,
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import { ListObjectsCommand, ListObjectsCommandInput, ListObjectsCommandOutput } from "./commands/ListObjectsCommand";
import {
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from "./commands/ListObjectsV2Command";
import {
  ListObjectVersionsCommand,
  ListObjectVersionsCommandInput,
  ListObjectVersionsCommandOutput,
} from "./commands/ListObjectVersionsCommand";
import { ListPartsCommand, ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand";
import {
  PutBucketAccelerateConfigurationCommand,
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "./commands/PutBucketAccelerateConfigurationCommand";
import {
  PutBucketAclCommand,
  PutBucketAclCommandInput,
  PutBucketAclCommandOutput,
} from "./commands/PutBucketAclCommand";
import {
  PutBucketAnalyticsConfigurationCommand,
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "./commands/PutBucketAnalyticsConfigurationCommand";
import {
  PutBucketCorsCommand,
  PutBucketCorsCommandInput,
  PutBucketCorsCommandOutput,
} from "./commands/PutBucketCorsCommand";
import {
  PutBucketEncryptionCommand,
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "./commands/PutBucketEncryptionCommand";
import {
  PutBucketIntelligentTieringConfigurationCommand,
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/PutBucketIntelligentTieringConfigurationCommand";
import {
  PutBucketInventoryConfigurationCommand,
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "./commands/PutBucketInventoryConfigurationCommand";
import {
  PutBucketLifecycleConfigurationCommand,
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import {
  PutBucketLoggingCommand,
  PutBucketLoggingCommandInput,
  PutBucketLoggingCommandOutput,
} from "./commands/PutBucketLoggingCommand";
import {
  PutBucketMetricsConfigurationCommand,
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "./commands/PutBucketMetricsConfigurationCommand";
import {
  PutBucketNotificationConfigurationCommand,
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "./commands/PutBucketNotificationConfigurationCommand";
import {
  PutBucketOwnershipControlsCommand,
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "./commands/PutBucketOwnershipControlsCommand";
import {
  PutBucketPolicyCommand,
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
} from "./commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommand,
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "./commands/PutBucketReplicationCommand";
import {
  PutBucketRequestPaymentCommand,
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "./commands/PutBucketRequestPaymentCommand";
import {
  PutBucketTaggingCommand,
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
} from "./commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommand,
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "./commands/PutBucketVersioningCommand";
import {
  PutBucketWebsiteCommand,
  PutBucketWebsiteCommandInput,
  PutBucketWebsiteCommandOutput,
} from "./commands/PutBucketWebsiteCommand";
import {
  PutObjectAclCommand,
  PutObjectAclCommandInput,
  PutObjectAclCommandOutput,
} from "./commands/PutObjectAclCommand";
import { PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand";
import {
  PutObjectLegalHoldCommand,
  PutObjectLegalHoldCommandInput,
  PutObjectLegalHoldCommandOutput,
} from "./commands/PutObjectLegalHoldCommand";
import {
  PutObjectLockConfigurationCommand,
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "./commands/PutObjectLockConfigurationCommand";
import {
  PutObjectRetentionCommand,
  PutObjectRetentionCommandInput,
  PutObjectRetentionCommandOutput,
} from "./commands/PutObjectRetentionCommand";
import {
  PutObjectTaggingCommand,
  PutObjectTaggingCommandInput,
  PutObjectTaggingCommandOutput,
} from "./commands/PutObjectTaggingCommand";
import {
  PutPublicAccessBlockCommand,
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import {
  RenameObjectCommand,
  RenameObjectCommandInput,
  RenameObjectCommandOutput,
} from "./commands/RenameObjectCommand";
import {
  RestoreObjectCommand,
  RestoreObjectCommandInput,
  RestoreObjectCommandOutput,
} from "./commands/RestoreObjectCommand";
import {
  SelectObjectContentCommand,
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "./commands/SelectObjectContentCommand";
import {
  UpdateBucketMetadataInventoryTableConfigurationCommand,
  UpdateBucketMetadataInventoryTableConfigurationCommandInput,
  UpdateBucketMetadataInventoryTableConfigurationCommandOutput,
} from "./commands/UpdateBucketMetadataInventoryTableConfigurationCommand";
import {
  UpdateBucketMetadataJournalTableConfigurationCommand,
  UpdateBucketMetadataJournalTableConfigurationCommandInput,
  UpdateBucketMetadataJournalTableConfigurationCommandOutput,
} from "./commands/UpdateBucketMetadataJournalTableConfigurationCommand";
import { UploadPartCommand, UploadPartCommandInput, UploadPartCommandOutput } from "./commands/UploadPartCommand";
import {
  UploadPartCopyCommand,
  UploadPartCopyCommandInput,
  UploadPartCopyCommandOutput,
} from "./commands/UploadPartCopyCommand";
import {
  WriteGetObjectResponseCommand,
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "./commands/WriteGetObjectResponseCommand";
import { S3Client, S3ClientConfig } from "./S3Client";

const commands = {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CopyObjectCommand,
  CreateBucketCommand,
  CreateBucketMetadataConfigurationCommand,
  CreateBucketMetadataTableConfigurationCommand,
  CreateMultipartUploadCommand,
  CreateSessionCommand,
  DeleteBucketCommand,
  DeleteBucketAnalyticsConfigurationCommand,
  DeleteBucketCorsCommand,
  DeleteBucketEncryptionCommand,
  DeleteBucketIntelligentTieringConfigurationCommand,
  DeleteBucketInventoryConfigurationCommand,
  DeleteBucketLifecycleCommand,
  DeleteBucketMetadataConfigurationCommand,
  DeleteBucketMetadataTableConfigurationCommand,
  DeleteBucketMetricsConfigurationCommand,
  DeleteBucketOwnershipControlsCommand,
  DeleteBucketPolicyCommand,
  DeleteBucketReplicationCommand,
  DeleteBucketTaggingCommand,
  DeleteBucketWebsiteCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  DeleteObjectTaggingCommand,
  DeletePublicAccessBlockCommand,
  GetBucketAccelerateConfigurationCommand,
  GetBucketAclCommand,
  GetBucketAnalyticsConfigurationCommand,
  GetBucketCorsCommand,
  GetBucketEncryptionCommand,
  GetBucketIntelligentTieringConfigurationCommand,
  GetBucketInventoryConfigurationCommand,
  GetBucketLifecycleConfigurationCommand,
  GetBucketLocationCommand,
  GetBucketLoggingCommand,
  GetBucketMetadataConfigurationCommand,
  GetBucketMetadataTableConfigurationCommand,
  GetBucketMetricsConfigurationCommand,
  GetBucketNotificationConfigurationCommand,
  GetBucketOwnershipControlsCommand,
  GetBucketPolicyCommand,
  GetBucketPolicyStatusCommand,
  GetBucketReplicationCommand,
  GetBucketRequestPaymentCommand,
  GetBucketTaggingCommand,
  GetBucketVersioningCommand,
  GetBucketWebsiteCommand,
  GetObjectCommand,
  GetObjectAclCommand,
  GetObjectAttributesCommand,
  GetObjectLegalHoldCommand,
  GetObjectLockConfigurationCommand,
  GetObjectRetentionCommand,
  GetObjectTaggingCommand,
  GetObjectTorrentCommand,
  GetPublicAccessBlockCommand,
  HeadBucketCommand,
  HeadObjectCommand,
  ListBucketAnalyticsConfigurationsCommand,
  ListBucketIntelligentTieringConfigurationsCommand,
  ListBucketInventoryConfigurationsCommand,
  ListBucketMetricsConfigurationsCommand,
  ListBucketsCommand,
  ListDirectoryBucketsCommand,
  ListMultipartUploadsCommand,
  ListObjectsCommand,
  ListObjectsV2Command,
  ListObjectVersionsCommand,
  ListPartsCommand,
  PutBucketAccelerateConfigurationCommand,
  PutBucketAclCommand,
  PutBucketAnalyticsConfigurationCommand,
  PutBucketCorsCommand,
  PutBucketEncryptionCommand,
  PutBucketIntelligentTieringConfigurationCommand,
  PutBucketInventoryConfigurationCommand,
  PutBucketLifecycleConfigurationCommand,
  PutBucketLoggingCommand,
  PutBucketMetricsConfigurationCommand,
  PutBucketNotificationConfigurationCommand,
  PutBucketOwnershipControlsCommand,
  PutBucketPolicyCommand,
  PutBucketReplicationCommand,
  PutBucketRequestPaymentCommand,
  PutBucketTaggingCommand,
  PutBucketVersioningCommand,
  PutBucketWebsiteCommand,
  PutObjectCommand,
  PutObjectAclCommand,
  PutObjectLegalHoldCommand,
  PutObjectLockConfigurationCommand,
  PutObjectRetentionCommand,
  PutObjectTaggingCommand,
  PutPublicAccessBlockCommand,
  RenameObjectCommand,
  RestoreObjectCommand,
  SelectObjectContentCommand,
  UpdateBucketMetadataInventoryTableConfigurationCommand,
  UpdateBucketMetadataJournalTableConfigurationCommand,
  UploadPartCommand,
  UploadPartCopyCommand,
  WriteGetObjectResponseCommand,
};

export interface S3 {
  /**
   * @see {@link AbortMultipartUploadCommand}
   */
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortMultipartUploadCommandOutput>;
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteMultipartUploadCommandOutput>;
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyObjectCommand}
   */
  copyObject(args: CopyObjectCommandInput, options?: __HttpHandlerOptions): Promise<CopyObjectCommandOutput>;
  copyObject(args: CopyObjectCommandInput, cb: (err: any, data?: CopyObjectCommandOutput) => void): void;
  copyObject(
    args: CopyObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBucketCommand}
   */
  createBucket(args: CreateBucketCommandInput, options?: __HttpHandlerOptions): Promise<CreateBucketCommandOutput>;
  createBucket(args: CreateBucketCommandInput, cb: (err: any, data?: CreateBucketCommandOutput) => void): void;
  createBucket(
    args: CreateBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBucketMetadataConfigurationCommand}
   */
  createBucketMetadataConfiguration(
    args: CreateBucketMetadataConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBucketMetadataConfigurationCommandOutput>;
  createBucketMetadataConfiguration(
    args: CreateBucketMetadataConfigurationCommandInput,
    cb: (err: any, data?: CreateBucketMetadataConfigurationCommandOutput) => void
  ): void;
  createBucketMetadataConfiguration(
    args: CreateBucketMetadataConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBucketMetadataConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBucketMetadataTableConfigurationCommand}
   */
  createBucketMetadataTableConfiguration(
    args: CreateBucketMetadataTableConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBucketMetadataTableConfigurationCommandOutput>;
  createBucketMetadataTableConfiguration(
    args: CreateBucketMetadataTableConfigurationCommandInput,
    cb: (err: any, data?: CreateBucketMetadataTableConfigurationCommandOutput) => void
  ): void;
  createBucketMetadataTableConfiguration(
    args: CreateBucketMetadataTableConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBucketMetadataTableConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMultipartUploadCommand}
   */
  createMultipartUpload(
    args: CreateMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMultipartUploadCommandOutput>;
  createMultipartUpload(
    args: CreateMultipartUploadCommandInput,
    cb: (err: any, data?: CreateMultipartUploadCommandOutput) => void
  ): void;
  createMultipartUpload(
    args: CreateMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(args: CreateSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSessionCommandOutput>;
  createSession(args: CreateSessionCommandInput, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
  createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketCommand}
   */
  deleteBucket(args: DeleteBucketCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBucketCommandOutput>;
  deleteBucket(args: DeleteBucketCommandInput, cb: (err: any, data?: DeleteBucketCommandOutput) => void): void;
  deleteBucket(
    args: DeleteBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketAnalyticsConfigurationCommand}
   */
  deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketAnalyticsConfigurationCommandOutput>;
  deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketAnalyticsConfigurationCommandOutput) => void
  ): void;
  deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketAnalyticsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketCorsCommand}
   */
  deleteBucketCors(
    args: DeleteBucketCorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketCorsCommandOutput>;
  deleteBucketCors(
    args: DeleteBucketCorsCommandInput,
    cb: (err: any, data?: DeleteBucketCorsCommandOutput) => void
  ): void;
  deleteBucketCors(
    args: DeleteBucketCorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketCorsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketEncryptionCommand}
   */
  deleteBucketEncryption(
    args: DeleteBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketEncryptionCommandOutput>;
  deleteBucketEncryption(
    args: DeleteBucketEncryptionCommandInput,
    cb: (err: any, data?: DeleteBucketEncryptionCommandOutput) => void
  ): void;
  deleteBucketEncryption(
    args: DeleteBucketEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketIntelligentTieringConfigurationCommand}
   */
  deleteBucketIntelligentTieringConfiguration(
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput>;
  deleteBucketIntelligentTieringConfiguration(
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketIntelligentTieringConfigurationCommandOutput) => void
  ): void;
  deleteBucketIntelligentTieringConfiguration(
    args: DeleteBucketIntelligentTieringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketIntelligentTieringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketInventoryConfigurationCommand}
   */
  deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketInventoryConfigurationCommandOutput>;
  deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketInventoryConfigurationCommandOutput) => void
  ): void;
  deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketInventoryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketLifecycleCommand}
   */
  deleteBucketLifecycle(
    args: DeleteBucketLifecycleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketLifecycleCommandOutput>;
  deleteBucketLifecycle(
    args: DeleteBucketLifecycleCommandInput,
    cb: (err: any, data?: DeleteBucketLifecycleCommandOutput) => void
  ): void;
  deleteBucketLifecycle(
    args: DeleteBucketLifecycleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketLifecycleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketMetadataConfigurationCommand}
   */
  deleteBucketMetadataConfiguration(
    args: DeleteBucketMetadataConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketMetadataConfigurationCommandOutput>;
  deleteBucketMetadataConfiguration(
    args: DeleteBucketMetadataConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketMetadataConfigurationCommandOutput) => void
  ): void;
  deleteBucketMetadataConfiguration(
    args: DeleteBucketMetadataConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketMetadataConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketMetadataTableConfigurationCommand}
   */
  deleteBucketMetadataTableConfiguration(
    args: DeleteBucketMetadataTableConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketMetadataTableConfigurationCommandOutput>;
  deleteBucketMetadataTableConfiguration(
    args: DeleteBucketMetadataTableConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketMetadataTableConfigurationCommandOutput) => void
  ): void;
  deleteBucketMetadataTableConfiguration(
    args: DeleteBucketMetadataTableConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketMetadataTableConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketMetricsConfigurationCommand}
   */
  deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketMetricsConfigurationCommandOutput>;
  deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationCommandInput,
    cb: (err: any, data?: DeleteBucketMetricsConfigurationCommandOutput) => void
  ): void;
  deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketMetricsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketOwnershipControlsCommand}
   */
  deleteBucketOwnershipControls(
    args: DeleteBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketOwnershipControlsCommandOutput>;
  deleteBucketOwnershipControls(
    args: DeleteBucketOwnershipControlsCommandInput,
    cb: (err: any, data?: DeleteBucketOwnershipControlsCommandOutput) => void
  ): void;
  deleteBucketOwnershipControls(
    args: DeleteBucketOwnershipControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketOwnershipControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketPolicyCommand}
   */
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketPolicyCommandOutput>;
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void
  ): void;
  deleteBucketPolicy(
    args: DeleteBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketReplicationCommand}
   */
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketReplicationCommandOutput>;
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    cb: (err: any, data?: DeleteBucketReplicationCommandOutput) => void
  ): void;
  deleteBucketReplication(
    args: DeleteBucketReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketTaggingCommand}
   */
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketTaggingCommandOutput>;
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void
  ): void;
  deleteBucketTagging(
    args: DeleteBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBucketWebsiteCommand}
   */
  deleteBucketWebsite(
    args: DeleteBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBucketWebsiteCommandOutput>;
  deleteBucketWebsite(
    args: DeleteBucketWebsiteCommandInput,
    cb: (err: any, data?: DeleteBucketWebsiteCommandOutput) => void
  ): void;
  deleteBucketWebsite(
    args: DeleteBucketWebsiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBucketWebsiteCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteObjectCommand}
   */
  deleteObject(args: DeleteObjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteObjectCommandOutput>;
  deleteObject(args: DeleteObjectCommandInput, cb: (err: any, data?: DeleteObjectCommandOutput) => void): void;
  deleteObject(
    args: DeleteObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteObjectsCommand}
   */
  deleteObjects(args: DeleteObjectsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteObjectsCommandOutput>;
  deleteObjects(args: DeleteObjectsCommandInput, cb: (err: any, data?: DeleteObjectsCommandOutput) => void): void;
  deleteObjects(
    args: DeleteObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteObjectTaggingCommand}
   */
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObjectTaggingCommandOutput>;
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    cb: (err: any, data?: DeleteObjectTaggingCommandOutput) => void
  ): void;
  deleteObjectTagging(
    args: DeleteObjectTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublicAccessBlockCommand}
   */
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicAccessBlockCommandOutput>;
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;
  deletePublicAccessBlock(
    args: DeletePublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicAccessBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketAccelerateConfigurationCommand}
   */
  getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketAccelerateConfigurationCommandOutput>;
  getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationCommandInput,
    cb: (err: any, data?: GetBucketAccelerateConfigurationCommandOutput) => void
  ): void;
  getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketAccelerateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketAclCommand}
   */
  getBucketAcl(args: GetBucketAclCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketAclCommandOutput>;
  getBucketAcl(args: GetBucketAclCommandInput, cb: (err: any, data?: GetBucketAclCommandOutput) => void): void;
  getBucketAcl(
    args: GetBucketAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketAclCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketAnalyticsConfigurationCommand}
   */
  getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketAnalyticsConfigurationCommandOutput>;
  getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationCommandInput,
    cb: (err: any, data?: GetBucketAnalyticsConfigurationCommandOutput) => void
  ): void;
  getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketAnalyticsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketCorsCommand}
   */
  getBucketCors(args: GetBucketCorsCommandInput, options?: __HttpHandlerOptions): Promise<GetBucketCorsCommandOutput>;
  getBucketCors(args: GetBucketCorsCommandInput, cb: (err: any, data?: GetBucketCorsCommandOutput) => void): void;
  getBucketCors(
    args: GetBucketCorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketCorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketEncryptionCommand}
   */
  getBucketEncryption(
    args: GetBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketEncryptionCommandOutput>;
  getBucketEncryption(
    args: GetBucketEncryptionCommandInput,
    cb: (err: any, data?: GetBucketEncryptionCommandOutput) => void
  ): void;
  getBucketEncryption(
    args: GetBucketEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketIntelligentTieringConfigurationCommand}
   */
  getBucketIntelligentTieringConfiguration(
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketIntelligentTieringConfigurationCommandOutput>;
  getBucketIntelligentTieringConfiguration(
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    cb: (err: any, data?: GetBucketIntelligentTieringConfigurationCommandOutput) => void
  ): void;
  getBucketIntelligentTieringConfiguration(
    args: GetBucketIntelligentTieringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketIntelligentTieringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketInventoryConfigurationCommand}
   */
  getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketInventoryConfigurationCommandOutput>;
  getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationCommandInput,
    cb: (err: any, data?: GetBucketInventoryConfigurationCommandOutput) => void
  ): void;
  getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketInventoryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketLifecycleConfigurationCommand}
   */
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketLifecycleConfigurationCommandOutput>;
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketLifecycleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketLocationCommand}
   */
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketLocationCommandOutput>;
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    cb: (err: any, data?: GetBucketLocationCommandOutput) => void
  ): void;
  getBucketLocation(
    args: GetBucketLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketLoggingCommand}
   */
  getBucketLogging(
    args: GetBucketLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketLoggingCommandOutput>;
  getBucketLogging(
    args: GetBucketLoggingCommandInput,
    cb: (err: any, data?: GetBucketLoggingCommandOutput) => void
  ): void;
  getBucketLogging(
    args: GetBucketLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketMetadataConfigurationCommand}
   */
  getBucketMetadataConfiguration(
    args: GetBucketMetadataConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketMetadataConfigurationCommandOutput>;
  getBucketMetadataConfiguration(
    args: GetBucketMetadataConfigurationCommandInput,
    cb: (err: any, data?: GetBucketMetadataConfigurationCommandOutput) => void
  ): void;
  getBucketMetadataConfiguration(
    args: GetBucketMetadataConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketMetadataConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketMetadataTableConfigurationCommand}
   */
  getBucketMetadataTableConfiguration(
    args: GetBucketMetadataTableConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketMetadataTableConfigurationCommandOutput>;
  getBucketMetadataTableConfiguration(
    args: GetBucketMetadataTableConfigurationCommandInput,
    cb: (err: any, data?: GetBucketMetadataTableConfigurationCommandOutput) => void
  ): void;
  getBucketMetadataTableConfiguration(
    args: GetBucketMetadataTableConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketMetadataTableConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketMetricsConfigurationCommand}
   */
  getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketMetricsConfigurationCommandOutput>;
  getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationCommandInput,
    cb: (err: any, data?: GetBucketMetricsConfigurationCommandOutput) => void
  ): void;
  getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketMetricsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketNotificationConfigurationCommand}
   */
  getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketNotificationConfigurationCommandOutput>;
  getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationCommandInput,
    cb: (err: any, data?: GetBucketNotificationConfigurationCommandOutput) => void
  ): void;
  getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketOwnershipControlsCommand}
   */
  getBucketOwnershipControls(
    args: GetBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketOwnershipControlsCommandOutput>;
  getBucketOwnershipControls(
    args: GetBucketOwnershipControlsCommandInput,
    cb: (err: any, data?: GetBucketOwnershipControlsCommandOutput) => void
  ): void;
  getBucketOwnershipControls(
    args: GetBucketOwnershipControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketOwnershipControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketPolicyCommand}
   */
  getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketPolicyCommandOutput>;
  getBucketPolicy(args: GetBucketPolicyCommandInput, cb: (err: any, data?: GetBucketPolicyCommandOutput) => void): void;
  getBucketPolicy(
    args: GetBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketPolicyStatusCommand}
   */
  getBucketPolicyStatus(
    args: GetBucketPolicyStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketPolicyStatusCommandOutput>;
  getBucketPolicyStatus(
    args: GetBucketPolicyStatusCommandInput,
    cb: (err: any, data?: GetBucketPolicyStatusCommandOutput) => void
  ): void;
  getBucketPolicyStatus(
    args: GetBucketPolicyStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketPolicyStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketReplicationCommand}
   */
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketReplicationCommandOutput>;
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    cb: (err: any, data?: GetBucketReplicationCommandOutput) => void
  ): void;
  getBucketReplication(
    args: GetBucketReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketRequestPaymentCommand}
   */
  getBucketRequestPayment(
    args: GetBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketRequestPaymentCommandOutput>;
  getBucketRequestPayment(
    args: GetBucketRequestPaymentCommandInput,
    cb: (err: any, data?: GetBucketRequestPaymentCommandOutput) => void
  ): void;
  getBucketRequestPayment(
    args: GetBucketRequestPaymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketRequestPaymentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketTaggingCommand}
   */
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketTaggingCommandOutput>;
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    cb: (err: any, data?: GetBucketTaggingCommandOutput) => void
  ): void;
  getBucketTagging(
    args: GetBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketVersioningCommand}
   */
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketVersioningCommandOutput>;
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    cb: (err: any, data?: GetBucketVersioningCommandOutput) => void
  ): void;
  getBucketVersioning(
    args: GetBucketVersioningCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketVersioningCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketWebsiteCommand}
   */
  getBucketWebsite(
    args: GetBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketWebsiteCommandOutput>;
  getBucketWebsite(
    args: GetBucketWebsiteCommandInput,
    cb: (err: any, data?: GetBucketWebsiteCommandOutput) => void
  ): void;
  getBucketWebsite(
    args: GetBucketWebsiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketWebsiteCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectCommand}
   */
  getObject(args: GetObjectCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectCommandOutput>;
  getObject(args: GetObjectCommandInput, cb: (err: any, data?: GetObjectCommandOutput) => void): void;
  getObject(
    args: GetObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectAclCommand}
   */
  getObjectAcl(args: GetObjectAclCommandInput, options?: __HttpHandlerOptions): Promise<GetObjectAclCommandOutput>;
  getObjectAcl(args: GetObjectAclCommandInput, cb: (err: any, data?: GetObjectAclCommandOutput) => void): void;
  getObjectAcl(
    args: GetObjectAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectAclCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectAttributesCommand}
   */
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectAttributesCommandOutput>;
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;
  getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectLegalHoldCommand}
   */
  getObjectLegalHold(
    args: GetObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectLegalHoldCommandOutput>;
  getObjectLegalHold(
    args: GetObjectLegalHoldCommandInput,
    cb: (err: any, data?: GetObjectLegalHoldCommandOutput) => void
  ): void;
  getObjectLegalHold(
    args: GetObjectLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectLegalHoldCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectLockConfigurationCommand}
   */
  getObjectLockConfiguration(
    args: GetObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectLockConfigurationCommandOutput>;
  getObjectLockConfiguration(
    args: GetObjectLockConfigurationCommandInput,
    cb: (err: any, data?: GetObjectLockConfigurationCommandOutput) => void
  ): void;
  getObjectLockConfiguration(
    args: GetObjectLockConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectLockConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectRetentionCommand}
   */
  getObjectRetention(
    args: GetObjectRetentionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectRetentionCommandOutput>;
  getObjectRetention(
    args: GetObjectRetentionCommandInput,
    cb: (err: any, data?: GetObjectRetentionCommandOutput) => void
  ): void;
  getObjectRetention(
    args: GetObjectRetentionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectRetentionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectTaggingCommand}
   */
  getObjectTagging(
    args: GetObjectTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectTaggingCommandOutput>;
  getObjectTagging(
    args: GetObjectTaggingCommandInput,
    cb: (err: any, data?: GetObjectTaggingCommandOutput) => void
  ): void;
  getObjectTagging(
    args: GetObjectTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetObjectTorrentCommand}
   */
  getObjectTorrent(
    args: GetObjectTorrentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectTorrentCommandOutput>;
  getObjectTorrent(
    args: GetObjectTorrentCommandInput,
    cb: (err: any, data?: GetObjectTorrentCommandOutput) => void
  ): void;
  getObjectTorrent(
    args: GetObjectTorrentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectTorrentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicAccessBlockCommand}
   */
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicAccessBlockCommandOutput>;
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;
  getPublicAccessBlock(
    args: GetPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicAccessBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link HeadBucketCommand}
   */
  headBucket(args: HeadBucketCommandInput, options?: __HttpHandlerOptions): Promise<HeadBucketCommandOutput>;
  headBucket(args: HeadBucketCommandInput, cb: (err: any, data?: HeadBucketCommandOutput) => void): void;
  headBucket(
    args: HeadBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HeadBucketCommandOutput) => void
  ): void;

  /**
   * @see {@link HeadObjectCommand}
   */
  headObject(args: HeadObjectCommandInput, options?: __HttpHandlerOptions): Promise<HeadObjectCommandOutput>;
  headObject(args: HeadObjectCommandInput, cb: (err: any, data?: HeadObjectCommandOutput) => void): void;
  headObject(
    args: HeadObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: HeadObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBucketAnalyticsConfigurationsCommand}
   */
  listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBucketAnalyticsConfigurationsCommandOutput>;
  listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsCommandInput,
    cb: (err: any, data?: ListBucketAnalyticsConfigurationsCommandOutput) => void
  ): void;
  listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBucketAnalyticsConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBucketIntelligentTieringConfigurationsCommand}
   */
  listBucketIntelligentTieringConfigurations(
    args: ListBucketIntelligentTieringConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput>;
  listBucketIntelligentTieringConfigurations(
    args: ListBucketIntelligentTieringConfigurationsCommandInput,
    cb: (err: any, data?: ListBucketIntelligentTieringConfigurationsCommandOutput) => void
  ): void;
  listBucketIntelligentTieringConfigurations(
    args: ListBucketIntelligentTieringConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBucketIntelligentTieringConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBucketInventoryConfigurationsCommand}
   */
  listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBucketInventoryConfigurationsCommandOutput>;
  listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsCommandInput,
    cb: (err: any, data?: ListBucketInventoryConfigurationsCommandOutput) => void
  ): void;
  listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBucketInventoryConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBucketMetricsConfigurationsCommand}
   */
  listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBucketMetricsConfigurationsCommandOutput>;
  listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsCommandInput,
    cb: (err: any, data?: ListBucketMetricsConfigurationsCommandOutput) => void
  ): void;
  listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBucketMetricsConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBucketsCommand}
   */
  listBuckets(): Promise<ListBucketsCommandOutput>;
  listBuckets(args: ListBucketsCommandInput, options?: __HttpHandlerOptions): Promise<ListBucketsCommandOutput>;
  listBuckets(args: ListBucketsCommandInput, cb: (err: any, data?: ListBucketsCommandOutput) => void): void;
  listBuckets(
    args: ListBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDirectoryBucketsCommand}
   */
  listDirectoryBuckets(): Promise<ListDirectoryBucketsCommandOutput>;
  listDirectoryBuckets(
    args: ListDirectoryBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDirectoryBucketsCommandOutput>;
  listDirectoryBuckets(
    args: ListDirectoryBucketsCommandInput,
    cb: (err: any, data?: ListDirectoryBucketsCommandOutput) => void
  ): void;
  listDirectoryBuckets(
    args: ListDirectoryBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDirectoryBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultipartUploadsCommandOutput>;
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectsCommand}
   */
  listObjects(args: ListObjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListObjectsCommandOutput>;
  listObjects(args: ListObjectsCommandInput, cb: (err: any, data?: ListObjectsCommandOutput) => void): void;
  listObjects(
    args: ListObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectsV2Command}
   */
  listObjectsV2(args: ListObjectsV2CommandInput, options?: __HttpHandlerOptions): Promise<ListObjectsV2CommandOutput>;
  listObjectsV2(args: ListObjectsV2CommandInput, cb: (err: any, data?: ListObjectsV2CommandOutput) => void): void;
  listObjectsV2(
    args: ListObjectsV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectsV2CommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectVersionsCommand}
   */
  listObjectVersions(
    args: ListObjectVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectVersionsCommandOutput>;
  listObjectVersions(
    args: ListObjectVersionsCommandInput,
    cb: (err: any, data?: ListObjectVersionsCommandOutput) => void
  ): void;
  listObjectVersions(
    args: ListObjectVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartsCommand}
   */
  listParts(args: ListPartsCommandInput, options?: __HttpHandlerOptions): Promise<ListPartsCommandOutput>;
  listParts(args: ListPartsCommandInput, cb: (err: any, data?: ListPartsCommandOutput) => void): void;
  listParts(
    args: ListPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketAccelerateConfigurationCommand}
   */
  putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketAccelerateConfigurationCommandOutput>;
  putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationCommandInput,
    cb: (err: any, data?: PutBucketAccelerateConfigurationCommandOutput) => void
  ): void;
  putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketAccelerateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketAclCommand}
   */
  putBucketAcl(args: PutBucketAclCommandInput, options?: __HttpHandlerOptions): Promise<PutBucketAclCommandOutput>;
  putBucketAcl(args: PutBucketAclCommandInput, cb: (err: any, data?: PutBucketAclCommandOutput) => void): void;
  putBucketAcl(
    args: PutBucketAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketAclCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketAnalyticsConfigurationCommand}
   */
  putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketAnalyticsConfigurationCommandOutput>;
  putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationCommandInput,
    cb: (err: any, data?: PutBucketAnalyticsConfigurationCommandOutput) => void
  ): void;
  putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketAnalyticsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketCorsCommand}
   */
  putBucketCors(args: PutBucketCorsCommandInput, options?: __HttpHandlerOptions): Promise<PutBucketCorsCommandOutput>;
  putBucketCors(args: PutBucketCorsCommandInput, cb: (err: any, data?: PutBucketCorsCommandOutput) => void): void;
  putBucketCors(
    args: PutBucketCorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketCorsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketEncryptionCommand}
   */
  putBucketEncryption(
    args: PutBucketEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketEncryptionCommandOutput>;
  putBucketEncryption(
    args: PutBucketEncryptionCommandInput,
    cb: (err: any, data?: PutBucketEncryptionCommandOutput) => void
  ): void;
  putBucketEncryption(
    args: PutBucketEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketIntelligentTieringConfigurationCommand}
   */
  putBucketIntelligentTieringConfiguration(
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketIntelligentTieringConfigurationCommandOutput>;
  putBucketIntelligentTieringConfiguration(
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    cb: (err: any, data?: PutBucketIntelligentTieringConfigurationCommandOutput) => void
  ): void;
  putBucketIntelligentTieringConfiguration(
    args: PutBucketIntelligentTieringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketIntelligentTieringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketInventoryConfigurationCommand}
   */
  putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketInventoryConfigurationCommandOutput>;
  putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationCommandInput,
    cb: (err: any, data?: PutBucketInventoryConfigurationCommandOutput) => void
  ): void;
  putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketInventoryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketLifecycleConfigurationCommand}
   */
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketLifecycleConfigurationCommandOutput>;
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void
  ): void;
  putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketLifecycleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketLoggingCommand}
   */
  putBucketLogging(
    args: PutBucketLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketLoggingCommandOutput>;
  putBucketLogging(
    args: PutBucketLoggingCommandInput,
    cb: (err: any, data?: PutBucketLoggingCommandOutput) => void
  ): void;
  putBucketLogging(
    args: PutBucketLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketMetricsConfigurationCommand}
   */
  putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketMetricsConfigurationCommandOutput>;
  putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationCommandInput,
    cb: (err: any, data?: PutBucketMetricsConfigurationCommandOutput) => void
  ): void;
  putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketMetricsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketNotificationConfigurationCommand}
   */
  putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketNotificationConfigurationCommandOutput>;
  putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationCommandInput,
    cb: (err: any, data?: PutBucketNotificationConfigurationCommandOutput) => void
  ): void;
  putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketOwnershipControlsCommand}
   */
  putBucketOwnershipControls(
    args: PutBucketOwnershipControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketOwnershipControlsCommandOutput>;
  putBucketOwnershipControls(
    args: PutBucketOwnershipControlsCommandInput,
    cb: (err: any, data?: PutBucketOwnershipControlsCommandOutput) => void
  ): void;
  putBucketOwnershipControls(
    args: PutBucketOwnershipControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketOwnershipControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketPolicyCommand}
   */
  putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketPolicyCommandOutput>;
  putBucketPolicy(args: PutBucketPolicyCommandInput, cb: (err: any, data?: PutBucketPolicyCommandOutput) => void): void;
  putBucketPolicy(
    args: PutBucketPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketReplicationCommand}
   */
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketReplicationCommandOutput>;
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    cb: (err: any, data?: PutBucketReplicationCommandOutput) => void
  ): void;
  putBucketReplication(
    args: PutBucketReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketRequestPaymentCommand}
   */
  putBucketRequestPayment(
    args: PutBucketRequestPaymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketRequestPaymentCommandOutput>;
  putBucketRequestPayment(
    args: PutBucketRequestPaymentCommandInput,
    cb: (err: any, data?: PutBucketRequestPaymentCommandOutput) => void
  ): void;
  putBucketRequestPayment(
    args: PutBucketRequestPaymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketRequestPaymentCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketTaggingCommand}
   */
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketTaggingCommandOutput>;
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    cb: (err: any, data?: PutBucketTaggingCommandOutput) => void
  ): void;
  putBucketTagging(
    args: PutBucketTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketVersioningCommand}
   */
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketVersioningCommandOutput>;
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    cb: (err: any, data?: PutBucketVersioningCommandOutput) => void
  ): void;
  putBucketVersioning(
    args: PutBucketVersioningCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketVersioningCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBucketWebsiteCommand}
   */
  putBucketWebsite(
    args: PutBucketWebsiteCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBucketWebsiteCommandOutput>;
  putBucketWebsite(
    args: PutBucketWebsiteCommandInput,
    cb: (err: any, data?: PutBucketWebsiteCommandOutput) => void
  ): void;
  putBucketWebsite(
    args: PutBucketWebsiteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBucketWebsiteCommandOutput) => void
  ): void;

  /**
   * @see {@link PutObjectCommand}
   */
  putObject(args: PutObjectCommandInput, options?: __HttpHandlerOptions): Promise<PutObjectCommandOutput>;
  putObject(args: PutObjectCommandInput, cb: (err: any, data?: PutObjectCommandOutput) => void): void;
  putObject(
    args: PutObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link PutObjectAclCommand}
   */
  putObjectAcl(args: PutObjectAclCommandInput, options?: __HttpHandlerOptions): Promise<PutObjectAclCommandOutput>;
  putObjectAcl(args: PutObjectAclCommandInput, cb: (err: any, data?: PutObjectAclCommandOutput) => void): void;
  putObjectAcl(
    args: PutObjectAclCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectAclCommandOutput) => void
  ): void;

  /**
   * @see {@link PutObjectLegalHoldCommand}
   */
  putObjectLegalHold(
    args: PutObjectLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutObjectLegalHoldCommandOutput>;
  putObjectLegalHold(
    args: PutObjectLegalHoldCommandInput,
    cb: (err: any, data?: PutObjectLegalHoldCommandOutput) => void
  ): void;
  putObjectLegalHold(
    args: PutObjectLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectLegalHoldCommandOutput) => void
  ): void;

  /**
   * @see {@link PutObjectLockConfigurationCommand}
   */
  putObjectLockConfiguration(
    args: PutObjectLockConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutObjectLockConfigurationCommandOutput>;
  putObjectLockConfiguration(
    args: PutObjectLockConfigurationCommandInput,
    cb: (err: any, data?: PutObjectLockConfigurationCommandOutput) => void
  ): void;
  putObjectLockConfiguration(
    args: PutObjectLockConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectLockConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutObjectRetentionCommand}
   */
  putObjectRetention(
    args: PutObjectRetentionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutObjectRetentionCommandOutput>;
  putObjectRetention(
    args: PutObjectRetentionCommandInput,
    cb: (err: any, data?: PutObjectRetentionCommandOutput) => void
  ): void;
  putObjectRetention(
    args: PutObjectRetentionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectRetentionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutObjectTaggingCommand}
   */
  putObjectTagging(
    args: PutObjectTaggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutObjectTaggingCommandOutput>;
  putObjectTagging(
    args: PutObjectTaggingCommandInput,
    cb: (err: any, data?: PutObjectTaggingCommandOutput) => void
  ): void;
  putObjectTagging(
    args: PutObjectTaggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutObjectTaggingCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPublicAccessBlockCommand}
   */
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPublicAccessBlockCommandOutput>;
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;
  putPublicAccessBlock(
    args: PutPublicAccessBlockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPublicAccessBlockCommandOutput) => void
  ): void;

  /**
   * @see {@link RenameObjectCommand}
   */
  renameObject(args: RenameObjectCommandInput, options?: __HttpHandlerOptions): Promise<RenameObjectCommandOutput>;
  renameObject(args: RenameObjectCommandInput, cb: (err: any, data?: RenameObjectCommandOutput) => void): void;
  renameObject(
    args: RenameObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenameObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreObjectCommand}
   */
  restoreObject(args: RestoreObjectCommandInput, options?: __HttpHandlerOptions): Promise<RestoreObjectCommandOutput>;
  restoreObject(args: RestoreObjectCommandInput, cb: (err: any, data?: RestoreObjectCommandOutput) => void): void;
  restoreObject(
    args: RestoreObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreObjectCommandOutput) => void
  ): void;

  /**
   * @see {@link SelectObjectContentCommand}
   */
  selectObjectContent(
    args: SelectObjectContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SelectObjectContentCommandOutput>;
  selectObjectContent(
    args: SelectObjectContentCommandInput,
    cb: (err: any, data?: SelectObjectContentCommandOutput) => void
  ): void;
  selectObjectContent(
    args: SelectObjectContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SelectObjectContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBucketMetadataInventoryTableConfigurationCommand}
   */
  updateBucketMetadataInventoryTableConfiguration(
    args: UpdateBucketMetadataInventoryTableConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBucketMetadataInventoryTableConfigurationCommandOutput>;
  updateBucketMetadataInventoryTableConfiguration(
    args: UpdateBucketMetadataInventoryTableConfigurationCommandInput,
    cb: (err: any, data?: UpdateBucketMetadataInventoryTableConfigurationCommandOutput) => void
  ): void;
  updateBucketMetadataInventoryTableConfiguration(
    args: UpdateBucketMetadataInventoryTableConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBucketMetadataInventoryTableConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBucketMetadataJournalTableConfigurationCommand}
   */
  updateBucketMetadataJournalTableConfiguration(
    args: UpdateBucketMetadataJournalTableConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBucketMetadataJournalTableConfigurationCommandOutput>;
  updateBucketMetadataJournalTableConfiguration(
    args: UpdateBucketMetadataJournalTableConfigurationCommandInput,
    cb: (err: any, data?: UpdateBucketMetadataJournalTableConfigurationCommandOutput) => void
  ): void;
  updateBucketMetadataJournalTableConfiguration(
    args: UpdateBucketMetadataJournalTableConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBucketMetadataJournalTableConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadPartCommand}
   */
  uploadPart(args: UploadPartCommandInput, options?: __HttpHandlerOptions): Promise<UploadPartCommandOutput>;
  uploadPart(args: UploadPartCommandInput, cb: (err: any, data?: UploadPartCommandOutput) => void): void;
  uploadPart(
    args: UploadPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadPartCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadPartCopyCommand}
   */
  uploadPartCopy(
    args: UploadPartCopyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadPartCopyCommandOutput>;
  uploadPartCopy(args: UploadPartCopyCommandInput, cb: (err: any, data?: UploadPartCopyCommandOutput) => void): void;
  uploadPartCopy(
    args: UploadPartCopyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadPartCopyCommandOutput) => void
  ): void;

  /**
   * @see {@link WriteGetObjectResponseCommand}
   */
  writeGetObjectResponse(
    args: WriteGetObjectResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<WriteGetObjectResponseCommandOutput>;
  writeGetObjectResponse(
    args: WriteGetObjectResponseCommandInput,
    cb: (err: any, data?: WriteGetObjectResponseCommandOutput) => void
  ): void;
  writeGetObjectResponse(
    args: WriteGetObjectResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WriteGetObjectResponseCommandOutput) => void
  ): void;
}

/**
 * <p></p>
 * @public
 */
export class S3 extends S3Client implements S3 {}
createAggregatedClient(commands, S3);
