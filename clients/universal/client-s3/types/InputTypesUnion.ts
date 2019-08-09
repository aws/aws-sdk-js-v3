import { AbortMultipartUploadInput } from "./AbortMultipartUploadInput";
import { CompleteMultipartUploadInput } from "./CompleteMultipartUploadInput";
import { CopyObjectInput } from "./CopyObjectInput";
import { CreateBucketInput } from "./CreateBucketInput";
import { CreateMultipartUploadInput } from "./CreateMultipartUploadInput";
import { DeleteBucketInput } from "./DeleteBucketInput";
import { DeleteBucketAnalyticsConfigurationInput } from "./DeleteBucketAnalyticsConfigurationInput";
import { DeleteBucketCorsInput } from "./DeleteBucketCorsInput";
import { DeleteBucketEncryptionInput } from "./DeleteBucketEncryptionInput";
import { DeleteBucketInventoryConfigurationInput } from "./DeleteBucketInventoryConfigurationInput";
import { DeleteBucketLifecycleInput } from "./DeleteBucketLifecycleInput";
import { DeleteBucketMetricsConfigurationInput } from "./DeleteBucketMetricsConfigurationInput";
import { DeleteBucketPolicyInput } from "./DeleteBucketPolicyInput";
import { DeleteBucketReplicationInput } from "./DeleteBucketReplicationInput";
import { DeleteBucketTaggingInput } from "./DeleteBucketTaggingInput";
import { DeleteBucketWebsiteInput } from "./DeleteBucketWebsiteInput";
import { DeleteObjectInput } from "./DeleteObjectInput";
import { DeleteObjectTaggingInput } from "./DeleteObjectTaggingInput";
import { DeleteObjectsInput } from "./DeleteObjectsInput";
import { DeletePublicAccessBlockInput } from "./DeletePublicAccessBlockInput";
import { GetBucketAccelerateConfigurationInput } from "./GetBucketAccelerateConfigurationInput";
import { GetBucketAclInput } from "./GetBucketAclInput";
import { GetBucketAnalyticsConfigurationInput } from "./GetBucketAnalyticsConfigurationInput";
import { GetBucketCorsInput } from "./GetBucketCorsInput";
import { GetBucketEncryptionInput } from "./GetBucketEncryptionInput";
import { GetBucketInventoryConfigurationInput } from "./GetBucketInventoryConfigurationInput";
import { GetBucketLifecycleInput } from "./GetBucketLifecycleInput";
import { GetBucketLifecycleConfigurationInput } from "./GetBucketLifecycleConfigurationInput";
import { GetBucketLocationInput } from "./GetBucketLocationInput";
import { GetBucketLoggingInput } from "./GetBucketLoggingInput";
import { GetBucketMetricsConfigurationInput } from "./GetBucketMetricsConfigurationInput";
import { GetBucketNotificationInput } from "./GetBucketNotificationInput";
import { GetBucketNotificationConfigurationInput } from "./GetBucketNotificationConfigurationInput";
import { GetBucketPolicyInput } from "./GetBucketPolicyInput";
import { GetBucketPolicyStatusInput } from "./GetBucketPolicyStatusInput";
import { GetBucketReplicationInput } from "./GetBucketReplicationInput";
import { GetBucketRequestPaymentInput } from "./GetBucketRequestPaymentInput";
import { GetBucketTaggingInput } from "./GetBucketTaggingInput";
import { GetBucketVersioningInput } from "./GetBucketVersioningInput";
import { GetBucketWebsiteInput } from "./GetBucketWebsiteInput";
import { GetObjectInput } from "./GetObjectInput";
import { GetObjectAclInput } from "./GetObjectAclInput";
import { GetObjectLegalHoldInput } from "./GetObjectLegalHoldInput";
import { GetObjectLockConfigurationInput } from "./GetObjectLockConfigurationInput";
import { GetObjectRetentionInput } from "./GetObjectRetentionInput";
import { GetObjectTaggingInput } from "./GetObjectTaggingInput";
import { GetObjectTorrentInput } from "./GetObjectTorrentInput";
import { GetPublicAccessBlockInput } from "./GetPublicAccessBlockInput";
import { HeadBucketInput } from "./HeadBucketInput";
import { HeadObjectInput } from "./HeadObjectInput";
import { ListBucketAnalyticsConfigurationsInput } from "./ListBucketAnalyticsConfigurationsInput";
import { ListBucketInventoryConfigurationsInput } from "./ListBucketInventoryConfigurationsInput";
import { ListBucketMetricsConfigurationsInput } from "./ListBucketMetricsConfigurationsInput";
import { ListBucketsInput } from "./ListBucketsInput";
import { ListMultipartUploadsInput } from "./ListMultipartUploadsInput";
import { ListObjectVersionsInput } from "./ListObjectVersionsInput";
import { ListObjectsInput } from "./ListObjectsInput";
import { ListObjectsV2Input } from "./ListObjectsV2Input";
import { ListPartsInput } from "./ListPartsInput";
import { PutBucketAccelerateConfigurationInput } from "./PutBucketAccelerateConfigurationInput";
import { PutBucketAclInput } from "./PutBucketAclInput";
import { PutBucketAnalyticsConfigurationInput } from "./PutBucketAnalyticsConfigurationInput";
import { PutBucketCorsInput } from "./PutBucketCorsInput";
import { PutBucketEncryptionInput } from "./PutBucketEncryptionInput";
import { PutBucketInventoryConfigurationInput } from "./PutBucketInventoryConfigurationInput";
import { PutBucketLifecycleInput } from "./PutBucketLifecycleInput";
import { PutBucketLifecycleConfigurationInput } from "./PutBucketLifecycleConfigurationInput";
import { PutBucketLoggingInput } from "./PutBucketLoggingInput";
import { PutBucketMetricsConfigurationInput } from "./PutBucketMetricsConfigurationInput";
import { PutBucketNotificationInput } from "./PutBucketNotificationInput";
import { PutBucketNotificationConfigurationInput } from "./PutBucketNotificationConfigurationInput";
import { PutBucketPolicyInput } from "./PutBucketPolicyInput";
import { PutBucketReplicationInput } from "./PutBucketReplicationInput";
import { PutBucketRequestPaymentInput } from "./PutBucketRequestPaymentInput";
import { PutBucketTaggingInput } from "./PutBucketTaggingInput";
import { PutBucketVersioningInput } from "./PutBucketVersioningInput";
import { PutBucketWebsiteInput } from "./PutBucketWebsiteInput";
import { PutObjectInput } from "./PutObjectInput";
import { PutObjectAclInput } from "./PutObjectAclInput";
import { PutObjectLegalHoldInput } from "./PutObjectLegalHoldInput";
import { PutObjectLockConfigurationInput } from "./PutObjectLockConfigurationInput";
import { PutObjectRetentionInput } from "./PutObjectRetentionInput";
import { PutObjectTaggingInput } from "./PutObjectTaggingInput";
import { PutPublicAccessBlockInput } from "./PutPublicAccessBlockInput";
import { RestoreObjectInput } from "./RestoreObjectInput";
import { SelectObjectContentInput } from "./SelectObjectContentInput";
import { UploadPartInput } from "./UploadPartInput";
import { UploadPartCopyInput } from "./UploadPartCopyInput";
export type InputTypesUnion =
  | AbortMultipartUploadInput
  | CompleteMultipartUploadInput
  | CopyObjectInput
  | CreateBucketInput
  | CreateMultipartUploadInput
  | DeleteBucketInput
  | DeleteBucketAnalyticsConfigurationInput
  | DeleteBucketCorsInput
  | DeleteBucketEncryptionInput
  | DeleteBucketInventoryConfigurationInput
  | DeleteBucketLifecycleInput
  | DeleteBucketMetricsConfigurationInput
  | DeleteBucketPolicyInput
  | DeleteBucketReplicationInput
  | DeleteBucketTaggingInput
  | DeleteBucketWebsiteInput
  | DeleteObjectInput
  | DeleteObjectTaggingInput
  | DeleteObjectsInput
  | DeletePublicAccessBlockInput
  | GetBucketAccelerateConfigurationInput
  | GetBucketAclInput
  | GetBucketAnalyticsConfigurationInput
  | GetBucketCorsInput
  | GetBucketEncryptionInput
  | GetBucketInventoryConfigurationInput
  | GetBucketLifecycleInput
  | GetBucketLifecycleConfigurationInput
  | GetBucketLocationInput
  | GetBucketLoggingInput
  | GetBucketMetricsConfigurationInput
  | GetBucketNotificationInput
  | GetBucketNotificationConfigurationInput
  | GetBucketPolicyInput
  | GetBucketPolicyStatusInput
  | GetBucketReplicationInput
  | GetBucketRequestPaymentInput
  | GetBucketTaggingInput
  | GetBucketVersioningInput
  | GetBucketWebsiteInput
  | GetObjectInput
  | GetObjectAclInput
  | GetObjectLegalHoldInput
  | GetObjectLockConfigurationInput
  | GetObjectRetentionInput
  | GetObjectTaggingInput
  | GetObjectTorrentInput
  | GetPublicAccessBlockInput
  | HeadBucketInput
  | HeadObjectInput
  | ListBucketAnalyticsConfigurationsInput
  | ListBucketInventoryConfigurationsInput
  | ListBucketMetricsConfigurationsInput
  | ListBucketsInput
  | ListMultipartUploadsInput
  | ListObjectVersionsInput
  | ListObjectsInput
  | ListObjectsV2Input
  | ListPartsInput
  | PutBucketAccelerateConfigurationInput
  | PutBucketAclInput
  | PutBucketAnalyticsConfigurationInput
  | PutBucketCorsInput
  | PutBucketEncryptionInput
  | PutBucketInventoryConfigurationInput
  | PutBucketLifecycleInput
  | PutBucketLifecycleConfigurationInput
  | PutBucketLoggingInput
  | PutBucketMetricsConfigurationInput
  | PutBucketNotificationInput
  | PutBucketNotificationConfigurationInput
  | PutBucketPolicyInput
  | PutBucketReplicationInput
  | PutBucketRequestPaymentInput
  | PutBucketTaggingInput
  | PutBucketVersioningInput
  | PutBucketWebsiteInput
  | PutObjectInput
  | PutObjectAclInput
  | PutObjectLegalHoldInput
  | PutObjectLockConfigurationInput
  | PutObjectRetentionInput
  | PutObjectTaggingInput
  | PutPublicAccessBlockInput
  | RestoreObjectInput
  | SelectObjectContentInput
  | UploadPartInput
  | UploadPartCopyInput;
