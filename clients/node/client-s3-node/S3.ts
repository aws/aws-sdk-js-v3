import { S3Client } from "./S3Client";
import { AbortMultipartUploadInput } from "./types/AbortMultipartUploadInput";
import { AbortMultipartUploadOutput } from "./types/AbortMultipartUploadOutput";
import { BucketAlreadyExists } from "./types/BucketAlreadyExists";
import { BucketAlreadyOwnedByYou } from "./types/BucketAlreadyOwnedByYou";
import { CompleteMultipartUploadInput } from "./types/CompleteMultipartUploadInput";
import { CompleteMultipartUploadOutput } from "./types/CompleteMultipartUploadOutput";
import { CopyObjectInput } from "./types/CopyObjectInput";
import { CopyObjectOutput } from "./types/CopyObjectOutput";
import { CreateBucketInput } from "./types/CreateBucketInput";
import { CreateBucketOutput } from "./types/CreateBucketOutput";
import { CreateMultipartUploadInput } from "./types/CreateMultipartUploadInput";
import { CreateMultipartUploadOutput } from "./types/CreateMultipartUploadOutput";
import { DeleteBucketAnalyticsConfigurationInput } from "./types/DeleteBucketAnalyticsConfigurationInput";
import { DeleteBucketAnalyticsConfigurationOutput } from "./types/DeleteBucketAnalyticsConfigurationOutput";
import { DeleteBucketCorsInput } from "./types/DeleteBucketCorsInput";
import { DeleteBucketCorsOutput } from "./types/DeleteBucketCorsOutput";
import { DeleteBucketEncryptionInput } from "./types/DeleteBucketEncryptionInput";
import { DeleteBucketEncryptionOutput } from "./types/DeleteBucketEncryptionOutput";
import { DeleteBucketInput } from "./types/DeleteBucketInput";
import { DeleteBucketInventoryConfigurationInput } from "./types/DeleteBucketInventoryConfigurationInput";
import { DeleteBucketInventoryConfigurationOutput } from "./types/DeleteBucketInventoryConfigurationOutput";
import { DeleteBucketLifecycleInput } from "./types/DeleteBucketLifecycleInput";
import { DeleteBucketLifecycleOutput } from "./types/DeleteBucketLifecycleOutput";
import { DeleteBucketMetricsConfigurationInput } from "./types/DeleteBucketMetricsConfigurationInput";
import { DeleteBucketMetricsConfigurationOutput } from "./types/DeleteBucketMetricsConfigurationOutput";
import { DeleteBucketOutput } from "./types/DeleteBucketOutput";
import { DeleteBucketPolicyInput } from "./types/DeleteBucketPolicyInput";
import { DeleteBucketPolicyOutput } from "./types/DeleteBucketPolicyOutput";
import { DeleteBucketReplicationInput } from "./types/DeleteBucketReplicationInput";
import { DeleteBucketReplicationOutput } from "./types/DeleteBucketReplicationOutput";
import { DeleteBucketTaggingInput } from "./types/DeleteBucketTaggingInput";
import { DeleteBucketTaggingOutput } from "./types/DeleteBucketTaggingOutput";
import { DeleteBucketWebsiteInput } from "./types/DeleteBucketWebsiteInput";
import { DeleteBucketWebsiteOutput } from "./types/DeleteBucketWebsiteOutput";
import { DeleteObjectInput } from "./types/DeleteObjectInput";
import { DeleteObjectOutput } from "./types/DeleteObjectOutput";
import { DeleteObjectTaggingInput } from "./types/DeleteObjectTaggingInput";
import { DeleteObjectTaggingOutput } from "./types/DeleteObjectTaggingOutput";
import { DeleteObjectsInput } from "./types/DeleteObjectsInput";
import { DeleteObjectsOutput } from "./types/DeleteObjectsOutput";
import { DeletePublicAccessBlockInput } from "./types/DeletePublicAccessBlockInput";
import { DeletePublicAccessBlockOutput } from "./types/DeletePublicAccessBlockOutput";
import { GetBucketAccelerateConfigurationInput } from "./types/GetBucketAccelerateConfigurationInput";
import { GetBucketAccelerateConfigurationOutput } from "./types/GetBucketAccelerateConfigurationOutput";
import { GetBucketAclInput } from "./types/GetBucketAclInput";
import { GetBucketAclOutput } from "./types/GetBucketAclOutput";
import { GetBucketAnalyticsConfigurationInput } from "./types/GetBucketAnalyticsConfigurationInput";
import { GetBucketAnalyticsConfigurationOutput } from "./types/GetBucketAnalyticsConfigurationOutput";
import { GetBucketCorsInput } from "./types/GetBucketCorsInput";
import { GetBucketCorsOutput } from "./types/GetBucketCorsOutput";
import { GetBucketEncryptionInput } from "./types/GetBucketEncryptionInput";
import { GetBucketEncryptionOutput } from "./types/GetBucketEncryptionOutput";
import { GetBucketInventoryConfigurationInput } from "./types/GetBucketInventoryConfigurationInput";
import { GetBucketInventoryConfigurationOutput } from "./types/GetBucketInventoryConfigurationOutput";
import { GetBucketLifecycleConfigurationInput } from "./types/GetBucketLifecycleConfigurationInput";
import { GetBucketLifecycleConfigurationOutput } from "./types/GetBucketLifecycleConfigurationOutput";
import { GetBucketLifecycleInput } from "./types/GetBucketLifecycleInput";
import { GetBucketLifecycleOutput } from "./types/GetBucketLifecycleOutput";
import { GetBucketLocationInput } from "./types/GetBucketLocationInput";
import { GetBucketLocationOutput } from "./types/GetBucketLocationOutput";
import { GetBucketLoggingInput } from "./types/GetBucketLoggingInput";
import { GetBucketLoggingOutput } from "./types/GetBucketLoggingOutput";
import { GetBucketMetricsConfigurationInput } from "./types/GetBucketMetricsConfigurationInput";
import { GetBucketMetricsConfigurationOutput } from "./types/GetBucketMetricsConfigurationOutput";
import { GetBucketNotificationConfigurationInput } from "./types/GetBucketNotificationConfigurationInput";
import { GetBucketNotificationConfigurationOutput } from "./types/GetBucketNotificationConfigurationOutput";
import { GetBucketNotificationInput } from "./types/GetBucketNotificationInput";
import { GetBucketNotificationOutput } from "./types/GetBucketNotificationOutput";
import { GetBucketPolicyInput } from "./types/GetBucketPolicyInput";
import { GetBucketPolicyOutput } from "./types/GetBucketPolicyOutput";
import { GetBucketPolicyStatusInput } from "./types/GetBucketPolicyStatusInput";
import { GetBucketPolicyStatusOutput } from "./types/GetBucketPolicyStatusOutput";
import { GetBucketReplicationInput } from "./types/GetBucketReplicationInput";
import { GetBucketReplicationOutput } from "./types/GetBucketReplicationOutput";
import { GetBucketRequestPaymentInput } from "./types/GetBucketRequestPaymentInput";
import { GetBucketRequestPaymentOutput } from "./types/GetBucketRequestPaymentOutput";
import { GetBucketTaggingInput } from "./types/GetBucketTaggingInput";
import { GetBucketTaggingOutput } from "./types/GetBucketTaggingOutput";
import { GetBucketVersioningInput } from "./types/GetBucketVersioningInput";
import { GetBucketVersioningOutput } from "./types/GetBucketVersioningOutput";
import { GetBucketWebsiteInput } from "./types/GetBucketWebsiteInput";
import { GetBucketWebsiteOutput } from "./types/GetBucketWebsiteOutput";
import { GetObjectAclInput } from "./types/GetObjectAclInput";
import { GetObjectAclOutput } from "./types/GetObjectAclOutput";
import { GetObjectInput } from "./types/GetObjectInput";
import { GetObjectLegalHoldInput } from "./types/GetObjectLegalHoldInput";
import { GetObjectLegalHoldOutput } from "./types/GetObjectLegalHoldOutput";
import { GetObjectLockConfigurationInput } from "./types/GetObjectLockConfigurationInput";
import { GetObjectLockConfigurationOutput } from "./types/GetObjectLockConfigurationOutput";
import { GetObjectOutput } from "./types/GetObjectOutput";
import { GetObjectRetentionInput } from "./types/GetObjectRetentionInput";
import { GetObjectRetentionOutput } from "./types/GetObjectRetentionOutput";
import { GetObjectTaggingInput } from "./types/GetObjectTaggingInput";
import { GetObjectTaggingOutput } from "./types/GetObjectTaggingOutput";
import { GetObjectTorrentInput } from "./types/GetObjectTorrentInput";
import { GetObjectTorrentOutput } from "./types/GetObjectTorrentOutput";
import { GetPublicAccessBlockInput } from "./types/GetPublicAccessBlockInput";
import { GetPublicAccessBlockOutput } from "./types/GetPublicAccessBlockOutput";
import { HeadBucketInput } from "./types/HeadBucketInput";
import { HeadBucketOutput } from "./types/HeadBucketOutput";
import { HeadObjectInput } from "./types/HeadObjectInput";
import { HeadObjectOutput } from "./types/HeadObjectOutput";
import { ListBucketAnalyticsConfigurationsInput } from "./types/ListBucketAnalyticsConfigurationsInput";
import { ListBucketAnalyticsConfigurationsOutput } from "./types/ListBucketAnalyticsConfigurationsOutput";
import { ListBucketInventoryConfigurationsInput } from "./types/ListBucketInventoryConfigurationsInput";
import { ListBucketInventoryConfigurationsOutput } from "./types/ListBucketInventoryConfigurationsOutput";
import { ListBucketMetricsConfigurationsInput } from "./types/ListBucketMetricsConfigurationsInput";
import { ListBucketMetricsConfigurationsOutput } from "./types/ListBucketMetricsConfigurationsOutput";
import { ListBucketsInput } from "./types/ListBucketsInput";
import { ListBucketsOutput } from "./types/ListBucketsOutput";
import { ListMultipartUploadsInput } from "./types/ListMultipartUploadsInput";
import { ListMultipartUploadsOutput } from "./types/ListMultipartUploadsOutput";
import { ListObjectVersionsInput } from "./types/ListObjectVersionsInput";
import { ListObjectVersionsOutput } from "./types/ListObjectVersionsOutput";
import { ListObjectsInput } from "./types/ListObjectsInput";
import { ListObjectsOutput } from "./types/ListObjectsOutput";
import { ListObjectsV2Input } from "./types/ListObjectsV2Input";
import { ListObjectsV2Output } from "./types/ListObjectsV2Output";
import { ListPartsInput } from "./types/ListPartsInput";
import { ListPartsOutput } from "./types/ListPartsOutput";
import { NoSuchBucket } from "./types/NoSuchBucket";
import { NoSuchKey } from "./types/NoSuchKey";
import { NoSuchUpload } from "./types/NoSuchUpload";
import { ObjectAlreadyInActiveTierError } from "./types/ObjectAlreadyInActiveTierError";
import { ObjectNotInActiveTierError } from "./types/ObjectNotInActiveTierError";
import { PutBucketAccelerateConfigurationInput } from "./types/PutBucketAccelerateConfigurationInput";
import { PutBucketAccelerateConfigurationOutput } from "./types/PutBucketAccelerateConfigurationOutput";
import { PutBucketAclInput } from "./types/PutBucketAclInput";
import { PutBucketAclOutput } from "./types/PutBucketAclOutput";
import { PutBucketAnalyticsConfigurationInput } from "./types/PutBucketAnalyticsConfigurationInput";
import { PutBucketAnalyticsConfigurationOutput } from "./types/PutBucketAnalyticsConfigurationOutput";
import { PutBucketCorsInput } from "./types/PutBucketCorsInput";
import { PutBucketCorsOutput } from "./types/PutBucketCorsOutput";
import { PutBucketEncryptionInput } from "./types/PutBucketEncryptionInput";
import { PutBucketEncryptionOutput } from "./types/PutBucketEncryptionOutput";
import { PutBucketInventoryConfigurationInput } from "./types/PutBucketInventoryConfigurationInput";
import { PutBucketInventoryConfigurationOutput } from "./types/PutBucketInventoryConfigurationOutput";
import { PutBucketLifecycleConfigurationInput } from "./types/PutBucketLifecycleConfigurationInput";
import { PutBucketLifecycleConfigurationOutput } from "./types/PutBucketLifecycleConfigurationOutput";
import { PutBucketLifecycleInput } from "./types/PutBucketLifecycleInput";
import { PutBucketLifecycleOutput } from "./types/PutBucketLifecycleOutput";
import { PutBucketLoggingInput } from "./types/PutBucketLoggingInput";
import { PutBucketLoggingOutput } from "./types/PutBucketLoggingOutput";
import { PutBucketMetricsConfigurationInput } from "./types/PutBucketMetricsConfigurationInput";
import { PutBucketMetricsConfigurationOutput } from "./types/PutBucketMetricsConfigurationOutput";
import { PutBucketNotificationConfigurationInput } from "./types/PutBucketNotificationConfigurationInput";
import { PutBucketNotificationConfigurationOutput } from "./types/PutBucketNotificationConfigurationOutput";
import { PutBucketNotificationInput } from "./types/PutBucketNotificationInput";
import { PutBucketNotificationOutput } from "./types/PutBucketNotificationOutput";
import { PutBucketPolicyInput } from "./types/PutBucketPolicyInput";
import { PutBucketPolicyOutput } from "./types/PutBucketPolicyOutput";
import { PutBucketReplicationInput } from "./types/PutBucketReplicationInput";
import { PutBucketReplicationOutput } from "./types/PutBucketReplicationOutput";
import { PutBucketRequestPaymentInput } from "./types/PutBucketRequestPaymentInput";
import { PutBucketRequestPaymentOutput } from "./types/PutBucketRequestPaymentOutput";
import { PutBucketTaggingInput } from "./types/PutBucketTaggingInput";
import { PutBucketTaggingOutput } from "./types/PutBucketTaggingOutput";
import { PutBucketVersioningInput } from "./types/PutBucketVersioningInput";
import { PutBucketVersioningOutput } from "./types/PutBucketVersioningOutput";
import { PutBucketWebsiteInput } from "./types/PutBucketWebsiteInput";
import { PutBucketWebsiteOutput } from "./types/PutBucketWebsiteOutput";
import { PutObjectAclInput } from "./types/PutObjectAclInput";
import { PutObjectAclOutput } from "./types/PutObjectAclOutput";
import { PutObjectInput } from "./types/PutObjectInput";
import { PutObjectLegalHoldInput } from "./types/PutObjectLegalHoldInput";
import { PutObjectLegalHoldOutput } from "./types/PutObjectLegalHoldOutput";
import { PutObjectLockConfigurationInput } from "./types/PutObjectLockConfigurationInput";
import { PutObjectLockConfigurationOutput } from "./types/PutObjectLockConfigurationOutput";
import { PutObjectOutput } from "./types/PutObjectOutput";
import { PutObjectRetentionInput } from "./types/PutObjectRetentionInput";
import { PutObjectRetentionOutput } from "./types/PutObjectRetentionOutput";
import { PutObjectTaggingInput } from "./types/PutObjectTaggingInput";
import { PutObjectTaggingOutput } from "./types/PutObjectTaggingOutput";
import { PutPublicAccessBlockInput } from "./types/PutPublicAccessBlockInput";
import { PutPublicAccessBlockOutput } from "./types/PutPublicAccessBlockOutput";
import { RestoreObjectInput } from "./types/RestoreObjectInput";
import { RestoreObjectOutput } from "./types/RestoreObjectOutput";
import { SelectObjectContentInput } from "./types/SelectObjectContentInput";
import { SelectObjectContentOutput } from "./types/SelectObjectContentOutput";
import { UploadPartCopyInput } from "./types/UploadPartCopyInput";
import { UploadPartCopyOutput } from "./types/UploadPartCopyOutput";
import { UploadPartInput } from "./types/UploadPartInput";
import { UploadPartOutput } from "./types/UploadPartOutput";
import { AbortMultipartUploadCommand } from "./commands/AbortMultipartUploadCommand";
import { CompleteMultipartUploadCommand } from "./commands/CompleteMultipartUploadCommand";
import { CopyObjectCommand } from "./commands/CopyObjectCommand";
import { CreateBucketCommand } from "./commands/CreateBucketCommand";
import { CreateMultipartUploadCommand } from "./commands/CreateMultipartUploadCommand";
import { DeleteBucketAnalyticsConfigurationCommand } from "./commands/DeleteBucketAnalyticsConfigurationCommand";
import { DeleteBucketCommand } from "./commands/DeleteBucketCommand";
import { DeleteBucketCorsCommand } from "./commands/DeleteBucketCorsCommand";
import { DeleteBucketEncryptionCommand } from "./commands/DeleteBucketEncryptionCommand";
import { DeleteBucketInventoryConfigurationCommand } from "./commands/DeleteBucketInventoryConfigurationCommand";
import { DeleteBucketLifecycleCommand } from "./commands/DeleteBucketLifecycleCommand";
import { DeleteBucketMetricsConfigurationCommand } from "./commands/DeleteBucketMetricsConfigurationCommand";
import { DeleteBucketPolicyCommand } from "./commands/DeleteBucketPolicyCommand";
import { DeleteBucketReplicationCommand } from "./commands/DeleteBucketReplicationCommand";
import { DeleteBucketTaggingCommand } from "./commands/DeleteBucketTaggingCommand";
import { DeleteBucketWebsiteCommand } from "./commands/DeleteBucketWebsiteCommand";
import { DeleteObjectCommand } from "./commands/DeleteObjectCommand";
import { DeleteObjectTaggingCommand } from "./commands/DeleteObjectTaggingCommand";
import { DeleteObjectsCommand } from "./commands/DeleteObjectsCommand";
import { DeletePublicAccessBlockCommand } from "./commands/DeletePublicAccessBlockCommand";
import { GetBucketAccelerateConfigurationCommand } from "./commands/GetBucketAccelerateConfigurationCommand";
import { GetBucketAclCommand } from "./commands/GetBucketAclCommand";
import { GetBucketAnalyticsConfigurationCommand } from "./commands/GetBucketAnalyticsConfigurationCommand";
import { GetBucketCorsCommand } from "./commands/GetBucketCorsCommand";
import { GetBucketEncryptionCommand } from "./commands/GetBucketEncryptionCommand";
import { GetBucketInventoryConfigurationCommand } from "./commands/GetBucketInventoryConfigurationCommand";
import { GetBucketLifecycleCommand } from "./commands/GetBucketLifecycleCommand";
import { GetBucketLifecycleConfigurationCommand } from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketLocationCommand } from "./commands/GetBucketLocationCommand";
import { GetBucketLoggingCommand } from "./commands/GetBucketLoggingCommand";
import { GetBucketMetricsConfigurationCommand } from "./commands/GetBucketMetricsConfigurationCommand";
import { GetBucketNotificationCommand } from "./commands/GetBucketNotificationCommand";
import { GetBucketNotificationConfigurationCommand } from "./commands/GetBucketNotificationConfigurationCommand";
import { GetBucketPolicyCommand } from "./commands/GetBucketPolicyCommand";
import { GetBucketPolicyStatusCommand } from "./commands/GetBucketPolicyStatusCommand";
import { GetBucketReplicationCommand } from "./commands/GetBucketReplicationCommand";
import { GetBucketRequestPaymentCommand } from "./commands/GetBucketRequestPaymentCommand";
import { GetBucketTaggingCommand } from "./commands/GetBucketTaggingCommand";
import { GetBucketVersioningCommand } from "./commands/GetBucketVersioningCommand";
import { GetBucketWebsiteCommand } from "./commands/GetBucketWebsiteCommand";
import { GetObjectAclCommand } from "./commands/GetObjectAclCommand";
import { GetObjectCommand } from "./commands/GetObjectCommand";
import { GetObjectLegalHoldCommand } from "./commands/GetObjectLegalHoldCommand";
import { GetObjectLockConfigurationCommand } from "./commands/GetObjectLockConfigurationCommand";
import { GetObjectRetentionCommand } from "./commands/GetObjectRetentionCommand";
import { GetObjectTaggingCommand } from "./commands/GetObjectTaggingCommand";
import { GetObjectTorrentCommand } from "./commands/GetObjectTorrentCommand";
import { GetPublicAccessBlockCommand } from "./commands/GetPublicAccessBlockCommand";
import { HeadBucketCommand } from "./commands/HeadBucketCommand";
import { HeadObjectCommand } from "./commands/HeadObjectCommand";
import { ListBucketAnalyticsConfigurationsCommand } from "./commands/ListBucketAnalyticsConfigurationsCommand";
import { ListBucketInventoryConfigurationsCommand } from "./commands/ListBucketInventoryConfigurationsCommand";
import { ListBucketMetricsConfigurationsCommand } from "./commands/ListBucketMetricsConfigurationsCommand";
import { ListBucketsCommand } from "./commands/ListBucketsCommand";
import { ListMultipartUploadsCommand } from "./commands/ListMultipartUploadsCommand";
import { ListObjectVersionsCommand } from "./commands/ListObjectVersionsCommand";
import { ListObjectsCommand } from "./commands/ListObjectsCommand";
import { ListObjectsV2Command } from "./commands/ListObjectsV2Command";
import { ListPartsCommand } from "./commands/ListPartsCommand";
import { PutBucketAccelerateConfigurationCommand } from "./commands/PutBucketAccelerateConfigurationCommand";
import { PutBucketAclCommand } from "./commands/PutBucketAclCommand";
import { PutBucketAnalyticsConfigurationCommand } from "./commands/PutBucketAnalyticsConfigurationCommand";
import { PutBucketCorsCommand } from "./commands/PutBucketCorsCommand";
import { PutBucketEncryptionCommand } from "./commands/PutBucketEncryptionCommand";
import { PutBucketInventoryConfigurationCommand } from "./commands/PutBucketInventoryConfigurationCommand";
import { PutBucketLifecycleCommand } from "./commands/PutBucketLifecycleCommand";
import { PutBucketLifecycleConfigurationCommand } from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketLoggingCommand } from "./commands/PutBucketLoggingCommand";
import { PutBucketMetricsConfigurationCommand } from "./commands/PutBucketMetricsConfigurationCommand";
import { PutBucketNotificationCommand } from "./commands/PutBucketNotificationCommand";
import { PutBucketNotificationConfigurationCommand } from "./commands/PutBucketNotificationConfigurationCommand";
import { PutBucketPolicyCommand } from "./commands/PutBucketPolicyCommand";
import { PutBucketReplicationCommand } from "./commands/PutBucketReplicationCommand";
import { PutBucketRequestPaymentCommand } from "./commands/PutBucketRequestPaymentCommand";
import { PutBucketTaggingCommand } from "./commands/PutBucketTaggingCommand";
import { PutBucketVersioningCommand } from "./commands/PutBucketVersioningCommand";
import { PutBucketWebsiteCommand } from "./commands/PutBucketWebsiteCommand";
import { PutObjectAclCommand } from "./commands/PutObjectAclCommand";
import { PutObjectCommand } from "./commands/PutObjectCommand";
import { PutObjectLegalHoldCommand } from "./commands/PutObjectLegalHoldCommand";
import { PutObjectLockConfigurationCommand } from "./commands/PutObjectLockConfigurationCommand";
import { PutObjectRetentionCommand } from "./commands/PutObjectRetentionCommand";
import { PutObjectTaggingCommand } from "./commands/PutObjectTaggingCommand";
import { PutPublicAccessBlockCommand } from "./commands/PutPublicAccessBlockCommand";
import { RestoreObjectCommand } from "./commands/RestoreObjectCommand";
import { SelectObjectContentCommand } from "./commands/SelectObjectContentCommand";
import { UploadPartCommand } from "./commands/UploadPartCommand";
import { UploadPartCopyCommand } from "./commands/UploadPartCopyCommand";

