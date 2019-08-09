import { AbortMultipartUploadOutput } from "./AbortMultipartUploadOutput";
import { CompleteMultipartUploadOutput } from "./CompleteMultipartUploadOutput";
import { CopyObjectOutput } from "./CopyObjectOutput";
import { CreateBucketOutput } from "./CreateBucketOutput";
import { CreateMultipartUploadOutput } from "./CreateMultipartUploadOutput";
import { DeleteBucketOutput } from "./DeleteBucketOutput";
import { DeleteBucketAnalyticsConfigurationOutput } from "./DeleteBucketAnalyticsConfigurationOutput";
import { DeleteBucketCorsOutput } from "./DeleteBucketCorsOutput";
import { DeleteBucketEncryptionOutput } from "./DeleteBucketEncryptionOutput";
import { DeleteBucketInventoryConfigurationOutput } from "./DeleteBucketInventoryConfigurationOutput";
import { DeleteBucketLifecycleOutput } from "./DeleteBucketLifecycleOutput";
import { DeleteBucketMetricsConfigurationOutput } from "./DeleteBucketMetricsConfigurationOutput";
import { DeleteBucketPolicyOutput } from "./DeleteBucketPolicyOutput";
import { DeleteBucketReplicationOutput } from "./DeleteBucketReplicationOutput";
import { DeleteBucketTaggingOutput } from "./DeleteBucketTaggingOutput";
import { DeleteBucketWebsiteOutput } from "./DeleteBucketWebsiteOutput";
import { DeleteObjectOutput } from "./DeleteObjectOutput";
import { DeleteObjectTaggingOutput } from "./DeleteObjectTaggingOutput";
import { DeleteObjectsOutput } from "./DeleteObjectsOutput";
import { DeletePublicAccessBlockOutput } from "./DeletePublicAccessBlockOutput";
import { GetBucketAccelerateConfigurationOutput } from "./GetBucketAccelerateConfigurationOutput";
import { GetBucketAclOutput } from "./GetBucketAclOutput";
import { GetBucketAnalyticsConfigurationOutput } from "./GetBucketAnalyticsConfigurationOutput";
import { GetBucketCorsOutput } from "./GetBucketCorsOutput";
import { GetBucketEncryptionOutput } from "./GetBucketEncryptionOutput";
import { GetBucketInventoryConfigurationOutput } from "./GetBucketInventoryConfigurationOutput";
import { GetBucketLifecycleOutput } from "./GetBucketLifecycleOutput";
import { GetBucketLifecycleConfigurationOutput } from "./GetBucketLifecycleConfigurationOutput";
import { GetBucketLocationOutput } from "./GetBucketLocationOutput";
import { GetBucketLoggingOutput } from "./GetBucketLoggingOutput";
import { GetBucketMetricsConfigurationOutput } from "./GetBucketMetricsConfigurationOutput";
import { GetBucketNotificationOutput } from "./GetBucketNotificationOutput";
import { GetBucketNotificationConfigurationOutput } from "./GetBucketNotificationConfigurationOutput";
import { GetBucketPolicyOutput } from "./GetBucketPolicyOutput";
import { GetBucketPolicyStatusOutput } from "./GetBucketPolicyStatusOutput";
import { GetBucketReplicationOutput } from "./GetBucketReplicationOutput";
import { GetBucketRequestPaymentOutput } from "./GetBucketRequestPaymentOutput";
import { GetBucketTaggingOutput } from "./GetBucketTaggingOutput";
import { GetBucketVersioningOutput } from "./GetBucketVersioningOutput";
import { GetBucketWebsiteOutput } from "./GetBucketWebsiteOutput";
import { GetObjectOutput } from "./GetObjectOutput";
import { GetObjectAclOutput } from "./GetObjectAclOutput";
import { GetObjectLegalHoldOutput } from "./GetObjectLegalHoldOutput";
import { GetObjectLockConfigurationOutput } from "./GetObjectLockConfigurationOutput";
import { GetObjectRetentionOutput } from "./GetObjectRetentionOutput";
import { GetObjectTaggingOutput } from "./GetObjectTaggingOutput";
import { GetObjectTorrentOutput } from "./GetObjectTorrentOutput";
import { GetPublicAccessBlockOutput } from "./GetPublicAccessBlockOutput";
import { HeadBucketOutput } from "./HeadBucketOutput";
import { HeadObjectOutput } from "./HeadObjectOutput";
import { ListBucketAnalyticsConfigurationsOutput } from "./ListBucketAnalyticsConfigurationsOutput";
import { ListBucketInventoryConfigurationsOutput } from "./ListBucketInventoryConfigurationsOutput";
import { ListBucketMetricsConfigurationsOutput } from "./ListBucketMetricsConfigurationsOutput";
import { ListBucketsOutput } from "./ListBucketsOutput";
import { ListMultipartUploadsOutput } from "./ListMultipartUploadsOutput";
import { ListObjectVersionsOutput } from "./ListObjectVersionsOutput";
import { ListObjectsOutput } from "./ListObjectsOutput";
import { ListObjectsV2Output } from "./ListObjectsV2Output";
import { ListPartsOutput } from "./ListPartsOutput";
import { PutBucketAccelerateConfigurationOutput } from "./PutBucketAccelerateConfigurationOutput";
import { PutBucketAclOutput } from "./PutBucketAclOutput";
import { PutBucketAnalyticsConfigurationOutput } from "./PutBucketAnalyticsConfigurationOutput";
import { PutBucketCorsOutput } from "./PutBucketCorsOutput";
import { PutBucketEncryptionOutput } from "./PutBucketEncryptionOutput";
import { PutBucketInventoryConfigurationOutput } from "./PutBucketInventoryConfigurationOutput";
import { PutBucketLifecycleOutput } from "./PutBucketLifecycleOutput";
import { PutBucketLifecycleConfigurationOutput } from "./PutBucketLifecycleConfigurationOutput";
import { PutBucketLoggingOutput } from "./PutBucketLoggingOutput";
import { PutBucketMetricsConfigurationOutput } from "./PutBucketMetricsConfigurationOutput";
import { PutBucketNotificationOutput } from "./PutBucketNotificationOutput";
import { PutBucketNotificationConfigurationOutput } from "./PutBucketNotificationConfigurationOutput";
import { PutBucketPolicyOutput } from "./PutBucketPolicyOutput";
import { PutBucketReplicationOutput } from "./PutBucketReplicationOutput";
import { PutBucketRequestPaymentOutput } from "./PutBucketRequestPaymentOutput";
import { PutBucketTaggingOutput } from "./PutBucketTaggingOutput";
import { PutBucketVersioningOutput } from "./PutBucketVersioningOutput";
import { PutBucketWebsiteOutput } from "./PutBucketWebsiteOutput";
import { PutObjectOutput } from "./PutObjectOutput";
import { PutObjectAclOutput } from "./PutObjectAclOutput";
import { PutObjectLegalHoldOutput } from "./PutObjectLegalHoldOutput";
import { PutObjectLockConfigurationOutput } from "./PutObjectLockConfigurationOutput";
import { PutObjectRetentionOutput } from "./PutObjectRetentionOutput";
import { PutObjectTaggingOutput } from "./PutObjectTaggingOutput";
import { PutPublicAccessBlockOutput } from "./PutPublicAccessBlockOutput";
import { RestoreObjectOutput } from "./RestoreObjectOutput";
import { SelectObjectContentOutput } from "./SelectObjectContentOutput";
import { UploadPartOutput } from "./UploadPartOutput";
import { UploadPartCopyOutput } from "./UploadPartCopyOutput";
export type OutputTypesUnion =
  | AbortMultipartUploadOutput
  | CompleteMultipartUploadOutput
  | CopyObjectOutput
  | CreateBucketOutput
  | CreateMultipartUploadOutput
  | DeleteBucketOutput
  | DeleteBucketAnalyticsConfigurationOutput
  | DeleteBucketCorsOutput
  | DeleteBucketEncryptionOutput
  | DeleteBucketInventoryConfigurationOutput
  | DeleteBucketLifecycleOutput
  | DeleteBucketMetricsConfigurationOutput
  | DeleteBucketPolicyOutput
  | DeleteBucketReplicationOutput
  | DeleteBucketTaggingOutput
  | DeleteBucketWebsiteOutput
  | DeleteObjectOutput
  | DeleteObjectTaggingOutput
  | DeleteObjectsOutput
  | DeletePublicAccessBlockOutput
  | GetBucketAccelerateConfigurationOutput
  | GetBucketAclOutput
  | GetBucketAnalyticsConfigurationOutput
  | GetBucketCorsOutput
  | GetBucketEncryptionOutput
  | GetBucketInventoryConfigurationOutput
  | GetBucketLifecycleOutput
  | GetBucketLifecycleConfigurationOutput
  | GetBucketLocationOutput
  | GetBucketLoggingOutput
  | GetBucketMetricsConfigurationOutput
  | GetBucketNotificationOutput
  | GetBucketNotificationConfigurationOutput
  | GetBucketPolicyOutput
  | GetBucketPolicyStatusOutput
  | GetBucketReplicationOutput
  | GetBucketRequestPaymentOutput
  | GetBucketTaggingOutput
  | GetBucketVersioningOutput
  | GetBucketWebsiteOutput
  | GetObjectOutput
  | GetObjectAclOutput
  | GetObjectLegalHoldOutput
  | GetObjectLockConfigurationOutput
  | GetObjectRetentionOutput
  | GetObjectTaggingOutput
  | GetObjectTorrentOutput
  | GetPublicAccessBlockOutput
  | HeadBucketOutput
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
  | PutBucketAccelerateConfigurationOutput
  | PutBucketAclOutput
  | PutBucketAnalyticsConfigurationOutput
  | PutBucketCorsOutput
  | PutBucketEncryptionOutput
  | PutBucketInventoryConfigurationOutput
  | PutBucketLifecycleOutput
  | PutBucketLifecycleConfigurationOutput
  | PutBucketLoggingOutput
  | PutBucketMetricsConfigurationOutput
  | PutBucketNotificationOutput
  | PutBucketNotificationConfigurationOutput
  | PutBucketPolicyOutput
  | PutBucketReplicationOutput
  | PutBucketRequestPaymentOutput
  | PutBucketTaggingOutput
  | PutBucketVersioningOutput
  | PutBucketWebsiteOutput
  | PutObjectOutput
  | PutObjectAclOutput
  | PutObjectLegalHoldOutput
  | PutObjectLockConfigurationOutput
  | PutObjectRetentionOutput
  | PutObjectTaggingOutput
  | PutPublicAccessBlockOutput
  | RestoreObjectOutput
  | SelectObjectContentOutput
  | UploadPartOutput
  | UploadPartCopyOutput;
