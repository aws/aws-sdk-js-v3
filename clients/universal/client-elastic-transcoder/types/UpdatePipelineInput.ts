import { _Notifications } from "./_Notifications";
import { _PipelineOutputConfig } from "./_PipelineOutputConfig";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>UpdatePipelineRequest</code> structure.</p>
 */
export interface UpdatePipelineInput {
  /**
   * <p>The ID of the pipeline that you want to update.</p>
   */
  Id: string;

  /**
   * <p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>
   */
  Name?: string;

  /**
   * <p>The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.</p>
   */
  InputBucket?: string;

  /**
   * <p>The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.</p>
   */
  Role?: string;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>
   */
  AwsKmsKeyArn?: string;

  /**
   * <p>The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> <ul> <li> <p> <b>Progressing</b>: The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process jobs that are added to this pipeline. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Complete</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing a job. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Warning</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Error</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> </ul>
   */
  Notifications?: _Notifications;

  /**
   * <p>The optional <code>ContentConfig</code> object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists: which bucket to use, which users you want to have access to the files, the type of access you want users to have, and the storage class that you want to assign to the files.</p> <p>If you specify values for <code>ContentConfig</code>, you must also specify values for <code>ThumbnailConfig</code>.</p> <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>, omit the <code>OutputBucket</code> object.</p> <ul> <li> <p> <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists.</p> </li> <li> <p> <b>Permissions</b> (Optional): The Permissions object specifies which users you want to have access to transcoded files and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> </li> <li> <p> <b>Grantee Type</b>: Specify the type of value that appears in the <code>Grantee</code> object:</p> <ul> <li> <p> <b>Canonical</b>: The value in the <code>Grantee</code> object is either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution. For more information about canonical user IDs, see Access Control List (ACL) Overview in the Amazon Simple Storage Service Developer Guide. For more information about using CloudFront origin access identities to require that users use CloudFront URLs instead of Amazon S3 URLs, see Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <b>Email</b>: The value in the <code>Grantee</code> object is the registered email address of an AWS account.</p> </li> <li> <p> <b>Group</b>: The value in the <code>Grantee</code> object is one of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <b>Grantee</b>: The AWS user or group that you want to have access to transcoded files and playlists. To identify the user or group, you can specify the canonical user ID for an AWS account, an origin access identity for a CloudFront distribution, the registered email address of an AWS account, or a predefined Amazon S3 group </p> </li> <li> <p> <b>Access</b>: The permission that you want to give to the AWS user that you specified in <code>Grantee</code>. Permissions are granted on the files that Elastic Transcoder adds to the bucket, including playlists and video files. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the objects and metadata for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for objects that Elastic Transcoder adds to the Amazon S3 bucket. </p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has <code>READ</code>, <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> </ul> </li> <li> <p> <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket.</p> </li> </ul>
   */
  ContentConfig?: _PipelineOutputConfig;

  /**
   * <p>The <code>ThumbnailConfig</code> object specifies several values, including the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files, which users you want to have access to the files, the type of access you want users to have, and the storage class that you want to assign to the files.</p> <p>If you specify values for <code>ContentConfig</code>, you must also specify values for <code>ThumbnailConfig</code> even if you don't want to create thumbnails.</p> <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>, omit the <code>OutputBucket</code> object.</p> <ul> <li> <p> <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files.</p> </li> <li> <p> <b>Permissions</b> (Optional): The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to thumbnail files, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> </li> <li> <p> <b>GranteeType</b>: Specify the type of value that appears in the Grantee object:</p> <ul> <li> <p> <b>Canonical</b>: The value in the <code>Grantee</code> object is either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <b>Email</b>: The value in the <code>Grantee</code> object is the registered email address of an AWS account.</p> </li> <li> <p> <b>Group</b>: The value in the <code>Grantee</code> object is one of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <b>Grantee</b>: The AWS user or group that you want to have access to thumbnail files. To identify the user or group, you can specify the canonical user ID for an AWS account, an origin access identity for a CloudFront distribution, the registered email address of an AWS account, or a predefined Amazon S3 group. </p> </li> <li> <p> <b>Access</b>: The permission that you want to give to the AWS user that you specified in <code>Grantee</code>. Permissions are granted on the thumbnail files that Elastic Transcoder adds to the bucket. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the thumbnails and metadata for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has <code>READ</code>, <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket. </p> </li> </ul> </li> <li> <p> <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the thumbnails that it stores in your Amazon S3 bucket.</p> </li> </ul>
   */
  ThumbnailConfig?: _PipelineOutputConfig;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