export class S3 extends S3Client {
  /**
   * <p>Aborts a multipart upload.</p> <p>To verify that all parts have been removed, so you don't get charged for the part storage, you should call the List Parts operation and ensure the parts list is empty.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchUpload} <p>The specified multipart upload does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public abortMultipartUpload(
    args: AbortMultipartUploadInput
  ): Promise<AbortMultipartUploadOutput>;
  public abortMultipartUpload(
    args: AbortMultipartUploadInput,
    cb: (err: any, data?: AbortMultipartUploadOutput) => void
  ): void;
  public abortMultipartUpload(
    args: AbortMultipartUploadInput,
    cb?: (err: any, data?: AbortMultipartUploadOutput) => void
  ): Promise<AbortMultipartUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AbortMultipartUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Completes a multipart upload by assembling previously uploaded parts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public completeMultipartUpload(
    args: CompleteMultipartUploadInput
  ): Promise<CompleteMultipartUploadOutput>;
  public completeMultipartUpload(
    args: CompleteMultipartUploadInput,
    cb: (err: any, data?: CompleteMultipartUploadOutput) => void
  ): void;
  public completeMultipartUpload(
    args: CompleteMultipartUploadInput,
    cb?: (err: any, data?: CompleteMultipartUploadOutput) => void
  ): Promise<CompleteMultipartUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CompleteMultipartUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a copy of an object that is already stored in Amazon S3.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ObjectNotInActiveTierError} <p>The source object of the COPY operation is not in the active tier and is only stored in Amazon Glacier.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyObject(args: CopyObjectInput): Promise<CopyObjectOutput>;
  public copyObject(
    args: CopyObjectInput,
    cb: (err: any, data?: CopyObjectOutput) => void
  ): void;
  public copyObject(
    args: CopyObjectInput,
    cb?: (err: any, data?: CopyObjectOutput) => void
  ): Promise<CopyObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BucketAlreadyExists} <p>The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.</p>
   *   - {BucketAlreadyOwnedByYou} <p/>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBucket(args: CreateBucketInput): Promise<CreateBucketOutput>;
  public createBucket(
    args: CreateBucketInput,
    cb: (err: any, data?: CreateBucketOutput) => void
  ): void;
  public createBucket(
    args: CreateBucketInput,
    cb?: (err: any, data?: CreateBucketOutput) => void
  ): Promise<CreateBucketOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBucketCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Initiates a multipart upload and returns an upload ID.</p> <p> <b>Note:</b> After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createMultipartUpload(
    args: CreateMultipartUploadInput
  ): Promise<CreateMultipartUploadOutput>;
  public createMultipartUpload(
    args: CreateMultipartUploadInput,
    cb: (err: any, data?: CreateMultipartUploadOutput) => void
  ): void;
  public createMultipartUpload(
    args: CreateMultipartUploadInput,
    cb?: (err: any, data?: CreateMultipartUploadOutput) => void
  ): Promise<CreateMultipartUploadOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateMultipartUploadCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the bucket. All objects (including all object versions and Delete Markers) in the bucket must be deleted before the bucket itself can be deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucket(args: DeleteBucketInput): Promise<DeleteBucketOutput>;
  public deleteBucket(
    args: DeleteBucketInput,
    cb: (err: any, data?: DeleteBucketOutput) => void
  ): void;
  public deleteBucket(
    args: DeleteBucketInput,
    cb?: (err: any, data?: DeleteBucketOutput) => void
  ): Promise<DeleteBucketOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an analytics configuration for the bucket (specified by the analytics configuration ID).</p> <p>To use this operation, you must have permissions to perform the s3:PutAnalyticsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationInput
  ): Promise<DeleteBucketAnalyticsConfigurationOutput>;
  public deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationInput,
    cb: (err: any, data?: DeleteBucketAnalyticsConfigurationOutput) => void
  ): void;
  public deleteBucketAnalyticsConfiguration(
    args: DeleteBucketAnalyticsConfigurationInput,
    cb?: (err: any, data?: DeleteBucketAnalyticsConfigurationOutput) => void
  ): Promise<DeleteBucketAnalyticsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketAnalyticsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the CORS configuration information set for the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketCors(
    args: DeleteBucketCorsInput
  ): Promise<DeleteBucketCorsOutput>;
  public deleteBucketCors(
    args: DeleteBucketCorsInput,
    cb: (err: any, data?: DeleteBucketCorsOutput) => void
  ): void;
  public deleteBucketCors(
    args: DeleteBucketCorsInput,
    cb?: (err: any, data?: DeleteBucketCorsOutput) => void
  ): Promise<DeleteBucketCorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketCorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the server-side encryption configuration from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketEncryption(
    args: DeleteBucketEncryptionInput
  ): Promise<DeleteBucketEncryptionOutput>;
  public deleteBucketEncryption(
    args: DeleteBucketEncryptionInput,
    cb: (err: any, data?: DeleteBucketEncryptionOutput) => void
  ): void;
  public deleteBucketEncryption(
    args: DeleteBucketEncryptionInput,
    cb?: (err: any, data?: DeleteBucketEncryptionOutput) => void
  ): Promise<DeleteBucketEncryptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketEncryptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an inventory configuration (identified by the inventory ID) from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationInput
  ): Promise<DeleteBucketInventoryConfigurationOutput>;
  public deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationInput,
    cb: (err: any, data?: DeleteBucketInventoryConfigurationOutput) => void
  ): void;
  public deleteBucketInventoryConfiguration(
    args: DeleteBucketInventoryConfigurationInput,
    cb?: (err: any, data?: DeleteBucketInventoryConfigurationOutput) => void
  ): Promise<DeleteBucketInventoryConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketInventoryConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the lifecycle configuration from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketLifecycle(
    args: DeleteBucketLifecycleInput
  ): Promise<DeleteBucketLifecycleOutput>;
  public deleteBucketLifecycle(
    args: DeleteBucketLifecycleInput,
    cb: (err: any, data?: DeleteBucketLifecycleOutput) => void
  ): void;
  public deleteBucketLifecycle(
    args: DeleteBucketLifecycleInput,
    cb?: (err: any, data?: DeleteBucketLifecycleOutput) => void
  ): Promise<DeleteBucketLifecycleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketLifecycleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a metrics configuration (specified by the metrics configuration ID) from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationInput
  ): Promise<DeleteBucketMetricsConfigurationOutput>;
  public deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationInput,
    cb: (err: any, data?: DeleteBucketMetricsConfigurationOutput) => void
  ): void;
  public deleteBucketMetricsConfiguration(
    args: DeleteBucketMetricsConfigurationInput,
    cb?: (err: any, data?: DeleteBucketMetricsConfigurationOutput) => void
  ): Promise<DeleteBucketMetricsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketMetricsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the policy from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketPolicy(
    args: DeleteBucketPolicyInput
  ): Promise<DeleteBucketPolicyOutput>;
  public deleteBucketPolicy(
    args: DeleteBucketPolicyInput,
    cb: (err: any, data?: DeleteBucketPolicyOutput) => void
  ): void;
  public deleteBucketPolicy(
    args: DeleteBucketPolicyInput,
    cb?: (err: any, data?: DeleteBucketPolicyOutput) => void
  ): Promise<DeleteBucketPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes the replication configuration from the bucket. For information about replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html">Cross-Region Replication (CRR)</a> in the <i>Amazon S3 Developer Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketReplication(
    args: DeleteBucketReplicationInput
  ): Promise<DeleteBucketReplicationOutput>;
  public deleteBucketReplication(
    args: DeleteBucketReplicationInput,
    cb: (err: any, data?: DeleteBucketReplicationOutput) => void
  ): void;
  public deleteBucketReplication(
    args: DeleteBucketReplicationInput,
    cb?: (err: any, data?: DeleteBucketReplicationOutput) => void
  ): Promise<DeleteBucketReplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketReplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the tags from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketTagging(
    args: DeleteBucketTaggingInput
  ): Promise<DeleteBucketTaggingOutput>;
  public deleteBucketTagging(
    args: DeleteBucketTaggingInput,
    cb: (err: any, data?: DeleteBucketTaggingOutput) => void
  ): void;
  public deleteBucketTagging(
    args: DeleteBucketTaggingInput,
    cb?: (err: any, data?: DeleteBucketTaggingOutput) => void
  ): Promise<DeleteBucketTaggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketTaggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation removes the website configuration from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBucketWebsite(
    args: DeleteBucketWebsiteInput
  ): Promise<DeleteBucketWebsiteOutput>;
  public deleteBucketWebsite(
    args: DeleteBucketWebsiteInput,
    cb: (err: any, data?: DeleteBucketWebsiteOutput) => void
  ): void;
  public deleteBucketWebsite(
    args: DeleteBucketWebsiteInput,
    cb?: (err: any, data?: DeleteBucketWebsiteOutput) => void
  ): Promise<DeleteBucketWebsiteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBucketWebsiteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the null version (if there is one) of an object and inserts a delete marker, which becomes the latest version of the object. If there isn't a null version, Amazon S3 does not remove any objects.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteObject(args: DeleteObjectInput): Promise<DeleteObjectOutput>;
  public deleteObject(
    args: DeleteObjectInput,
    cb: (err: any, data?: DeleteObjectOutput) => void
  ): void;
  public deleteObject(
    args: DeleteObjectInput,
    cb?: (err: any, data?: DeleteObjectOutput) => void
  ): Promise<DeleteObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the tag-set from an existing object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteObjectTagging(
    args: DeleteObjectTaggingInput
  ): Promise<DeleteObjectTaggingOutput>;
  public deleteObjectTagging(
    args: DeleteObjectTaggingInput,
    cb: (err: any, data?: DeleteObjectTaggingOutput) => void
  ): void;
  public deleteObjectTagging(
    args: DeleteObjectTaggingInput,
    cb?: (err: any, data?: DeleteObjectTaggingOutput) => void
  ): Promise<DeleteObjectTaggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteObjectTaggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation enables you to delete multiple objects from a bucket using a single HTTP request. You may specify up to 1000 keys.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteObjects(args: DeleteObjectsInput): Promise<DeleteObjectsOutput>;
  public deleteObjects(
    args: DeleteObjectsInput,
    cb: (err: any, data?: DeleteObjectsOutput) => void
  ): void;
  public deleteObjects(
    args: DeleteObjectsInput,
    cb?: (err: any, data?: DeleteObjectsOutput) => void
  ): Promise<DeleteObjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteObjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the <code>PublicAccessBlock</code> configuration from an Amazon S3 bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockInput
  ): Promise<DeletePublicAccessBlockOutput>;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockInput,
    cb: (err: any, data?: DeletePublicAccessBlockOutput) => void
  ): void;
  public deletePublicAccessBlock(
    args: DeletePublicAccessBlockInput,
    cb?: (err: any, data?: DeletePublicAccessBlockOutput) => void
  ): Promise<DeletePublicAccessBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePublicAccessBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the accelerate configuration of a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationInput
  ): Promise<GetBucketAccelerateConfigurationOutput>;
  public getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationInput,
    cb: (err: any, data?: GetBucketAccelerateConfigurationOutput) => void
  ): void;
  public getBucketAccelerateConfiguration(
    args: GetBucketAccelerateConfigurationInput,
    cb?: (err: any, data?: GetBucketAccelerateConfigurationOutput) => void
  ): Promise<GetBucketAccelerateConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketAccelerateConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the access control policy for the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketAcl(args: GetBucketAclInput): Promise<GetBucketAclOutput>;
  public getBucketAcl(
    args: GetBucketAclInput,
    cb: (err: any, data?: GetBucketAclOutput) => void
  ): void;
  public getBucketAcl(
    args: GetBucketAclInput,
    cb?: (err: any, data?: GetBucketAclOutput) => void
  ): Promise<GetBucketAclOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketAclCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets an analytics configuration for the bucket (specified by the analytics configuration ID).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationInput
  ): Promise<GetBucketAnalyticsConfigurationOutput>;
  public getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationInput,
    cb: (err: any, data?: GetBucketAnalyticsConfigurationOutput) => void
  ): void;
  public getBucketAnalyticsConfiguration(
    args: GetBucketAnalyticsConfigurationInput,
    cb?: (err: any, data?: GetBucketAnalyticsConfigurationOutput) => void
  ): Promise<GetBucketAnalyticsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketAnalyticsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the CORS configuration for the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketCors(args: GetBucketCorsInput): Promise<GetBucketCorsOutput>;
  public getBucketCors(
    args: GetBucketCorsInput,
    cb: (err: any, data?: GetBucketCorsOutput) => void
  ): void;
  public getBucketCors(
    args: GetBucketCorsInput,
    cb?: (err: any, data?: GetBucketCorsOutput) => void
  ): Promise<GetBucketCorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketCorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the server-side encryption configuration of a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketEncryption(
    args: GetBucketEncryptionInput
  ): Promise<GetBucketEncryptionOutput>;
  public getBucketEncryption(
    args: GetBucketEncryptionInput,
    cb: (err: any, data?: GetBucketEncryptionOutput) => void
  ): void;
  public getBucketEncryption(
    args: GetBucketEncryptionInput,
    cb?: (err: any, data?: GetBucketEncryptionOutput) => void
  ): Promise<GetBucketEncryptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketEncryptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an inventory configuration (identified by the inventory ID) from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationInput
  ): Promise<GetBucketInventoryConfigurationOutput>;
  public getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationInput,
    cb: (err: any, data?: GetBucketInventoryConfigurationOutput) => void
  ): void;
  public getBucketInventoryConfiguration(
    args: GetBucketInventoryConfigurationInput,
    cb?: (err: any, data?: GetBucketInventoryConfigurationOutput) => void
  ): Promise<GetBucketInventoryConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketInventoryConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> No longer used, see the GetBucketLifecycleConfiguration operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketLifecycle(
    args: GetBucketLifecycleInput
  ): Promise<GetBucketLifecycleOutput>;
  public getBucketLifecycle(
    args: GetBucketLifecycleInput,
    cb: (err: any, data?: GetBucketLifecycleOutput) => void
  ): void;
  public getBucketLifecycle(
    args: GetBucketLifecycleInput,
    cb?: (err: any, data?: GetBucketLifecycleOutput) => void
  ): Promise<GetBucketLifecycleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketLifecycleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the lifecycle configuration information set on the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationInput
  ): Promise<GetBucketLifecycleConfigurationOutput>;
  public getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationInput,
    cb: (err: any, data?: GetBucketLifecycleConfigurationOutput) => void
  ): void;
  public getBucketLifecycleConfiguration(
    args: GetBucketLifecycleConfigurationInput,
    cb?: (err: any, data?: GetBucketLifecycleConfigurationOutput) => void
  ): Promise<GetBucketLifecycleConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketLifecycleConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the region the bucket resides in.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketLocation(
    args: GetBucketLocationInput
  ): Promise<GetBucketLocationOutput>;
  public getBucketLocation(
    args: GetBucketLocationInput,
    cb: (err: any, data?: GetBucketLocationOutput) => void
  ): void;
  public getBucketLocation(
    args: GetBucketLocationInput,
    cb?: (err: any, data?: GetBucketLocationOutput) => void
  ): Promise<GetBucketLocationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketLocationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the logging status of a bucket and the permissions users have to view and modify that status. To use GET, you must be the bucket owner.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketLogging(
    args: GetBucketLoggingInput
  ): Promise<GetBucketLoggingOutput>;
  public getBucketLogging(
    args: GetBucketLoggingInput,
    cb: (err: any, data?: GetBucketLoggingOutput) => void
  ): void;
  public getBucketLogging(
    args: GetBucketLoggingInput,
    cb?: (err: any, data?: GetBucketLoggingOutput) => void
  ): Promise<GetBucketLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a metrics configuration (specified by the metrics configuration ID) from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationInput
  ): Promise<GetBucketMetricsConfigurationOutput>;
  public getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationInput,
    cb: (err: any, data?: GetBucketMetricsConfigurationOutput) => void
  ): void;
  public getBucketMetricsConfiguration(
    args: GetBucketMetricsConfigurationInput,
    cb?: (err: any, data?: GetBucketMetricsConfigurationOutput) => void
  ): Promise<GetBucketMetricsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketMetricsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> No longer used, see the GetBucketNotificationConfiguration operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketNotification(
    args: GetBucketNotificationInput
  ): Promise<GetBucketNotificationOutput>;
  public getBucketNotification(
    args: GetBucketNotificationInput,
    cb: (err: any, data?: GetBucketNotificationOutput) => void
  ): void;
  public getBucketNotification(
    args: GetBucketNotificationInput,
    cb?: (err: any, data?: GetBucketNotificationOutput) => void
  ): Promise<GetBucketNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the notification configuration of a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationInput
  ): Promise<GetBucketNotificationConfigurationOutput>;
  public getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationInput,
    cb: (err: any, data?: GetBucketNotificationConfigurationOutput) => void
  ): void;
  public getBucketNotificationConfiguration(
    args: GetBucketNotificationConfigurationInput,
    cb?: (err: any, data?: GetBucketNotificationConfigurationOutput) => void
  ): Promise<GetBucketNotificationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketNotificationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the policy of a specified bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketPolicy(
    args: GetBucketPolicyInput
  ): Promise<GetBucketPolicyOutput>;
  public getBucketPolicy(
    args: GetBucketPolicyInput,
    cb: (err: any, data?: GetBucketPolicyOutput) => void
  ): void;
  public getBucketPolicy(
    args: GetBucketPolicyInput,
    cb?: (err: any, data?: GetBucketPolicyOutput) => void
  ): Promise<GetBucketPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketPolicyStatus(
    args: GetBucketPolicyStatusInput
  ): Promise<GetBucketPolicyStatusOutput>;
  public getBucketPolicyStatus(
    args: GetBucketPolicyStatusInput,
    cb: (err: any, data?: GetBucketPolicyStatusOutput) => void
  ): void;
  public getBucketPolicyStatus(
    args: GetBucketPolicyStatusInput,
    cb?: (err: any, data?: GetBucketPolicyStatusOutput) => void
  ): Promise<GetBucketPolicyStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketPolicyStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the replication configuration of a bucket.</p> <note> <p> It can take a while to propagate the put or delete a replication configuration to all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong result. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketReplication(
    args: GetBucketReplicationInput
  ): Promise<GetBucketReplicationOutput>;
  public getBucketReplication(
    args: GetBucketReplicationInput,
    cb: (err: any, data?: GetBucketReplicationOutput) => void
  ): void;
  public getBucketReplication(
    args: GetBucketReplicationInput,
    cb?: (err: any, data?: GetBucketReplicationOutput) => void
  ): Promise<GetBucketReplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketReplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the request payment configuration of a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketRequestPayment(
    args: GetBucketRequestPaymentInput
  ): Promise<GetBucketRequestPaymentOutput>;
  public getBucketRequestPayment(
    args: GetBucketRequestPaymentInput,
    cb: (err: any, data?: GetBucketRequestPaymentOutput) => void
  ): void;
  public getBucketRequestPayment(
    args: GetBucketRequestPaymentInput,
    cb?: (err: any, data?: GetBucketRequestPaymentOutput) => void
  ): Promise<GetBucketRequestPaymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketRequestPaymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the tag set associated with the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketTagging(
    args: GetBucketTaggingInput
  ): Promise<GetBucketTaggingOutput>;
  public getBucketTagging(
    args: GetBucketTaggingInput,
    cb: (err: any, data?: GetBucketTaggingOutput) => void
  ): void;
  public getBucketTagging(
    args: GetBucketTaggingInput,
    cb?: (err: any, data?: GetBucketTaggingOutput) => void
  ): Promise<GetBucketTaggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketTaggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the versioning state of a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketVersioning(
    args: GetBucketVersioningInput
  ): Promise<GetBucketVersioningOutput>;
  public getBucketVersioning(
    args: GetBucketVersioningInput,
    cb: (err: any, data?: GetBucketVersioningOutput) => void
  ): void;
  public getBucketVersioning(
    args: GetBucketVersioningInput,
    cb?: (err: any, data?: GetBucketVersioningOutput) => void
  ): Promise<GetBucketVersioningOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketVersioningCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the website configuration for a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBucketWebsite(
    args: GetBucketWebsiteInput
  ): Promise<GetBucketWebsiteOutput>;
  public getBucketWebsite(
    args: GetBucketWebsiteInput,
    cb: (err: any, data?: GetBucketWebsiteOutput) => void
  ): void;
  public getBucketWebsite(
    args: GetBucketWebsiteInput,
    cb?: (err: any, data?: GetBucketWebsiteOutput) => void
  ): Promise<GetBucketWebsiteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBucketWebsiteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves objects from Amazon S3.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchKey} <p>The specified key does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObject(args: GetObjectInput): Promise<GetObjectOutput>;
  public getObject(
    args: GetObjectInput,
    cb: (err: any, data?: GetObjectOutput) => void
  ): void;
  public getObject(
    args: GetObjectInput,
    cb?: (err: any, data?: GetObjectOutput) => void
  ): Promise<GetObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the access control list (ACL) of an object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchKey} <p>The specified key does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectAcl(args: GetObjectAclInput): Promise<GetObjectAclOutput>;
  public getObjectAcl(
    args: GetObjectAclInput,
    cb: (err: any, data?: GetObjectAclOutput) => void
  ): void;
  public getObjectAcl(
    args: GetObjectAclInput,
    cb?: (err: any, data?: GetObjectAclOutput) => void
  ): Promise<GetObjectAclOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectAclCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets an object's current Legal Hold status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectLegalHold(
    args: GetObjectLegalHoldInput
  ): Promise<GetObjectLegalHoldOutput>;
  public getObjectLegalHold(
    args: GetObjectLegalHoldInput,
    cb: (err: any, data?: GetObjectLegalHoldOutput) => void
  ): void;
  public getObjectLegalHold(
    args: GetObjectLegalHoldInput,
    cb?: (err: any, data?: GetObjectLegalHoldOutput) => void
  ): Promise<GetObjectLegalHoldOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectLegalHoldCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the object lock configuration for a bucket. The rule specified in the object lock configuration will be applied by default to every new object placed in the specified bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectLockConfiguration(
    args: GetObjectLockConfigurationInput
  ): Promise<GetObjectLockConfigurationOutput>;
  public getObjectLockConfiguration(
    args: GetObjectLockConfigurationInput,
    cb: (err: any, data?: GetObjectLockConfigurationOutput) => void
  ): void;
  public getObjectLockConfiguration(
    args: GetObjectLockConfigurationInput,
    cb?: (err: any, data?: GetObjectLockConfigurationOutput) => void
  ): Promise<GetObjectLockConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectLockConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves an object's retention settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectRetention(
    args: GetObjectRetentionInput
  ): Promise<GetObjectRetentionOutput>;
  public getObjectRetention(
    args: GetObjectRetentionInput,
    cb: (err: any, data?: GetObjectRetentionOutput) => void
  ): void;
  public getObjectRetention(
    args: GetObjectRetentionInput,
    cb?: (err: any, data?: GetObjectRetentionOutput) => void
  ): Promise<GetObjectRetentionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectRetentionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the tag-set of an object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectTagging(
    args: GetObjectTaggingInput
  ): Promise<GetObjectTaggingOutput>;
  public getObjectTagging(
    args: GetObjectTaggingInput,
    cb: (err: any, data?: GetObjectTaggingOutput) => void
  ): void;
  public getObjectTagging(
    args: GetObjectTaggingInput,
    cb?: (err: any, data?: GetObjectTaggingOutput) => void
  ): Promise<GetObjectTaggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectTaggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Return torrent files from a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getObjectTorrent(
    args: GetObjectTorrentInput
  ): Promise<GetObjectTorrentOutput>;
  public getObjectTorrent(
    args: GetObjectTorrentInput,
    cb: (err: any, data?: GetObjectTorrentOutput) => void
  ): void;
  public getObjectTorrent(
    args: GetObjectTorrentInput,
    cb?: (err: any, data?: GetObjectTorrentOutput) => void
  ): Promise<GetObjectTorrentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetObjectTorrentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPublicAccessBlock(
    args: GetPublicAccessBlockInput
  ): Promise<GetPublicAccessBlockOutput>;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockInput,
    cb: (err: any, data?: GetPublicAccessBlockOutput) => void
  ): void;
  public getPublicAccessBlock(
    args: GetPublicAccessBlockInput,
    cb?: (err: any, data?: GetPublicAccessBlockOutput) => void
  ): Promise<GetPublicAccessBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPublicAccessBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation is useful to determine if a bucket exists and you have permission to access it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchBucket} <p>The specified bucket does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public headBucket(args: HeadBucketInput): Promise<HeadBucketOutput>;
  public headBucket(
    args: HeadBucketInput,
    cb: (err: any, data?: HeadBucketOutput) => void
  ): void;
  public headBucket(
    args: HeadBucketInput,
    cb?: (err: any, data?: HeadBucketOutput) => void
  ): Promise<HeadBucketOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new HeadBucketCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The HEAD operation retrieves metadata from an object without returning the object itself. This operation is useful if you're only interested in an object's metadata. To use HEAD, you must have READ access to the object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchKey} <p>The specified key does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public headObject(args: HeadObjectInput): Promise<HeadObjectOutput>;
  public headObject(
    args: HeadObjectInput,
    cb: (err: any, data?: HeadObjectOutput) => void
  ): void;
  public headObject(
    args: HeadObjectInput,
    cb?: (err: any, data?: HeadObjectOutput) => void
  ): Promise<HeadObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new HeadObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the analytics configurations for the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsInput
  ): Promise<ListBucketAnalyticsConfigurationsOutput>;
  public listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsInput,
    cb: (err: any, data?: ListBucketAnalyticsConfigurationsOutput) => void
  ): void;
  public listBucketAnalyticsConfigurations(
    args: ListBucketAnalyticsConfigurationsInput,
    cb?: (err: any, data?: ListBucketAnalyticsConfigurationsOutput) => void
  ): Promise<ListBucketAnalyticsConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBucketAnalyticsConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of inventory configurations for the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsInput
  ): Promise<ListBucketInventoryConfigurationsOutput>;
  public listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsInput,
    cb: (err: any, data?: ListBucketInventoryConfigurationsOutput) => void
  ): void;
  public listBucketInventoryConfigurations(
    args: ListBucketInventoryConfigurationsInput,
    cb?: (err: any, data?: ListBucketInventoryConfigurationsOutput) => void
  ): Promise<ListBucketInventoryConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBucketInventoryConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the metrics configurations for the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsInput
  ): Promise<ListBucketMetricsConfigurationsOutput>;
  public listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsInput,
    cb: (err: any, data?: ListBucketMetricsConfigurationsOutput) => void
  ): void;
  public listBucketMetricsConfigurations(
    args: ListBucketMetricsConfigurationsInput,
    cb?: (err: any, data?: ListBucketMetricsConfigurationsOutput) => void
  ): Promise<ListBucketMetricsConfigurationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBucketMetricsConfigurationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all buckets owned by the authenticated sender of the request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBuckets(args: ListBucketsInput): Promise<ListBucketsOutput>;
  public listBuckets(
    args: ListBucketsInput,
    cb: (err: any, data?: ListBucketsOutput) => void
  ): void;
  public listBuckets(
    args: ListBucketsInput,
    cb?: (err: any, data?: ListBucketsOutput) => void
  ): Promise<ListBucketsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBucketsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation lists in-progress multipart uploads.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMultipartUploads(
    args: ListMultipartUploadsInput
  ): Promise<ListMultipartUploadsOutput>;
  public listMultipartUploads(
    args: ListMultipartUploadsInput,
    cb: (err: any, data?: ListMultipartUploadsOutput) => void
  ): void;
  public listMultipartUploads(
    args: ListMultipartUploadsInput,
    cb?: (err: any, data?: ListMultipartUploadsOutput) => void
  ): Promise<ListMultipartUploadsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMultipartUploadsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata about all of the versions of objects in a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjectVersions(
    args: ListObjectVersionsInput
  ): Promise<ListObjectVersionsOutput>;
  public listObjectVersions(
    args: ListObjectVersionsInput,
    cb: (err: any, data?: ListObjectVersionsOutput) => void
  ): void;
  public listObjectVersions(
    args: ListObjectVersionsInput,
    cb?: (err: any, data?: ListObjectVersionsOutput) => void
  ): Promise<ListObjectVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchBucket} <p>The specified bucket does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjects(args: ListObjectsInput): Promise<ListObjectsOutput>;
  public listObjects(
    args: ListObjectsInput,
    cb: (err: any, data?: ListObjectsOutput) => void
  ): void;
  public listObjects(
    args: ListObjectsInput,
    cb?: (err: any, data?: ListObjectsOutput) => void
  ): Promise<ListObjectsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns some or all (up to 1000) of the objects in a bucket. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. Note: ListObjectsV2 is the revised List Objects API and we recommend you use this revised API for new application development.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchBucket} <p>The specified bucket does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listObjectsV2(args: ListObjectsV2Input): Promise<ListObjectsV2Output>;
  public listObjectsV2(
    args: ListObjectsV2Input,
    cb: (err: any, data?: ListObjectsV2Output) => void
  ): void;
  public listObjectsV2(
    args: ListObjectsV2Input,
    cb?: (err: any, data?: ListObjectsV2Output) => void
  ): Promise<ListObjectsV2Output> | void {
    // create the appropriate command and pass it to .send
    const command = new ListObjectsV2Command(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the parts that have been uploaded for a specific multipart upload.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listParts(args: ListPartsInput): Promise<ListPartsOutput>;
  public listParts(
    args: ListPartsInput,
    cb: (err: any, data?: ListPartsOutput) => void
  ): void;
  public listParts(
    args: ListPartsInput,
    cb?: (err: any, data?: ListPartsOutput) => void
  ): Promise<ListPartsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPartsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the accelerate configuration of an existing bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationInput
  ): Promise<PutBucketAccelerateConfigurationOutput>;
  public putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationInput,
    cb: (err: any, data?: PutBucketAccelerateConfigurationOutput) => void
  ): void;
  public putBucketAccelerateConfiguration(
    args: PutBucketAccelerateConfigurationInput,
    cb?: (err: any, data?: PutBucketAccelerateConfigurationOutput) => void
  ): Promise<PutBucketAccelerateConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketAccelerateConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the permissions on a bucket using access control lists (ACL).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketAcl(args: PutBucketAclInput): Promise<PutBucketAclOutput>;
  public putBucketAcl(
    args: PutBucketAclInput,
    cb: (err: any, data?: PutBucketAclOutput) => void
  ): void;
  public putBucketAcl(
    args: PutBucketAclInput,
    cb?: (err: any, data?: PutBucketAclOutput) => void
  ): Promise<PutBucketAclOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketAclCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets an analytics configuration for the bucket (specified by the analytics configuration ID).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationInput
  ): Promise<PutBucketAnalyticsConfigurationOutput>;
  public putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationInput,
    cb: (err: any, data?: PutBucketAnalyticsConfigurationOutput) => void
  ): void;
  public putBucketAnalyticsConfiguration(
    args: PutBucketAnalyticsConfigurationInput,
    cb?: (err: any, data?: PutBucketAnalyticsConfigurationOutput) => void
  ): Promise<PutBucketAnalyticsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketAnalyticsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the CORS configuration for a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketCors(args: PutBucketCorsInput): Promise<PutBucketCorsOutput>;
  public putBucketCors(
    args: PutBucketCorsInput,
    cb: (err: any, data?: PutBucketCorsOutput) => void
  ): void;
  public putBucketCors(
    args: PutBucketCorsInput,
    cb?: (err: any, data?: PutBucketCorsOutput) => void
  ): Promise<PutBucketCorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketCorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new server-side encryption configuration (or replaces an existing one, if present).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketEncryption(
    args: PutBucketEncryptionInput
  ): Promise<PutBucketEncryptionOutput>;
  public putBucketEncryption(
    args: PutBucketEncryptionInput,
    cb: (err: any, data?: PutBucketEncryptionOutput) => void
  ): void;
  public putBucketEncryption(
    args: PutBucketEncryptionInput,
    cb?: (err: any, data?: PutBucketEncryptionOutput) => void
  ): Promise<PutBucketEncryptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketEncryptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an inventory configuration (identified by the inventory ID) from the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationInput
  ): Promise<PutBucketInventoryConfigurationOutput>;
  public putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationInput,
    cb: (err: any, data?: PutBucketInventoryConfigurationOutput) => void
  ): void;
  public putBucketInventoryConfiguration(
    args: PutBucketInventoryConfigurationInput,
    cb?: (err: any, data?: PutBucketInventoryConfigurationOutput) => void
  ): Promise<PutBucketInventoryConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketInventoryConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> No longer used, see the PutBucketLifecycleConfiguration operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketLifecycle(
    args: PutBucketLifecycleInput
  ): Promise<PutBucketLifecycleOutput>;
  public putBucketLifecycle(
    args: PutBucketLifecycleInput,
    cb: (err: any, data?: PutBucketLifecycleOutput) => void
  ): void;
  public putBucketLifecycle(
    args: PutBucketLifecycleInput,
    cb?: (err: any, data?: PutBucketLifecycleOutput) => void
  ): Promise<PutBucketLifecycleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketLifecycleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets lifecycle configuration for your bucket. If a lifecycle configuration exists, it replaces it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationInput
  ): Promise<PutBucketLifecycleConfigurationOutput>;
  public putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationInput,
    cb: (err: any, data?: PutBucketLifecycleConfigurationOutput) => void
  ): void;
  public putBucketLifecycleConfiguration(
    args: PutBucketLifecycleConfigurationInput,
    cb?: (err: any, data?: PutBucketLifecycleConfigurationOutput) => void
  ): Promise<PutBucketLifecycleConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketLifecycleConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Set the logging parameters for a bucket and to specify permissions for who can view and modify the logging parameters. To set the logging status of a bucket, you must be the bucket owner.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketLogging(
    args: PutBucketLoggingInput
  ): Promise<PutBucketLoggingOutput>;
  public putBucketLogging(
    args: PutBucketLoggingInput,
    cb: (err: any, data?: PutBucketLoggingOutput) => void
  ): void;
  public putBucketLogging(
    args: PutBucketLoggingInput,
    cb?: (err: any, data?: PutBucketLoggingOutput) => void
  ): Promise<PutBucketLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets a metrics configuration (specified by the metrics configuration ID) for the bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationInput
  ): Promise<PutBucketMetricsConfigurationOutput>;
  public putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationInput,
    cb: (err: any, data?: PutBucketMetricsConfigurationOutput) => void
  ): void;
  public putBucketMetricsConfiguration(
    args: PutBucketMetricsConfigurationInput,
    cb?: (err: any, data?: PutBucketMetricsConfigurationOutput) => void
  ): Promise<PutBucketMetricsConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketMetricsConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> No longer used, see the PutBucketNotificationConfiguration operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketNotification(
    args: PutBucketNotificationInput
  ): Promise<PutBucketNotificationOutput>;
  public putBucketNotification(
    args: PutBucketNotificationInput,
    cb: (err: any, data?: PutBucketNotificationOutput) => void
  ): void;
  public putBucketNotification(
    args: PutBucketNotificationInput,
    cb?: (err: any, data?: PutBucketNotificationOutput) => void
  ): Promise<PutBucketNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables notifications of specified events for a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationInput
  ): Promise<PutBucketNotificationConfigurationOutput>;
  public putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationInput,
    cb: (err: any, data?: PutBucketNotificationConfigurationOutput) => void
  ): void;
  public putBucketNotificationConfiguration(
    args: PutBucketNotificationConfigurationInput,
    cb?: (err: any, data?: PutBucketNotificationConfigurationOutput) => void
  ): Promise<PutBucketNotificationConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketNotificationConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies an Amazon S3 bucket policy to an Amazon S3 bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketPolicy(
    args: PutBucketPolicyInput
  ): Promise<PutBucketPolicyOutput>;
  public putBucketPolicy(
    args: PutBucketPolicyInput,
    cb: (err: any, data?: PutBucketPolicyOutput) => void
  ): void;
  public putBucketPolicy(
    args: PutBucketPolicyInput,
    cb?: (err: any, data?: PutBucketPolicyOutput) => void
  ): Promise<PutBucketPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates a replication configuration or replaces an existing one. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html">Cross-Region Replication (CRR)</a> in the <i>Amazon S3 Developer Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketReplication(
    args: PutBucketReplicationInput
  ): Promise<PutBucketReplicationOutput>;
  public putBucketReplication(
    args: PutBucketReplicationInput,
    cb: (err: any, data?: PutBucketReplicationOutput) => void
  ): void;
  public putBucketReplication(
    args: PutBucketReplicationInput,
    cb?: (err: any, data?: PutBucketReplicationOutput) => void
  ): Promise<PutBucketReplicationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketReplicationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the request payment configuration for a bucket. By default, the bucket owner pays for downloads from the bucket. This configuration parameter enables the bucket owner (only) to specify that the person requesting the download will be charged for the download. Documentation on requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketRequestPayment(
    args: PutBucketRequestPaymentInput
  ): Promise<PutBucketRequestPaymentOutput>;
  public putBucketRequestPayment(
    args: PutBucketRequestPaymentInput,
    cb: (err: any, data?: PutBucketRequestPaymentOutput) => void
  ): void;
  public putBucketRequestPayment(
    args: PutBucketRequestPaymentInput,
    cb?: (err: any, data?: PutBucketRequestPaymentOutput) => void
  ): Promise<PutBucketRequestPaymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketRequestPaymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the tags for a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketTagging(
    args: PutBucketTaggingInput
  ): Promise<PutBucketTaggingOutput>;
  public putBucketTagging(
    args: PutBucketTaggingInput,
    cb: (err: any, data?: PutBucketTaggingOutput) => void
  ): void;
  public putBucketTagging(
    args: PutBucketTaggingInput,
    cb?: (err: any, data?: PutBucketTaggingOutput) => void
  ): Promise<PutBucketTaggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketTaggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the versioning state of an existing bucket. To set the versioning state, you must be the bucket owner.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketVersioning(
    args: PutBucketVersioningInput
  ): Promise<PutBucketVersioningOutput>;
  public putBucketVersioning(
    args: PutBucketVersioningInput,
    cb: (err: any, data?: PutBucketVersioningOutput) => void
  ): void;
  public putBucketVersioning(
    args: PutBucketVersioningInput,
    cb?: (err: any, data?: PutBucketVersioningOutput) => void
  ): Promise<PutBucketVersioningOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketVersioningCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Set the website configuration for a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBucketWebsite(
    args: PutBucketWebsiteInput
  ): Promise<PutBucketWebsiteOutput>;
  public putBucketWebsite(
    args: PutBucketWebsiteInput,
    cb: (err: any, data?: PutBucketWebsiteOutput) => void
  ): void;
  public putBucketWebsite(
    args: PutBucketWebsiteInput,
    cb?: (err: any, data?: PutBucketWebsiteOutput) => void
  ): Promise<PutBucketWebsiteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBucketWebsiteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds an object to a bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putObject(args: PutObjectInput): Promise<PutObjectOutput>;
  public putObject(
    args: PutObjectInput,
    cb: (err: any, data?: PutObjectOutput) => void
  ): void;
  public putObject(
    args: PutObjectInput,
    cb?: (err: any, data?: PutObjectOutput) => void
  ): Promise<PutObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>uses the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchKey} <p>The specified key does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putObjectAcl(args: PutObjectAclInput): Promise<PutObjectAclOutput>;
  public putObjectAcl(
    args: PutObjectAclInput,
    cb: (err: any, data?: PutObjectAclOutput) => void
  ): void;
  public putObjectAcl(
    args: PutObjectAclInput,
    cb?: (err: any, data?: PutObjectAclOutput) => void
  ): Promise<PutObjectAclOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutObjectAclCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Applies a Legal Hold configuration to the specified object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putObjectLegalHold(
    args: PutObjectLegalHoldInput
  ): Promise<PutObjectLegalHoldOutput>;
  public putObjectLegalHold(
    args: PutObjectLegalHoldInput,
    cb: (err: any, data?: PutObjectLegalHoldOutput) => void
  ): void;
  public putObjectLegalHold(
    args: PutObjectLegalHoldInput,
    cb?: (err: any, data?: PutObjectLegalHoldOutput) => void
  ): Promise<PutObjectLegalHoldOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutObjectLegalHoldCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Places an object lock configuration on the specified bucket. The rule specified in the object lock configuration will be applied by default to every new object placed in the specified bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putObjectLockConfiguration(
    args: PutObjectLockConfigurationInput
  ): Promise<PutObjectLockConfigurationOutput>;
  public putObjectLockConfiguration(
    args: PutObjectLockConfigurationInput,
    cb: (err: any, data?: PutObjectLockConfigurationOutput) => void
  ): void;
  public putObjectLockConfiguration(
    args: PutObjectLockConfigurationInput,
    cb?: (err: any, data?: PutObjectLockConfigurationOutput) => void
  ): Promise<PutObjectLockConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutObjectLockConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Places an Object Retention configuration on an object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putObjectRetention(
    args: PutObjectRetentionInput
  ): Promise<PutObjectRetentionOutput>;
  public putObjectRetention(
    args: PutObjectRetentionInput,
    cb: (err: any, data?: PutObjectRetentionOutput) => void
  ): void;
  public putObjectRetention(
    args: PutObjectRetentionInput,
    cb?: (err: any, data?: PutObjectRetentionOutput) => void
  ): Promise<PutObjectRetentionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutObjectRetentionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the supplied tag-set to an object that already exists in a bucket</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putObjectTagging(
    args: PutObjectTaggingInput
  ): Promise<PutObjectTaggingOutput>;
  public putObjectTagging(
    args: PutObjectTaggingInput,
    cb: (err: any, data?: PutObjectTaggingOutput) => void
  ): void;
  public putObjectTagging(
    args: PutObjectTaggingInput,
    cb?: (err: any, data?: PutObjectTaggingOutput) => void
  ): Promise<PutObjectTaggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutObjectTaggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an Amazon S3 bucket.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPublicAccessBlock(
    args: PutPublicAccessBlockInput
  ): Promise<PutPublicAccessBlockOutput>;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockInput,
    cb: (err: any, data?: PutPublicAccessBlockOutput) => void
  ): void;
  public putPublicAccessBlock(
    args: PutPublicAccessBlockInput,
    cb?: (err: any, data?: PutPublicAccessBlockOutput) => void
  ): Promise<PutPublicAccessBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPublicAccessBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores an archived copy of an object back into Amazon S3</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ObjectAlreadyInActiveTierError} <p>This operation is not allowed against this storage tier</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreObject(args: RestoreObjectInput): Promise<RestoreObjectOutput>;
  public restoreObject(
    args: RestoreObjectInput,
    cb: (err: any, data?: RestoreObjectOutput) => void
  ): void;
  public restoreObject(
    args: RestoreObjectInput,
    cb?: (err: any, data?: RestoreObjectOutput) => void
  ): Promise<RestoreObjectOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreObjectCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This operation filters the contents of an Amazon S3 object based on a simple Structured Query Language (SQL) statement. In the request, along with the SQL expression, you must also specify a data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records, and returns only records that match the specified SQL expression. You must also specify the data serialization format for the response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public selectObjectContent(
    args: SelectObjectContentInput
  ): Promise<SelectObjectContentOutput>;
  public selectObjectContent(
    args: SelectObjectContentInput,
    cb: (err: any, data?: SelectObjectContentOutput) => void
  ): void;
  public selectObjectContent(
    args: SelectObjectContentInput,
    cb?: (err: any, data?: SelectObjectContentOutput) => void
  ): Promise<SelectObjectContentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SelectObjectContentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads a part in a multipart upload.</p> <p> <b>Note:</b> After you initiate multipart upload and upload one or more parts, you must either complete or abort multipart upload in order to stop getting charged for storage of the uploaded parts. Only after you either complete or abort multipart upload, Amazon S3 frees up the parts storage and stops charging you for the parts storage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public uploadPart(args: UploadPartInput): Promise<UploadPartOutput>;
  public uploadPart(
    args: UploadPartInput,
    cb: (err: any, data?: UploadPartOutput) => void
  ): void;
  public uploadPart(
    args: UploadPartInput,
    cb?: (err: any, data?: UploadPartOutput) => void
  ): Promise<UploadPartOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UploadPartCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads a part by copying data from an existing object as data source.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public uploadPartCopy(
    args: UploadPartCopyInput
  ): Promise<UploadPartCopyOutput>;
  public uploadPartCopy(
    args: UploadPartCopyInput,
    cb: (err: any, data?: UploadPartCopyOutput) => void
  ): void;
  public uploadPartCopy(
    args: UploadPartCopyInput,
    cb?: (err: any, data?: UploadPartCopyOutput) => void
  ): Promise<UploadPartCopyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UploadPartCopyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
