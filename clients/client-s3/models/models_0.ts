import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will
 *          wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
 *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart
   *          upload.</p>
   */
  DaysAfterInitiation?: number;
}

export namespace AbortIncompleteMultipartUpload {
  export const filterSensitiveLog = (obj: AbortIncompleteMultipartUpload): any => ({
    ...obj,
  });
}

export type RequestCharged = "requester";

export interface AbortMultipartUploadOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace AbortMultipartUploadOutput {
  export const filterSensitiveLog = (obj: AbortMultipartUploadOutput): any => ({
    ...obj,
  });
}

export type RequestPayer = "requester";

export interface AbortMultipartUploadRequest {
  /**
   * <p>The bucket name to which the upload was taking place. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace AbortMultipartUploadRequest {
  export const filterSensitiveLog = (obj: AbortMultipartUploadRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified multipart upload does not exist.</p>
 */
export interface NoSuchUpload extends __SmithyException, $MetadataBearer {
  name: "NoSuchUpload";
  $fault: "client";
}

export namespace NoSuchUpload {
  export const filterSensitiveLog = (obj: NoSuchUpload): any => ({
    ...obj,
  });
}

export type BucketAccelerateStatus = "Enabled" | "Suspended";

/**
 * <p>Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3
 *             Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer
 *          Guide</i>.</p>
 */
export interface AccelerateConfiguration {
  /**
   * <p>Specifies the transfer acceleration status of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;
}

export namespace AccelerateConfiguration {
  export const filterSensitiveLog = (obj: AccelerateConfiguration): any => ({
    ...obj,
  });
}

export type Type = "AmazonCustomerByEmail" | "CanonicalUser" | "Group";

/**
 * <p>Container for the person being granted permissions.</p>
 */
export interface Grantee {
  /**
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * <p>Email address of the grantee.</p>
   *          <note>
   *             <p>Using email addresses to specify a grantee is only supported in the following AWS Regions: </p>
   *             <ul>
   *                <li>
   *                   <p>US East (N. Virginia)</p>
   *                </li>
   *                <li>
   *                   <p>US West (N. California)</p>
   *                </li>
   *                <li>
   *                   <p> US West (Oregon)</p>
   *                </li>
   *                <li>
   *                   <p> Asia Pacific (Singapore)</p>
   *                </li>
   *                <li>
   *                   <p>Asia Pacific (Sydney)</p>
   *                </li>
   *                <li>
   *                   <p>Asia Pacific (Tokyo)</p>
   *                </li>
   *                <li>
   *                   <p>Europe (Ireland)</p>
   *                </li>
   *                <li>
   *                   <p>South America (São Paulo)</p>
   *                </li>
   *             </ul>
   *             <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the AWS General Reference.</p>
   *          </note>
   */
  EmailAddress?: string;

  /**
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * <p>URI of the grantee group.</p>
   */
  URI?: string;

  /**
   * <p>Type of grantee</p>
   */
  Type: Type | string | undefined;
}

export namespace Grantee {
  export const filterSensitiveLog = (obj: Grantee): any => ({
    ...obj,
  });
}

export type Permission = "FULL_CONTROL" | "READ" | "READ_ACP" | "WRITE" | "WRITE_ACP";

/**
 * <p>Container for grant information.</p>
 */
export interface Grant {
  /**
   * <p>The person being granted permissions.</p>
   */
  Grantee?: Grantee;

  /**
   * <p>Specifies the permission given to the grantee.</p>
   */
  Permission?: Permission | string;
}

export namespace Grant {
  export const filterSensitiveLog = (obj: Grant): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the owner's display name and ID.</p>
 */
export interface Owner {
  /**
   * <p>Container for the display name of the owner.</p>
   */
  DisplayName?: string;

  /**
   * <p>Container for the ID of the owner.</p>
   */
  ID?: string;
}

export namespace Owner {
  export const filterSensitiveLog = (obj: Owner): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
 */
export interface AccessControlPolicy {
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];

  /**
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;
}

export namespace AccessControlPolicy {
  export const filterSensitiveLog = (obj: AccessControlPolicy): any => ({
    ...obj,
  });
}

export type OwnerOverride = "Destination";

/**
 * <p>A container for information about access control for replicas.</p>
 */
export interface AccessControlTranslation {
  /**
   * <p>Specifies the replica ownership. For default and valid values, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT bucket
   *             replication</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  Owner: OwnerOverride | string | undefined;
}

export namespace AccessControlTranslation {
  export const filterSensitiveLog = (obj: AccessControlTranslation): any => ({
    ...obj,
  });
}

export type ServerSideEncryption = "AES256" | "aws:kms";

export interface CompleteMultipartUploadOutput {
  /**
   * <p>The URI that identifies the newly created object.</p>
   */
  Location?: string;

  /**
   * <p>The name of the bucket that contains the newly created object.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket?: string;

  /**
   * <p>The object key of the newly created object.</p>
   */
  Key?: string;

  /**
   * <p>If the object expiration is configured, this will contain the expiration date
   *          (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Entity tag that identifies the newly created object's data. Objects with different
   *          object data will have different entity tags. The entity tag is an opaque string. The entity
   *          tag may or may not be an MD5 digest of the object data. If the entity tag is not an MD5
   *          digest of the object data, it will contain one or more nonhexadecimal characters and/or
   *          will consist of less than 32 or more than 32 hexadecimal digits.</p>
   */
  ETag?: string;

  /**
   * <p>If you specified server-side encryption either with an Amazon S3-managed encryption key or an
   *          AWS KMS customer master key (CMK) in your initiate multipart upload request, the response
   *          includes this header. It confirms the encryption algorithm that Amazon S3 used to encrypt the
   *          object.</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version ID of the newly created object, in case the bucket has versioning turned
   *          on.</p>
   */
  VersionId?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace CompleteMultipartUploadOutput {
  export const filterSensitiveLog = (obj: CompleteMultipartUploadOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Details of the parts that were uploaded.</p>
 */
export interface CompletedPart {
  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Part number that identifies the part. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;
}

export namespace CompletedPart {
  export const filterSensitiveLog = (obj: CompletedPart): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the completed multipart upload details.</p>
 */
export interface CompletedMultipartUpload {
  /**
   * <p>Array of CompletedPart data types.</p>
   */
  Parts?: CompletedPart[];
}

export namespace CompletedMultipartUpload {
  export const filterSensitiveLog = (obj: CompletedMultipartUpload): any => ({
    ...obj,
  });
}

export interface CompleteMultipartUploadRequest {
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>The container for the multipart upload request information.</p>
   */
  MultipartUpload?: CompletedMultipartUpload;

  /**
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace CompleteMultipartUploadRequest {
  export const filterSensitiveLog = (obj: CompleteMultipartUploadRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyObjectResult {
  /**
   * <p>Returns the ETag of the new object. The ETag reflects only changes to the contents of an
   *          object, not its metadata. The source and destination ETag is identical for a successfully
   *          copied object.</p>
   */
  ETag?: string;

  /**
   * <p>Returns the date that the object was last modified.</p>
   */
  LastModified?: Date;
}

export namespace CopyObjectResult {
  export const filterSensitiveLog = (obj: CopyObjectResult): any => ({
    ...obj,
  });
}

export interface CopyObjectOutput {
  /**
   * <p>Container for all response elements.</p>
   */
  CopyObjectResult?: CopyObjectResult;

  /**
   * <p>If the object expiration is configured, the response includes this header.</p>
   */
  Expiration?: string;

  /**
   * <p>Version of the copied object in the destination bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * <p>Version ID of the newly created copy.</p>
   */
  VersionId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the copied object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace CopyObjectOutput {
  export const filterSensitiveLog = (obj: CopyObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export type ObjectCannedACL =
  | "authenticated-read"
  | "aws-exec-read"
  | "bucket-owner-full-control"
  | "bucket-owner-read"
  | "private"
  | "public-read"
  | "public-read-write";

export type MetadataDirective = "COPY" | "REPLACE";

export type ObjectLockLegalHoldStatus = "OFF" | "ON";

export type ObjectLockMode = "COMPLIANCE" | "GOVERNANCE";

export type StorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "OUTPOSTS"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";

export type TaggingDirective = "COPY" | "REPLACE";

export interface CopyObjectRequest {
  /**
   * <p>The canned ACL to apply to the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>The name of the destination bucket.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>Specifies the source object for the copy operation. You specify the value in one of two
   *          formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">access
   *          point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source
   *                bucket and the key of the source object, separated by a slash (/). For example, to
   *                copy the object <code>reports/january.pdf</code> from the bucket
   *                   <code>awsexamplebucket</code>, use
   *                   <code>awsexamplebucket/reports/january.pdf</code>. The value must be URL
   *                encoded.</p>
   *             </li>
   *             <li>
   *                <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p>
   *                <note>
   *                   <p>Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same AWS Region.</p>
   *                </note>
   *                <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL encoded.  </p>
   *             </li>
   *          </ul>
   *          <p>To copy a specific version of an object, append <code>?versionId=<version-id></code>
   *          to the value (for example,
   *             <code>awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>).
   *          If you don't specify a version ID, Amazon S3 copies the latest version of the source
   *          object.</p>
   */
  CopySource: string | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   */
  CopySourceIfMatch?: string;

  /**
   * <p>Copies the object if it has been modified since the specified time.</p>
   */
  CopySourceIfModifiedSince?: Date;

  /**
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   */
  CopySourceIfNoneMatch?: string;

  /**
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   */
  CopySourceIfUnmodifiedSince?: Date;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its
   *       metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>The key of the destination object.</p>
   */
  Key: string | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>Specifies whether the metadata is copied from the source object or replaced with
   *          metadata provided in the request.</p>
   */
  MetadataDirective?: MetadataDirective | string;

  /**
   * <p>Specifies whether the object tag-set are copied from the source object or replaced with
   *          tag-set provided in the request.</p>
   */
  TaggingDirective?: TaggingDirective | string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3
   *             Service Developer Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for
   *          an object protected by AWS KMS will fail if not made via SSL or using SigV4. For
   *          information about configuring using any of the officially supported AWS SDKs and AWS CLI,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the
   *             Signature Version in Request Authentication</a> in the <i>Amazon S3 Developer
   *             Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this
   *          header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value
   *          pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. </p>
   *          <p>Specifying this header with a COPY operation doesn’t affect bucket-level settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *          AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source
   *          object. The encryption key provided in this header must be one that was used when the
   *          source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The tag-set for the object destination object this value must be used in conjunction
   *          with the <code>TaggingDirective</code>. The tag-set must be encoded as URL Query
   *          parameters.</p>
   */
  Tagging?: string;

  /**
   * <p>The Object Lock mode that you want to apply to the copied object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when you want the copied object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether you want to apply a Legal Hold to the copied object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedSourceBucketOwner?: string;
}

export namespace CopyObjectRequest {
  export const filterSensitiveLog = (obj: CopyObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>The source object of the COPY operation is not in the active tier and is only stored in
 *          Amazon S3 Glacier.</p>
 */
export interface ObjectNotInActiveTierError extends __SmithyException, $MetadataBearer {
  name: "ObjectNotInActiveTierError";
  $fault: "client";
}

export namespace ObjectNotInActiveTierError {
  export const filterSensitiveLog = (obj: ObjectNotInActiveTierError): any => ({
    ...obj,
  });
}

/**
 * <p>The requested bucket name is not available. The bucket namespace is shared by all users
 *          of the system. Select a different name and try again.</p>
 */
export interface BucketAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "BucketAlreadyExists";
  $fault: "client";
}

export namespace BucketAlreadyExists {
  export const filterSensitiveLog = (obj: BucketAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The bucket you tried to create already exists, and you own it. Amazon S3 returns this error
 *          in all AWS Regions except in the North Virginia Region. For legacy compatibility, if you
 *          re-create an existing bucket that you already own in the North Virginia Region, Amazon S3
 *          returns 200 OK and resets the bucket access control lists (ACLs).</p>
 */
export interface BucketAlreadyOwnedByYou extends __SmithyException, $MetadataBearer {
  name: "BucketAlreadyOwnedByYou";
  $fault: "client";
}

export namespace BucketAlreadyOwnedByYou {
  export const filterSensitiveLog = (obj: BucketAlreadyOwnedByYou): any => ({
    ...obj,
  });
}

export interface CreateBucketOutput {
  /**
   * <p>Specifies the Region where the bucket will be created. If you are creating a bucket on
   *          the US East (N. Virginia) Region (us-east-1), you do not need to specify the
   *          location.</p>
   */
  Location?: string;
}

export namespace CreateBucketOutput {
  export const filterSensitiveLog = (obj: CreateBucketOutput): any => ({
    ...obj,
  });
}

export type BucketCannedACL = "authenticated-read" | "private" | "public-read" | "public-read-write";

export type BucketLocationConstraint =
  | "EU"
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ca-central-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-2"
  | "us-gov-east-1"
  | "us-gov-west-1"
  | "us-west-1"
  | "us-west-2";

/**
 * <p>The configuration information for the bucket.</p>
 */
export interface CreateBucketConfiguration {
  /**
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region,
   *          the bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export namespace CreateBucketConfiguration {
  export const filterSensitiveLog = (obj: CreateBucketConfiguration): any => ({
    ...obj,
  });
}

export interface CreateBucketRequest {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?: BucketCannedACL | string;

  /**
   * <p>The name of the bucket to create.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  CreateBucketConfiguration?: CreateBucketConfiguration;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p>
   */
  ObjectLockEnabledForBucket?: boolean;
}

export namespace CreateBucketRequest {
  export const filterSensitiveLog = (obj: CreateBucketRequest): any => ({
    ...obj,
  });
}

export interface CreateMultipartUploadOutput {
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete
   *          multipart uploads and the prefix in the lifecycle rule matches the object name in the
   *          request, the response includes this header. The header indicates when the initiated
   *          multipart upload becomes eligible for an abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>.</p>
   *
   *          <p>The response also includes the <code>x-amz-abort-rule-id</code> header that provides the
   *          ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It
   *          identifies the applicable lifecycle configuration rule that defines the action to abort
   *          incomplete multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace CreateMultipartUploadOutput {
  export const filterSensitiveLog = (obj: CreateMultipartUploadOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface CreateMultipartUploadRequest {
  /**
   * <p>The canned ACL to apply to the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>The name of the bucket to which to initiate the upload</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its
   *       metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Object key for which the multipart upload is to be initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3
   *             Service Developer Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the ID of the symmetric customer managed AWS KMS CMK to use for object
   *          encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not
   *          made via SSL or using SigV4. For information about configuring using any of the officially
   *          supported AWS SDKs and AWS CLI, see <a href="https://docs.aws.amazon.com/http:/docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the Signature Version in Request Authentication</a>
   *          in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this
   *          header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value
   *          pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
   *          <p>Specifying this header with an object operation doesn’t affect bucket-level settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters.</p>
   */
  Tagging?: string;

  /**
   * <p>Specifies the Object Lock mode that you want to apply to the uploaded object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>Specifies the date and time when you want the Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether you want to apply a Legal Hold to the uploaded object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace CreateMultipartUploadRequest {
  export const filterSensitiveLog = (obj: CreateMultipartUploadRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface DeleteBucketRequest {
  /**
   * <p>Specifies the bucket being deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketRequest {
  export const filterSensitiveLog = (obj: DeleteBucketRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketCorsRequest {
  /**
   * <p>Specifies the bucket whose <code>cors</code> configuration is being deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketCorsRequest {
  export const filterSensitiveLog = (obj: DeleteBucketCorsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketEncryptionRequest {
  /**
   * <p>The name of the bucket containing the server-side encryption configuration to
   *          delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: DeleteBucketEncryptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;
}

export namespace DeleteBucketIntelligentTieringConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketIntelligentTieringConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket containing the inventory configuration to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketInventoryConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketLifecycleRequest {
  /**
   * <p>The bucket name of the lifecycle to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketLifecycleRequest {
  export const filterSensitiveLog = (obj: DeleteBucketLifecycleRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket containing the metrics configuration to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketMetricsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketOwnershipControlsRequest {
  /**
   * <p>The Amazon S3 bucket whose <code>OwnershipControls</code> you want to delete. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketOwnershipControlsRequest {
  export const filterSensitiveLog = (obj: DeleteBucketOwnershipControlsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketPolicyRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteBucketPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketReplicationRequest {
  /**
   * <p> The bucket name. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketReplicationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketReplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketTaggingRequest {
  /**
   * <p>The bucket that has the tag set to be removed.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketWebsiteRequest {
  /**
   * <p>The bucket name for which you want to remove the website configuration. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: DeleteBucketWebsiteRequest): any => ({
    ...obj,
  });
}

export interface DeleteObjectOutput {
  /**
   * <p>Specifies whether the versioned object that was permanently deleted was (true) or was
   *          not (false) a delete marker.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>Returns the version ID of the delete marker created as a result of the DELETE
   *          operation.</p>
   */
  VersionId?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace DeleteObjectOutput {
  export const filterSensitiveLog = (obj: DeleteObjectOutput): any => ({
    ...obj,
  });
}

export interface DeleteObjectRequest {
  /**
   * <p>The bucket name of the bucket containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Key name of the object to delete.</p>
   */
  Key: string | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device. Required to permanently delete a versioned
   *          object if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process
   *          this operation.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteObjectRequest {
  export const filterSensitiveLog = (obj: DeleteObjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the deleted object.</p>
 */
export interface DeletedObject {
  /**
   * <p>The name of the deleted object.</p>
   */
  Key?: string;

  /**
   * <p>The version ID of the deleted object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the versioned object that was permanently deleted was (true) or was
   *          not (false) a delete marker. In a simple DELETE, this header indicates whether (true) or
   *          not (false) a delete marker was created.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>The version ID of the delete marker created as a result of the DELETE operation. If you
   *          delete a specific object version, the value returned by this header is the version ID of
   *          the object version deleted.</p>
   */
  DeleteMarkerVersionId?: string;
}

export namespace DeletedObject {
  export const filterSensitiveLog = (obj: DeletedObject): any => ({
    ...obj,
  });
}

/**
 * <p>Container for all error elements.</p>
 */
export interface _Error {
  /**
   * <p>The error key.</p>
   */
  Key?: string;

  /**
   * <p>The version ID of the error.</p>
   */
  VersionId?: string;

  /**
   * <p>The error code is a string that uniquely identifies an error condition. It is meant to
   *          be read and understood by programs that detect and handle errors by type. </p>
   *          <p class="title">
   *             <b>Amazon S3 error codes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AccessDenied </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Access Denied</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AccountProblem</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> There is a problem with your AWS account
   *                      that prevents the operation from completing successfully. Contact AWS Support
   *                      for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AllAccessDisabled</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> All access to this Amazon S3 resource has been
   *                      disabled. Contact AWS Support for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AmbiguousGrantByEmailAddress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The email address you provided is
   *                      associated with more than one account.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AuthorizationHeaderMalformed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The authorization header you provided is
   *                      invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BadDigest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The Content-MD5 you specified did not
   *                      match what we received.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketAlreadyExists</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The requested bucket name is not
   *                      available. The bucket namespace is shared by all users of the system. Please
   *                      select a different name and try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketAlreadyOwnedByYou</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you tried to create already
   *                      exists, and you own it. Amazon S3 returns this error in all AWS Regions except in
   *                      the North Virginia Region. For legacy compatibility, if you re-create an
   *                      existing bucket that you already own in the North Virginia Region, Amazon S3 returns
   *                      200 OK and resets the bucket access control lists (ACLs).</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> 409 Conflict (in all Regions except the North
   *                      Virginia Region) </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketNotEmpty</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you tried to delete is not
   *                      empty.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> CredentialsNotSupported</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This request does not support
   *                      credentials.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> CrossLocationLoggingProhibited</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Cross-location logging not allowed.
   *                      Buckets in one geographic location cannot log information to a bucket in
   *                      another location.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> EntityTooSmall</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your proposed upload is smaller than the
   *                      minimum allowed object size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> EntityTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your proposed upload exceeds the maximum
   *                      allowed object size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> ExpiredToken</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token has expired.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IllegalVersioningConfigurationException </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Indicates that the versioning
   *                      configuration specified in the request is invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IncompleteBody</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You did not provide the number of bytes
   *                      specified by the Content-Length HTTP header</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IncorrectNumberOfFilesInPostRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> POST requires exactly one file upload per
   *                      request.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InlineDataTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Inline data exceeds the maximum allowed
   *                      size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InternalError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> We encountered an internal error. Please
   *                      try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 500 Internal Server Error</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidAccessKeyId</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The AWS access key ID you provided does
   *                      not exist in our records.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidAddressingHeader</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You must specify the Anonymous
   *                      role.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidArgument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Invalid Argument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidBucketName</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket is not valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidBucketState</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The request is not valid with the current
   *                      state of the bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidDigest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The Content-MD5 you specified is not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidEncryptionAlgorithmError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The encryption request you specified is
   *                      not valid. The valid value is AES256.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidLocationConstraint</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified location constraint is not
   *                      valid. For more information about Regions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">How to Select a
   *                         Region for Your Buckets</a>. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidObjectState</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The operation is not valid for the current
   *                      state of the object.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPart</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> One or more of the specified parts could
   *                      not be found. The part might not have been uploaded, or the specified entity
   *                      tag might not have matched the part's entity tag.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPartOrder</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The list of parts was not in ascending
   *                      order. Parts list must be specified in order by part number.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPayer</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> All access to this object has been
   *                      disabled. Please contact AWS Support for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPolicyDocument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The content of the form does not meet the
   *                      conditions specified in the policy document.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRange</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The requested range cannot be
   *                      satisfied.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 416 Requested Range Not
   *                      Satisfiable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Please use AWS4-HMAC-SHA256.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> SOAP requests must be made over an HTTPS
   *                      connection.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported for buckets with non-DNS compliant names.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported for buckets with periods (.) in their names.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate endpoint only
   *                      supports virtual style requests.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is not configured
   *                      on this bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is disabled on
   *                      this bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported on this bucket. Contact AWS Support for more information.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration cannot be
   *                      enabled on this bucket. Contact AWS Support for more information.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidSecurity</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided security credentials are not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidSOAPRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The SOAP request body is invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidStorageClass</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The storage class you specified is not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidTargetBucketForLogging</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The target bucket for logging does not
   *                      exist, is not owned by you, or does not have the appropriate grants for the
   *                      log-delivery group. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidToken</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token is malformed or
   *                      otherwise invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidURI</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Couldn't parse the specified URI.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> KeyTooLongError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your key is too long.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedACLError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The XML you provided was not well-formed
   *                      or did not validate against our published schema.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedPOSTRequest </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The body of your POST request is not
   *                      well-formed multipart/form-data.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedXML</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This happens when the user sends malformed
   *                      XML (XML that doesn't conform to the published XSD) for the configuration. The
   *                      error message is, "The XML you provided was not well-formed or did not validate
   *                      against our published schema." </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MaxMessageLengthExceeded</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your request was too big.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MaxPostPreDataLengthExceededError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your POST request fields preceding the
   *                      upload file were too large.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MetadataTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your metadata headers exceed the maximum
   *                      allowed metadata size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MethodNotAllowed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified method is not allowed
   *                      against this resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 405 Method Not Allowed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingAttachment</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A SOAP attachment was expected, but none
   *                      were found.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingContentLength</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You must provide the Content-Length HTTP
   *                      header.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 411 Length Required</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingRequestBodyError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This happens when the user sends an empty
   *                      XML document as a request. The error message is, "Request body is empty."
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingSecurityElement</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The SOAP 1.1 request is missing a security
   *                      element.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingSecurityHeader</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your request is missing a required
   *                      header.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoLoggingStatusForKey</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> There is no such thing as a logging status
   *                      subresource for a key.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchBucket</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket does not
   *                      exist.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchBucketPolicy</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket does not have a
   *                      bucket policy.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchKey</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified key does not exist.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchLifecycleConfiguration</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The lifecycle configuration does not
   *                      exist. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchUpload</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified multipart upload does not
   *                      exist. The upload ID might be invalid, or the multipart upload might have been
   *                      aborted or completed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchVersion </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Indicates that the version ID specified in
   *                      the request does not match an existing version.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NotImplemented</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A header you provided implies
   *                      functionality that is not implemented.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 501 Not Implemented</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NotSignedUp</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your account is not signed up for the Amazon S3
   *                      service. You must sign up before you can use Amazon S3. You can sign up at the
   *                      following URL: https://aws.amazon.com/s3</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> OperationAborted</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A conflicting conditional operation is
   *                      currently in progress against this resource. Try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> PermanentRedirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you are attempting to access
   *                      must be addressed using the specified endpoint. Send all future requests to
   *                      this endpoint.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 301 Moved Permanently</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> PreconditionFailed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> At least one of the preconditions you
   *                      specified did not hold.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 412 Precondition Failed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> Redirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Temporary redirect.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RestoreAlreadyInProgress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Object restore is already in
   *                      progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestIsNotMultiPartContent</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Bucket POST must be of the enclosure-type
   *                      multipart/form-data.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTimeout</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your socket connection to the server was
   *                      not read from or written to within the timeout period.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTimeTooSkewed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The difference between the request time
   *                      and the server's time is too large.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTorrentOfBucketError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Requesting the torrent file of a bucket is
   *                      not permitted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> SignatureDoesNotMatch</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The request signature we calculated does
   *                      not match the signature you provided. Check your AWS secret access key and
   *                      signing method. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a> and
   *                         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/SOAPAuthentication.html">SOAP Authentication</a>
   *                      for details.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> ServiceUnavailable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Reduce your request rate.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 503 Service Unavailable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> SlowDown</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Reduce your request rate.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 503 Slow Down</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TemporaryRedirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You are being redirected to the bucket
   *                      while DNS updates.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TokenRefreshRequired</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token must be
   *                      refreshed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TooManyBuckets</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You have attempted to create more buckets
   *                      than allowed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UnexpectedContent</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This request does not support
   *                      content.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UnresolvableGrantByEmailAddress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The email address you provided does not
   *                      match any account on record.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UserKeyMustBeSpecified</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket POST must contain the specified
   *                      field name. If it is specified, check the order of the fields.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p></p>
   */
  Code?: string;

  /**
   * <p>The error message contains a generic description of the error condition in English. It
   *          is intended for a human audience. Simple programs display the message directly to the end
   *          user if they encounter an error condition they don't know how or don't care to handle.
   *          Sophisticated programs with more exhaustive error handling and proper internationalization
   *          are more likely to ignore the error message.</p>
   */
  Message?: string;
}

export namespace _Error {
  export const filterSensitiveLog = (obj: _Error): any => ({
    ...obj,
  });
}

export interface DeleteObjectsOutput {
  /**
   * <p>Container element for a successful delete. It identifies the object that was
   *          successfully deleted.</p>
   */
  Deleted?: DeletedObject[];

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Container for a failed delete operation that describes the object that Amazon S3 attempted to
   *          delete and the error it encountered.</p>
   */
  Errors?: _Error[];
}

export namespace DeleteObjectsOutput {
  export const filterSensitiveLog = (obj: DeleteObjectsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Object Identifier is unique value to identify objects.</p>
 */
export interface ObjectIdentifier {
  /**
   * <p>Key name of the object to delete.</p>
   */
  Key: string | undefined;

  /**
   * <p>VersionId for the specific version of the object to delete.</p>
   */
  VersionId?: string;
}

export namespace ObjectIdentifier {
  export const filterSensitiveLog = (obj: ObjectIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the objects to delete.</p>
 */
export interface Delete {
  /**
   * <p>The objects to delete.</p>
   */
  Objects: ObjectIdentifier[] | undefined;

  /**
   * <p>Element to enable quiet mode for the request. When you add this element, you must set
   *          its value to true.</p>
   */
  Quiet?: boolean;
}

export namespace Delete {
  export const filterSensitiveLog = (obj: Delete): any => ({
    ...obj,
  });
}

export interface DeleteObjectsRequest {
  /**
   * <p>The bucket name containing the objects to delete. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for the request.</p>
   */
  Delete: Delete | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device. Required to permanently delete a versioned
   *          object if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies whether you want to delete this object even if it has a Governance-type Object
   *          Lock in place. You must have sufficient permissions to perform this operation.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteObjectsRequest {
  export const filterSensitiveLog = (obj: DeleteObjectsRequest): any => ({
    ...obj,
  });
}

export interface DeleteObjectTaggingOutput {
  /**
   * <p>The versionId of the object the tag-set was removed from.</p>
   */
  VersionId?: string;
}

export namespace DeleteObjectTaggingOutput {
  export const filterSensitiveLog = (obj: DeleteObjectTaggingOutput): any => ({
    ...obj,
  });
}

export interface DeleteObjectTaggingRequest {
  /**
   * <p>The bucket name containing the objects from which to remove the tags. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be removed from.</p>
   */
  VersionId?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteObjectTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteObjectTaggingRequest): any => ({
    ...obj,
  });
}

export interface DeletePublicAccessBlockRequest {
  /**
   * <p>The Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to delete.
   *       </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeletePublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: DeletePublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface GetBucketAccelerateConfigurationOutput {
  /**
   * <p>The accelerate configuration of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;
}

export namespace GetBucketAccelerateConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketAccelerateConfigurationOutput): any => ({
    ...obj,
  });
}

export interface GetBucketAccelerateConfigurationRequest {
  /**
   * <p>The name of the bucket for which the accelerate configuration is retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketAccelerateConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketAccelerateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketAclOutput {
  /**
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;

  /**
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];
}

export namespace GetBucketAclOutput {
  export const filterSensitiveLog = (obj: GetBucketAclOutput): any => ({
    ...obj,
  });
}

export interface GetBucketAclRequest {
  /**
   * <p>Specifies the S3 bucket whose ACL is being requested.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketAclRequest {
  export const filterSensitiveLog = (obj: GetBucketAclRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A container of a key value name pair.</p>
 */
export interface Tag {
  /**
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
 *          The operator must have at least two predicates in any combination, and an object must match
 *          all of the predicates for the filter to apply.</p>
 */
export interface AnalyticsAndOperator {
  /**
   * <p>The prefix to use when evaluating an AND predicate: The prefix that an object must have
   *          to be included in the metrics results.</p>
   */
  Prefix?: string;

  /**
   * <p>The list of tags to use when evaluating an AND predicate.</p>
   */
  Tags?: Tag[];
}

export namespace AnalyticsAndOperator {
  export const filterSensitiveLog = (obj: AnalyticsAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The filter used to describe a set of objects for analyses. A filter must have exactly
 *          one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided,
 *          all objects will be considered in any analysis.</p>
 */
export type AnalyticsFilter =
  | AnalyticsFilter.AndMember
  | AnalyticsFilter.PrefixMember
  | AnalyticsFilter.TagMember
  | AnalyticsFilter.$UnknownMember;

export namespace AnalyticsFilter {
  /**
   * <p>The prefix to use when evaluating an analytics filter.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>The tag to use when evaluating an analytics filter.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating an analytics
   *          filter. The operator must have at least two predicates.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: AnalyticsAndOperator;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: AnalyticsAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalyticsFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: AnalyticsFilter): any => {
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined) return { And: AnalyticsAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export type AnalyticsS3ExportFileFormat = "CSV";

/**
 * <p>Contains information about where to publish the analytics results.</p>
 */
export interface AnalyticsS3BucketDestination {
  /**
   * <p>Specifies the file format used when exporting data to Amazon S3.</p>
   */
  Format: AnalyticsS3ExportFileFormat | string | undefined;

  /**
   * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the
   *          owner is not validated before exporting data.</p>
   *          <note>
   *             <p> Although this value is optional, we strongly recommend that you set it to help
   *             prevent problems if the destination bucket ownership changes. </p>
   *          </note>
   */
  BucketAccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket to which data is exported.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix to use when exporting data. The prefix is prepended to all results.</p>
   */
  Prefix?: string;
}

export namespace AnalyticsS3BucketDestination {
  export const filterSensitiveLog = (obj: AnalyticsS3BucketDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Where to publish the analytics results.</p>
 */
export interface AnalyticsExportDestination {
  /**
   * <p>A destination signifying output to an S3 bucket.</p>
   */
  S3BucketDestination: AnalyticsS3BucketDestination | undefined;
}

export namespace AnalyticsExportDestination {
  export const filterSensitiveLog = (obj: AnalyticsExportDestination): any => ({
    ...obj,
  });
}

export type StorageClassAnalysisSchemaVersion = "V_1";

/**
 * <p>Container for data related to the storage class analysis for an Amazon S3 bucket for
 *          export.</p>
 */
export interface StorageClassAnalysisDataExport {
  /**
   * <p>The version of the output schema to use when exporting data. Must be
   *          <code>V_1</code>.</p>
   */
  OutputSchemaVersion: StorageClassAnalysisSchemaVersion | string | undefined;

  /**
   * <p>The place to store the data for an analysis.</p>
   */
  Destination: AnalyticsExportDestination | undefined;
}

export namespace StorageClassAnalysisDataExport {
  export const filterSensitiveLog = (obj: StorageClassAnalysisDataExport): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies data related to access patterns to be collected and made available to analyze
 *          the tradeoffs between different storage classes for an Amazon S3 bucket.</p>
 */
export interface StorageClassAnalysis {
  /**
   * <p>Specifies how data related to the storage class analysis for an Amazon S3 bucket should be
   *          exported.</p>
   */
  DataExport?: StorageClassAnalysisDataExport;
}

export namespace StorageClassAnalysis {
  export const filterSensitiveLog = (obj: StorageClassAnalysis): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the configuration and any analyses for the analytics filter of an Amazon S3
 *          bucket.</p>
 */
export interface AnalyticsConfiguration {
  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The filter used to describe a set of objects for analyses. A filter must have exactly
   *          one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided,
   *          all objects will be considered in any analysis.</p>
   */
  Filter?: AnalyticsFilter;

  /**
   * <p> Contains data related to access patterns to be collected and made available to analyze
   *          the tradeoffs between different storage classes. </p>
   */
  StorageClassAnalysis: StorageClassAnalysis | undefined;
}

export namespace AnalyticsConfiguration {
  export const filterSensitiveLog = (obj: AnalyticsConfiguration): any => ({
    ...obj,
    ...(obj.Filter && { Filter: AnalyticsFilter.filterSensitiveLog(obj.Filter) }),
  });
}

export interface GetBucketAnalyticsConfigurationOutput {
  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration?: AnalyticsConfiguration;
}

export namespace GetBucketAnalyticsConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketAnalyticsConfigurationOutput): any => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
      AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
    }),
  });
}

export interface GetBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a cross-origin access rule for an Amazon S3 bucket.</p>
 */
export interface CORSRule {
  /**
   * <p>Headers that are specified in the <code>Access-Control-Request-Headers</code> header.
   *          These headers are allowed in a preflight OPTIONS request. In response to any preflight
   *          OPTIONS request, Amazon S3 returns any requested headers that are allowed.</p>
   */
  AllowedHeaders?: string[];

  /**
   * <p>An HTTP method that you allow the origin to execute. Valid values are <code>GET</code>,
   *             <code>PUT</code>, <code>HEAD</code>, <code>POST</code>, and <code>DELETE</code>.</p>
   */
  AllowedMethods: string[] | undefined;

  /**
   * <p>One or more origins you want customers to be able to access the bucket from.</p>
   */
  AllowedOrigins: string[] | undefined;

  /**
   * <p>One or more headers in the response that you want customers to be able to access from
   *          their applications (for example, from a JavaScript <code>XMLHttpRequest</code>
   *          object).</p>
   */
  ExposeHeaders?: string[];

  /**
   * <p>The time in seconds that your browser is to cache the preflight response for the
   *          specified resource.</p>
   */
  MaxAgeSeconds?: number;
}

export namespace CORSRule {
  export const filterSensitiveLog = (obj: CORSRule): any => ({
    ...obj,
  });
}

export interface GetBucketCorsOutput {
  /**
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add
   *          up to 100 rules to the configuration.</p>
   */
  CORSRules?: CORSRule[];
}

export namespace GetBucketCorsOutput {
  export const filterSensitiveLog = (obj: GetBucketCorsOutput): any => ({
    ...obj,
  });
}

export interface GetBucketCorsRequest {
  /**
   * <p>The bucket name for which to get the cors configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketCorsRequest {
  export const filterSensitiveLog = (obj: GetBucketCorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default server-side encryption to apply to new objects in the bucket. If a
 *          PUT Object request doesn't specify any server-side encryption, this default encryption will
 *          be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in
 *          the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface ServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm: ServerSideEncryption | string | undefined;

  /**
   * <p>AWS Key Management Service (KMS) customer master key ID to use for the default
   *          encryption. This parameter is allowed if and only if <code>SSEAlgorithm</code> is set to
   *             <code>aws:kms</code>.</p>
   *          <p>You can specify the key ID or the Amazon Resource Name (ARN) of the CMK. However, if you
   *          are using encryption with cross-account operations, you must use a fully qualified CMK ARN.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy">Using encryption for cross-account operations</a>. </p>
   *          <p>
   *             <b>For example:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                   <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Amazon S3 only supports symmetric CMKs and not asymmetric CMKs. For more information, see
   *                <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and
   *                Asymmetric Keys</a> in the <i>AWS Key Management Service Developer
   *                Guide</i>.</p>
   *          </important>
   */
  KMSMasterKeyID?: string;
}

export namespace ServerSideEncryptionByDefault {
  export const filterSensitiveLog = (obj: ServerSideEncryptionByDefault): any => ({
    ...obj,
    ...(obj.KMSMasterKeyID && { KMSMasterKeyID: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies the default server-side encryption configuration.</p>
 */
export interface ServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *          PUT Object request doesn't specify any server-side encryption, this default encryption will
   *          be applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the <code>BucketKeyEnabled</code> element to <code>true</code> causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  BucketKeyEnabled?: boolean;
}

export namespace ServerSideEncryptionRule {
  export const filterSensitiveLog = (obj: ServerSideEncryptionRule): any => ({
    ...obj,
    ...(obj.ApplyServerSideEncryptionByDefault && {
      ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefault.filterSensitiveLog(
        obj.ApplyServerSideEncryptionByDefault
      ),
    }),
  });
}

/**
 * <p>Specifies the default server-side-encryption configuration.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>Container for information about a particular server-side encryption configuration
   *          rule.</p>
   */
  Rules: ServerSideEncryptionRule[] | undefined;
}

export namespace ServerSideEncryptionConfiguration {
  export const filterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ServerSideEncryptionRule.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketEncryptionOutput {
  /**
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export namespace GetBucketEncryptionOutput {
  export const filterSensitiveLog = (obj: GetBucketEncryptionOutput): any => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface GetBucketEncryptionRequest {
  /**
   * <p>The name of the bucket from which the server-side encryption configuration is
   *          retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: GetBucketEncryptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying S3 Intelligent-Tiering filters. The filters determine the
 *          subset of objects to which the rule applies.</p>
 */
export interface IntelligentTieringAndOperator {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the
   *          configuration applies.</p>
   */
  Prefix?: string;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the configuration to
   *          apply.</p>
   */
  Tags?: Tag[];
}

export namespace IntelligentTieringAndOperator {
  export const filterSensitiveLog = (obj: IntelligentTieringAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Filter</code> is used to identify objects that the S3 Intelligent-Tiering
 *          configuration applies to.</p>
 */
export interface IntelligentTieringFilter {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  Prefix?: string;

  /**
   * <p>A container of a key value name pair.</p>
   */
  Tag?: Tag;

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
   *          The operator must have at least two predicates, and an object must match all of the
   *          predicates in order for the filter to apply.</p>
   */
  And?: IntelligentTieringAndOperator;
}

export namespace IntelligentTieringFilter {
  export const filterSensitiveLog = (obj: IntelligentTieringFilter): any => ({
    ...obj,
  });
}

export type IntelligentTieringStatus = "Disabled" | "Enabled";

export type IntelligentTieringAccessTier = "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";

/**
 * <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by
 *          automatically moving data to the most cost-effective storage access tier, without
 *          additional operational overhead.</p>
 */
export interface Tiering {
  /**
   * <p>The number of consecutive days of no access after which an object will be eligible to be
   *          transitioned to the corresponding tier. The minimum number of days specified for
   *          Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least
   *          180 days. The maximum can be up to 2 years (730 days).</p>
   */
  Days: number | undefined;

  /**
   * <p>S3 Intelligent-Tiering access tier. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for
   *             automatically optimizing frequently and infrequently accessed objects</a> for a list
   *          of access tiers in the S3 Intelligent-Tiering storage class.</p>
   */
  AccessTier: IntelligentTieringAccessTier | string | undefined;
}

export namespace Tiering {
  export const filterSensitiveLog = (obj: Tiering): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p>
 *          <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for
 *             automatically optimizing frequently and infrequently accessed objects</a>.</p>
 */
export interface IntelligentTieringConfiguration {
  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies a bucket filter. The configuration only includes objects that meet the
   *          filter's criteria.</p>
   */
  Filter?: IntelligentTieringFilter;

  /**
   * <p>Specifies the status of the configuration.</p>
   */
  Status: IntelligentTieringStatus | string | undefined;

  /**
   * <p>Specifies the S3 Intelligent-Tiering storage class tier of the configuration.</p>
   */
  Tierings: Tiering[] | undefined;
}

export namespace IntelligentTieringConfiguration {
  export const filterSensitiveLog = (obj: IntelligentTieringConfiguration): any => ({
    ...obj,
  });
}

export interface GetBucketIntelligentTieringConfigurationOutput {
  /**
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   */
  IntelligentTieringConfiguration?: IntelligentTieringConfiguration;
}

export namespace GetBucketIntelligentTieringConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketIntelligentTieringConfigurationOutput): any => ({
    ...obj,
  });
}

export interface GetBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;
}

export namespace GetBucketIntelligentTieringConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketIntelligentTieringConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
 */
export interface SSEKMS {
  /**
   * <p>Specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed
   *          customer master key (CMK) to use for encrypting inventory reports.</p>
   */
  KeyId: string | undefined;
}

export namespace SSEKMS {
  export const filterSensitiveLog = (obj: SSEKMS): any => ({
    ...obj,
    ...(obj.KeyId && { KeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
 */
export interface SSES3 {}

export namespace SSES3 {
  export const filterSensitiveLog = (obj: SSES3): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the type of server-side encryption used to encrypt the inventory
 *          results.</p>
 */
export interface InventoryEncryption {
  /**
   * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
   */
  SSES3?: SSES3;

  /**
   * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
   */
  SSEKMS?: SSEKMS;
}

export namespace InventoryEncryption {
  export const filterSensitiveLog = (obj: InventoryEncryption): any => ({
    ...obj,
    ...(obj.SSEKMS && { SSEKMS: SSEKMS.filterSensitiveLog(obj.SSEKMS) }),
  });
}

export type InventoryFormat = "CSV" | "ORC" | "Parquet";

/**
 * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional)
 *          where inventory results are published.</p>
 */
export interface InventoryS3BucketDestination {
  /**
   * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the
   *          owner is not validated before exporting data. </p>
   *          <note>
   *             <p> Although this value is optional, we strongly recommend that you set it to help
   *             prevent problems if the destination bucket ownership changes. </p>
   *          </note>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket where inventory results will be
   *          published.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the output format of the inventory results.</p>
   */
  Format: InventoryFormat | string | undefined;

  /**
   * <p>The prefix that is prepended to all inventory results.</p>
   */
  Prefix?: string;

  /**
   * <p>Contains the type of server-side encryption used to encrypt the inventory
   *          results.</p>
   */
  Encryption?: InventoryEncryption;
}

export namespace InventoryS3BucketDestination {
  export const filterSensitiveLog = (obj: InventoryS3BucketDestination): any => ({
    ...obj,
    ...(obj.Encryption && { Encryption: InventoryEncryption.filterSensitiveLog(obj.Encryption) }),
  });
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket.</p>
 */
export interface InventoryDestination {
  /**
   * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional)
   *          where inventory results are published.</p>
   */
  S3BucketDestination: InventoryS3BucketDestination | undefined;
}

export namespace InventoryDestination {
  export const filterSensitiveLog = (obj: InventoryDestination): any => ({
    ...obj,
    ...(obj.S3BucketDestination && {
      S3BucketDestination: InventoryS3BucketDestination.filterSensitiveLog(obj.S3BucketDestination),
    }),
  });
}

/**
 * <p>Specifies an inventory filter. The inventory only includes objects that meet the
 *          filter's criteria.</p>
 */
export interface InventoryFilter {
  /**
   * <p>The prefix that an object must have to be included in the inventory results.</p>
   */
  Prefix: string | undefined;
}

export namespace InventoryFilter {
  export const filterSensitiveLog = (obj: InventoryFilter): any => ({
    ...obj,
  });
}

export type InventoryIncludedObjectVersions = "All" | "Current";

export type InventoryOptionalField =
  | "ETag"
  | "EncryptionStatus"
  | "IntelligentTieringAccessTier"
  | "IsMultipartUploaded"
  | "LastModifiedDate"
  | "ObjectLockLegalHoldStatus"
  | "ObjectLockMode"
  | "ObjectLockRetainUntilDate"
  | "ReplicationStatus"
  | "Size"
  | "StorageClass";

export type InventoryFrequency = "Daily" | "Weekly";

/**
 * <p>Specifies the schedule for generating inventory results.</p>
 */
export interface InventorySchedule {
  /**
   * <p>Specifies how frequently inventory results are produced.</p>
   */
  Frequency: InventoryFrequency | string | undefined;
}

export namespace InventorySchedule {
  export const filterSensitiveLog = (obj: InventorySchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>.
 *       </p>
 */
export interface InventoryConfiguration {
  /**
   * <p>Contains information about where to publish the inventory results.</p>
   */
  Destination: InventoryDestination | undefined;

  /**
   * <p>Specifies whether the inventory is enabled or disabled. If set to <code>True</code>, an
   *          inventory list is generated. If set to <code>False</code>, no inventory list is
   *          generated.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * <p>Specifies an inventory filter. The inventory only includes objects that meet the
   *          filter's criteria.</p>
   */
  Filter?: InventoryFilter;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Object versions to include in the inventory list. If set to <code>All</code>, the list
   *          includes all the object versions, which adds the version-related fields
   *             <code>VersionId</code>, <code>IsLatest</code>, and <code>DeleteMarker</code> to the
   *          list. If set to <code>Current</code>, the list does not contain these version-related
   *          fields.</p>
   */
  IncludedObjectVersions: InventoryIncludedObjectVersions | string | undefined;

  /**
   * <p>Contains the optional fields that are included in the inventory results.</p>
   */
  OptionalFields?: (InventoryOptionalField | string)[];

  /**
   * <p>Specifies the schedule for generating inventory results.</p>
   */
  Schedule: InventorySchedule | undefined;
}

export namespace InventoryConfiguration {
  export const filterSensitiveLog = (obj: InventoryConfiguration): any => ({
    ...obj,
    ...(obj.Destination && { Destination: InventoryDestination.filterSensitiveLog(obj.Destination) }),
  });
}

export interface GetBucketInventoryConfigurationOutput {
  /**
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration?: InventoryConfiguration;
}

export namespace GetBucketInventoryConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketInventoryConfigurationOutput): any => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }),
  });
}

export interface GetBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket containing the inventory configuration to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketInventoryConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the expiration for the lifecycle of the object.</p>
 */
export interface LifecycleExpiration {
  /**
   * <p>Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601
   *          Format.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value
   *          must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
   *          to true, the delete marker will be expired; if set to false the policy takes no action.
   *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

export namespace LifecycleExpiration {
  export const filterSensitiveLog = (obj: LifecycleExpiration): any => ({
    ...obj,
  });
}

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
 *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
 *          configured inside the And operator.</p>
 */
export interface LifecycleRuleAndOperator {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tags?: Tag[];
}

export namespace LifecycleRuleAndOperator {
  export const filterSensitiveLog = (obj: LifecycleRuleAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
 *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
 *             <code>And</code> specified.</p>
 */
export type LifecycleRuleFilter =
  | LifecycleRuleFilter.AndMember
  | LifecycleRuleFilter.PrefixMember
  | LifecycleRuleFilter.TagMember
  | LifecycleRuleFilter.$UnknownMember;

export namespace LifecycleRuleFilter {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>This tag must exist in the object's tag set in order for the rule to apply.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
   *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
   *          configured inside the And operator.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: LifecycleRuleAndOperator;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: LifecycleRuleAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LifecycleRuleFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: LifecycleRuleFilter): any => {
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined) return { And: LifecycleRuleAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently
 *          deletes the noncurrent object versions. You set this lifecycle configuration action on a
 *          bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent
 *          object versions at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionExpiration {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon Simple
   *             Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;
}

export namespace NoncurrentVersionExpiration {
  export const filterSensitiveLog = (obj: NoncurrentVersionExpiration): any => ({
    ...obj,
  });
}

export type TransitionStorageClass = "DEEP_ARCHIVE" | "GLACIER" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA";

/**
 * <p>Container for the transition rule that describes when noncurrent objects transition to
 *          the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>,
 *             <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is
 *          versioning-enabled (or versioning is suspended), you can set this action to request that
 *          Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>,
 *             <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or
 *             <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's
 *          lifetime.</p>
 */
export interface NoncurrentVersionTransition {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: TransitionStorageClass | string;
}

export namespace NoncurrentVersionTransition {
  export const filterSensitiveLog = (obj: NoncurrentVersionTransition): any => ({
    ...obj,
  });
}

export type ExpirationStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning
 *             Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface Transition {
  /**
   * <p>Indicates when objects are transitioned to the specified storage class. The date value
   *          must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the number of days after creation when objects are transitioned to the
   *          specified storage class. The value must be a positive integer.</p>
   */
  Days?: number;

  /**
   * <p>The storage class to which you want the object to transition.</p>
   */
  StorageClass?: TransitionStorageClass | string;
}

export namespace Transition {
  export const filterSensitiveLog = (obj: Transition): any => ({
    ...obj,
  });
}

/**
 * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
 */
export interface LifecycleRule {
  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  Expiration?: LifecycleExpiration;

  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * @deprecated
   *
   * <p>Prefix identifying one or more objects to which the rule applies. This is
   *          No longer used; use <code>Filter</code> instead.</p>
   */
  Prefix?: string;

  /**
   * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
   *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
   *             <code>And</code> specified.</p>
   */
  Filter?: LifecycleRuleFilter;

  /**
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not
   *          currently being applied.</p>
   */
  Status: ExpirationStatus | string | undefined;

  /**
   * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
   */
  Transitions?: Transition[];

  /**
   * <p> Specifies the transition rule for the lifecycle rule that describes when noncurrent
   *          objects transition to a specific storage class. If your bucket is versioning-enabled (or
   *          versioning is suspended), you can set this action to request that Amazon S3 transition
   *          noncurrent object versions to a specific storage class at a set period in the object's
   *          lifetime. </p>
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];

  /**
   * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently
   *          deletes the noncurrent object versions. You set this lifecycle configuration action on a
   *          bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent
   *          object versions at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will
   *          wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}

export namespace LifecycleRule {
  export const filterSensitiveLog = (obj: LifecycleRule): any => ({
    ...obj,
    ...(obj.Filter && { Filter: LifecycleRuleFilter.filterSensitiveLog(obj.Filter) }),
  });
}

export interface GetBucketLifecycleConfigurationOutput {
  /**
   * <p>Container for a lifecycle rule.</p>
   */
  Rules?: LifecycleRule[];
}

export namespace GetBucketLifecycleConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationOutput): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRule.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketLifecycleConfigurationRequest {
  /**
   * <p>The name of the bucket for which to get the lifecycle information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketLocationOutput {
  /**
   * <p>Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported
   *          location constraints by Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a>.
   *          Buckets in Region <code>us-east-1</code> have a LocationConstraint of
   *          <code>null</code>.</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export namespace GetBucketLocationOutput {
  export const filterSensitiveLog = (obj: GetBucketLocationOutput): any => ({
    ...obj,
  });
}

export interface GetBucketLocationRequest {
  /**
   * <p>The name of the bucket for which to get the location.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketLocationRequest {
  export const filterSensitiveLog = (obj: GetBucketLocationRequest): any => ({
    ...obj,
  });
}

export type BucketLogsPermission = "FULL_CONTROL" | "READ" | "WRITE";

/**
 * <p>Container for granting information.</p>
 */
export interface TargetGrant {
  /**
   * <p>Container for the person being granted permissions.</p>
   */
  Grantee?: Grantee;

  /**
   * <p>Logging permissions assigned to the grantee for the bucket.</p>
   */
  Permission?: BucketLogsPermission | string;
}

export namespace TargetGrant {
  export const filterSensitiveLog = (obj: TargetGrant): any => ({
    ...obj,
  });
}

/**
 * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
 *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
 *             <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface LoggingEnabled {
  /**
   * <p>Specifies the bucket where you want Amazon S3 to store server access logs. You can have your
   *          logs delivered to any bucket that you own, including the same bucket that is being logged.
   *          You can also configure multiple buckets to deliver their logs to the same target bucket. In
   *          this case, you should choose a different <code>TargetPrefix</code> for each source bucket
   *          so that the delivered log files can be distinguished by key.</p>
   */
  TargetBucket: string | undefined;

  /**
   * <p>Container for granting information.</p>
   */
  TargetGrants?: TargetGrant[];

  /**
   * <p>A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a
   *          single bucket, you can use a prefix to distinguish which log files came from which
   *          bucket.</p>
   */
  TargetPrefix: string | undefined;
}

export namespace LoggingEnabled {
  export const filterSensitiveLog = (obj: LoggingEnabled): any => ({
    ...obj,
  });
}

export interface GetBucketLoggingOutput {
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
   *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *             <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

export namespace GetBucketLoggingOutput {
  export const filterSensitiveLog = (obj: GetBucketLoggingOutput): any => ({
    ...obj,
  });
}

export interface GetBucketLoggingRequest {
  /**
   * <p>The bucket name for which to get the logging information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketLoggingRequest {
  export const filterSensitiveLog = (obj: GetBucketLoggingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
 *          The operator must have at least two predicates, and an object must match all of the
 *          predicates in order for the filter to apply.</p>
 */
export interface MetricsAndOperator {
  /**
   * <p>The prefix used when evaluating an AND predicate.</p>
   */
  Prefix?: string;

  /**
   * <p>The list of tags used when evaluating an AND predicate.</p>
   */
  Tags?: Tag[];
}

export namespace MetricsAndOperator {
  export const filterSensitiveLog = (obj: MetricsAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a metrics configuration filter. The metrics configuration only includes
 *          objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction
 *          (MetricsAndOperator).</p>
 */
export type MetricsFilter =
  | MetricsFilter.AndMember
  | MetricsFilter.PrefixMember
  | MetricsFilter.TagMember
  | MetricsFilter.$UnknownMember;

export namespace MetricsFilter {
  /**
   * <p>The prefix used when evaluating a metrics filter.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>The tag used when evaluating a metrics filter.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
   *          The operator must have at least two predicates, and an object must match all of the
   *          predicates in order for the filter to apply.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: MetricsAndOperator;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: MetricsAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MetricsFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: MetricsFilter): any => {
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined) return { And: MetricsAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Specifies a metrics configuration for the CloudWatch request metrics (specified by the
 *          metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics
 *          configuration, note that this is a full replacement of the existing metrics configuration.
 *          If you don't include the elements you want to keep, they are erased. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket
 *             metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface MetricsConfiguration {
  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies a metrics configuration filter. The metrics configuration will only include
   *          objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction
   *          (MetricsAndOperator).</p>
   */
  Filter?: MetricsFilter;
}

export namespace MetricsConfiguration {
  export const filterSensitiveLog = (obj: MetricsConfiguration): any => ({
    ...obj,
    ...(obj.Filter && { Filter: MetricsFilter.filterSensitiveLog(obj.Filter) }),
  });
}

export interface GetBucketMetricsConfigurationOutput {
  /**
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration?: MetricsConfiguration;
}

export namespace GetBucketMetricsConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketMetricsConfigurationOutput): any => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
      MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
    }),
  });
}

export interface GetBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket containing the metrics configuration to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketMetricsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketNotificationConfigurationRequest {
  /**
   * <p>The name of the bucket for which to get the notification configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketNotificationConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketNotificationConfigurationRequest): any => ({
    ...obj,
  });
}

export type Event =
  | "s3:ObjectCreated:*"
  | "s3:ObjectCreated:CompleteMultipartUpload"
  | "s3:ObjectCreated:Copy"
  | "s3:ObjectCreated:Post"
  | "s3:ObjectCreated:Put"
  | "s3:ObjectRemoved:*"
  | "s3:ObjectRemoved:Delete"
  | "s3:ObjectRemoved:DeleteMarkerCreated"
  | "s3:ObjectRestore:*"
  | "s3:ObjectRestore:Completed"
  | "s3:ObjectRestore:Post"
  | "s3:ReducedRedundancyLostObject"
  | "s3:Replication:*"
  | "s3:Replication:OperationFailedReplication"
  | "s3:Replication:OperationMissedThreshold"
  | "s3:Replication:OperationNotTracked"
  | "s3:Replication:OperationReplicatedAfterThreshold";

export type FilterRuleName = "prefix" | "suffix";

/**
 * <p>Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or
 *          prefix of the key name.</p>
 */
export interface FilterRule {
  /**
   * <p>The object key name prefix or suffix identifying one or more objects to which the
   *          filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and
   *          suffixes are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a>
   *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Name?: FilterRuleName | string;

  /**
   * <p>The value that the filter searches for in object key names.</p>
   */
  Value?: string;
}

export namespace FilterRule {
  export const filterSensitiveLog = (obj: FilterRule): any => ({
    ...obj,
  });
}

/**
 * <p>A container for object key name prefix and suffix filtering rules.</p>
 */
export interface S3KeyFilter {
  /**
   * <p>A list of containers for the key-value pair that defines the criteria for the filter
   *          rule.</p>
   */
  FilterRules?: FilterRule[];
}

export namespace S3KeyFilter {
  export const filterSensitiveLog = (obj: S3KeyFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies object key name filtering rules. For information about key name filtering, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
 *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
 *          Guide</i>.</p>
 */
export interface NotificationConfigurationFilter {
  /**
   * <p>A container for object key name prefix and suffix filtering rules.</p>
   */
  Key?: S3KeyFilter;
}

export namespace NotificationConfigurationFilter {
  export const filterSensitiveLog = (obj: NotificationConfigurationFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying the configuration for AWS Lambda notifications.</p>
 */
export interface LambdaFunctionConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the
   *          specified event type occurs.</p>
   */
  LambdaFunctionArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket event for which to invoke the AWS Lambda function. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported
   *             Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

export namespace LambdaFunctionConfiguration {
  export const filterSensitiveLog = (obj: LambdaFunctionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for publishing messages to an Amazon Simple Queue Service
 *          (Amazon SQS) queue when Amazon S3 detects specified events.</p>
 */
export interface QueueConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message
   *          when it detects events of the specified type.</p>
   */
  QueueArn: string | undefined;

  /**
   * <p>A collection of bucket events for which to send notifications</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

export namespace QueueConfiguration {
  export const filterSensitiveLog = (obj: QueueConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying the configuration for publication of messages to an Amazon
 *          Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.</p>
 */
export interface TopicConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message
   *          when it detects events of the specified type.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket event about which to send notifications. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported
   *             Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

export namespace TopicConfiguration {
  export const filterSensitiveLog = (obj: TopicConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying the notification configuration of the bucket. If this element
 *          is empty, notifications are turned off for the bucket.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The topic to which notifications are sent and the events for which notifications are
   *          generated.</p>
   */
  TopicConfigurations?: TopicConfiguration[];

  /**
   * <p>The Amazon Simple Queue Service queues to publish messages to and the events for which
   *          to publish messages.</p>
   */
  QueueConfigurations?: QueueConfiguration[];

  /**
   * <p>Describes the AWS Lambda functions to invoke and the events for which to invoke
   *          them.</p>
   */
  LambdaFunctionConfigurations?: LambdaFunctionConfiguration[];
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
}

export type ObjectOwnership = "BucketOwnerPreferred" | "ObjectWriter";

/**
 * <p>The container element for an ownership control rule.</p>
 */
export interface OwnershipControlsRule {
  /**
   * <p>The container element for object ownership for a bucket's ownership controls.</p>
   *          <p>BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket
   *          owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned
   *          ACL.</p>
   *          <p>ObjectWriter - The uploading account will own the object if the object is uploaded with
   *          the <code>bucket-owner-full-control</code> canned ACL.</p>
   */
  ObjectOwnership: ObjectOwnership | string | undefined;
}

export namespace OwnershipControlsRule {
  export const filterSensitiveLog = (obj: OwnershipControlsRule): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for a bucket's ownership controls.</p>
 */
export interface OwnershipControls {
  /**
   * <p>The container element for an ownership control rule.</p>
   */
  Rules: OwnershipControlsRule[] | undefined;
}

export namespace OwnershipControls {
  export const filterSensitiveLog = (obj: OwnershipControls): any => ({
    ...obj,
  });
}

export interface GetBucketOwnershipControlsOutput {
  /**
   * <p>The <code>OwnershipControls</code> (BucketOwnerPreferred or ObjectWriter) currently in
   *          effect for this Amazon S3 bucket.</p>
   */
  OwnershipControls?: OwnershipControls;
}

export namespace GetBucketOwnershipControlsOutput {
  export const filterSensitiveLog = (obj: GetBucketOwnershipControlsOutput): any => ({
    ...obj,
  });
}

export interface GetBucketOwnershipControlsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to retrieve.
   *       </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketOwnershipControlsRequest {
  export const filterSensitiveLog = (obj: GetBucketOwnershipControlsRequest): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyOutput {
  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy?: string;
}

export namespace GetBucketPolicyOutput {
  export const filterSensitiveLog = (obj: GetBucketPolicyOutput): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyRequest {
  /**
   * <p>The bucket name for which to get the bucket policy.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketPolicyRequest {
  export const filterSensitiveLog = (obj: GetBucketPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for a bucket's policy status.</p>
 */
export interface PolicyStatus {
  /**
   * <p>The policy status for this bucket. <code>TRUE</code> indicates that this bucket is
   *          public. <code>FALSE</code> indicates that the bucket is not public.</p>
   */
  IsPublic?: boolean;
}

export namespace PolicyStatus {
  export const filterSensitiveLog = (obj: PolicyStatus): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyStatusOutput {
  /**
   * <p>The policy status for the specified bucket.</p>
   */
  PolicyStatus?: PolicyStatus;
}

export namespace GetBucketPolicyStatusOutput {
  export const filterSensitiveLog = (obj: GetBucketPolicyStatusOutput): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyStatusRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose policy status you want to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketPolicyStatusRequest {
  export const filterSensitiveLog = (obj: GetBucketPolicyStatusRequest): any => ({
    ...obj,
  });
}

export type DeleteMarkerReplicationStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code>
 *          in your replication configuration, you must also include a
 *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
 *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code>
 *             <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating
 *          delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p>
 *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule
 *             Configuration</a>. </p>
 *          <note>
 *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles
 *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
 *          </note>
 */
export interface DeleteMarkerReplication {
  /**
   * <p>Indicates whether to replicate delete markers.</p>
   *          <note>
   *             <p>Indicates whether to replicate delete markers.</p>
   *          </note>
   */
  Status?: DeleteMarkerReplicationStatus | string;
}

export namespace DeleteMarkerReplication {
  export const filterSensitiveLog = (obj: DeleteMarkerReplication): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for
 *          replicated objects.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>Specifies the ID (Key ARN or Alias ARN) of the customer managed customer master key
   *          (CMK) stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses
   *          this key to encrypt replica objects. Amazon S3 only supports symmetric customer managed CMKs.
   *          For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and
   *             Asymmetric Keys</a> in the <i>AWS Key Management Service Developer
   *             Guide</i>.</p>
   */
  ReplicaKmsKeyID?: string;
}

export namespace EncryptionConfiguration {
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p> A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics
 *             <code>EventThreshold</code>. </p>
 */
export interface ReplicationTimeValue {
  /**
   * <p> Contains an integer specifying time in minutes. </p>
   *          <p> Valid values: 15 minutes. </p>
   */
  Minutes?: number;
}

export namespace ReplicationTimeValue {
  export const filterSensitiveLog = (obj: ReplicationTimeValue): any => ({
    ...obj,
  });
}

export type MetricsStatus = "Disabled" | "Enabled";

/**
 * <p> A container specifying replication metrics-related settings enabling replication
 *          metrics and events.</p>
 */
export interface Metrics {
  /**
   * <p> Specifies whether the replication metrics are enabled. </p>
   */
  Status: MetricsStatus | string | undefined;

  /**
   * <p> A container specifying the time threshold for emitting the
   *             <code>s3:Replication:OperationMissedThreshold</code> event. </p>
   */
  EventThreshold?: ReplicationTimeValue;
}

export namespace Metrics {
  export const filterSensitiveLog = (obj: Metrics): any => ({
    ...obj,
  });
}

export type ReplicationTimeStatus = "Disabled" | "Enabled";

/**
 * <p> A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is
 *          enabled and the time when all objects and operations on objects must be replicated. Must be
 *          specified together with a <code>Metrics</code> block. </p>
 */
export interface ReplicationTime {
  /**
   * <p> Specifies whether the replication time is enabled. </p>
   */
  Status: ReplicationTimeStatus | string | undefined;

  /**
   * <p> A container specifying the time by which replication should be complete for all objects
   *          and operations on objects. </p>
   */
  Time: ReplicationTimeValue | undefined;
}

export namespace ReplicationTime {
  export const filterSensitiveLog = (obj: ReplicationTime): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies information about where to publish analysis or configuration results for an
 *          Amazon S3 bucket and S3 Replication Time Control (S3 RTC).</p>
 */
export interface Destination {
  /**
   * <p> The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the
   *          results.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to
   *          change replica ownership to the AWS account that owns the destination bucket by specifying
   *          the <code>AccessControlTranslation</code> property, this is the account ID of the
   *          destination bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html">Replication Additional
   *             Configuration: Changing the Replica Owner</a> in the <i>Amazon Simple Storage
   *             Service Developer Guide</i>.</p>
   */
  Account?: string;

  /**
   * <p> The storage class to use when replicating objects, such as S3 Standard or reduced
   *          redundancy. By default, Amazon S3 uses the storage class of the source object to create the
   *          object replica. </p>
   *          <p>For valid values, see the <code>StorageClass</code> element of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT Bucket
   *             replication</a> action in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Specify this only in a cross-account scenario (where source and destination bucket
   *          owners are not the same), and you want to change replica ownership to the AWS account that
   *          owns the destination bucket. If this is not specified in the replication configuration, the
   *          replicas are owned by same AWS account that owns the source object.</p>
   */
  AccessControlTranslation?: AccessControlTranslation;

  /**
   * <p>A container that provides information about encryption. If
   *             <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p> A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time
   *          when all objects and operations on objects must be replicated. Must be specified together
   *          with a <code>Metrics</code> block. </p>
   */
  ReplicationTime?: ReplicationTime;

  /**
   * <p> A container specifying replication metrics-related settings enabling replication
   *          metrics and events. </p>
   */
  Metrics?: Metrics;
}

export namespace Destination {
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
}

export type ExistingObjectReplicationStatus = "Disabled" | "Enabled";

/**
 * <p>Optional configuration to replicate existing source bucket objects. For more
 *          information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 Developer Guide</i>.
 *       </p>
 */
export interface ExistingObjectReplication {
  /**
   * <p></p>
   */
  Status: ExistingObjectReplicationStatus | string | undefined;
}

export namespace ExistingObjectReplication {
  export const filterSensitiveLog = (obj: ExistingObjectReplication): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying rule filters. The filters determine the subset of objects to
 *          which the rule applies. This element is required only if you specify more than one filter. </p>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
 *                these filters in an <code>And</code> tag. </p>
 *             </li>
 *             <li>
 *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
 *                in an <code>And</code> tag</p>
 *             </li>
 *          </ul>
 */
export interface ReplicationRuleAndOperator {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  Prefix?: string;

  /**
   * <p>An array of tags containing key and value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ReplicationRuleAndOperator {
  export const filterSensitiveLog = (obj: ReplicationRuleAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A
 *             <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or
 *          an <code>And</code> child element.</p>
 */
export type ReplicationRuleFilter =
  | ReplicationRuleFilter.AndMember
  | ReplicationRuleFilter.PrefixMember
  | ReplicationRuleFilter.TagMember
  | ReplicationRuleFilter.$UnknownMember;

export namespace ReplicationRuleFilter {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for specifying a tag key and value. </p>
   *          <p>The rule applies only to objects that have the tag in their tag set.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for specifying rule filters. The filters determine the subset of objects to
   *          which the rule applies. This element is required only if you specify more than one filter.
   *          For example: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
   *                these filters in an <code>And</code> tag.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
   *                in an <code>And</code> tag.</p>
   *             </li>
   *          </ul>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: ReplicationRuleAndOperator;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: ReplicationRuleAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReplicationRuleFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: ReplicationRuleFilter): any => {
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined) return { And: ReplicationRuleAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export type ReplicaModificationsStatus = "Disabled" | "Enabled";

/**
 * <p>A filter that you can specify for selection for modifications on replicas. Amazon S3 doesn't
 *          replicate replica modifications by default. In the latest version of replication
 *          configuration (when <code>Filter</code> is specified), you can specify this element and set
 *          the status to <code>Enabled</code> to replicate modifications on replicas. </p>
 *          <note>
 *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the
 *             replication configuration is the earlier version, V1. In the earlier version, this
 *             element is not allowed.</p>
 *          </note>
 */
export interface ReplicaModifications {
  /**
   * <p>Specifies whether Amazon S3 replicates modifications on replicas.</p>
   */
  Status: ReplicaModificationsStatus | string | undefined;
}

export namespace ReplicaModifications {
  export const filterSensitiveLog = (obj: ReplicaModifications): any => ({
    ...obj,
  });
}

export type SseKmsEncryptedObjectsStatus = "Disabled" | "Enabled";

/**
 * <p>A container for filter information for the selection of S3 objects encrypted with AWS
 *          KMS.</p>
 */
export interface SseKmsEncryptedObjects {
  /**
   * <p>Specifies whether Amazon S3 replicates objects created with server-side encryption using a
   *          customer master key (CMK) stored in AWS Key Management Service.</p>
   */
  Status: SseKmsEncryptedObjectsStatus | string | undefined;
}

export namespace SseKmsEncryptedObjects {
  export const filterSensitiveLog = (obj: SseKmsEncryptedObjects): any => ({
    ...obj,
  });
}

/**
 * <p>A container that describes additional filters for identifying the source objects that
 *          you want to replicate. You can choose to enable or disable the replication of these
 *          objects. Currently, Amazon S3 supports only the filter that you can specify for objects created
 *          with server-side encryption using a customer master key (CMK) stored in AWS Key Management
 *          Service (SSE-KMS).</p>
 */
export interface SourceSelectionCriteria {
  /**
   * <p> A container for filter information for the selection of Amazon S3 objects encrypted with AWS
   *          KMS. If you include <code>SourceSelectionCriteria</code> in the replication configuration,
   *          this element is required. </p>
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;

  /**
   * <p>A filter that you can specify for selections for modifications on replicas. Amazon S3 doesn't
   *          replicate replica modifications by default. In the latest version of replication
   *          configuration (when <code>Filter</code> is specified), you can specify this element and set
   *          the status to <code>Enabled</code> to replicate modifications on replicas. </p>
   *          <note>
   *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the
   *             replication configuration is the earlier version, V1. In the earlier version, this
   *             element is not allowed</p>
   *          </note>
   */
  ReplicaModifications?: ReplicaModifications;
}

export namespace SourceSelectionCriteria {
  export const filterSensitiveLog = (obj: SourceSelectionCriteria): any => ({
    ...obj,
  });
}

export type ReplicationRuleStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies which Amazon S3 objects to replicate and where to store the replicas.</p>
 */
export interface ReplicationRule {
  /**
   * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>The priority indicates which rule has precedence whenever two or more replication rules
   *          conflict. Amazon S3 will attempt to replicate objects according to all replication rules.
   *          However, if there are two or more rules with the same destination bucket, then objects will
   *          be replicated according to the rule with the highest priority. The higher the number, the
   *          higher the priority. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Priority?: number;

  /**
   * @deprecated
   *
   * <p>An object key name prefix that identifies the object or objects to which the rule
   *          applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket,
   *          specify an empty string. </p>
   */
  Prefix?: string;

  /**
   * <p>A filter that identifies the subset of objects to which the replication rule applies. A
   *             <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or
   *          an <code>And</code> child element.</p>
   */
  Filter?: ReplicationRuleFilter;

  /**
   * <p>Specifies whether the rule is enabled.</p>
   */
  Status: ReplicationRuleStatus | string | undefined;

  /**
   * <p>A container that describes additional filters for identifying the source objects that
   *          you want to replicate. You can choose to enable or disable the replication of these
   *          objects. Currently, Amazon S3 supports only the filter that you can specify for objects created
   *          with server-side encryption using a customer master key (CMK) stored in AWS Key Management
   *          Service (SSE-KMS).</p>
   */
  SourceSelectionCriteria?: SourceSelectionCriteria;

  /**
   * <p></p>
   */
  ExistingObjectReplication?: ExistingObjectReplication;

  /**
   * <p>A container for information about the replication destination and its configurations
   *          including enabling the S3 Replication Time Control (S3 RTC).</p>
   */
  Destination: Destination | undefined;

  /**
   * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code>
   *          in your replication configuration, you must also include a
   *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
   *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code>
   *             <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating
   *          delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p>
   *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule
   *             Configuration</a>. </p>
   *          <note>
   *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles
   *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
   *          </note>
   */
  DeleteMarkerReplication?: DeleteMarkerReplication;
}

export namespace ReplicationRule {
  export const filterSensitiveLog = (obj: ReplicationRule): any => ({
    ...obj,
    ...(obj.Filter && { Filter: ReplicationRuleFilter.filterSensitiveLog(obj.Filter) }),
  });
}

/**
 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
 *          replication configuration is 2 MB.</p>
 */
export interface ReplicationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *          Amazon S3 assumes when replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up
   *             Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Role: string | undefined;

  /**
   * <p>A container for one or more replication rules. A replication configuration must have at
   *          least one rule and can contain a maximum of 1,000 rules. </p>
   */
  Rules: ReplicationRule[] | undefined;
}

export namespace ReplicationConfiguration {
  export const filterSensitiveLog = (obj: ReplicationConfiguration): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ReplicationRule.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketReplicationOutput {
  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration?: ReplicationConfiguration;
}

export namespace GetBucketReplicationOutput {
  export const filterSensitiveLog = (obj: GetBucketReplicationOutput): any => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
      ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
    }),
  });
}

export interface GetBucketReplicationRequest {
  /**
   * <p>The bucket name for which to get the replication information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketReplicationRequest {
  export const filterSensitiveLog = (obj: GetBucketReplicationRequest): any => ({
    ...obj,
  });
}

export type Payer = "BucketOwner" | "Requester";

export interface GetBucketRequestPaymentOutput {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer?: Payer | string;
}

export namespace GetBucketRequestPaymentOutput {
  export const filterSensitiveLog = (obj: GetBucketRequestPaymentOutput): any => ({
    ...obj,
  });
}

export interface GetBucketRequestPaymentRequest {
  /**
   * <p>The name of the bucket for which to get the payment request configuration</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketRequestPaymentRequest {
  export const filterSensitiveLog = (obj: GetBucketRequestPaymentRequest): any => ({
    ...obj,
  });
}

export interface GetBucketTaggingOutput {
  /**
   * <p>Contains the tag set.</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace GetBucketTaggingOutput {
  export const filterSensitiveLog = (obj: GetBucketTaggingOutput): any => ({
    ...obj,
  });
}

export interface GetBucketTaggingRequest {
  /**
   * <p>The name of the bucket for which to get the tagging information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketTaggingRequest {
  export const filterSensitiveLog = (obj: GetBucketTaggingRequest): any => ({
    ...obj,
  });
}

export type MFADeleteStatus = "Disabled" | "Enabled";

export type BucketVersioningStatus = "Enabled" | "Suspended";

export interface GetBucketVersioningOutput {
  /**
   * <p>The versioning state of the bucket.</p>
   */
  Status?: BucketVersioningStatus | string;

  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is only returned if the bucket has been configured with MFA delete. If the bucket
   *          has never been so configured, this element is not returned.</p>
   */
  MFADelete?: MFADeleteStatus | string;
}

export namespace GetBucketVersioningOutput {
  export const filterSensitiveLog = (obj: GetBucketVersioningOutput): any => ({
    ...obj,
  });
}

export interface GetBucketVersioningRequest {
  /**
   * <p>The name of the bucket for which to get the versioning information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketVersioningRequest {
  export const filterSensitiveLog = (obj: GetBucketVersioningRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The error information.</p>
 */
export interface ErrorDocument {
  /**
   * <p>The object key name to use when a 4XX class error occurs.</p>
   */
  Key: string | undefined;
}

export namespace ErrorDocument {
  export const filterSensitiveLog = (obj: ErrorDocument): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the <code>Suffix</code> element.</p>
 */
export interface IndexDocument {
  /**
   * <p>A suffix that is appended to a request that is for a directory on the website endpoint
   *          (for example,if the suffix is index.html and you make a request to samplebucket/images/ the
   *          data that is returned will be for the object with the key name images/index.html) The
   *          suffix must not be empty and must not include a slash character.</p>
   */
  Suffix: string | undefined;
}

export namespace IndexDocument {
  export const filterSensitiveLog = (obj: IndexDocument): any => ({
    ...obj,
  });
}

export type Protocol = "http" | "https";

/**
 * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3
 *          bucket.</p>
 */
export interface RedirectAllRequestsTo {
  /**
   * <p>Name of the host where requests are redirected.</p>
   */
  HostName: string | undefined;

  /**
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in
   *          the original request.</p>
   */
  Protocol?: Protocol | string;
}

export namespace RedirectAllRequestsTo {
  export const filterSensitiveLog = (obj: RedirectAllRequestsTo): any => ({
    ...obj,
  });
}

/**
 * <p>A container for describing a condition that must be met for the specified redirect to
 *          apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect
 *          to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect
 *          request to another host where you might process the error.</p>
 */
export interface Condition {
  /**
   * <p>The HTTP error code when the redirect is applied. In the event of an error, if the error
   *          code equals this value, then the specified redirect is applied. Required when parent
   *          element <code>Condition</code> is specified and sibling <code>KeyPrefixEquals</code> is not
   *          specified. If both are specified, then both must be true for the redirect to be
   *          applied.</p>
   */
  HttpErrorCodeReturnedEquals?: string;

  /**
   * <p>The object key name prefix when the redirect is applied. For example, to redirect
   *          requests for <code>ExamplePage.html</code>, the key prefix will be
   *             <code>ExamplePage.html</code>. To redirect request for all pages with the prefix
   *             <code>docs/</code>, the key prefix will be <code>/docs</code>, which identifies all
   *          objects in the <code>docs/</code> folder. Required when the parent element
   *             <code>Condition</code> is specified and sibling <code>HttpErrorCodeReturnedEquals</code>
   *          is not specified. If both conditions are specified, both must be true for the redirect to
   *          be applied.</p>
   */
  KeyPrefixEquals?: string;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies how requests are redirected. In the event of an error, you can specify a
 *          different error code to return.</p>
 */
export interface Redirect {
  /**
   * <p>The host name to use in the redirect request.</p>
   */
  HostName?: string;

  /**
   * <p>The HTTP redirect code to use on the response. Not required if one of the siblings is
   *          present.</p>
   */
  HttpRedirectCode?: string;

  /**
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in
   *          the original request.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The object key prefix to use in the redirect request. For example, to redirect requests
   *          for all pages with prefix <code>docs/</code> (objects in the <code>docs/</code> folder) to
   *             <code>documents/</code>, you can set a condition block with <code>KeyPrefixEquals</code>
   *          set to <code>docs/</code> and in the Redirect set <code>ReplaceKeyPrefixWith</code> to
   *             <code>/documents</code>. Not required if one of the siblings is present. Can be present
   *          only if <code>ReplaceKeyWith</code> is not provided.</p>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * <p>The specific object key to use in the redirect request. For example, redirect request to
   *             <code>error.html</code>. Not required if one of the siblings is present. Can be present
   *          only if <code>ReplaceKeyPrefixWith</code> is not provided.</p>
   */
  ReplaceKeyWith?: string;
}

export namespace Redirect {
  export const filterSensitiveLog = (obj: Redirect): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the redirect behavior and when a redirect is applied. For more information
 *          about routing rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects">Configuring advanced conditional redirects</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface RoutingRule {
  /**
   * <p>A container for describing a condition that must be met for the specified redirect to
   *          apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect
   *          to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect
   *          request to another host where you might process the error.</p>
   */
  Condition?: Condition;

  /**
   * <p>Container for redirect information. You can redirect requests to another host, to
   *          another page, or with another protocol. In the event of an error, you can specify a
   *          different error code to return.</p>
   */
  Redirect: Redirect | undefined;
}

export namespace RoutingRule {
  export const filterSensitiveLog = (obj: RoutingRule): any => ({
    ...obj,
  });
}

export interface GetBucketWebsiteOutput {
  /**
   * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3
   *          bucket.</p>
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * <p>The name of the index document for the website (for example
   *          <code>index.html</code>).</p>
   */
  IndexDocument?: IndexDocument;

  /**
   * <p>The object key name of the website error document to use for 4XX class errors.</p>
   */
  ErrorDocument?: ErrorDocument;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: RoutingRule[];
}

export namespace GetBucketWebsiteOutput {
  export const filterSensitiveLog = (obj: GetBucketWebsiteOutput): any => ({
    ...obj,
  });
}

export interface GetBucketWebsiteRequest {
  /**
   * <p>The bucket name for which to get the website configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: GetBucketWebsiteRequest): any => ({
    ...obj,
  });
}

export type ReplicationStatus = "COMPLETE" | "FAILED" | "PENDING" | "REPLICA";

export interface GetObjectOutput {
  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If
   *          false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes
   *          this header. It includes the expiry-date and rule-id key-value pairs providing object
   *          expiration information. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Provides information about object restoration operation and expiration time of the
   *          restored object copy.</p>
   */
  Restore?: string;

  /**
   * <p>Last modified date of the object</p>
   */
  LastModified?: Date;

  /**
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a
   *          resource found at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code>
   *          headers. This can happen if you create metadata using an API like SOAP that supports more
   *          flexible metadata than the REST API. For example, using SOAP, you can create metadata whose
   *          values are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>The portion of the object returned in the response.</p>
   */
  ContentRange?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Amazon S3 can return this if your request involves a bucket that is either a source or
   *          destination in a replication rule.</p>
   */
  ReplicationStatus?: ReplicationStatus | string;

  /**
   * <p>The count of parts this object has.</p>
   */
  PartsCount?: number;

  /**
   * <p>The number of tags, if any, on the object.</p>
   */
  TagCount?: number;

  /**
   * <p>The Object Lock mode currently in place for this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when this object's Object Lock will expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Indicates whether this object has an active legal hold. This field is only returned if
   *          you have permission to view an object's legal hold status. </p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
}

export namespace GetObjectOutput {
  export const filterSensitiveLog = (obj: GetObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface GetObjectRequest {
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified,
   *          otherwise return a 412 (precondition failed).</p>
   */
  IfMatch?: string;

  /**
   * <p>Return the object only if it has been modified since the specified time, otherwise
   *          return a 304 (not modified).</p>
   */
  IfModifiedSince?: Date;

  /**
   * <p>Return the object only if its entity tag (ETag) is different from the one specified,
   *          otherwise return a 304 (not modified).</p>
   */
  IfNoneMatch?: string;

  /**
   * <p>Return the object only if it has not been modified since the specified time, otherwise
   *          return a 412 (precondition failed).</p>
   */
  IfUnmodifiedSince?: Date;

  /**
   * <p>Key of the object to get.</p>
   */
  Key: string | undefined;

  /**
   * <p>Downloads the specified range bytes of an object. For more information about the HTTP
   *          Range header, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>.</p>
   *          <note>
   *             <p>Amazon S3 doesn't support retrieving multiple ranges of data per <code>GET</code>
   *             request.</p>
   *          </note>
   */
  Range?: string;

  /**
   * <p>Sets the <code>Cache-Control</code> header of the response.</p>
   */
  ResponseCacheControl?: string;

  /**
   * <p>Sets the <code>Content-Disposition</code> header of the response</p>
   */
  ResponseContentDisposition?: string;

  /**
   * <p>Sets the <code>Content-Encoding</code> header of the response.</p>
   */
  ResponseContentEncoding?: string;

  /**
   * <p>Sets the <code>Content-Language</code> header of the response.</p>
   */
  ResponseContentLanguage?: string;

  /**
   * <p>Sets the <code>Content-Type</code> header of the response.</p>
   */
  ResponseContentType?: string;

  /**
   * <p>Sets the <code>Expires</code> header of the response.</p>
   */
  ResponseExpires?: Date;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000.
   *          Effectively performs a 'ranged' GET request for the part specified. Useful for downloading
   *          just a part of an object.</p>
   */
  PartNumber?: number;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectRequest {
  export const filterSensitiveLog = (obj: GetObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Object is archived and inaccessible until restored.</p>
 */
export interface InvalidObjectState extends __SmithyException, $MetadataBearer {
  name: "InvalidObjectState";
  $fault: "client";
  StorageClass?: StorageClass | string;
  AccessTier?: IntelligentTieringAccessTier | string;
}

export namespace InvalidObjectState {
  export const filterSensitiveLog = (obj: InvalidObjectState): any => ({
    ...obj,
  });
}

/**
 * <p>The specified key does not exist.</p>
 */
export interface NoSuchKey extends __SmithyException, $MetadataBearer {
  name: "NoSuchKey";
  $fault: "client";
}

export namespace NoSuchKey {
  export const filterSensitiveLog = (obj: NoSuchKey): any => ({
    ...obj,
  });
}

export interface GetObjectAclOutput {
  /**
   * <p> Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;

  /**
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace GetObjectAclOutput {
  export const filterSensitiveLog = (obj: GetObjectAclOutput): any => ({
    ...obj,
  });
}

export interface GetObjectAclRequest {
  /**
   * <p>The bucket name that contains the object for which to get the ACL information. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key of the object for which to get the ACL information.</p>
   */
  Key: string | undefined;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectAclRequest {
  export const filterSensitiveLog = (obj: GetObjectAclRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A Legal Hold configuration for an object.</p>
 */
export interface ObjectLockLegalHold {
  /**
   * <p>Indicates whether the specified object has a Legal Hold in place.</p>
   */
  Status?: ObjectLockLegalHoldStatus | string;
}

export namespace ObjectLockLegalHold {
  export const filterSensitiveLog = (obj: ObjectLockLegalHold): any => ({
    ...obj,
  });
}

export interface GetObjectLegalHoldOutput {
  /**
   * <p>The current Legal Hold status for the specified object.</p>
   */
  LegalHold?: ObjectLockLegalHold;
}

export namespace GetObjectLegalHoldOutput {
  export const filterSensitiveLog = (obj: GetObjectLegalHoldOutput): any => ({
    ...obj,
  });
}

export interface GetObjectLegalHoldRequest {
  /**
   * <p>The bucket name containing the object whose Legal Hold status you want to retrieve. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object whose Legal Hold status you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * <p>The version ID of the object whose Legal Hold status you want to retrieve.</p>
   */
  VersionId?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectLegalHoldRequest {
  export const filterSensitiveLog = (obj: GetObjectLegalHoldRequest): any => ({
    ...obj,
  });
}

export type ObjectLockEnabled = "Enabled";

export type ObjectLockRetentionMode = "COMPLIANCE" | "GOVERNANCE";

/**
 * <p>The container element for specifying the default Object Lock retention settings for new
 *          objects placed in the specified bucket.</p>
 */
export interface DefaultRetention {
  /**
   * <p>The default Object Lock retention mode you want to apply to new objects placed in the
   *          specified bucket.</p>
   */
  Mode?: ObjectLockRetentionMode | string;

  /**
   * <p>The number of days that you want to specify for the default retention period.</p>
   */
  Days?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Years?: number;
}

export namespace DefaultRetention {
  export const filterSensitiveLog = (obj: DefaultRetention): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for an Object Lock rule.</p>
 */
export interface ObjectLockRule {
  /**
   * <p>The default retention period that you want to apply to new objects placed in the
   *          specified bucket.</p>
   */
  DefaultRetention?: DefaultRetention;
}

export namespace ObjectLockRule {
  export const filterSensitiveLog = (obj: ObjectLockRule): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for Object Lock configuration parameters.</p>
 */
export interface ObjectLockConfiguration {
  /**
   * <p>Indicates whether this bucket has an Object Lock configuration enabled.</p>
   */
  ObjectLockEnabled?: ObjectLockEnabled | string;

  /**
   * <p>The Object Lock rule in place for the specified object.</p>
   */
  Rule?: ObjectLockRule;
}

export namespace ObjectLockConfiguration {
  export const filterSensitiveLog = (obj: ObjectLockConfiguration): any => ({
    ...obj,
  });
}

export interface GetObjectLockConfigurationOutput {
  /**
   * <p>The specified bucket's Object Lock configuration.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;
}

export namespace GetObjectLockConfigurationOutput {
  export const filterSensitiveLog = (obj: GetObjectLockConfigurationOutput): any => ({
    ...obj,
  });
}

export interface GetObjectLockConfigurationRequest {
  /**
   * <p>The bucket whose Object Lock configuration you want to retrieve.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectLockConfigurationRequest {
  export const filterSensitiveLog = (obj: GetObjectLockConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A Retention configuration for an object.</p>
 */
export interface ObjectLockRetention {
  /**
   * <p>Indicates the Retention mode for the specified object.</p>
   */
  Mode?: ObjectLockRetentionMode | string;

  /**
   * <p>The date on which this Object Lock Retention will expire.</p>
   */
  RetainUntilDate?: Date;
}

export namespace ObjectLockRetention {
  export const filterSensitiveLog = (obj: ObjectLockRetention): any => ({
    ...obj,
  });
}

export interface GetObjectRetentionOutput {
  /**
   * <p>The container element for an object's retention settings.</p>
   */
  Retention?: ObjectLockRetention;
}

export namespace GetObjectRetentionOutput {
  export const filterSensitiveLog = (obj: GetObjectRetentionOutput): any => ({
    ...obj,
  });
}

export interface GetObjectRetentionRequest {
  /**
   * <p>The bucket name containing the object whose retention settings you want to retrieve. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object whose retention settings you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * <p>The version ID for the object whose retention settings you want to retrieve.</p>
   */
  VersionId?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectRetentionRequest {
  export const filterSensitiveLog = (obj: GetObjectRetentionRequest): any => ({
    ...obj,
  });
}

export interface GetObjectTaggingOutput {
  /**
   * <p>The versionId of the object for which you got the tagging information.</p>
   */
  VersionId?: string;

  /**
   * <p>Contains the tag set.</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace GetObjectTaggingOutput {
  export const filterSensitiveLog = (obj: GetObjectTaggingOutput): any => ({
    ...obj,
  });
}

export interface GetObjectTaggingRequest {
  /**
   * <p>The bucket name containing the object for which to get the tagging information. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which to get the tagging information.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object for which to get the tagging information.</p>
   */
  VersionId?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectTaggingRequest {
  export const filterSensitiveLog = (obj: GetObjectTaggingRequest): any => ({
    ...obj,
  });
}

export interface GetObjectTorrentOutput {
  /**
   * <p>A Bencoded dictionary as defined by the BitTorrent specification</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace GetObjectTorrentOutput {
  export const filterSensitiveLog = (obj: GetObjectTorrentOutput): any => ({
    ...obj,
  });
}

export interface GetObjectTorrentRequest {
  /**
   * <p>The name of the bucket containing the object for which to get the torrent files.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The object key for which to get the information.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetObjectTorrentRequest {
  export const filterSensitiveLog = (obj: GetObjectTorrentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You can
 *          enable the configuration options in any combination. For more information about when Amazon S3
 *          considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. </p>
 */
export interface PublicAccessBlockConfiguration {
  /**
   * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket
   *          and objects in this bucket. Setting this element to <code>TRUE</code> causes the following
   *          behavior:</p>
   *          <ul>
   *             <li>
   *                <p>PUT Bucket acl and PUT Object acl calls fail if the specified ACL is
   *                public.</p>
   *             </li>
   *             <li>
   *                <p>PUT Object calls fail if the request includes a public ACL.</p>
   *             </li>
   *             <li>
   *                <p>PUT Bucket calls fail if the request includes a public ACL.</p>
   *             </li>
   *          </ul>
   *          <p>Enabling this setting doesn't affect existing policies or ACLs.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this
   *          bucket. Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs on
   *          this bucket and objects in this bucket.</p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *          prevent new public ACLs from being set.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this
   *          element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the
   *          specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting
   *          this element to <code>TRUE</code> restricts access to this bucket to only AWS service
   *          principals and authorized users within this account if the bucket has a public
   *          policy.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that
   *          public and cross-account access within any public bucket policy, including non-public
   *          delegation to specific accounts, is blocked.</p>
   */
  RestrictPublicBuckets?: boolean;
}

export namespace PublicAccessBlockConfiguration {
  export const filterSensitiveLog = (obj: PublicAccessBlockConfiguration): any => ({
    ...obj,
  });
}

export interface GetPublicAccessBlockOutput {
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon S3
   *          bucket.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export namespace GetPublicAccessBlockOutput {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockOutput): any => ({
    ...obj,
  });
}

export interface GetPublicAccessBlockRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to retrieve. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface HeadBucketRequest {
  /**
   * <p>The bucket name.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace HeadBucketRequest {
  export const filterSensitiveLog = (obj: HeadBucketRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified bucket does not exist.</p>
 */
export interface NoSuchBucket extends __SmithyException, $MetadataBearer {
  name: "NoSuchBucket";
  $fault: "client";
}

export namespace NoSuchBucket {
  export const filterSensitiveLog = (obj: NoSuchBucket): any => ({
    ...obj,
  });
}

export type ArchiveStatus = "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";

export interface HeadObjectOutput {
  /**
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If
   *          false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes
   *          this header. It includes the expiry-date and rule-id key-value pairs providing object
   *          expiration information. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>If the object is an archived object (an object whose storage class is GLACIER), the
   *          response includes this header if either the archive restoration is in progress (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a> or an archive copy is already restored.</p>
   *
   *          <p> If an archive copy is already restored, the header value indicates when Amazon S3 is
   *          scheduled to delete the object copy. For example:</p>
   *
   *          <p>
   *             <code>x-amz-restore: ongoing-request="false", expiry-date="Fri, 23 Dec 2012 00:00:00
   *             GMT"</code>
   *          </p>
   *
   *          <p>If the object restoration is in progress, the header returns the value
   *             <code>ongoing-request="true"</code>.</p>
   *
   *          <p>For more information about archiving objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-transition-general-considerations">Transitioning Objects: General Considerations</a>.</p>
   */
  Restore?: string;

  /**
   * <p>The archive state of the head object.</p>
   */
  ArchiveStatus?: ArchiveStatus | string;

  /**
   * <p>Last modified date of the object</p>
   */
  LastModified?: Date;

  /**
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a
   *          resource found at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code>
   *          headers. This can happen if you create metadata using an API like SOAP that supports more
   *          flexible metadata than the REST API. For example, using SOAP, you can create metadata whose
   *          values are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>If the object is stored using server-side encryption either with an AWS KMS customer
   *          master key (CMK) or an Amazon S3-managed encryption key, the response includes this header with
   *          the value of the server-side encryption algorithm used when storing this object in Amazon
   *          S3 (for example, AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage
   *             Classes</a>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Amazon S3 can return this header if your request involves a bucket that is either a source or
   *          a destination in a replication rule.</p>
   *
   *          <p>In replication, you have a source bucket on which you configure replication and
   *          destination bucket or buckets where Amazon S3 stores object replicas. When you request an object
   *             (<code>GetObject</code>) or object metadata (<code>HeadObject</code>) from these
   *          buckets, Amazon S3 will return the <code>x-amz-replication-status</code> header in the response
   *          as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If requesting an object from the source bucket — Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header if the object in your request is
   *                eligible for replication.</p>
   *                <p> For example, suppose that in your replication configuration, you specify object
   *                prefix <code>TaxDocs</code> requesting Amazon S3 to replicate objects with key prefix
   *                   <code>TaxDocs</code>. Any objects you upload with this key name prefix, for
   *                example <code>TaxDocs/document1.pdf</code>, are eligible for replication. For any
   *                object request with this key name prefix, Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header with value PENDING, COMPLETED or
   *                FAILED indicating object replication status.</p>
   *             </li>
   *             <li>
   *                <p>If requesting an object from a destination bucket — Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header with value REPLICA if the object in
   *                your request is a replica that Amazon S3 created and there is no replica modification
   *                replication in progress.</p>
   *             </li>
   *             <li>
   *                <p>When replicating objects to multiple destination buckets the
   *                   <code>x-amz-replication-status</code> header acts differently. The header of the
   *                source object will only return a value of COMPLETED when replication is successful to
   *                all destinations. The header will remain at value PENDING until replication has
   *                completed for all destinations. If one or more destinations fails replication the
   *                header will return FAILED. </p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Replication</a>.</p>
   */
  ReplicationStatus?: ReplicationStatus | string;

  /**
   * <p>The count of parts this object has.</p>
   */
  PartsCount?: number;

  /**
   * <p>The Object Lock mode, if any, that's in effect for this object. This header is only
   *          returned if the requester has the <code>s3:GetObjectRetention</code> permission. For more
   *          information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object
   *             Lock</a>. </p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when the Object Lock retention period expires. This header is only
   *          returned if the requester has the <code>s3:GetObjectRetention</code> permission.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether a legal hold is in effect for this object. This header is only
   *          returned if the requester has the <code>s3:GetObjectLegalHold</code> permission. This
   *          header is not returned if the specified version of this object has never had a legal hold
   *          applied. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
}

export namespace HeadObjectOutput {
  export const filterSensitiveLog = (obj: HeadObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface HeadObjectRequest {
  /**
   * <p>The name of the bucket containing the object.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified,
   *          otherwise return a 412 (precondition failed).</p>
   */
  IfMatch?: string;

  /**
   * <p>Return the object only if it has been modified since the specified time, otherwise
   *          return a 304 (not modified).</p>
   */
  IfModifiedSince?: Date;

  /**
   * <p>Return the object only if its entity tag (ETag) is different from the one specified,
   *          otherwise return a 304 (not modified).</p>
   */
  IfNoneMatch?: string;

  /**
   * <p>Return the object only if it has not been modified since the specified time, otherwise
   *          return a 412 (precondition failed).</p>
   */
  IfUnmodifiedSince?: Date;

  /**
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Downloads the specified range bytes of an object. For more information about the HTTP
   *          Range header, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>.</p>
   *          <note>
   *             <p>Amazon S3 doesn't support retrieving multiple ranges of data per <code>GET</code>
   *             request.</p>
   *          </note>
   */
  Range?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000.
   *          Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about
   *          the size of the part and the number of parts in this object.</p>
   */
  PartNumber?: number;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace HeadObjectRequest {
  export const filterSensitiveLog = (obj: HeadObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

export interface ListBucketAnalyticsConfigurationsOutput {
  /**
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker that is used as a starting point for this analytics configuration list
   *          response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which
   *          indicates that there are more analytics configurations to list. The next request must
   *          include this <code>NextContinuationToken</code>. The token is obfuscated and is not a
   *          usable value.</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>The list of analytics configurations for a bucket.</p>
   */
  AnalyticsConfigurationList?: AnalyticsConfiguration[];
}

export namespace ListBucketAnalyticsConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketAnalyticsConfigurationsOutput): any => ({
    ...obj,
    ...(obj.AnalyticsConfigurationList && {
      AnalyticsConfigurationList: obj.AnalyticsConfigurationList.map((item) =>
        AnalyticsConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListBucketAnalyticsConfigurationsRequest {
  /**
   * <p>The name of the bucket from which analytics configurations are retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ContinuationToken that represents a placeholder from where this request should
   *          begin.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListBucketAnalyticsConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketAnalyticsConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketIntelligentTieringConfigurationsOutput {
  /**
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The ContinuationToken that represents a placeholder from where this request should
   *          begin.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The marker used to continue this inventory configuration listing. Use the
   *             <code>NextContinuationToken</code> from this response to continue the listing in a
   *          subsequent request. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>The list of S3 Intelligent-Tiering configurations for a bucket.</p>
   */
  IntelligentTieringConfigurationList?: IntelligentTieringConfiguration[];
}

export namespace ListBucketIntelligentTieringConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketIntelligentTieringConfigurationsOutput): any => ({
    ...obj,
  });
}

export interface ListBucketIntelligentTieringConfigurationsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ContinuationToken that represents a placeholder from where this request should
   *          begin.</p>
   */
  ContinuationToken?: string;
}

export namespace ListBucketIntelligentTieringConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketIntelligentTieringConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketInventoryConfigurationsOutput {
  /**
   * <p>If sent in the request, the marker that is used as a starting point for this inventory
   *          configuration list response.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The list of inventory configurations for a bucket.</p>
   */
  InventoryConfigurationList?: InventoryConfiguration[];

  /**
   * <p>Tells whether the returned list of inventory configurations is complete. A value of true
   *          indicates that the list is not complete and the NextContinuationToken is provided for a
   *          subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker used to continue this inventory configuration listing. Use the
   *             <code>NextContinuationToken</code> from this response to continue the listing in a
   *          subsequent request. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;
}

export namespace ListBucketInventoryConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketInventoryConfigurationsOutput): any => ({
    ...obj,
    ...(obj.InventoryConfigurationList && {
      InventoryConfigurationList: obj.InventoryConfigurationList.map((item) =>
        InventoryConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListBucketInventoryConfigurationsRequest {
  /**
   * <p>The name of the bucket containing the inventory configurations to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The marker used to continue an inventory configuration listing that has been truncated.
   *          Use the NextContinuationToken from a previously truncated list response to continue the
   *          listing. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListBucketInventoryConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketInventoryConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListBucketMetricsConfigurationsOutput {
  /**
   * <p>Indicates whether the returned list of metrics configurations is complete. A value of
   *          true indicates that the list is not complete and the NextContinuationToken will be provided
   *          for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker that is used as a starting point for this metrics configuration list
   *          response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The marker used to continue a metrics configuration listing that has been truncated. Use
   *          the <code>NextContinuationToken</code> from a previously truncated list response to
   *          continue the listing. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>The list of metrics configurations for a bucket.</p>
   */
  MetricsConfigurationList?: MetricsConfiguration[];
}

export namespace ListBucketMetricsConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketMetricsConfigurationsOutput): any => ({
    ...obj,
    ...(obj.MetricsConfigurationList && {
      MetricsConfigurationList: obj.MetricsConfigurationList.map((item) =>
        MetricsConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface ListBucketMetricsConfigurationsRequest {
  /**
   * <p>The name of the bucket containing the metrics configurations to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The marker that is used to continue a metrics configuration listing that has been
   *          truncated. Use the NextContinuationToken from a previously truncated list response to
   *          continue the listing. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListBucketMetricsConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketMetricsConfigurationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p> In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally
 *          unique, and the namespace is shared by all AWS accounts. </p>
 */
export interface Bucket {
  /**
   * <p>The name of the bucket.</p>
   */
  Name?: string;

  /**
   * <p>Date the bucket was created. This date can change when making changes to your bucket, such as editing its bucket policy.</p>
   */
  CreationDate?: Date;
}

export namespace Bucket {
  export const filterSensitiveLog = (obj: Bucket): any => ({
    ...obj,
  });
}

export interface ListBucketsOutput {
  /**
   * <p>The list of buckets owned by the requestor.</p>
   */
  Buckets?: Bucket[];

  /**
   * <p>The owner of the buckets listed.</p>
   */
  Owner?: Owner;
}

export namespace ListBucketsOutput {
  export const filterSensitiveLog = (obj: ListBucketsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Container for all (if there are any) keys between Prefix and the next occurrence of the
 *          string specified by a delimiter. CommonPrefixes lists keys that act like subdirectories in
 *          the directory specified by Prefix. For example, if the prefix is notes/ and the delimiter
 *          is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. </p>
 */
export interface CommonPrefix {
  /**
   * <p>Container for the specified common prefix.</p>
   */
  Prefix?: string;
}

export namespace CommonPrefix {
  export const filterSensitiveLog = (obj: CommonPrefix): any => ({
    ...obj,
  });
}

export type EncodingType = "url";

/**
 * <p>Container element that identifies who initiated the multipart upload. </p>
 */
export interface Initiator {
  /**
   * <p>If the principal is an AWS account, it provides the Canonical User ID. If the principal
   *          is an IAM User, it provides a user ARN value.</p>
   */
  ID?: string;

  /**
   * <p>Name of the Principal.</p>
   */
  DisplayName?: string;
}

export namespace Initiator {
  export const filterSensitiveLog = (obj: Initiator): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the <code>MultipartUpload</code> for the Amazon S3 object.</p>
 */
export interface MultipartUpload {
  /**
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId?: string;

  /**
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Date and time at which the multipart upload was initiated.</p>
   */
  Initiated?: Date;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Specifies the owner of the object that is part of the multipart upload. </p>
   */
  Owner?: Owner;

  /**
   * <p>Identifies who initiated the multipart upload.</p>
   */
  Initiator?: Initiator;
}

export namespace MultipartUpload {
  export const filterSensitiveLog = (obj: MultipartUpload): any => ({
    ...obj,
  });
}

export interface ListMultipartUploadsOutput {
  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket?: string;

  /**
   * <p>The key at or after which the listing began.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Upload ID after which listing began.</p>
   */
  UploadIdMarker?: string;

  /**
   * <p>When a list is truncated, this element specifies the value that should be used for the
   *          key-marker request parameter in a subsequent request.</p>
   */
  NextKeyMarker?: string;

  /**
   * <p>When a prefix is provided in the request, this field contains the specified prefix. The
   *          result contains only keys starting with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Contains the delimiter you specified in the request. If you don't specify a delimiter in
   *          your request, this element is absent from the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>When a list is truncated, this element specifies the value that should be used for the
   *             <code>upload-id-marker</code> request parameter in a subsequent request.</p>
   */
  NextUploadIdMarker?: string;

  /**
   * <p>Maximum number of multipart uploads that could have been included in the
   *          response.</p>
   */
  MaxUploads?: number;

  /**
   * <p>Indicates whether the returned list of multipart uploads is truncated. A value of true
   *          indicates that the list was truncated. The list can be truncated if the number of multipart
   *          uploads exceeds the limit allowed or specified by max uploads.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Container for elements related to a particular multipart upload. A response can contain
   *          zero or more <code>Upload</code> elements.</p>
   */
  Uploads?: MultipartUpload[];

  /**
   * <p>If you specify a delimiter in the request, then the result returns each distinct key
   *          prefix containing the delimiter in a <code>CommonPrefixes</code> element. The distinct key
   *          prefixes are returned in the <code>Prefix</code> child element.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   *          <p>If you specify <code>encoding-type</code> request parameter, Amazon S3 includes this element
   *          in the response, and returns encoded key name values in the following response
   *          elements:</p>
   *
   *          <p>
   *             <code>Delimiter</code>, <code>KeyMarker</code>, <code>Prefix</code>,
   *             <code>NextKeyMarker</code>, <code>Key</code>.</p>
   */
  EncodingType?: EncodingType | string;
}

export namespace ListMultipartUploadsOutput {
  export const filterSensitiveLog = (obj: ListMultipartUploadsOutput): any => ({
    ...obj,
  });
}

export interface ListMultipartUploadsRequest {
  /**
   * <p>The name of the bucket to which the multipart upload was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Character you use to group keys.</p>
   *          <p>All keys that contain the same string between the prefix, if specified, and the first
   *          occurrence of the delimiter after the prefix are grouped under a single result element,
   *             <code>CommonPrefixes</code>. If you don't specify the prefix parameter, then the
   *          substring starts at the beginning of the key. The keys that are grouped under
   *             <code>CommonPrefixes</code> result element are not returned elsewhere in the
   *          response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Together with upload-id-marker, this parameter specifies the multipart upload after
   *          which listing should begin.</p>
   *          <p>If <code>upload-id-marker</code> is not specified, only the keys lexicographically
   *          greater than the specified <code>key-marker</code> will be included in the list.</p>
   *
   *          <p>If <code>upload-id-marker</code> is specified, any multipart uploads for a key equal to
   *          the <code>key-marker</code> might also be included, provided those multipart uploads have
   *          upload IDs lexicographically greater than the specified
   *          <code>upload-id-marker</code>.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response
   *          body. 1,000 is the maximum number of uploads that can be returned in a response.</p>
   */
  MaxUploads?: number;

  /**
   * <p>Lists in-progress uploads only for those keys that begin with the specified prefix. You
   *          can use prefixes to separate a bucket into different grouping of keys. (You can think of
   *          using prefix to make groups in the same way you'd use a folder in a file system.)</p>
   */
  Prefix?: string;

  /**
   * <p>Together with key-marker, specifies the multipart upload after which listing should
   *          begin. If key-marker is not specified, the upload-id-marker parameter is ignored.
   *          Otherwise, any multipart uploads for a key equal to the key-marker might be included in the
   *          list only if they have an upload ID lexicographically greater than the specified
   *             <code>upload-id-marker</code>.</p>
   */
  UploadIdMarker?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListMultipartUploadsRequest {
  export const filterSensitiveLog = (obj: ListMultipartUploadsRequest): any => ({
    ...obj,
  });
}

export type ObjectStorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "OUTPOSTS"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";

/**
 * <p>An object consists of data and its descriptive metadata.</p>
 */
export interface _Object {
  /**
   * <p>The name that you assign to an object. You use the object key to retrieve the
   *          object.</p>
   */
  Key?: string;

  /**
   * <p>The date the Object was Last Modified</p>
   */
  LastModified?: Date;

  /**
   * <p>The entity tag is a hash of the object. The ETag reflects changes only to the contents
   *          of an object, not its metadata. The ETag may or may not be an MD5 digest of the object
   *          data. Whether or not it is depends on how the object was created and how it is encrypted as
   *          described below:</p>
   *          <ul>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the
   *                AWS Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are
   *                an MD5 digest of their object data.</p>
   *             </li>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the
   *                AWS Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are
   *                not an MD5 digest of their object data.</p>
   *             </li>
   *             <li>
   *                <p>If an object is created by either the Multipart Upload or Part Copy operation, the
   *                ETag is not an MD5 digest, regardless of the method of encryption.</p>
   *             </li>
   *          </ul>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the object</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectStorageClass | string;

  /**
   * <p>The owner of the object</p>
   */
  Owner?: Owner;
}

export namespace _Object {
  export const filterSensitiveLog = (obj: _Object): any => ({
    ...obj,
  });
}

export interface ListObjectsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Indicates where in the bucket listing begins. Marker is included in the response if it
   *          was sent with the request.</p>
   */
  Marker?: string;

  /**
   * <p>When response is truncated (the IsTruncated element value in the response is true), you
   *          can use the key name in this field as marker in the subsequent request to get next set of
   *          objects. Amazon S3 lists objects in alphabetical order Note: This element is returned only if
   *          you have delimiter request parameter specified. If response does not include the NextMarker
   *          and it is truncated, you can use the value of the last Key in the response as the marker in
   *          the subsequent request to get the next set of object keys.</p>
   */
  NextMarker?: string;

  /**
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * <p>The bucket name.</p>
   */
  Name?: string;

  /**
   * <p>Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of
   *          the delimiter to be rolled up into a single result element in the
   *             <code>CommonPrefixes</code> collection. These rolled-up keys are not returned elsewhere
   *          in the response. Each rolled-up result counts as only one return against the
   *             <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * <p>The maximum number of keys returned in the response body.</p>
   */
  MaxKeys?: number;

  /**
   * <p>All of the keys rolled up in a common prefix count as a single return when calculating
   *          the number of returns. </p>
   *
   *          <p>A response can contain CommonPrefixes only if you specify a delimiter.</p>
   *
   *          <p>CommonPrefixes contains all (if there are any) keys between Prefix and the next
   *          occurrence of the string specified by the delimiter.</p>
   *
   *          <p> CommonPrefixes lists keys that act like subdirectories in the directory specified by
   *          Prefix.</p>
   *
   *          <p>For example, if the prefix is notes/ and the delimiter is a slash (/) as in
   *          notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a
   *          common prefix count as a single return when calculating the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;
}

export namespace ListObjectsOutput {
  export const filterSensitiveLog = (obj: ListObjectsOutput): any => ({
    ...obj,
  });
}

export interface ListObjectsRequest {
  /**
   * <p>The name of the bucket containing the objects.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  Marker?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain more.
   *       </p>
   */
  MaxKeys?: number;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects
   *          request. Bucket owners need not specify this parameter in their requests.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListObjectsRequest {
  export const filterSensitiveLog = (obj: ListObjectsRequest): any => ({
    ...obj,
  });
}

export interface ListObjectsV2Output {
  /**
   * <p>Set to false if all of the results were returned. Set to true if more keys are available
   *          to return. If the number of results exceeds that specified by MaxKeys, all of the results
   *          might not be returned.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * <p>The bucket name.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Name?: string;

  /**
   * <p> Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of
   *          the delimiter to be rolled up into a single result element in the CommonPrefixes
   *          collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up
   *          result counts as only one return against the <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain
   *          more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating
   *          the number of returns.</p>
   *
   *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a
   *          delimiter.</p>
   *
   *          <p>
   *             <code>CommonPrefixes</code> contains all (if there are any) keys between
   *             <code>Prefix</code> and the next occurrence of the string specified by a
   *          delimiter.</p>
   *
   *          <p>
   *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory
   *          specified by <code>Prefix</code>.</p>
   *
   *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash
   *             (<code>/</code>) as in <code>notes/summer/july</code>, the common prefix is
   *             <code>notes/summer/</code>. All of the keys that roll up into a common prefix count as a
   *          single return when calculating the number of returns. </p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *
   *          <p>If you specify the encoding-type request parameter, Amazon S3 includes this element in the
   *          response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>Delimiter, Prefix, Key,</code> and <code>StartAfter</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>KeyCount is the number of keys returned with this request. KeyCount will always be less
   *          than equals to MaxKeys field. Say you ask for 50 keys, your result will include less than
   *          equals 50 keys </p>
   */
  KeyCount?: number;

  /**
   * <p> If ContinuationToken was sent with the request, it is included in the response.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which
   *          means there are more keys in the bucket that can be listed. The next list requests to Amazon S3
   *          can be continued with this <code>NextContinuationToken</code>.
   *             <code>NextContinuationToken</code> is obfuscated and is not a real key</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>If StartAfter was sent with the request, it is included in the response.</p>
   */
  StartAfter?: string;
}

export namespace ListObjectsV2Output {
  export const filterSensitiveLog = (obj: ListObjectsV2Output): any => ({
    ...obj,
  });
}

export interface ListObjectsV2Request {
  /**
   * <p>Bucket name to list. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain
   *          more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a
   *          token. ContinuationToken is obfuscated and is not a real key.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The owner field is not present in listV2 by default, if you want to return owner field
   *          with each key in the result then set the fetch owner field to true.</p>
   */
  FetchOwner?: boolean;

  /**
   * <p>StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this
   *          specified key. StartAfter can be any key in the bucket.</p>
   */
  StartAfter?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects
   *          request in V2 style. Bucket owners need not specify this parameter in their
   *          requests.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListObjectsV2Request {
  export const filterSensitiveLog = (obj: ListObjectsV2Request): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the delete marker.</p>
 */
export interface DeleteMarkerEntry {
  /**
   * <p>The account that created the delete marker.></p>
   */
  Owner?: Owner;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an
   *          object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;
}

export namespace DeleteMarkerEntry {
  export const filterSensitiveLog = (obj: DeleteMarkerEntry): any => ({
    ...obj,
  });
}

export type ObjectVersionStorageClass = "STANDARD";

/**
 * <p>The version of an object.</p>
 */
export interface ObjectVersion {
  /**
   * <p>The entity tag is an MD5 hash of that version of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the object.</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectVersionStorageClass | string;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an
   *          object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>Specifies the owner of the object.</p>
   */
  Owner?: Owner;
}

export namespace ObjectVersion {
  export const filterSensitiveLog = (obj: ObjectVersion): any => ({
    ...obj,
  });
}

export interface ListObjectVersionsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria. If your results were truncated, you can make a follow-up paginated request using
   *          the NextKeyMarker and NextVersionIdMarker response parameters as a starting place in
   *          another request to return the rest of the results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Marks the last key returned in a truncated response.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Marks the last version of the key returned in a truncated response.</p>
   */
  VersionIdMarker?: string;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextKeyMarker</code> specifies the first key not returned that satisfies the
   *          search criteria. Use this value for the key-marker request parameter in a subsequent
   *          request.</p>
   */
  NextKeyMarker?: string;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextVersionIdMarker</code> specifies the first object version not returned that
   *          satisfies the search criteria. Use this value for the version-id-marker request parameter
   *          in a subsequent request.</p>
   */
  NextVersionIdMarker?: string;

  /**
   * <p>Container for version information.</p>
   */
  Versions?: ObjectVersion[];

  /**
   * <p>Container for an object that is a delete marker.</p>
   */
  DeleteMarkers?: DeleteMarkerEntry[];

  /**
   * <p>The bucket name.</p>
   */
  Name?: string;

  /**
   * <p>Selects objects that start with the value supplied by this parameter.</p>
   */
  Prefix?: string;

  /**
   * <p>The delimiter grouping the included keys. A delimiter is a character that you specify to
   *          group keys. All keys that contain the same string between the prefix and the first
   *          occurrence of the delimiter are grouped under a single result element in
   *             <code>CommonPrefixes</code>. These groups are counted as one result against the max-keys
   *          limitation. These keys are not returned elsewhere in the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Specifies the maximum number of objects to return.</p>
   */
  MaxKeys?: number;

  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating
   *          the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p> Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *
   *          <p>If you specify encoding-type request parameter, Amazon S3 includes this element in the
   *          response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>KeyMarker, NextKeyMarker, Prefix, Key</code>, and <code>Delimiter</code>.</p>
   */
  EncodingType?: EncodingType | string;
}

export namespace ListObjectVersionsOutput {
  export const filterSensitiveLog = (obj: ListObjectVersionsOutput): any => ({
    ...obj,
  });
}

export interface ListObjectVersionsRequest {
  /**
   * <p>The bucket name that contains the objects. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character that you specify to group keys. All keys that contain the
   *          same string between the <code>prefix</code> and the first occurrence of the delimiter are
   *          grouped under a single result element in CommonPrefixes. These groups are counted as one
   *          result against the max-keys limitation. These keys are not returned elsewhere in the
   *          response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain more. If
   *          additional keys satisfy the search criteria, but were not returned because max-keys was
   *          exceeded, the response contains <isTruncated>true</isTruncated>. To return the
   *          additional keys, see key-marker and version-id-marker.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Use this parameter to select only those keys that begin with the specified prefix. You
   *          can use prefixes to separate a bucket into different groupings of keys. (You can think of
   *          using prefix to make groups in the same way you'd use a folder in a file system.) You can
   *          use prefix with delimiter to roll up numerous objects into a single result under
   *          CommonPrefixes. </p>
   */
  Prefix?: string;

  /**
   * <p>Specifies the object version you want to start listing from.</p>
   */
  VersionIdMarker?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListObjectVersionsRequest {
  export const filterSensitiveLog = (obj: ListObjectVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for elements related to a part.</p>
 */
export interface Part {
  /**
   * <p>Part number identifying the part. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;

  /**
   * <p>Date and time at which the part was uploaded.</p>
   */
  LastModified?: Date;

  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the uploaded part data.</p>
   */
  Size?: number;
}

export namespace Part {
  export const filterSensitiveLog = (obj: Part): any => ({
    ...obj,
  });
}

export interface ListPartsOutput {
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete
   *          multipart uploads and the prefix in the lifecycle rule matches the object name in the
   *          request, then the response includes this header indicating when the initiated multipart
   *          upload will become eligible for abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting
   *             Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>.</p>
   *
   *          <p>The response will also include the <code>x-amz-abort-rule-id</code> header that will
   *          provide the ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It
   *          identifies applicable lifecycle configuration rule that defines the action to abort
   *          incomplete multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId?: string;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the part-number-marker request parameter in a subsequent
   *          request.</p>
   */
  PartNumberMarker?: string;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the part-number-marker request parameter in a subsequent
   *          request.</p>
   */
  NextPartNumberMarker?: string;

  /**
   * <p>Maximum number of parts that were allowed in the response.</p>
   */
  MaxParts?: number;

  /**
   * <p> Indicates whether the returned list of parts is truncated. A true value indicates that
   *          the list was truncated. A list can be truncated if the number of parts exceeds the limit
   *          returned in the MaxParts element.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p> Container for elements related to a particular part. A response can contain zero or
   *          more <code>Part</code> elements.</p>
   */
  Parts?: Part[];

  /**
   * <p>Container element that identifies who initiated the multipart upload. If the initiator
   *          is an AWS account, this element provides the same information as the <code>Owner</code>
   *          element. If the initiator is an IAM User, this element provides the user ARN and display
   *          name.</p>
   */
  Initiator?: Initiator;

  /**
   * <p> Container element that identifies the object owner, after the object is created. If
   *          multipart upload is initiated by an IAM user, this element provides the parent account ID
   *          and display name.</p>
   */
  Owner?: Owner;

  /**
   * <p>Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded
   *          object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace ListPartsOutput {
  export const filterSensitiveLog = (obj: ListPartsOutput): any => ({
    ...obj,
  });
}

export interface ListPartsRequest {
  /**
   * <p>The name of the bucket to which the parts are being uploaded. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Sets the maximum number of parts to return.</p>
   */
  MaxParts?: number;

  /**
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers
   *          will be listed.</p>
   */
  PartNumberMarker?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace ListPartsRequest {
  export const filterSensitiveLog = (obj: ListPartsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAccelerateConfigurationRequest {
  /**
   * <p>The name of the bucket for which the accelerate configuration is set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for setting the transfer acceleration state.</p>
   */
  AccelerateConfiguration: AccelerateConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAccelerateConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAccelerateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAclRequest {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?: BucketCannedACL | string;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket to which to apply the ACL.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAclRequest {
  export const filterSensitiveLog = (obj: PutBucketAclRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket to which an analytics configuration is stored.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
      AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
    }),
  });
}

/**
 * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling
 *             Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer
 *             Guide</i>.</p>
 */
export interface CORSConfiguration {
  /**
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add
   *          up to 100 rules to the configuration.</p>
   */
  CORSRules: CORSRule[] | undefined;
}

export namespace CORSConfiguration {
  export const filterSensitiveLog = (obj: CORSConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketCorsRequest {
  /**
   * <p>Specifies the bucket impacted by the <code>cors</code>configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource
   *             Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  CORSConfiguration: CORSConfiguration | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketCorsRequest {
  export const filterSensitiveLog = (obj: PutBucketCorsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketEncryptionRequest {
  /**
   * <p>Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed
   *          keys (SSE-S3) or customer master keys stored in AWS KMS (SSE-KMS). For information about
   *          the Amazon S3 default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Default Bucket Encryption</a>
   *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the server-side encryption configuration.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: PutBucketEncryptionRequest): any => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   */
  IntelligentTieringConfiguration: IntelligentTieringConfiguration | undefined;
}

export namespace PutBucketIntelligentTieringConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketIntelligentTieringConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket where the inventory configuration will be stored.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration: InventoryConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketInventoryConfigurationRequest): any => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }),
  });
}

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>
 *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface BucketLifecycleConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Rules: LifecycleRule[] | undefined;
}

export namespace BucketLifecycleConfiguration {
  export const filterSensitiveLog = (obj: BucketLifecycleConfiguration): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRule.filterSensitiveLog(item)) }),
  });
}

export interface PutBucketLifecycleConfigurationRequest {
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketLifecycleConfigurationRequest): any => ({
    ...obj,
    ...(obj.LifecycleConfiguration && {
      LifecycleConfiguration: BucketLifecycleConfiguration.filterSensitiveLog(obj.LifecycleConfiguration),
    }),
  });
}

/**
 * <p>Container for logging status information.</p>
 */
export interface BucketLoggingStatus {
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
   *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *             <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

export namespace BucketLoggingStatus {
  export const filterSensitiveLog = (obj: BucketLoggingStatus): any => ({
    ...obj,
  });
}

export interface PutBucketLoggingRequest {
  /**
   * <p>The name of the bucket for which to set the logging parameters.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for logging status information.</p>
   */
  BucketLoggingStatus: BucketLoggingStatus | undefined;

  /**
   * <p>The MD5 hash of the <code>PutBucketLogging</code> request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketLoggingRequest {
  export const filterSensitiveLog = (obj: PutBucketLoggingRequest): any => ({
    ...obj,
  });
}

export interface PutBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket for which the metrics configuration is set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration: MetricsConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketMetricsConfigurationRequest): any => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
      MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
    }),
  });
}

export interface PutBucketNotificationConfigurationRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A container for specifying the notification configuration of the bucket. If this element
   *          is empty, notifications are turned off for the bucket.</p>
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketNotificationConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketNotificationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketOwnershipControlsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>OwnershipControls</code> request body. </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The <code>OwnershipControls</code> (BucketOwnerPreferred or ObjectWriter) that you want
   *          to apply to this Amazon S3 bucket.</p>
   */
  OwnershipControls: OwnershipControls | undefined;
}

export namespace PutBucketOwnershipControlsRequest {
  export const filterSensitiveLog = (obj: PutBucketOwnershipControlsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketPolicyRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change
   *          this bucket policy in the future.</p>
   */
  ConfirmRemoveSelfBucketAccess?: boolean;

  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketPolicyRequest {
  export const filterSensitiveLog = (obj: PutBucketPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutBucketReplicationRequest {
  /**
   * <p>The name of the bucket</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketReplicationRequest {
  export const filterSensitiveLog = (obj: PutBucketReplicationRequest): any => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
      ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
    }),
  });
}

/**
 * <p>Container for Payer.</p>
 */
export interface RequestPaymentConfiguration {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer: Payer | string | undefined;
}

export namespace RequestPaymentConfiguration {
  export const filterSensitiveLog = (obj: RequestPaymentConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketRequestPaymentRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for Payer.</p>
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketRequestPaymentRequest {
  export const filterSensitiveLog = (obj: PutBucketRequestPaymentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for <code>TagSet</code> elements.</p>
 */
export interface Tagging {
  /**
   * <p>A collection for a set of tags</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace Tagging {
  export const filterSensitiveLog = (obj: Tagging): any => ({
    ...obj,
  });
}

export interface PutBucketTaggingRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements.</p>
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketTaggingRequest {
  export const filterSensitiveLog = (obj: PutBucketTaggingRequest): any => ({
    ...obj,
  });
}

export type MFADelete = "Disabled" | "Enabled";

/**
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT
 *             Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface VersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is only returned if the bucket has been configured with MFA delete. If the bucket
   *          has never been so configured, this element is not returned.</p>
   */
  MFADelete?: MFADelete | string;

  /**
   * <p>The versioning state of the bucket.</p>
   */
  Status?: BucketVersioningStatus | string;
}

export namespace VersioningConfiguration {
  export const filterSensitiveLog = (obj: VersioningConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketVersioningRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   */
  MFA?: string;

  /**
   * <p>Container for setting the versioning state.</p>
   */
  VersioningConfiguration: VersioningConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketVersioningRequest {
  export const filterSensitiveLog = (obj: PutBucketVersioningRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 */
export interface WebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: ErrorDocument;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocument?: IndexDocument;

  /**
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p>
   *          <important>
   *             <p>If you specify this property, you can't specify any other property.</p>
   *          </important>
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: RoutingRule[];
}

export namespace WebsiteConfiguration {
  export const filterSensitiveLog = (obj: WebsiteConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketWebsiteRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the request.</p>
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: PutBucketWebsiteRequest): any => ({
    ...obj,
  });
}

export interface PutObjectOutput {
  /**
   * <p> If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>), the response includes this header. It
   *          includes the expiry-date and rule-id key-value pairs that provide information about object
   *          expiration. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * <p>If you specified server-side encryption either with an AWS KMS customer master key (CMK)
   *          or Amazon S3-managed encryption key in your PUT request, the response includes this header. It
   *          confirms the encryption algorithm that Amazon S3 used to encrypt the object.</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *          (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the
   *          object. </p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectOutput {
  export const filterSensitiveLog = (obj: PutObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface PutObjectRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *       ACL</a>.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>The bucket name to which the PUT operation was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p> Can be used to specify caching behavior along the request/reply chain. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1">http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1</a>.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11</a>.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13</a>.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to
   *          RFC 1864. This header can be used as a message integrity check to verify that the data is
   *          the same data that was originally sent. Although it is optional, we recommend using the
   *          Content-MD5 mechanism as an end-to-end integrity check. For more information about REST
   *          request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST
   *             Authentication</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A standard MIME type describing the format of the contents. For more information, see
   *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17</a>.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable. For more information, see
   *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21</a>.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its
   *       metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Object key for which the PUT operation was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3
   *             Service Developer Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a>.</p>
   *
   *          <p>In the following example, the request header sets the redirect to an object
   *          (anotherPage.html) in the same bucket:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
   *          </p>
   *
   *          <p>In the following example, the request header sets the object redirect to another
   *          website:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
   *          </p>
   *
   *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to Configure Website Page
   *             Redirects</a>. </p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *          (AWS KMS) symmetrical customer managed customer master key (CMK) that was used for the
   *          object.</p>
   *          <p> If the value of <code>x-amz-server-side-encryption</code> is <code>aws:kms</code>, this
   *          header specifies the ID of the symmetric customer managed AWS KMS CMK that will be used for
   *          the object. If you specify <code>x-amz-server-side-encryption:aws:kms</code>, but do not
   *             provide<code> x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the AWS
   *          managed CMK in AWS to protect the data.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this
   *          header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value
   *          pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
   *          <p>Specifying this header with a PUT operation doesn’t affect bucket-level settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For
   *          example, "Key1=Value1")</p>
   */
  Tagging?: string;

  /**
   * <p>The Object Lock mode that you want to apply to this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when you want this object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether a legal hold will be applied to this object. For more information
   *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object
   *          Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectRequest {
  export const filterSensitiveLog = (obj: PutObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface PutObjectAclOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectAclOutput {
  export const filterSensitiveLog = (obj: PutObjectAclOutput): any => ({
    ...obj,
  });
}

export interface PutObjectAclRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket name that contains the object to which you want to attach the ACL. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.></a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the
   *       bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Key for which the PUT operation was initiated.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectAclRequest {
  export const filterSensitiveLog = (obj: PutObjectAclRequest): any => ({
    ...obj,
  });
}

export interface PutObjectLegalHoldOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLegalHoldOutput {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldOutput): any => ({
    ...obj,
  });
}

export interface PutObjectLegalHoldRequest {
  /**
   * <p>The bucket name containing the object that you want to place a Legal Hold on. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to place a Legal Hold on.</p>
   */
  Key: string | undefined;

  /**
   * <p>Container element for the Legal Hold configuration you want to apply to the specified
   *          object.</p>
   */
  LegalHold?: ObjectLockLegalHold;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID of the object that you want to place a Legal Hold on.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectLegalHoldRequest {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldRequest): any => ({
    ...obj,
  });
}

export interface PutObjectLockConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLockConfigurationOutput {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationOutput): any => ({
    ...obj,
  });
}

export interface PutObjectLockConfigurationRequest {
  /**
   * <p>The bucket whose Object Lock configuration you want to create or replace.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The Object Lock configuration that you want to apply to the specified bucket.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectLockConfigurationRequest {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutObjectRetentionOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectRetentionOutput {
  export const filterSensitiveLog = (obj: PutObjectRetentionOutput): any => ({
    ...obj,
  });
}

export interface PutObjectRetentionRequest {
  /**
   * <p>The bucket name that contains the object you want to apply this Object Retention
   *          configuration to. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  Key: string | undefined;

  /**
   * <p>The container element for the Object Retention configuration.</p>
   */
  Retention?: ObjectLockRetention;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  VersionId?: string;

  /**
   * <p>Indicates whether this operation should bypass Governance-mode restrictions.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectRetentionRequest {
  export const filterSensitiveLog = (obj: PutObjectRetentionRequest): any => ({
    ...obj,
  });
}

export interface PutObjectTaggingOutput {
  /**
   * <p>The versionId of the object the tag-set was added to.</p>
   */
  VersionId?: string;
}

export namespace PutObjectTaggingOutput {
  export const filterSensitiveLog = (obj: PutObjectTaggingOutput): any => ({
    ...obj,
  });
}

export interface PutObjectTaggingRequest {
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be added to.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements</p>
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectTaggingRequest {
  export const filterSensitiveLog = (obj: PutObjectTaggingRequest): any => ({
    ...obj,
  });
}

export interface PutPublicAccessBlockRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body. </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          bucket. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: PutPublicAccessBlockRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This operation is not allowed against this storage tier.</p>
 */
export interface ObjectAlreadyInActiveTierError extends __SmithyException, $MetadataBearer {
  name: "ObjectAlreadyInActiveTierError";
  $fault: "client";
}

export namespace ObjectAlreadyInActiveTierError {
  export const filterSensitiveLog = (obj: ObjectAlreadyInActiveTierError): any => ({
    ...obj,
  });
}

export interface RestoreObjectOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Indicates the path in the provided S3 output location where Select results will be
   *          restored to.</p>
   */
  RestoreOutputPath?: string;
}

export namespace RestoreObjectOutput {
  export const filterSensitiveLog = (obj: RestoreObjectOutput): any => ({
    ...obj,
  });
}

export type Tier = "Bulk" | "Expedited" | "Standard";

/**
 * <p>Container for S3 Glacier job parameters.</p>
 */
export interface GlacierJobParameters {
  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier: Tier | string | undefined;
}

export namespace GlacierJobParameters {
  export const filterSensitiveLog = (obj: GlacierJobParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the type of server-side encryption used.</p>
 */
export interface Encryption {
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  EncryptionType: ServerSideEncryption | string | undefined;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value specifies the ID of
   *          the symmetric customer managed AWS KMS CMK to use for encryption of job results. Amazon S3 only
   *          supports symmetric CMKs. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and
   *             Asymmetric Keys</a> in the <i>AWS Key Management Service Developer
   *             Guide</i>.</p>
   */
  KMSKeyId?: string;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value can be used to
   *          specify the encryption context for the restore results.</p>
   */
  KMSContext?: string;
}

export namespace Encryption {
  export const filterSensitiveLog = (obj: Encryption): any => ({
    ...obj,
    ...(obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }),
  });
}
