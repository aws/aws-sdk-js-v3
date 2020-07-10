import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
 *       Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>
 *       in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface AbortIncompleteMultipartUpload {
  __type?: "AbortIncompleteMultipartUpload";
  /**
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.</p>
   */
  DaysAfterInitiation?: number;
}

export namespace AbortIncompleteMultipartUpload {
  export const filterSensitiveLog = (obj: AbortIncompleteMultipartUpload): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AbortIncompleteMultipartUpload => __isa(o, "AbortIncompleteMultipartUpload");
}

export interface AbortMultipartUploadOutput {
  __type?: "AbortMultipartUploadOutput";
  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace AbortMultipartUploadOutput {
  export const filterSensitiveLog = (obj: AbortMultipartUploadOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AbortMultipartUploadOutput => __isa(o, "AbortMultipartUploadOutput");
}

export interface AbortMultipartUploadRequest {
  __type?: "AbortMultipartUploadRequest";
  /**
   * <p>The bucket name to which the upload was taking place. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId: string | undefined;
}

export namespace AbortMultipartUploadRequest {
  export const filterSensitiveLog = (obj: AbortMultipartUploadRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AbortMultipartUploadRequest => __isa(o, "AbortMultipartUploadRequest");
}

/**
 * <p>Configures the transfer acceleration state for an Amazon S3 bucket.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3 Transfer Acceleration</a> in the
 *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface AccelerateConfiguration {
  __type?: "AccelerateConfiguration";
  /**
   * <p>Specifies the transfer acceleration status of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;
}

export namespace AccelerateConfiguration {
  export const filterSensitiveLog = (obj: AccelerateConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccelerateConfiguration => __isa(o, "AccelerateConfiguration");
}

/**
 * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
 */
export interface AccessControlPolicy {
  __type?: "AccessControlPolicy";
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
  export const isa = (o: any): o is AccessControlPolicy => __isa(o, "AccessControlPolicy");
}

/**
 * <p>A container for information about access control for replicas.</p>
 */
export interface AccessControlTranslation {
  __type?: "AccessControlTranslation";
  /**
   * <p>Specifies the replica ownership. For default and valid values, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT bucket
   *       replication</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  Owner: OwnerOverride | string | undefined;
}

export namespace AccessControlTranslation {
  export const filterSensitiveLog = (obj: AccessControlTranslation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessControlTranslation => __isa(o, "AccessControlTranslation");
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates in any combination, and an object must match all of the predicates for the filter to apply.</p>
 */
export interface AnalyticsAndOperator {
  __type?: "AnalyticsAndOperator";
  /**
   * <p>The prefix to use when evaluating an AND predicate: The prefix that an object must have to be included in the metrics results.</p>
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
  export const isa = (o: any): o is AnalyticsAndOperator => __isa(o, "AnalyticsAndOperator");
}

/**
 * <p>
 *          Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.</p>
 */
export interface AnalyticsConfiguration {
  __type?: "AnalyticsConfiguration";
  /**
   * <p>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</p>
   */
  Filter?: AnalyticsFilter;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>
   *      Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
   *   </p>
   */
  StorageClassAnalysis: StorageClassAnalysis | undefined;
}

export namespace AnalyticsConfiguration {
  export const filterSensitiveLog = (obj: AnalyticsConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AnalyticsConfiguration => __isa(o, "AnalyticsConfiguration");
}

/**
 * <p>Where to publish the analytics results.</p>
 */
export interface AnalyticsExportDestination {
  __type?: "AnalyticsExportDestination";
  /**
   * <p>A destination signifying output to an S3 bucket.</p>
   */
  S3BucketDestination: AnalyticsS3BucketDestination | undefined;
}

export namespace AnalyticsExportDestination {
  export const filterSensitiveLog = (obj: AnalyticsExportDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AnalyticsExportDestination => __isa(o, "AnalyticsExportDestination");
}

/**
 * <p>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</p>
 */
export interface AnalyticsFilter {
  __type?: "AnalyticsFilter";
  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating an analytics filter. The operator must have at least two predicates.</p>
   */
  And?: AnalyticsAndOperator;

  /**
   * <p>The prefix to use when evaluating an analytics filter.</p>
   */
  Prefix?: string;

  /**
   * <p>The tag to use when evaluating an analytics filter.</p>
   */
  Tag?: Tag;
}

export namespace AnalyticsFilter {
  export const filterSensitiveLog = (obj: AnalyticsFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AnalyticsFilter => __isa(o, "AnalyticsFilter");
}

/**
 * <p>Contains information about where to publish the analytics results.</p>
 */
export interface AnalyticsS3BucketDestination {
  __type?: "AnalyticsS3BucketDestination";
  /**
   * <p>The Amazon Resource Name (ARN) of the bucket to which data is exported.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID that owns the destination bucket. If no account ID is provided, the owner will not be validated prior to exporting data.</p>
   */
  BucketAccountId?: string;

  /**
   * <p>Specifies the file format used when exporting data to Amazon S3.</p>
   */
  Format: AnalyticsS3ExportFileFormat | string | undefined;

  /**
   * <p>The prefix to use when exporting data. The prefix is prepended to all results.</p>
   */
  Prefix?: string;
}

export namespace AnalyticsS3BucketDestination {
  export const filterSensitiveLog = (obj: AnalyticsS3BucketDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AnalyticsS3BucketDestination => __isa(o, "AnalyticsS3BucketDestination");
}

export type AnalyticsS3ExportFileFormat = "CSV";

/**
 * <p> In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is
 *          globally unique, and the namespace is shared by all AWS accounts. </p>
 */
export interface Bucket {
  __type?: "Bucket";
  /**
   * <p>Date the bucket was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The name of the bucket.</p>
   */
  Name?: string;
}

export namespace Bucket {
  export const filterSensitiveLog = (obj: Bucket): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Bucket => __isa(o, "Bucket");
}

export type BucketAccelerateStatus = "Enabled" | "Suspended";

/**
 * <p>The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.</p>
 */
export interface BucketAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "BucketAlreadyExists";
  $fault: "client";
}

export namespace BucketAlreadyExists {
  export const filterSensitiveLog = (obj: BucketAlreadyExists): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BucketAlreadyExists => __isa(o, "BucketAlreadyExists");
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
  export const isa = (o: any): o is BucketAlreadyOwnedByYou => __isa(o, "BucketAlreadyOwnedByYou");
}

export type BucketCannedACL = "authenticated-read" | "private" | "public-read" | "public-read-write";

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object
 *             Lifecycle Management</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface BucketLifecycleConfiguration {
  __type?: "BucketLifecycleConfiguration";
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Rules: LifecycleRule[] | undefined;
}

export namespace BucketLifecycleConfiguration {
  export const filterSensitiveLog = (obj: BucketLifecycleConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BucketLifecycleConfiguration => __isa(o, "BucketLifecycleConfiguration");
}

export type BucketLocationConstraint =
  | "EU"
  | "ap-northeast-1"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "cn-north-1"
  | "eu-central-1"
  | "eu-west-1"
  | "sa-east-1"
  | "us-west-1"
  | "us-west-2";

/**
 * <p>Container for logging status information.</p>
 */
export interface BucketLoggingStatus {
  __type?: "BucketLoggingStatus";
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for
   *       a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *       <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

export namespace BucketLoggingStatus {
  export const filterSensitiveLog = (obj: BucketLoggingStatus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BucketLoggingStatus => __isa(o, "BucketLoggingStatus");
}

export type BucketLogsPermission = "FULL_CONTROL" | "READ" | "WRITE";

export type BucketVersioningStatus = "Enabled" | "Suspended";

/**
 * <p>Container for all (if there are any) keys between Prefix and the next occurrence of the string specified by a delimiter.
 *          CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix.
 *          For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is
 *          notes/summer/.
 *       </p>
 */
export interface CommonPrefix {
  __type?: "CommonPrefix";
  /**
   * <p>Container for the specified common prefix.</p>
   */
  Prefix?: string;
}

export namespace CommonPrefix {
  export const filterSensitiveLog = (obj: CommonPrefix): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CommonPrefix => __isa(o, "CommonPrefix");
}

/**
 * <p>The container for the completed multipart upload details.</p>
 */
export interface CompletedMultipartUpload {
  __type?: "CompletedMultipartUpload";
  /**
   * <p>Array of CompletedPart data types.</p>
   */
  Parts?: CompletedPart[];
}

export namespace CompletedMultipartUpload {
  export const filterSensitiveLog = (obj: CompletedMultipartUpload): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CompletedMultipartUpload => __isa(o, "CompletedMultipartUpload");
}

/**
 * <p>Details of the parts that were uploaded.</p>
 */
export interface CompletedPart {
  __type?: "CompletedPart";
  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Part number that identifies the part. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber?: number;
}

export namespace CompletedPart {
  export const filterSensitiveLog = (obj: CompletedPart): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CompletedPart => __isa(o, "CompletedPart");
}

export interface CompleteMultipartUploadOutput {
  __type?: "CompleteMultipartUploadOutput";
  /**
   * <p>The name of the bucket that contains the newly created object.</p>
   */
  Bucket?: string;

  /**
   * <p>Entity tag that identifies the newly created object's data. Objects with different object data will have different entity tags. The entity tag is an opaque string. The entity tag may or may not be an MD5 digest of the object data. If the entity tag is not an MD5 digest of the object data, it will contain one or more nonhexadecimal characters and/or will consist of less than 32 or more than 32 hexadecimal digits.</p>
   */
  ETag?: string;

  /**
   * <p>If the object expiration is configured, this will contain the expiration date (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>The object key of the newly created object.</p>
   */
  Key?: string;

  /**
   * <p>The URI that identifies the newly created object.</p>
   */
  Location?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If you specified server-side encryption either with an Amazon S3-managed encryption key or an AWS KMS customer master key (CMK) in your initiate multipart upload request, the response includes this header. It confirms the encryption algorithm that Amazon S3 used to encrypt the object.</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version ID of the newly created object, in case the bucket has versioning turned on.</p>
   */
  VersionId?: string;
}

export namespace CompleteMultipartUploadOutput {
  export const filterSensitiveLog = (obj: CompleteMultipartUploadOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CompleteMultipartUploadOutput => __isa(o, "CompleteMultipartUploadOutput");
}

export interface CompleteMultipartUploadRequest {
  __type?: "CompleteMultipartUploadRequest";
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
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId: string | undefined;
}

export namespace CompleteMultipartUploadRequest {
  export const filterSensitiveLog = (obj: CompleteMultipartUploadRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CompleteMultipartUploadRequest => __isa(o, "CompleteMultipartUploadRequest");
}

export type CompressionType = "BZIP2" | "GZIP" | "NONE";

/**
 * <p>A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.</p>
 */
export interface Condition {
  __type?: "Condition";
  /**
   * <p>The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element <code>Condition</code> is specified and sibling <code>KeyPrefixEquals</code> is not specified. If both are specified, then both must be true for the redirect to be applied.</p>
   */
  HttpErrorCodeReturnedEquals?: string;

  /**
   * <p>The object key name prefix when the redirect is applied. For example, to redirect requests for
   *             <code>ExamplePage.html</code>, the key prefix will be <code>ExamplePage.html</code>. To
   *          redirect request for all pages with the prefix <code>docs/</code>, the key prefix will be
   *             <code>/docs</code>, which identifies all objects in the <code>docs/</code> folder.
   *          Required when the parent element <code>Condition</code> is specified and sibling
   *             <code>HttpErrorCodeReturnedEquals</code> is not specified. If both conditions are
   *          specified, both must be true for the redirect to be applied.</p>
   */
  KeyPrefixEquals?: string;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Condition => __isa(o, "Condition");
}

/**
 * <p></p>
 */
export interface ContinuationEvent {
  __type?: "ContinuationEvent";
}

export namespace ContinuationEvent {
  export const filterSensitiveLog = (obj: ContinuationEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ContinuationEvent => __isa(o, "ContinuationEvent");
}

export interface CopyObjectOutput {
  __type?: "CopyObjectOutput";
  /**
   * <p>Container for all response elements.</p>
   */
  CopyObjectResult?: CopyObjectResult;

  /**
   * <p>Version of the copied object in the destination bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * <p>If the object expiration is configured, the response includes this header.</p>
   */
  Expiration?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version ID of the newly created copy.</p>
   */
  VersionId?: string;
}

export namespace CopyObjectOutput {
  export const filterSensitiveLog = (obj: CopyObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CopyObjectOutput => __isa(o, "CopyObjectOutput");
}

export interface CopyObjectRequest {
  __type?: "CopyObjectRequest";
  /**
   * <p>The canned ACL to apply to the object.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>The name of the destination bucket.</p>
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
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.</p>
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
   * <p>The name of the source bucket and key name of the source object, separated by a slash (/). Must be URL-encoded.</p>
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
   * <p>Specifies the algorithm to use when decrypting the source object (for example, AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its metadata.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable object.</p>
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
   * <p>Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.</p>
   */
  MetadataDirective?: MetadataDirective | string;

  /**
   * <p>Specifies whether you want to apply a Legal Hold to the copied object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The Object Lock mode that you want to apply to the copied object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when you want the copied object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for an
   *          object protected by AWS KMS will fail if not made via SSL or using SigV4. For information
   *          about configuring using any of the officially supported AWS SDKs and AWS CLI, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the Signature Version in Request Authentication</a>
   *          in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>The type of storage to use for the object. Defaults to 'STANDARD'.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The tag-set for the object destination object this value must be used in conjunction with the
   *             <code>TaggingDirective</code>. The tag-set must be encoded as URL Query
   *          parameters.</p>
   */
  Tagging?: string;

  /**
   * <p>Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request.</p>
   */
  TaggingDirective?: TaggingDirective | string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;
}

export namespace CopyObjectRequest {
  export const filterSensitiveLog = (obj: CopyObjectRequest): any => ({
    ...obj,
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CopyObjectRequest => __isa(o, "CopyObjectRequest");
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyObjectResult {
  __type?: "CopyObjectResult";
  /**
   * <p>Returns the ETag of the new object. The ETag reflects only changes to the contents of an object, not its metadata. The source and destination ETag is identical for a successfully copied object.</p>
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
  export const isa = (o: any): o is CopyObjectResult => __isa(o, "CopyObjectResult");
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyPartResult {
  __type?: "CopyPartResult";
  /**
   * <p>Entity tag of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   */
  LastModified?: Date;
}

export namespace CopyPartResult {
  export const filterSensitiveLog = (obj: CopyPartResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CopyPartResult => __isa(o, "CopyPartResult");
}

/**
 * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling
 *          Cross-Origin Resource Sharing</a> in the
 *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface CORSConfiguration {
  __type?: "CORSConfiguration";
  /**
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.</p>
   */
  CORSRules: CORSRule[] | undefined;
}

export namespace CORSConfiguration {
  export const filterSensitiveLog = (obj: CORSConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CORSConfiguration => __isa(o, "CORSConfiguration");
}

/**
 * <p>Specifies a cross-origin access rule for an Amazon S3 bucket.</p>
 */
export interface CORSRule {
  __type?: "CORSRule";
  /**
   * <p>Headers that are specified in the <code>Access-Control-Request-Headers</code>
   *       header. These headers are allowed in a preflight OPTIONS request. In response to
   *       any preflight OPTIONS request, Amazon S3 returns any requested headers that are
   *       allowed.</p>
   */
  AllowedHeaders?: string[];

  /**
   * <p>An HTTP method that you allow the origin to execute. Valid values are
   *       <code>GET</code>, <code>PUT</code>, <code>HEAD</code>, <code>POST</code>, and
   *       <code>DELETE</code>.</p>
   */
  AllowedMethods: string[] | undefined;

  /**
   * <p>One or more origins you want customers to be able to access the bucket from.</p>
   */
  AllowedOrigins: string[] | undefined;

  /**
   * <p>One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript <code>XMLHttpRequest</code> object).</p>
   */
  ExposeHeaders?: string[];

  /**
   * <p>The time in seconds that your browser is to cache the preflight response for the specified resource.</p>
   */
  MaxAgeSeconds?: number;
}

export namespace CORSRule {
  export const filterSensitiveLog = (obj: CORSRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CORSRule => __isa(o, "CORSRule");
}

/**
 * <p>The configuration information for the bucket.</p>
 */
export interface CreateBucketConfiguration {
  __type?: "CreateBucketConfiguration";
  /**
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region, the
   *          bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export namespace CreateBucketConfiguration {
  export const filterSensitiveLog = (obj: CreateBucketConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateBucketConfiguration => __isa(o, "CreateBucketConfiguration");
}

export interface CreateBucketOutput {
  __type?: "CreateBucketOutput";
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
  export const isa = (o: any): o is CreateBucketOutput => __isa(o, "CreateBucketOutput");
}

export interface CreateBucketRequest {
  __type?: "CreateBucketRequest";
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
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
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
  export const isa = (o: any): o is CreateBucketRequest => __isa(o, "CreateBucketRequest");
}

export interface CreateMultipartUploadOutput {
  __type?: "CreateMultipartUploadOutput";
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, the response includes this header. The header indicates when the initiated multipart upload becomes eligible for an abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *       Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>.</p>
   *
   *          <p>The response also includes the <code>x-amz-abort-rule-id</code> header that provides the
   *          ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It identifies the
   *          applicable lifecycle configuration rule that defines the action to abort incomplete
   *          multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>Name of the bucket to which the multipart upload was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId?: string;
}

export namespace CreateMultipartUploadOutput {
  export const filterSensitiveLog = (obj: CreateMultipartUploadOutput): any => ({
    ...obj,
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateMultipartUploadOutput => __isa(o, "CreateMultipartUploadOutput");
}

export interface CreateMultipartUploadRequest {
  __type?: "CreateMultipartUploadRequest";
  /**
   * <p>The canned ACL to apply to the object.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>The name of the bucket to which to initiate the upload</p>
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
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.</p>
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
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its metadata.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable object.</p>
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
   * <p>Specifies whether you want to apply a Legal Hold to the uploaded object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>Specifies the Object Lock mode that you want to apply to the uploaded object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>Specifies the date and time when you want the Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies the ID of the symmetric customer managed AWS KMS CMK to use for object encryption. All GET and PUT requests for an
   *          object protected by AWS KMS will fail if not made via SSL or using SigV4. For information
   *          about configuring using any of the officially supported AWS SDKs and AWS CLI, see <a href="https://docs.aws.amazon.com/http:/docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the Signature Version in Request Authentication</a>
   *          in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>The type of storage to use for the object. Defaults to 'STANDARD'.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters.</p>
   */
  Tagging?: string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;
}

export namespace CreateMultipartUploadRequest {
  export const filterSensitiveLog = (obj: CreateMultipartUploadRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateMultipartUploadRequest => __isa(o, "CreateMultipartUploadRequest");
}

/**
 * <p>Describes how an uncompressed comma-separated values (CSV)-formatted input object is
 *          formatted.</p>
 */
export interface CSVInput {
  __type?: "CSVInput";
  /**
   * <p>Specifies that CSV field values may contain quoted record delimiters and such records should be allowed. Default value is FALSE. Setting this value to TRUE may lower performance.</p>
   */
  AllowQuotedRecordDelimiter?: boolean;

  /**
   * <p>A single character used to indicate that a row should be ignored when the character is present at the start of that row. You can specify any character to indicate a comment line.</p>
   */
  Comments?: string;

  /**
   * <p>A single character used to separate individual fields in a record. You can specify an arbitrary delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>Describes the first line of input. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: First line is not a header.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IGNORE</code>: First line is a header, but you can't use the header values to
   *               indicate the column in an expression. You can use column
   *               position (such as _1, _2, …) to indicate the column
   *               (<code>SELECT s._1 FROM OBJECT s</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Use</code>: First line is a header, and you can use the header value to
   *               identify a column in an expression (<code>SELECT "name"
   *                  FROM OBJECT</code>). </p>
   *             </li>
   *          </ul>
   */
  FileHeaderInfo?: FileHeaderInfo | string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value.
   *       For example, if the value is <code>a, b</code>, Amazon S3 wraps this
   *       field value in quotation marks, as follows: <code>" a , b
   *          "</code>.</p>
   *          <p>Type: String</p>
   *          <p>Default: <code>"</code>
   *          </p>
   *          <p>Ancestors: <code>CSV</code>
   *          </p>
   */
  QuoteCharacter?: string;

  /**
   * <p>A single character used for escaping the quotation mark character inside an already escaped value. For example, the value """ a , b """ is parsed as " a , b ".</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A single character used to separate individual records in the input. Instead of the default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;
}

export namespace CSVInput {
  export const filterSensitiveLog = (obj: CSVInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CSVInput => __isa(o, "CSVInput");
}

/**
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are formatted.</p>
 */
export interface CSVOutput {
  __type?: "CSVOutput";
  /**
   * <p>The value used to separate individual fields in a record. You can specify an arbitrary delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For example, if the value is <code>a, b</code>, Amazon S3 wraps this
   *       field value in quotation marks, as follows: <code>" a , b
   *          "</code>.</p>
   */
  QuoteCharacter?: string;

  /**
   * <p>The single character used for escaping the quote character inside an already escaped
   *       value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>Indicates whether to use quotation marks around output fields. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALWAYS</code>: Always use quotation marks for output fields.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASNEEDED</code>: Use quotation marks for output fields when needed.</p>
   *             </li>
   *          </ul>
   */
  QuoteFields?: QuoteFields | string;

  /**
   * <p>A single character used to separate individual records in the output. Instead of the default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;
}

export namespace CSVOutput {
  export const filterSensitiveLog = (obj: CSVOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CSVOutput => __isa(o, "CSVOutput");
}

/**
 * <p>The container element for specifying the default Object Lock retention settings for new objects placed in the specified bucket.</p>
 */
export interface DefaultRetention {
  __type?: "DefaultRetention";
  /**
   * <p>The number of days that you want to specify for the default retention period.</p>
   */
  Days?: number;

  /**
   * <p>The default Object Lock retention mode you want to apply to new objects placed in the specified bucket.</p>
   */
  Mode?: ObjectLockRetentionMode | string;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Years?: number;
}

export namespace DefaultRetention {
  export const filterSensitiveLog = (obj: DefaultRetention): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DefaultRetention => __isa(o, "DefaultRetention");
}

/**
 * <p>Container for the objects to delete.</p>
 */
export interface Delete {
  __type?: "Delete";
  /**
   * <p>The objects to delete.</p>
   */
  Objects: ObjectIdentifier[] | undefined;

  /**
   * <p>Element to enable quiet mode for the request. When you add this element, you must set its value to true.</p>
   */
  Quiet?: boolean;
}

export namespace Delete {
  export const filterSensitiveLog = (obj: Delete): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Delete => __isa(o, "Delete");
}

export interface DeleteBucketAnalyticsConfigurationRequest {
  __type?: "DeleteBucketAnalyticsConfigurationRequest";
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;
}

export namespace DeleteBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketAnalyticsConfigurationRequest =>
    __isa(o, "DeleteBucketAnalyticsConfigurationRequest");
}

export interface DeleteBucketCorsRequest {
  __type?: "DeleteBucketCorsRequest";
  /**
   * <p>Specifies the bucket whose <code>cors</code> configuration is being deleted.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketCorsRequest {
  export const filterSensitiveLog = (obj: DeleteBucketCorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketCorsRequest => __isa(o, "DeleteBucketCorsRequest");
}

export interface DeleteBucketEncryptionRequest {
  __type?: "DeleteBucketEncryptionRequest";
  /**
   * <p>The name of the bucket containing the server-side encryption configuration to delete.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: DeleteBucketEncryptionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketEncryptionRequest => __isa(o, "DeleteBucketEncryptionRequest");
}

export interface DeleteBucketInventoryConfigurationRequest {
  __type?: "DeleteBucketInventoryConfigurationRequest";
  /**
   * <p>The name of the bucket containing the inventory configuration to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;
}

export namespace DeleteBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketInventoryConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketInventoryConfigurationRequest =>
    __isa(o, "DeleteBucketInventoryConfigurationRequest");
}

export interface DeleteBucketLifecycleRequest {
  __type?: "DeleteBucketLifecycleRequest";
  /**
   * <p>The bucket name of the lifecycle to delete.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketLifecycleRequest {
  export const filterSensitiveLog = (obj: DeleteBucketLifecycleRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketLifecycleRequest => __isa(o, "DeleteBucketLifecycleRequest");
}

export interface DeleteBucketMetricsConfigurationRequest {
  __type?: "DeleteBucketMetricsConfigurationRequest";
  /**
   * <p>The name of the bucket containing the metrics configuration to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;
}

export namespace DeleteBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketMetricsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketMetricsConfigurationRequest =>
    __isa(o, "DeleteBucketMetricsConfigurationRequest");
}

export interface DeleteBucketPolicyRequest {
  __type?: "DeleteBucketPolicyRequest";
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteBucketPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketPolicyRequest => __isa(o, "DeleteBucketPolicyRequest");
}

export interface DeleteBucketReplicationRequest {
  __type?: "DeleteBucketReplicationRequest";
  /**
   * <p>
   *       The bucket name.
   *     </p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketReplicationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketReplicationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketReplicationRequest => __isa(o, "DeleteBucketReplicationRequest");
}

export interface DeleteBucketRequest {
  __type?: "DeleteBucketRequest";
  /**
   * <p>Specifies the bucket being deleted.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketRequest {
  export const filterSensitiveLog = (obj: DeleteBucketRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketRequest => __isa(o, "DeleteBucketRequest");
}

export interface DeleteBucketTaggingRequest {
  __type?: "DeleteBucketTaggingRequest";
  /**
   * <p>The bucket that has the tag set to be removed.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteBucketTaggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketTaggingRequest => __isa(o, "DeleteBucketTaggingRequest");
}

export interface DeleteBucketWebsiteRequest {
  __type?: "DeleteBucketWebsiteRequest";
  /**
   * <p>The bucket name for which you want to remove the website configuration. </p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: DeleteBucketWebsiteRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBucketWebsiteRequest => __isa(o, "DeleteBucketWebsiteRequest");
}

/**
 * <p>Information about the deleted object.</p>
 */
export interface DeletedObject {
  __type?: "DeletedObject";
  /**
   * <p>Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker. In a simple DELETE, this header indicates whether (true) or not (false) a delete marker was created.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>The version ID of the delete marker created as a result of the DELETE operation. If you delete a specific object version, the value returned by this header is the version ID of the object version deleted.</p>
   */
  DeleteMarkerVersionId?: string;

  /**
   * <p>The name of the deleted object.</p>
   */
  Key?: string;

  /**
   * <p>The version ID of the deleted object.</p>
   */
  VersionId?: string;
}

export namespace DeletedObject {
  export const filterSensitiveLog = (obj: DeletedObject): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletedObject => __isa(o, "DeletedObject");
}

/**
 * <p>Information about the delete marker.</p>
 */
export interface DeleteMarkerEntry {
  __type?: "DeleteMarkerEntry";
  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The account that created the delete marker.></p>
   */
  Owner?: Owner;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;
}

export namespace DeleteMarkerEntry {
  export const filterSensitiveLog = (obj: DeleteMarkerEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMarkerEntry => __isa(o, "DeleteMarkerEntry");
}

/**
 * <p>Specifies whether Amazon S3 replicates the delete markers. If you specify a <code>Filter</code>, you must specify this element. However, in the latest version of replication configuration (when <code>Filter</code> is specified), Amazon S3 doesn't replicate delete markers. Therefore, the <code>DeleteMarkerReplication</code> element can contain only <Status>Disabled</Status>. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>.
 *      </p>
 *
 *          <note>
 *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the replication
 *             configuration is the earlier version, V1. In the earlier version, Amazon S3 handled
 *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
 *          </note>
 */
export interface DeleteMarkerReplication {
  __type?: "DeleteMarkerReplication";
  /**
   * <p>Indicates whether to replicate delete markers.</p>
   *          <note>
   *             <p> In the current implementation, Amazon S3 doesn't replicate the delete markers. The status
   *         must be <code>Disabled</code>. </p>
   *          </note>
   */
  Status?: DeleteMarkerReplicationStatus | string;
}

export namespace DeleteMarkerReplication {
  export const filterSensitiveLog = (obj: DeleteMarkerReplication): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteMarkerReplication => __isa(o, "DeleteMarkerReplication");
}

export type DeleteMarkerReplicationStatus = "Disabled" | "Enabled";

export interface DeleteObjectOutput {
  __type?: "DeleteObjectOutput";
  /**
   * <p>Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Returns the version ID of the delete marker created as a result of the DELETE operation.</p>
   */
  VersionId?: string;
}

export namespace DeleteObjectOutput {
  export const filterSensitiveLog = (obj: DeleteObjectOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteObjectOutput => __isa(o, "DeleteObjectOutput");
}

export interface DeleteObjectRequest {
  __type?: "DeleteObjectRequest";
  /**
   * <p>The bucket name of the bucket containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process this operation.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>Key name of the object to delete.</p>
   */
  Key: string | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value that is
   *          displayed on your authentication device. Required to permanently delete a versioned object
   *          if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;
}

export namespace DeleteObjectRequest {
  export const filterSensitiveLog = (obj: DeleteObjectRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteObjectRequest => __isa(o, "DeleteObjectRequest");
}

export interface DeleteObjectsOutput {
  __type?: "DeleteObjectsOutput";
  /**
   * <p>Container element for a successful delete. It identifies the object that was successfully deleted.</p>
   */
  Deleted?: DeletedObject[];

  /**
   * <p>Container for a failed delete operation that describes the object that Amazon S3 attempted to delete and the error it encountered.</p>
   */
  Errors?: _Error[];

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace DeleteObjectsOutput {
  export const filterSensitiveLog = (obj: DeleteObjectsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteObjectsOutput => __isa(o, "DeleteObjectsOutput");
}

export interface DeleteObjectsRequest {
  __type?: "DeleteObjectsRequest";
  /**
   * <p>The bucket name containing the objects to delete. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies whether you want to delete this object even if it has a Governance-type Object Lock in place. You must have sufficient permissions to perform this operation.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>Container for the request.</p>
   */
  Delete: Delete | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value that is
   *          displayed on your authentication device. Required to permanently delete a versioned object
   *          if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;
}

export namespace DeleteObjectsRequest {
  export const filterSensitiveLog = (obj: DeleteObjectsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteObjectsRequest => __isa(o, "DeleteObjectsRequest");
}

export interface DeleteObjectTaggingOutput {
  __type?: "DeleteObjectTaggingOutput";
  /**
   * <p>The versionId of the object the tag-set was removed from.</p>
   */
  VersionId?: string;
}

export namespace DeleteObjectTaggingOutput {
  export const filterSensitiveLog = (obj: DeleteObjectTaggingOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteObjectTaggingOutput => __isa(o, "DeleteObjectTaggingOutput");
}

export interface DeleteObjectTaggingRequest {
  __type?: "DeleteObjectTaggingRequest";
  /**
   * <p>The bucket name containing the objects from which to remove the tags. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Name of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be removed from.</p>
   */
  VersionId?: string;
}

export namespace DeleteObjectTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteObjectTaggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteObjectTaggingRequest => __isa(o, "DeleteObjectTaggingRequest");
}

export interface DeletePublicAccessBlockRequest {
  __type?: "DeletePublicAccessBlockRequest";
  /**
   * <p>The Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to
   *       delete. </p>
   */
  Bucket: string | undefined;
}

export namespace DeletePublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: DeletePublicAccessBlockRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeletePublicAccessBlockRequest => __isa(o, "DeletePublicAccessBlockRequest");
}

/**
 * <p>Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket
 *       and S3 Replication Time Control (S3 RTC).</p>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.</p>
   */
  AccessControlTranslation?: AccessControlTranslation;

  /**
   * <p>Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3
   *          to change replica ownership to the AWS account that owns the destination bucket by
   *          specifying the <code>AccessControlTranslation</code> property, this is the account ID of
   *          the destination bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html">Replication Additional
   *             Configuration: Changing the Replica Owner</a> in the <i>Amazon Simple Storage
   *             Service Developer Guide</i>.</p>
   */
  Account?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A container that provides information about encryption. If
   *         <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>
   *        A container specifying replication metrics-related settings enabling metrics and Amazon S3 events for S3 Replication Time Control (S3 RTC).
   *        Must be specified together with a <code>ReplicationTime</code> block.
   *     </p>
   */
  Metrics?: Metrics;

  /**
   * <p>
   *      A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.
   *      Must be specified together with a <code>Metrics</code> block.
   *   </p>
   */
  ReplicationTime?: ReplicationTime;

  /**
   * <p>
   *        The storage class to use when replicating objects, such as standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica.
   *     </p>
   *          <p>For valid values, see the <code>StorageClass</code> element of the
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT Bucket
   *            replication</a> action in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace Destination {
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Destination => __isa(o, "Destination");
}

export type EncodingType = "url";

/**
 * <p>Contains the type of server-side encryption used.</p>
 */
export interface Encryption {
  __type?: "Encryption";
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  EncryptionType: ServerSideEncryption | string | undefined;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value can be used to specify the
   *          encryption context for the restore results.</p>
   */
  KMSContext?: string;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value specifies the ID of the symmetric customer managed AWS KMS CMK
   *      to use for encryption of job results. Amazon S3 only supports symmetric CMKs. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  KMSKeyId?: string;
}

export namespace Encryption {
  export const filterSensitiveLog = (obj: Encryption): any => ({
    ...obj,
    ...(obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Encryption => __isa(o, "Encryption");
}

/**
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.</p>
 */
export interface EncryptionConfiguration {
  __type?: "EncryptionConfiguration";
  /**
   * <p>Specifies the ID (Key ARN or Alias ARN) of the customer managed customer master key (CMK) stored in AWS Key Management Service (KMS) for the destination bucket. Amazon
   *         S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric customer managed CMKs. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  ReplicaKmsKeyID?: string;
}

export namespace EncryptionConfiguration {
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EncryptionConfiguration => __isa(o, "EncryptionConfiguration");
}

/**
 * <p>A message that indicates the request is complete and no more messages will be sent. You should not assume that the request is complete until the client receives an <code>EndEvent</code>.</p>
 */
export interface EndEvent {
  __type?: "EndEvent";
}

export namespace EndEvent {
  export const filterSensitiveLog = (obj: EndEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EndEvent => __isa(o, "EndEvent");
}

/**
 * <p>Container for all error elements.</p>
 */
export interface _Error {
  __type?: "Error";
  /**
   * <p>The error code is a string that uniquely identifies an error condition. It is meant to be read and understood by programs that detect and handle errors by type. </p>
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
   *                         <i>Description:</i> There is a problem with your AWS account that prevents the operation
   * 							from completing successfully.
   * 							Contact AWS Support for further assistance.</p>
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
   *                         <i>Description:</i> All access to this Amazon S3 resource has been disabled.
   * 							Contact AWS Support for further assistance.</p>
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
   *                         <i>Description:</i> The email address you provided is associated with more than one
   * 							account.</p>
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
   * 						            </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The authorization header you provided is invalid.</p>
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
   *                         <i>Description:</i> The Content-MD5 you specified did not match what we received.</p>
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
   *                         <i>Description:</i> The requested bucket name is not available. The bucket namespace is
   * 							shared by all users of the system. Please select a different name and
   * 							try again.</p>
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
   *                         <i>Description:</i> The bucket you tried to create already exists, and you own
   *                      it. Amazon S3 returns this error in all AWS Regions except in the North Virginia
   *                      Region. For legacy compatibility, if you re-create an existing bucket that you
   *                      already own in the North Virginia Region, Amazon S3 returns 200 OK and resets the
   *                      bucket access control lists (ACLs).</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> 409 Conflict (in all Regions except the North Virginia Region) </p>
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
   *                         <i>Description:</i> The bucket you tried to delete is not empty.</p>
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
   *                         <i>Description:</i> This request does not support credentials.</p>
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
   *                         <i>Description:</i> Cross-location logging not allowed. Buckets in one geographic
   * 							location cannot log information to a bucket in another location.</p>
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
   *                         <i>Description:</i> Your proposed upload is smaller than the minimum allowed object
   * 							size.</p>
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
   *                         <i>Description:</i> Your proposed upload exceeds the maximum allowed object size.</p>
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
   *                         <i>Description:</i> Indicates that the versioning configuration specified in the request
   * 							is invalid.</p>
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
   *                         <i>Description:</i> You did not provide the number of bytes specified by the
   * 							Content-Length HTTP header</p>
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
   *                         <i>Description:</i> POST requires exactly one file upload per request.</p>
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
   *                         <i>Description:</i> Inline data exceeds the maximum allowed size.</p>
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
   *                         <i>Description:</i> We encountered an internal error. Please try again.</p>
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
   *                         <i>Description:</i> The AWS access key ID you provided does not exist in our records.</p>
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
   *                         <i>Description:</i> You must specify the Anonymous role.</p>
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
   *                         <i>Description:</i> The request is not valid with the current state of the bucket.</p>
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
   *                         <i>Description:</i> The Content-MD5 you specified is not valid.</p>
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
   *                         <i>Description:</i> The encryption request you specified is not valid. The valid value is AES256.</p>
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
   *                         <i>Description:</i> The specified location constraint is not valid. For more information about Regions, see
   * 								<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">How to
   * 								Select a Region for Your Buckets</a>. </p>
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
   *                         <i>Description:</i> The operation is not valid for the current state of the object.</p>
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
   *                         <i>Description:</i> One or more of the specified parts could not be found. The part might not have been
   * 							uploaded, or the specified entity tag might not have matched the part's
   * 							entity tag.</p>
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
   *                         <i>Description:</i> The list of parts was not in ascending order. Parts list must be specified in order by
   * 							part number.</p>
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
   *                         <i>Description:</i> All access to this object has been disabled.
   * 							Please contact AWS Support for further assistance.</p>
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
   *                         <i>Description:</i> The content of the form does not meet the conditions specified in the
   * 							policy document.</p>
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
   *                         <i>Description:</i> The requested range cannot be satisfied.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 416 Requested Range Not Satisfiable</p>
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
   *                         <i>Description:</i> SOAP requests must be made over an HTTPS connection.</p>
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
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not supported for buckets with non-DNS compliant
   * 							names.</p>
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
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not supported for buckets with periods (.) in their
   * 							names.</p>
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
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate endpoint only supports virtual style requests.</p>
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
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is not configured on this bucket.</p>
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
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is disabled on this bucket.</p>
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
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not supported on this bucket. Contact AWS Support for
   * 							more information.</p>
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
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration cannot be enabled on this bucket. Contact AWS Support for
   * 							more information.</p>
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
   *                         <i>Description:</i> The provided security credentials are not valid.</p>
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
   *                         <i>Description:</i> The storage class you specified is not valid.</p>
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
   *                         <i>Description:</i> The target bucket for logging does not exist, is not owned by you, or
   * 							does not have the appropriate grants for the log-delivery group. </p>
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
   *                         <i>Description:</i> The provided token is malformed or otherwise invalid.</p>
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
   *                         <i>Description:</i> The XML you provided was not well-formed or did not validate against
   * 							our published schema.</p>
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
   *                         <i>Description:</i> The body of your POST request is not well-formed
   * 							multipart/form-data.</p>
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
   *                         <i>Description:</i> This happens when the user sends malformed XML (XML that doesn't conform to the
   * 							published XSD) for the configuration. The error message is, "The XML you
   * 							provided was not well-formed or did not validate against our published
   * 							schema." </p>
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
   *                         <i>Description:</i> Your POST request fields preceding the upload file were too
   * 							large.</p>
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
   *                         <i>Description:</i> Your metadata headers exceed the maximum allowed metadata
   * 							size.</p>
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
   *                         <i>Description:</i> The specified method is not allowed against this resource.</p>
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
   *                         <i>Description:</i> A SOAP attachment was expected, but none were found.</p>
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
   *                         <i>Description:</i> You must provide the Content-Length HTTP header.</p>
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
   *                         <i>Description:</i> This happens when the user sends an empty XML document as a request. The error message
   * 							is, "Request body is empty." </p>
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
   *                         <i>Description:</i> The SOAP 1.1 request is missing a security element.</p>
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
   *                         <i>Description:</i> Your request is missing a required header.</p>
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
   *                         <i>Description:</i> There is no such thing as a logging status subresource for a
   * 							key.</p>
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
   *                         <i>Description:</i> The specified bucket does not exist.</p>
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
   *                         <i>Description:</i> The specified bucket does not have a bucket policy.</p>
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
   *                         <i>Description:</i> The lifecycle configuration does not exist. </p>
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
   *                         <i>Description:</i> The specified multipart upload does not exist. The upload ID might be invalid, or the
   * 							multipart upload might have been aborted or completed.</p>
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
   *                         <i>Description:</i> Indicates that the version ID specified in the request does not match
   * 							an existing version.</p>
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
   *                         <i>Description:</i> A header you provided implies functionality that is not
   * 							implemented.</p>
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
   *                         <i>Description:</i> Your account is not signed up for the Amazon S3 service. You must sign up
   * 							before you can use Amazon S3. You can sign up at the following URL:
   * 							https://aws.amazon.com/s3</p>
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
   *                         <i>Description:</i> A conflicting conditional operation is currently in progress against
   * 							this resource. Try again.</p>
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
   *                         <i>Description:</i> The bucket you are attempting to access must be addressed using the
   * 							specified endpoint. Send all future requests to this
   * 							endpoint.</p>
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
   *                         <i>Description:</i> At least one of the preconditions you specified did not hold.</p>
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
   *                         <i>Description:</i> Object restore is already in progress.</p>
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
   * 							multipart/form-data.</p>
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
   *                         <i>Description:</i> Your socket connection to the server was not read from or written to
   * 							within the timeout period.</p>
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
   *                         <i>Description:</i> The difference between the request time and the server's time is too
   * 							large.</p>
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
   *                         <i>Description:</i> Requesting the torrent file of a bucket is not permitted.</p>
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
   *                         <i>Description:</i> The request signature we calculated does not match the signature you
   * 							provided. Check your AWS secret access key and signing method. For more
   * 							information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/SOAPAuthentication.html">SOAP Authentication</a> for details.</p>
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
   *                         <i>Description:</i> You are being redirected to the bucket while DNS updates.</p>
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
   *                         <i>Description:</i> The provided token must be refreshed.</p>
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
   *                         <i>Description:</i> You have attempted to create more buckets than allowed.</p>
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
   *                         <i>Description:</i> This request does not support content.</p>
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
   *                         <i>Description:</i> The email address you provided does not match any account on
   * 							record.</p>
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
   *                         <i>Description:</i> The bucket POST must contain the specified field name. If it is
   * 							specified, check the order of the fields.</p>
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
   * <p>The error key.</p>
   */
  Key?: string;

  /**
   * <p>The error message contains a generic description of the error condition in English. It is intended for a human audience. Simple programs display the message directly to the end user if they encounter an error condition they don't know how or don't care to handle. Sophisticated programs with more exhaustive error handling and proper internationalization are more likely to ignore the error message.</p>
   */
  Message?: string;

  /**
   * <p>The version ID of the error.</p>
   */
  VersionId?: string;
}

export namespace _Error {
  export const filterSensitiveLog = (obj: _Error): any => ({
    ...obj,
  });
  export const isa = (o: any): o is _Error => __isa(o, "Error");
}

/**
 * <p>The error information.</p>
 */
export interface ErrorDocument {
  __type?: "ErrorDocument";
  /**
   * <p>The object key name to use when a 4XX class error occurs.</p>
   */
  Key: string | undefined;
}

export namespace ErrorDocument {
  export const filterSensitiveLog = (obj: ErrorDocument): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ErrorDocument => __isa(o, "ErrorDocument");
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

/**
 * <p>Optional configuration to replicate existing source bucket objects. For more
 *          information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 Developer
 *             Guide</i>. </p>
 */
export interface ExistingObjectReplication {
  __type?: "ExistingObjectReplication";
  /**
   * <p></p>
   */
  Status: ExistingObjectReplicationStatus | string | undefined;
}

export namespace ExistingObjectReplication {
  export const filterSensitiveLog = (obj: ExistingObjectReplication): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExistingObjectReplication => __isa(o, "ExistingObjectReplication");
}

export type ExistingObjectReplicationStatus = "Disabled" | "Enabled";

export type ExpirationStatus = "Disabled" | "Enabled";

export enum ExpressionType {
  SQL = "SQL",
}

export enum FileHeaderInfo {
  IGNORE = "IGNORE",
  NONE = "NONE",
  USE = "USE",
}

/**
 * <p>Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or prefix of the key name.</p>
 */
export interface FilterRule {
  __type?: "FilterRule";
  /**
   * <p>The object key name prefix or suffix identifying one or more objects to which the filtering
   *       rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes
   *       are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in
   *       the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
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
  export const isa = (o: any): o is FilterRule => __isa(o, "FilterRule");
}

export type FilterRuleName = "prefix" | "suffix";

export interface GetBucketAccelerateConfigurationOutput {
  __type?: "GetBucketAccelerateConfigurationOutput";
  /**
   * <p>The accelerate configuration of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;
}

export namespace GetBucketAccelerateConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketAccelerateConfigurationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketAccelerateConfigurationOutput =>
    __isa(o, "GetBucketAccelerateConfigurationOutput");
}

export interface GetBucketAccelerateConfigurationRequest {
  __type?: "GetBucketAccelerateConfigurationRequest";
  /**
   * <p>Name of the bucket for which the accelerate configuration is retrieved.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketAccelerateConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketAccelerateConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketAccelerateConfigurationRequest =>
    __isa(o, "GetBucketAccelerateConfigurationRequest");
}

export interface GetBucketAclOutput {
  __type?: "GetBucketAclOutput";
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];

  /**
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;
}

export namespace GetBucketAclOutput {
  export const filterSensitiveLog = (obj: GetBucketAclOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketAclOutput => __isa(o, "GetBucketAclOutput");
}

export interface GetBucketAclRequest {
  __type?: "GetBucketAclRequest";
  /**
   * <p>Specifies the S3 bucket whose ACL is being requested.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketAclRequest {
  export const filterSensitiveLog = (obj: GetBucketAclRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketAclRequest => __isa(o, "GetBucketAclRequest");
}

export interface GetBucketAnalyticsConfigurationOutput {
  __type?: "GetBucketAnalyticsConfigurationOutput";
  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration?: AnalyticsConfiguration;
}

export namespace GetBucketAnalyticsConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketAnalyticsConfigurationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketAnalyticsConfigurationOutput =>
    __isa(o, "GetBucketAnalyticsConfigurationOutput");
}

export interface GetBucketAnalyticsConfigurationRequest {
  __type?: "GetBucketAnalyticsConfigurationRequest";
  /**
   * <p>The name of the bucket from which an analytics configuration is retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;
}

export namespace GetBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketAnalyticsConfigurationRequest =>
    __isa(o, "GetBucketAnalyticsConfigurationRequest");
}

export interface GetBucketCorsOutput {
  __type?: "GetBucketCorsOutput";
  /**
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.</p>
   */
  CORSRules?: CORSRule[];
}

export namespace GetBucketCorsOutput {
  export const filterSensitiveLog = (obj: GetBucketCorsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketCorsOutput => __isa(o, "GetBucketCorsOutput");
}

export interface GetBucketCorsRequest {
  __type?: "GetBucketCorsRequest";
  /**
   * <p>The bucket name for which to get the cors configuration.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketCorsRequest {
  export const filterSensitiveLog = (obj: GetBucketCorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketCorsRequest => __isa(o, "GetBucketCorsRequest");
}

export interface GetBucketEncryptionOutput {
  __type?: "GetBucketEncryptionOutput";
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
  export const isa = (o: any): o is GetBucketEncryptionOutput => __isa(o, "GetBucketEncryptionOutput");
}

export interface GetBucketEncryptionRequest {
  __type?: "GetBucketEncryptionRequest";
  /**
   * <p>The name of the bucket from which the server-side encryption configuration is retrieved.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: GetBucketEncryptionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketEncryptionRequest => __isa(o, "GetBucketEncryptionRequest");
}

export interface GetBucketInventoryConfigurationOutput {
  __type?: "GetBucketInventoryConfigurationOutput";
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
  export const isa = (o: any): o is GetBucketInventoryConfigurationOutput =>
    __isa(o, "GetBucketInventoryConfigurationOutput");
}

export interface GetBucketInventoryConfigurationRequest {
  __type?: "GetBucketInventoryConfigurationRequest";
  /**
   * <p>The name of the bucket containing the inventory configuration to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;
}

export namespace GetBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketInventoryConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketInventoryConfigurationRequest =>
    __isa(o, "GetBucketInventoryConfigurationRequest");
}

export interface GetBucketLifecycleConfigurationOutput {
  __type?: "GetBucketLifecycleConfigurationOutput";
  /**
   * <p>Container for a lifecycle rule.</p>
   */
  Rules?: LifecycleRule[];
}

export namespace GetBucketLifecycleConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketLifecycleConfigurationOutput =>
    __isa(o, "GetBucketLifecycleConfigurationOutput");
}

export interface GetBucketLifecycleConfigurationRequest {
  __type?: "GetBucketLifecycleConfigurationRequest";
  /**
   * <p>The name of the bucket for which to get the lifecycle information.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketLifecycleConfigurationRequest =>
    __isa(o, "GetBucketLifecycleConfigurationRequest");
}

export interface GetBucketLocationOutput {
  __type?: "GetBucketLocationOutput";
  /**
   * <p>Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported
   *          location constraints by Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and
   *             Endpoints</a>.</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export namespace GetBucketLocationOutput {
  export const filterSensitiveLog = (obj: GetBucketLocationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketLocationOutput => __isa(o, "GetBucketLocationOutput");
}

export interface GetBucketLocationRequest {
  __type?: "GetBucketLocationRequest";
  /**
   * <p>The name of the bucket for which to get the location.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketLocationRequest {
  export const filterSensitiveLog = (obj: GetBucketLocationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketLocationRequest => __isa(o, "GetBucketLocationRequest");
}

export interface GetBucketLoggingOutput {
  __type?: "GetBucketLoggingOutput";
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for
   *       a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *       <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

export namespace GetBucketLoggingOutput {
  export const filterSensitiveLog = (obj: GetBucketLoggingOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketLoggingOutput => __isa(o, "GetBucketLoggingOutput");
}

export interface GetBucketLoggingRequest {
  __type?: "GetBucketLoggingRequest";
  /**
   * <p>The bucket name for which to get the logging information.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketLoggingRequest {
  export const filterSensitiveLog = (obj: GetBucketLoggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketLoggingRequest => __isa(o, "GetBucketLoggingRequest");
}

export interface GetBucketMetricsConfigurationOutput {
  __type?: "GetBucketMetricsConfigurationOutput";
  /**
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration?: MetricsConfiguration;
}

export namespace GetBucketMetricsConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketMetricsConfigurationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketMetricsConfigurationOutput =>
    __isa(o, "GetBucketMetricsConfigurationOutput");
}

export interface GetBucketMetricsConfigurationRequest {
  __type?: "GetBucketMetricsConfigurationRequest";
  /**
   * <p>The name of the bucket containing the metrics configuration to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;
}

export namespace GetBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketMetricsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketMetricsConfigurationRequest =>
    __isa(o, "GetBucketMetricsConfigurationRequest");
}

export interface GetBucketNotificationConfigurationRequest {
  __type?: "GetBucketNotificationConfigurationRequest";
  /**
   * <p>Name of the bucket for which to get the notification configuration</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketNotificationConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketNotificationConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketNotificationConfigurationRequest =>
    __isa(o, "GetBucketNotificationConfigurationRequest");
}

export interface GetBucketPolicyOutput {
  __type?: "GetBucketPolicyOutput";
  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy?: string;
}

export namespace GetBucketPolicyOutput {
  export const filterSensitiveLog = (obj: GetBucketPolicyOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketPolicyOutput => __isa(o, "GetBucketPolicyOutput");
}

export interface GetBucketPolicyRequest {
  __type?: "GetBucketPolicyRequest";
  /**
   * <p>The bucket name for which to get the bucket policy.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketPolicyRequest {
  export const filterSensitiveLog = (obj: GetBucketPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketPolicyRequest => __isa(o, "GetBucketPolicyRequest");
}

export interface GetBucketPolicyStatusOutput {
  __type?: "GetBucketPolicyStatusOutput";
  /**
   * <p>The policy status for the specified bucket.</p>
   */
  PolicyStatus?: PolicyStatus;
}

export namespace GetBucketPolicyStatusOutput {
  export const filterSensitiveLog = (obj: GetBucketPolicyStatusOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketPolicyStatusOutput => __isa(o, "GetBucketPolicyStatusOutput");
}

export interface GetBucketPolicyStatusRequest {
  __type?: "GetBucketPolicyStatusRequest";
  /**
   * <p>The name of the Amazon S3 bucket whose policy status you want to retrieve.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketPolicyStatusRequest {
  export const filterSensitiveLog = (obj: GetBucketPolicyStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketPolicyStatusRequest => __isa(o, "GetBucketPolicyStatusRequest");
}

export interface GetBucketReplicationOutput {
  __type?: "GetBucketReplicationOutput";
  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *       replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration?: ReplicationConfiguration;
}

export namespace GetBucketReplicationOutput {
  export const filterSensitiveLog = (obj: GetBucketReplicationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketReplicationOutput => __isa(o, "GetBucketReplicationOutput");
}

export interface GetBucketReplicationRequest {
  __type?: "GetBucketReplicationRequest";
  /**
   * <p>The bucket name for which to get the replication information.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketReplicationRequest {
  export const filterSensitiveLog = (obj: GetBucketReplicationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketReplicationRequest => __isa(o, "GetBucketReplicationRequest");
}

export interface GetBucketRequestPaymentOutput {
  __type?: "GetBucketRequestPaymentOutput";
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer?: Payer | string;
}

export namespace GetBucketRequestPaymentOutput {
  export const filterSensitiveLog = (obj: GetBucketRequestPaymentOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketRequestPaymentOutput => __isa(o, "GetBucketRequestPaymentOutput");
}

export interface GetBucketRequestPaymentRequest {
  __type?: "GetBucketRequestPaymentRequest";
  /**
   * <p>The name of the bucket for which to get the payment request configuration</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketRequestPaymentRequest {
  export const filterSensitiveLog = (obj: GetBucketRequestPaymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketRequestPaymentRequest => __isa(o, "GetBucketRequestPaymentRequest");
}

export interface GetBucketTaggingOutput {
  __type?: "GetBucketTaggingOutput";
  /**
   * <p>Contains the tag set.</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace GetBucketTaggingOutput {
  export const filterSensitiveLog = (obj: GetBucketTaggingOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketTaggingOutput => __isa(o, "GetBucketTaggingOutput");
}

export interface GetBucketTaggingRequest {
  __type?: "GetBucketTaggingRequest";
  /**
   * <p>The name of the bucket for which to get the tagging information.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketTaggingRequest {
  export const filterSensitiveLog = (obj: GetBucketTaggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketTaggingRequest => __isa(o, "GetBucketTaggingRequest");
}

export interface GetBucketVersioningOutput {
  __type?: "GetBucketVersioningOutput";
  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.</p>
   */
  MFADelete?: MFADeleteStatus | string;

  /**
   * <p>The versioning state of the bucket.</p>
   */
  Status?: BucketVersioningStatus | string;
}

export namespace GetBucketVersioningOutput {
  export const filterSensitiveLog = (obj: GetBucketVersioningOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketVersioningOutput => __isa(o, "GetBucketVersioningOutput");
}

export interface GetBucketVersioningRequest {
  __type?: "GetBucketVersioningRequest";
  /**
   * <p>The name of the bucket for which to get the versioning information.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketVersioningRequest {
  export const filterSensitiveLog = (obj: GetBucketVersioningRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketVersioningRequest => __isa(o, "GetBucketVersioningRequest");
}

export interface GetBucketWebsiteOutput {
  __type?: "GetBucketWebsiteOutput";
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: ErrorDocument;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocument?: IndexDocument;

  /**
   * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.</p>
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: RoutingRule[];
}

export namespace GetBucketWebsiteOutput {
  export const filterSensitiveLog = (obj: GetBucketWebsiteOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketWebsiteOutput => __isa(o, "GetBucketWebsiteOutput");
}

export interface GetBucketWebsiteRequest {
  __type?: "GetBucketWebsiteRequest";
  /**
   * <p>The bucket name for which to get the website configuration.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: GetBucketWebsiteRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBucketWebsiteRequest => __isa(o, "GetBucketWebsiteRequest");
}

export interface GetObjectAclOutput {
  __type?: "GetObjectAclOutput";
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];

  /**
   * <p>
   *          Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace GetObjectAclOutput {
  export const filterSensitiveLog = (obj: GetObjectAclOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectAclOutput => __isa(o, "GetObjectAclOutput");
}

export interface GetObjectAclRequest {
  __type?: "GetObjectAclRequest";
  /**
   * <p>The bucket name that contains the object for which to get the ACL information. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key of the object for which to get the ACL information.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;
}

export namespace GetObjectAclRequest {
  export const filterSensitiveLog = (obj: GetObjectAclRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectAclRequest => __isa(o, "GetObjectAclRequest");
}

export interface GetObjectLegalHoldOutput {
  __type?: "GetObjectLegalHoldOutput";
  /**
   * <p>The current Legal Hold status for the specified object.</p>
   */
  LegalHold?: ObjectLockLegalHold;
}

export namespace GetObjectLegalHoldOutput {
  export const filterSensitiveLog = (obj: GetObjectLegalHoldOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectLegalHoldOutput => __isa(o, "GetObjectLegalHoldOutput");
}

export interface GetObjectLegalHoldRequest {
  __type?: "GetObjectLegalHoldRequest";
  /**
   * <p>The bucket name containing the object whose Legal
   *        Hold status you want to retrieve.  </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object whose Legal Hold
   *       status you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID of the object whose Legal Hold status you want to retrieve.</p>
   */
  VersionId?: string;
}

export namespace GetObjectLegalHoldRequest {
  export const filterSensitiveLog = (obj: GetObjectLegalHoldRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectLegalHoldRequest => __isa(o, "GetObjectLegalHoldRequest");
}

export interface GetObjectLockConfigurationOutput {
  __type?: "GetObjectLockConfigurationOutput";
  /**
   * <p>The specified bucket's Object Lock configuration.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;
}

export namespace GetObjectLockConfigurationOutput {
  export const filterSensitiveLog = (obj: GetObjectLockConfigurationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectLockConfigurationOutput => __isa(o, "GetObjectLockConfigurationOutput");
}

export interface GetObjectLockConfigurationRequest {
  __type?: "GetObjectLockConfigurationRequest";
  /**
   * <p>The bucket whose Object Lock configuration you want to retrieve.</p>
   */
  Bucket: string | undefined;
}

export namespace GetObjectLockConfigurationRequest {
  export const filterSensitiveLog = (obj: GetObjectLockConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectLockConfigurationRequest => __isa(o, "GetObjectLockConfigurationRequest");
}

export interface GetObjectOutput {
  __type?: "GetObjectOutput";
  /**
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>The portion of the object returned in the response.</p>
   */
  ContentRange?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a resource
   *          found at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes this
   *          header. It includes the expiry-date and rule-id key-value pairs providing object expiration
   *          information. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>Last modified date of the object</p>
   */
  LastModified?: Date;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code> headers.
   *          This can happen if you create metadata using an API like SOAP that supports more flexible
   *          metadata than the REST API. For example, using SOAP, you can create metadata whose values
   *          are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * <p>Indicates whether this object has an active legal hold. This field is only returned if you have permission to view an object's legal hold status. </p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The Object Lock mode currently in place for this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when this object's Object Lock will expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>The count of parts this object has.</p>
   */
  PartsCount?: number;

  /**
   * <p>Amazon S3 can return this if your request involves a bucket that is either a source or destination in a replication rule.</p>
   */
  ReplicationStatus?: ReplicationStatus | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Provides information about object restoration operation and expiration time of the restored object copy.</p>
   */
  Restore?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all objects except for Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The number of tags, if any, on the object.</p>
   */
  TagCount?: number;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;
}

export namespace GetObjectOutput {
  export const filterSensitiveLog = (obj: GetObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is GetObjectOutput => __isa(o, "GetObjectOutput");
}

export interface GetObjectRequest {
  __type?: "GetObjectRequest";
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).</p>
   */
  IfMatch?: string;

  /**
   * <p>Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).</p>
   */
  IfModifiedSince?: Date;

  /**
   * <p>Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).</p>
   */
  IfNoneMatch?: string;

  /**
   * <p>Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).</p>
   */
  IfUnmodifiedSince?: Date;

  /**
   * <p>Key of the object to get.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' GET request for the part specified. Useful for downloading just a part of an object.</p>
   */
  PartNumber?: number;

  /**
   * <p>Downloads the specified range bytes of an object. For more information about the HTTP Range
   *          header, see <a href="">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>.</p>
   */
  Range?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

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
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;
}

export namespace GetObjectRequest {
  export const filterSensitiveLog = (obj: GetObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is GetObjectRequest => __isa(o, "GetObjectRequest");
}

export interface GetObjectRetentionOutput {
  __type?: "GetObjectRetentionOutput";
  /**
   * <p>The container element for an object's retention settings.</p>
   */
  Retention?: ObjectLockRetention;
}

export namespace GetObjectRetentionOutput {
  export const filterSensitiveLog = (obj: GetObjectRetentionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectRetentionOutput => __isa(o, "GetObjectRetentionOutput");
}

export interface GetObjectRetentionRequest {
  __type?: "GetObjectRetentionRequest";
  /**
   * <p>The bucket name containing the object whose retention settings you want to retrieve. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object whose retention settings you want to retrieve.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID for the object whose retention settings you want to retrieve.</p>
   */
  VersionId?: string;
}

export namespace GetObjectRetentionRequest {
  export const filterSensitiveLog = (obj: GetObjectRetentionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectRetentionRequest => __isa(o, "GetObjectRetentionRequest");
}

export interface GetObjectTaggingOutput {
  __type?: "GetObjectTaggingOutput";
  /**
   * <p>Contains the tag set.</p>
   */
  TagSet: Tag[] | undefined;

  /**
   * <p>The versionId of the object for which you got the tagging information.</p>
   */
  VersionId?: string;
}

export namespace GetObjectTaggingOutput {
  export const filterSensitiveLog = (obj: GetObjectTaggingOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectTaggingOutput => __isa(o, "GetObjectTaggingOutput");
}

export interface GetObjectTaggingRequest {
  __type?: "GetObjectTaggingRequest";
  /**
   * <p>The bucket name containing the object for which to get the tagging information. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
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
}

export namespace GetObjectTaggingRequest {
  export const filterSensitiveLog = (obj: GetObjectTaggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectTaggingRequest => __isa(o, "GetObjectTaggingRequest");
}

export interface GetObjectTorrentOutput {
  __type?: "GetObjectTorrentOutput";
  /**
   * <p>A Bencoded dictionary as defined by the BitTorrent specification</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace GetObjectTorrentOutput {
  export const filterSensitiveLog = (obj: GetObjectTorrentOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectTorrentOutput => __isa(o, "GetObjectTorrentOutput");
}

export interface GetObjectTorrentRequest {
  __type?: "GetObjectTorrentRequest";
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
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;
}

export namespace GetObjectTorrentRequest {
  export const filterSensitiveLog = (obj: GetObjectTorrentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetObjectTorrentRequest => __isa(o, "GetObjectTorrentRequest");
}

export interface GetPublicAccessBlockOutput {
  __type?: "GetPublicAccessBlockOutput";
  /**
   * <p>The <code>PublicAccessBlock</code> configuration currently in effect for this Amazon S3
   *       bucket.</p>
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}

export namespace GetPublicAccessBlockOutput {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPublicAccessBlockOutput => __isa(o, "GetPublicAccessBlockOutput");
}

export interface GetPublicAccessBlockRequest {
  __type?: "GetPublicAccessBlockRequest";
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you
   *       want to retrieve. </p>
   */
  Bucket: string | undefined;
}

export namespace GetPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: GetPublicAccessBlockRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetPublicAccessBlockRequest => __isa(o, "GetPublicAccessBlockRequest");
}

/**
 * <p>Container for Glacier job parameters.</p>
 */
export interface GlacierJobParameters {
  __type?: "GlacierJobParameters";
  /**
   * <p>Glacier retrieval tier at which the restore will be processed.</p>
   */
  Tier: Tier | string | undefined;
}

export namespace GlacierJobParameters {
  export const filterSensitiveLog = (obj: GlacierJobParameters): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GlacierJobParameters => __isa(o, "GlacierJobParameters");
}

/**
 * <p>Container for grant information.</p>
 */
export interface Grant {
  __type?: "Grant";
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
  export const isa = (o: any): o is Grant => __isa(o, "Grant");
}

/**
 * <p>Container for the person being granted permissions.</p>
 */
export interface Grantee {
  __type?: "Grantee";
  /**
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * <p>Email address of the grantee.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * <p>Type of grantee</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>URI of the grantee group.</p>
   */
  URI?: string;
}

export namespace Grantee {
  export const filterSensitiveLog = (obj: Grantee): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Grantee => __isa(o, "Grantee");
}

export interface HeadBucketRequest {
  __type?: "HeadBucketRequest";
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;
}

export namespace HeadBucketRequest {
  export const filterSensitiveLog = (obj: HeadBucketRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HeadBucketRequest => __isa(o, "HeadBucketRequest");
}

export interface HeadObjectOutput {
  __type?: "HeadObjectOutput";
  /**
   * <p>Indicates that a range of bytes was specified.</p>
   */
  AcceptRanges?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>Size of the body in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>Specifies whether the object retrieved was (true) or was not (false) a Delete Marker. If false, this response header does not appear in the response.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>An ETag is an opaque identifier assigned by a web server to a specific version of a resource
   *          found at a URL.</p>
   */
  ETag?: string;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes this
   *          header. It includes the expiry-date and rule-id key-value pairs providing object expiration
   *          information. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>Last modified date of the object</p>
   */
  LastModified?: Date;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>This is set to the number of metadata entries not returned in <code>x-amz-meta</code> headers.
   *          This can happen if you create metadata using an API like SOAP that supports more flexible
   *          metadata than the REST API. For example, using SOAP, you can create metadata whose values
   *          are not legal HTTP headers.</p>
   */
  MissingMeta?: number;

  /**
   * <p>Specifies whether a legal hold is in effect for this object. This header is only returned if the requester has the <code>s3:GetObjectLegalHold</code> permission. This header is not returned if the specified version of this object has never had a legal hold applied. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The Object Lock mode, if any, that's in effect for this object. This header is only returned if the requester has the <code>s3:GetObjectRetention</code> permission. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>. </p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when the Object Lock retention period expires. This header is only returned if the requester has the <code>s3:GetObjectRetention</code> permission.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>The count of parts this object has.</p>
   */
  PartsCount?: number;

  /**
   * <p>Amazon S3 can return this header if your request involves a bucket that is either a source or destination in a replication rule.</p>
   *
   *          <p>In replication, you have a source bucket on which you configure replication and
   *          destination bucket where Amazon S3 stores object replicas. When you request an object
   *             (<code>GetObject</code>) or object metadata (<code>HeadObject</code>) from these
   *          buckets, Amazon S3 will return the <code>x-amz-replication-status</code> header in the
   *          response as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If requesting an object from the source bucket — Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header if the object in your request is
   *                eligible for replication.</p>
   *                <p> For example, suppose that in your replication configuration, you specify
   *                object prefix <code>TaxDocs</code> requesting Amazon S3 to replicate objects with key
   *                prefix <code>TaxDocs</code>. Any objects you upload with this key name prefix, for
   *                example <code>TaxDocs/document1.pdf</code>, are eligible for replication. For any
   *                object request with this key name prefix, Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header with value PENDING, COMPLETED or
   *                FAILED indicating object replication status.</p>
   *             </li>
   *             <li>
   *                <p>If requesting an object from the destination bucket — Amazon S3 will return the
   *                   <code>x-amz-replication-status</code> header with value REPLICA if the object in
   *                your request is a replica that Amazon S3 created.</p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Replication</a>.</p>
   */
  ReplicationStatus?: ReplicationStatus | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>If the object is an archived object (an object whose storage class is GLACIER), the response includes this header if either the archive restoration is in progress (see <a>RestoreObject</a> or an archive copy is already restored.</p>
   *
   *          <p> If an archive copy is already restored, the header value indicates when Amazon S3 is scheduled to delete the object copy. For example:</p>
   *
   *          <p>
   *             <code>x-amz-restore: ongoing-request="false", expiry-date="Fri, 23 Dec 2012 00:00:00 GMT"</code>
   *          </p>
   *
   *          <p>If the object restoration is in progress, the header returns the value <code>ongoing-request="true"</code>.</p>
   *
   *          <p>For more information about archiving objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html#lifecycle-transition-general-considerations">Transitioning Objects: General Considerations</a>.</p>
   */
  Restore?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If the object is stored using server-side encryption either with an AWS KMS customer master
   *          key (CMK) or an Amazon S3-managed encryption key, the response includes this header with
   *          the value of the server-side encryption algorithm used when storing this object in Amazon
   *          S3 (for example, AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all objects except for Standard storage class objects.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;
}

export namespace HeadObjectOutput {
  export const filterSensitiveLog = (obj: HeadObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is HeadObjectOutput => __isa(o, "HeadObjectOutput");
}

export interface HeadObjectRequest {
  __type?: "HeadObjectRequest";
  /**
   * <p>The name of the bucket containing the object.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Return the object only if its entity tag (ETag) is the same as the one specified, otherwise return a 412 (precondition failed).</p>
   */
  IfMatch?: string;

  /**
   * <p>Return the object only if it has been modified since the specified time, otherwise return a 304 (not modified).</p>
   */
  IfModifiedSince?: Date;

  /**
   * <p>Return the object only if its entity tag (ETag) is different from the one specified, otherwise return a 304 (not modified).</p>
   */
  IfNoneMatch?: string;

  /**
   * <p>Return the object only if it has not been modified since the specified time, otherwise return a 412 (precondition failed).</p>
   */
  IfUnmodifiedSince?: Date;

  /**
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of the object being read. This is a positive integer between 1 and 10,000. Effectively performs a 'ranged' HEAD request for the part specified. Useful querying about the size of the part and the number of parts in this object.</p>
   */
  PartNumber?: number;

  /**
   * <p>Downloads the specified range bytes of an object. For more information about the HTTP Range
   *          header, see <a href="">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>.</p>
   */
  Range?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;
}

export namespace HeadObjectRequest {
  export const filterSensitiveLog = (obj: HeadObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is HeadObjectRequest => __isa(o, "HeadObjectRequest");
}

/**
 * <p>Container for the <code>Suffix</code> element.</p>
 */
export interface IndexDocument {
  __type?: "IndexDocument";
  /**
   * <p>A suffix that is appended to a request that is for a directory on the website endpoint (for
   *          example,if the suffix is index.html and you make a request to samplebucket/images/ the data
   *          that is returned will be for the object with the key name images/index.html) The suffix
   *          must not be empty and must not include a slash character.</p>
   */
  Suffix: string | undefined;
}

export namespace IndexDocument {
  export const filterSensitiveLog = (obj: IndexDocument): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IndexDocument => __isa(o, "IndexDocument");
}

/**
 * <p>Container element that identifies who initiated the multipart upload. </p>
 */
export interface Initiator {
  __type?: "Initiator";
  /**
   * <p>Name of the Principal.</p>
   */
  DisplayName?: string;

  /**
   * <p>If the principal is an AWS account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.</p>
   */
  ID?: string;
}

export namespace Initiator {
  export const filterSensitiveLog = (obj: Initiator): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Initiator => __isa(o, "Initiator");
}

/**
 * <p>Describes the serialization format of the object.</p>
 */
export interface InputSerialization {
  __type?: "InputSerialization";
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  CSV?: CSVInput;

  /**
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value: NONE.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   */
  JSON?: JSONInput;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   */
  Parquet?: ParquetInput;
}

export namespace InputSerialization {
  export const filterSensitiveLog = (obj: InputSerialization): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InputSerialization => __isa(o, "InputSerialization");
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>.
 *       </p>
 */
export interface InventoryConfiguration {
  __type?: "InventoryConfiguration";
  /**
   * <p>Contains information about where to publish the inventory results.</p>
   */
  Destination: InventoryDestination | undefined;

  /**
   * <p>Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.</p>
   */
  Filter?: InventoryFilter;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Object versions to include in the inventory list. If set to <code>All</code>, the list includes all the object versions, which adds the version-related fields <code>VersionId</code>, <code>IsLatest</code>, and <code>DeleteMarker</code> to the list. If set to <code>Current</code>, the list does not contain these version-related fields.</p>
   */
  IncludedObjectVersions: InventoryIncludedObjectVersions | string | undefined;

  /**
   * <p>Specifies whether the inventory is enabled or disabled. If set to <code>True</code>, an inventory list is generated. If set to <code>False</code>, no inventory list is generated.</p>
   */
  IsEnabled: boolean | undefined;

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
  export const isa = (o: any): o is InventoryConfiguration => __isa(o, "InventoryConfiguration");
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket.</p>
 */
export interface InventoryDestination {
  __type?: "InventoryDestination";
  /**
   * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where inventory results are published.</p>
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
  export const isa = (o: any): o is InventoryDestination => __isa(o, "InventoryDestination");
}

/**
 * <p>Contains the type of server-side encryption used to encrypt the inventory results.</p>
 */
export interface InventoryEncryption {
  __type?: "InventoryEncryption";
  /**
   * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
   */
  SSEKMS?: SSEKMS;

  /**
   * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
   */
  SSES3?: SSES3;
}

export namespace InventoryEncryption {
  export const filterSensitiveLog = (obj: InventoryEncryption): any => ({
    ...obj,
    ...(obj.SSEKMS && { SSEKMS: SSEKMS.filterSensitiveLog(obj.SSEKMS) }),
  });
  export const isa = (o: any): o is InventoryEncryption => __isa(o, "InventoryEncryption");
}

/**
 * <p>Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.</p>
 */
export interface InventoryFilter {
  __type?: "InventoryFilter";
  /**
   * <p>The prefix that an object must have to be included in the inventory results.</p>
   */
  Prefix: string | undefined;
}

export namespace InventoryFilter {
  export const filterSensitiveLog = (obj: InventoryFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InventoryFilter => __isa(o, "InventoryFilter");
}

export type InventoryFormat = "CSV" | "ORC" | "Parquet";

export type InventoryFrequency = "Daily" | "Weekly";

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

/**
 * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional) where
 *          inventory results are published.</p>
 */
export interface InventoryS3BucketDestination {
  __type?: "InventoryS3BucketDestination";
  /**
   * <p>The ID of the account that owns the destination bucket.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket where inventory results will be published.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Contains the type of server-side encryption used to encrypt the inventory results.</p>
   */
  Encryption?: InventoryEncryption;

  /**
   * <p>Specifies the output format of the inventory results.</p>
   */
  Format: InventoryFormat | string | undefined;

  /**
   * <p>The prefix that is prepended to all inventory results.</p>
   */
  Prefix?: string;
}

export namespace InventoryS3BucketDestination {
  export const filterSensitiveLog = (obj: InventoryS3BucketDestination): any => ({
    ...obj,
    ...(obj.Encryption && { Encryption: InventoryEncryption.filterSensitiveLog(obj.Encryption) }),
  });
  export const isa = (o: any): o is InventoryS3BucketDestination => __isa(o, "InventoryS3BucketDestination");
}

/**
 * <p>Specifies the schedule for generating inventory results.</p>
 */
export interface InventorySchedule {
  __type?: "InventorySchedule";
  /**
   * <p>Specifies how frequently inventory results are produced.</p>
   */
  Frequency: InventoryFrequency | string | undefined;
}

export namespace InventorySchedule {
  export const filterSensitiveLog = (obj: InventorySchedule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InventorySchedule => __isa(o, "InventorySchedule");
}

/**
 * <p>Specifies JSON as object's input serialization format.</p>
 */
export interface JSONInput {
  __type?: "JSONInput";
  /**
   * <p>The type of JSON. Valid values: Document, Lines.</p>
   */
  Type?: JSONType | string;
}

export namespace JSONInput {
  export const filterSensitiveLog = (obj: JSONInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JSONInput => __isa(o, "JSONInput");
}

/**
 * <p>Specifies JSON as request's output serialization format.</p>
 */
export interface JSONOutput {
  __type?: "JSONOutput";
  /**
   * <p>The value used to separate individual records in the output.</p>
   */
  RecordDelimiter?: string;
}

export namespace JSONOutput {
  export const filterSensitiveLog = (obj: JSONOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JSONOutput => __isa(o, "JSONOutput");
}

export enum JSONType {
  DOCUMENT = "DOCUMENT",
  LINES = "LINES",
}

/**
 * <p>A container for specifying the configuration for AWS Lambda notifications.</p>
 */
export interface LambdaFunctionConfiguration {
  __type?: "LambdaFunctionConfiguration";
  /**
   * <p>The Amazon S3 bucket event for which to invoke the AWS Lambda function.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event Types</a> in the
   *          <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *         Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *         Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;

  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you don't
   *       provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs.</p>
   */
  LambdaFunctionArn: string | undefined;
}

export namespace LambdaFunctionConfiguration {
  export const filterSensitiveLog = (obj: LambdaFunctionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LambdaFunctionConfiguration => __isa(o, "LambdaFunctionConfiguration");
}

/**
 * <p>Container for the expiration for the lifecycle of the object.</p>
 */
export interface LifecycleExpiration {
  __type?: "LifecycleExpiration";
  /**
   * <p>Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to true, the delete marker will be expired; if set to false the policy takes no action. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

export namespace LifecycleExpiration {
  export const filterSensitiveLog = (obj: LifecycleExpiration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LifecycleExpiration => __isa(o, "LifecycleExpiration");
}

/**
 * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
 */
export interface LifecycleRule {
  __type?: "LifecycleRule";
  /**
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *       Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>
   *       in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;

  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker.</p>
   */
  Expiration?: LifecycleExpiration;

  /**
   * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
   *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
   *             <code>And</code> specified.</p>
   */
  Filter?: LifecycleRuleFilter;

  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions.
   *
   * You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * <p> Specifies the transition rule for the lifecycle rule that describes when noncurrent
   *          objects transition to a specific storage class. If your bucket is versioning-enabled (or
   *          versioning is suspended), you can set this action to request that Amazon S3 transition
   *          noncurrent object versions to a specific storage class at a set period in the object's
   *          lifetime. </p>
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];

  /**
   * <p>Prefix identifying one or more objects to which the rule applies. This is
   *          No longer used; use <code>Filter</code> instead.</p>
   */
  Prefix?: string;

  /**
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not currently being applied.</p>
   */
  Status: ExpirationStatus | string | undefined;

  /**
   * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
   */
  Transitions?: Transition[];
}

export namespace LifecycleRule {
  export const filterSensitiveLog = (obj: LifecycleRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LifecycleRule => __isa(o, "LifecycleRule");
}

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.</p>
 */
export interface LifecycleRuleAndOperator {
  __type?: "LifecycleRuleAndOperator";
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to apply.</p>
   */
  Tags?: Tag[];
}

export namespace LifecycleRuleAndOperator {
  export const filterSensitiveLog = (obj: LifecycleRuleAndOperator): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LifecycleRuleAndOperator => __isa(o, "LifecycleRuleAndOperator");
}

/**
 * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
 *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
 *             <code>And</code> specified.</p>
 */
export interface LifecycleRuleFilter {
  __type?: "LifecycleRuleFilter";
  /**
   * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more predicates. The Lifecycle Rule will apply to any object matching all of the predicates configured inside the And operator.</p>
   */
  And?: LifecycleRuleAndOperator;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>This tag must exist in the object's tag set in order for the rule to apply.</p>
   */
  Tag?: Tag;
}

export namespace LifecycleRuleFilter {
  export const filterSensitiveLog = (obj: LifecycleRuleFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LifecycleRuleFilter => __isa(o, "LifecycleRuleFilter");
}

export interface ListBucketAnalyticsConfigurationsOutput {
  __type?: "ListBucketAnalyticsConfigurationsOutput";
  /**
   * <p>The list of analytics configurations for a bucket.</p>
   */
  AnalyticsConfigurationList?: AnalyticsConfiguration[];

  /**
   * <p>The marker that is used as a starting point for this analytics configuration list response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which
   *          indicates that there are more analytics configurations to list. The next request must
   *          include this <code>NextContinuationToken</code>. The token is obfuscated and is not a
   *          usable value.</p>
   */
  NextContinuationToken?: string;
}

export namespace ListBucketAnalyticsConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketAnalyticsConfigurationsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBucketAnalyticsConfigurationsOutput =>
    __isa(o, "ListBucketAnalyticsConfigurationsOutput");
}

export interface ListBucketAnalyticsConfigurationsRequest {
  __type?: "ListBucketAnalyticsConfigurationsRequest";
  /**
   * <p>The name of the bucket from which analytics configurations are retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ContinuationToken that represents a placeholder from where this request should begin.</p>
   */
  ContinuationToken?: string;
}

export namespace ListBucketAnalyticsConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketAnalyticsConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBucketAnalyticsConfigurationsRequest =>
    __isa(o, "ListBucketAnalyticsConfigurationsRequest");
}

export interface ListBucketInventoryConfigurationsOutput {
  __type?: "ListBucketInventoryConfigurationsOutput";
  /**
   * <p>If sent in the request, the marker that is used as a starting point for this inventory configuration list response.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The list of inventory configurations for a bucket.</p>
   */
  InventoryConfigurationList?: InventoryConfiguration[];

  /**
   * <p>Tells whether the returned list of inventory configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken is provided for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker used to continue this inventory configuration listing. Use the
   *             <code>NextContinuationToken</code> from this response to continue the listing in a
   *          subsequent request. The continuation token is an opaque value that Amazon S3
   *          understands.</p>
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
  export const isa = (o: any): o is ListBucketInventoryConfigurationsOutput =>
    __isa(o, "ListBucketInventoryConfigurationsOutput");
}

export interface ListBucketInventoryConfigurationsRequest {
  __type?: "ListBucketInventoryConfigurationsRequest";
  /**
   * <p>The name of the bucket containing the inventory configurations to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The marker used to continue an inventory configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  ContinuationToken?: string;
}

export namespace ListBucketInventoryConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketInventoryConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBucketInventoryConfigurationsRequest =>
    __isa(o, "ListBucketInventoryConfigurationsRequest");
}

export interface ListBucketMetricsConfigurationsOutput {
  __type?: "ListBucketMetricsConfigurationsOutput";
  /**
   * <p>The marker that is used as a starting point for this metrics configuration list response. This value is present if it was sent in the request.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>Indicates whether the returned list of metrics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The list of metrics configurations for a bucket.</p>
   */
  MetricsConfigurationList?: MetricsConfiguration[];

  /**
   * <p>The marker used to continue a metrics configuration listing that has been truncated. Use the
   *             <code>NextContinuationToken</code> from a previously truncated list response to continue
   *          the listing. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;
}

export namespace ListBucketMetricsConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListBucketMetricsConfigurationsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBucketMetricsConfigurationsOutput =>
    __isa(o, "ListBucketMetricsConfigurationsOutput");
}

export interface ListBucketMetricsConfigurationsRequest {
  __type?: "ListBucketMetricsConfigurationsRequest";
  /**
   * <p>The name of the bucket containing the metrics configurations to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The marker that is used to continue a metrics configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  ContinuationToken?: string;
}

export namespace ListBucketMetricsConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListBucketMetricsConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBucketMetricsConfigurationsRequest =>
    __isa(o, "ListBucketMetricsConfigurationsRequest");
}

export interface ListBucketsOutput {
  __type?: "ListBucketsOutput";
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
  export const isa = (o: any): o is ListBucketsOutput => __isa(o, "ListBucketsOutput");
}

export interface ListMultipartUploadsOutput {
  __type?: "ListMultipartUploadsOutput";
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket?: string;

  /**
   * <p>If you specify a delimiter in the request, then the result returns each distinct key
   *          prefix containing the delimiter in a <code>CommonPrefixes</code> element. The distinct key
   *          prefixes are returned in the <code>Prefix</code> child element.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Contains the delimiter you specified in the request. If you don't specify a delimiter in your request, this element is absent from the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   *          <p>If you specify <code>encoding-type</code> request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>Delimiter</code>, <code>KeyMarker</code>, <code>Prefix</code>, <code>NextKeyMarker</code>, <code>Key</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Indicates whether the returned list of multipart uploads is truncated. A value of true indicates that the list was truncated. The list can be truncated if the number of multipart uploads exceeds the limit allowed or specified by max uploads.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The key at or after which the listing began.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Maximum number of multipart uploads that could have been included in the response.</p>
   */
  MaxUploads?: number;

  /**
   * <p>When a list is truncated, this element specifies the value that should be used for the key-marker request parameter in a subsequent request.</p>
   */
  NextKeyMarker?: string;

  /**
   * <p>When a list is truncated, this element specifies the value that should be used for the
   *             <code>upload-id-marker</code> request parameter in a subsequent request.</p>
   */
  NextUploadIdMarker?: string;

  /**
   * <p>When a prefix is provided in the request, this field contains the specified prefix. The result contains only keys starting with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Upload ID after which listing began.</p>
   */
  UploadIdMarker?: string;

  /**
   * <p>Container for elements related to a particular multipart upload. A response can contain
   *          zero or more <code>Upload</code> elements.</p>
   */
  Uploads?: MultipartUpload[];
}

export namespace ListMultipartUploadsOutput {
  export const filterSensitiveLog = (obj: ListMultipartUploadsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMultipartUploadsOutput => __isa(o, "ListMultipartUploadsOutput");
}

export interface ListMultipartUploadsRequest {
  __type?: "ListMultipartUploadsRequest";
  /**
   * <p>Name of the bucket to which the multipart upload was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Character you use to group keys.</p>
   *          <p>All keys that contain the same string between the prefix, if specified, and the first occurrence of the delimiter after the prefix are grouped under a single result element, <code>CommonPrefixes</code>. If you don't specify the prefix parameter, then the substring starts at the beginning of the key. The keys that are grouped under <code>CommonPrefixes</code> result element are not returned elsewhere in the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Together with upload-id-marker, this parameter specifies the multipart upload after which listing should begin.</p>
   *          <p>If <code>upload-id-marker</code> is not specified, only the keys lexicographically greater than the specified <code>key-marker</code> will be included in the list.</p>
   *
   *          <p>If <code>upload-id-marker</code> is specified, any multipart uploads for a key equal to the <code>key-marker</code> might also be included, provided those multipart uploads have upload IDs lexicographically greater than the specified <code>upload-id-marker</code>.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Sets the maximum number of multipart uploads, from 1 to 1,000, to return in the response body. 1,000 is the maximum number of uploads that can be returned in a response.</p>
   */
  MaxUploads?: number;

  /**
   * <p>Lists in-progress uploads only for those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different grouping of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.)</p>
   */
  Prefix?: string;

  /**
   * <p>Together with key-marker, specifies the multipart upload after which listing should begin. If
   *          key-marker is not specified, the upload-id-marker parameter is ignored. Otherwise, any
   *          multipart uploads for a key equal to the key-marker might be included in the list only if
   *          they have an upload ID lexicographically greater than the specified
   *             <code>upload-id-marker</code>.</p>
   */
  UploadIdMarker?: string;
}

export namespace ListMultipartUploadsRequest {
  export const filterSensitiveLog = (obj: ListMultipartUploadsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListMultipartUploadsRequest => __isa(o, "ListMultipartUploadsRequest");
}

export interface ListObjectsOutput {
  __type?: "ListObjectsOutput";
  /**
   * <p>All of the keys rolled up in a common prefix count as a single return when calculating the number of returns. </p>
   *
   *          <p>A response can contain CommonPrefixes only if you specify a delimiter.</p>
   *
   *          <p>CommonPrefixes contains all (if there are any) keys between Prefix and the next occurrence of the string specified by the delimiter.</p>
   *
   *         <p> CommonPrefixes lists keys that act like subdirectories in the directory specified by Prefix.</p>
   *
   *          <p>For example, if the prefix is notes/ and the delimiter is a slash (/) as in notes/summer/july, the common prefix is notes/summer/. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of
   *          the delimiter to be rolled up into a single result element in the
   *             <code>CommonPrefixes</code> collection. These rolled-up keys are not returned elsewhere
   *          in the response. Each rolled-up result counts as only one return against the
   *             <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Indicates where in the bucket listing begins. Marker is included in the response if it was sent with the request.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of keys returned in the response body.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Bucket name.</p>
   */
  Name?: string;

  /**
   * <p>When response is truncated (the IsTruncated element value in the response is true), you can use the key name in this field as marker in the subsequent request to get next set of objects. Amazon S3 lists objects in alphabetical order Note: This element is returned only if you have delimiter request parameter specified. If response does not include the NextMaker and it is truncated, you can use the value of the last Key in the response as the marker in the subsequent request to get the next set of object keys.</p>
   */
  NextMarker?: string;

  /**
   * <p>Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;
}

export namespace ListObjectsOutput {
  export const filterSensitiveLog = (obj: ListObjectsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListObjectsOutput => __isa(o, "ListObjectsOutput");
}

export interface ListObjectsRequest {
  __type?: "ListObjectsRequest";
  /**
   * <p>The name of the bucket containing the objects.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  Marker?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. The response might contain fewer keys but will never contain more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects request. Bucket owners need not specify this parameter in their requests.</p>
   */
  RequestPayer?: RequestPayer | string;
}

export namespace ListObjectsRequest {
  export const filterSensitiveLog = (obj: ListObjectsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListObjectsRequest => __isa(o, "ListObjectsRequest");
}

export interface ListObjectsV2Output {
  __type?: "ListObjectsV2Output";
  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating the number of returns.</p>
   *
   *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a delimiter.</p>
   *
   *          <p>
   *             <code>CommonPrefixes</code> contains all (if there are any) keys between <code>Prefix</code> and the next occurrence of the string specified by a delimiter.</p>
   *
   *          <p>
   *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory specified by <code>Prefix</code>.</p>
   *
   *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash (<code>/</code>) as in <code>notes/summer/july</code>, the common prefix is <code>notes/summer/</code>. All of the keys that roll up into a common prefix count as a single return when calculating the number of returns. </p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Metadata about each object returned.</p>
   */
  Contents?: _Object[];

  /**
   * <p>
   *       If ContinuationToken was sent with the request, it is included in the response.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of the
   *          delimiter to be rolled up into a single result element in the CommonPrefixes collection.
   *          These rolled-up keys are not returned elsewhere in the response. Each rolled-up result
   *          counts as only one return against the <code>MaxKeys</code> value.</p>
   */
  Delimiter?: string;

  /**
   * <p>Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *
   *          <p>If you specify the encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>Delimiter, Prefix, Key,</code> and <code>StartAfter</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Set to false if all of the results were returned. Set to true if more keys are available to return. If the number of results exceeds that specified by MaxKeys, all of the results might not be returned.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>KeyCount is the number of keys returned with this request. KeyCount will always be less than equals to MaxKeys field. Say you ask for 50 keys, your result will include less than equals 50 keys </p>
   */
  KeyCount?: number;

  /**
   * <p>Sets the maximum number of keys returned in the response. The response might contain fewer keys but will never contain more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Bucket name.  </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Name?: string;

  /**
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which means
   *          there are more keys in the bucket that can be listed. The next list requests to Amazon S3
   *          can be continued with this <code>NextContinuationToken</code>.
   *             <code>NextContinuationToken</code> is obfuscated and is not a real key</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>
   *       Keys that begin with the indicated prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>If StartAfter was sent with the request, it is included in the response.</p>
   */
  StartAfter?: string;
}

export namespace ListObjectsV2Output {
  export const filterSensitiveLog = (obj: ListObjectsV2Output): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListObjectsV2Output => __isa(o, "ListObjectsV2Output");
}

export interface ListObjectsV2Request {
  __type?: "ListObjectsV2Request";
  /**
   * <p>Bucket name to list.  </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>A delimiter is a character you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>The owner field is not present in listV2 by default, if you want to return owner field with
   *          each key in the result then set the fetch owner field to true.</p>
   */
  FetchOwner?: boolean;

  /**
   * <p>Sets the maximum number of keys returned in the response. The response might contain fewer keys but will never contain more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects request in V2 style. Bucket owners need not specify this parameter in their requests.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket.</p>
   */
  StartAfter?: string;
}

export namespace ListObjectsV2Request {
  export const filterSensitiveLog = (obj: ListObjectsV2Request): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListObjectsV2Request => __isa(o, "ListObjectsV2Request");
}

export interface ListObjectVersionsOutput {
  __type?: "ListObjectVersionsOutput";
  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p>Container for an object that is a delete marker.</p>
   */
  DeleteMarkers?: DeleteMarkerEntry[];

  /**
   * <p>The delimiter grouping the included keys. A delimiter is a character that you specify to
   *          group keys. All keys that contain the same string between the prefix and the first
   *          occurrence of the delimiter are grouped under a single result element in
   *             <code>CommonPrefixes</code>. These groups are counted as one result against the max-keys
   *          limitation. These keys are not returned elsewhere in the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>
   *       Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *
   *          <p>If you specify encoding-type request parameter, Amazon S3 includes this element in the response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>KeyMarker, NextKeyMarker, Prefix, Key</code>, and <code>Delimiter</code>.</p>
   */
  EncodingType?: EncodingType | string;

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
   * <p>Specifies the maximum number of objects to return.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Bucket name.</p>
   */
  Name?: string;

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
   * <p>Selects objects that start with the value supplied by this parameter.</p>
   */
  Prefix?: string;

  /**
   * <p>Marks the last version of the key returned in a truncated response.</p>
   */
  VersionIdMarker?: string;

  /**
   * <p>Container for version information.</p>
   */
  Versions?: ObjectVersion[];
}

export namespace ListObjectVersionsOutput {
  export const filterSensitiveLog = (obj: ListObjectVersionsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListObjectVersionsOutput => __isa(o, "ListObjectVersionsOutput");
}

export interface ListObjectVersionsRequest {
  __type?: "ListObjectVersionsRequest";
  /**
   * <p>The bucket  name that contains the objects.  </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character that you specify to group keys. All keys that contain the same string between the <code>prefix</code> and the first occurrence of the delimiter are grouped under a single result element in CommonPrefixes. These groups are counted as one result against the max-keys limitation. These keys are not returned elsewhere in the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. The response might contain fewer keys but will never contain more. If additional keys satisfy the search criteria, but were not returned because max-keys was exceeded, the response contains <isTruncated>true</isTruncated>. To return the additional keys, see key-marker and version-id-marker.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Use this parameter to select only those keys that begin with the specified prefix. You can use prefixes to separate a bucket into different groupings of keys. (You can think of using prefix to make groups in the same way you'd use a folder in a file system.) You can use prefix with delimiter to roll up numerous objects into a single result under CommonPrefixes. </p>
   */
  Prefix?: string;

  /**
   * <p>Specifies the object version you want to start listing from.</p>
   */
  VersionIdMarker?: string;
}

export namespace ListObjectVersionsRequest {
  export const filterSensitiveLog = (obj: ListObjectVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListObjectVersionsRequest => __isa(o, "ListObjectVersionsRequest");
}

export interface ListPartsOutput {
  __type?: "ListPartsOutput";
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads and the prefix in the lifecycle rule matches the object name in the request, then the response includes this header indicating when the initiated multipart upload will become eligible for abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>.</p>
   *
   *          <p>The response will also include the <code>x-amz-abort-rule-id</code> header that will
   *          provide the ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It identifies
   *          applicable lifecycle configuration rule that defines the action to abort incomplete
   *          multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket?: string;

  /**
   * <p>Container element that identifies who initiated the multipart upload. If the initiator is an
   *          AWS account, this element provides the same information as the <code>Owner</code> element.
   *          If the initiator is an IAM User, this element provides the user ARN and display
   *          name.</p>
   */
  Initiator?: Initiator;

  /**
   * <p>
   *       Indicates whether the returned list of parts is truncated. A true value indicates that the list was truncated. A list can be truncated if the number of parts exceeds the limit returned in the MaxParts element.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Maximum number of parts that were allowed in the response.</p>
   */
  MaxParts?: number;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.</p>
   */
  NextPartNumberMarker?: number;

  /**
   * <p>
   *          Container element that identifies the object owner, after the object is created. If multipart upload is initiated by an IAM user, this element provides the parent account ID and display name.</p>
   */
  Owner?: Owner;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.</p>
   */
  PartNumberMarker?: number;

  /**
   * <p> Container for elements related to a particular part. A response can contain zero or
   *          more <code>Part</code> elements.</p>
   */
  Parts?: Part[];

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId?: string;
}

export namespace ListPartsOutput {
  export const filterSensitiveLog = (obj: ListPartsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPartsOutput => __isa(o, "ListPartsOutput");
}

export interface ListPartsRequest {
  __type?: "ListPartsRequest";
  /**
   * <p>Name of the bucket to which the parts are being uploaded. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
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
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers will be listed.</p>
   */
  PartNumberMarker?: number;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId: string | undefined;
}

export namespace ListPartsRequest {
  export const filterSensitiveLog = (obj: ListPartsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListPartsRequest => __isa(o, "ListPartsRequest");
}

/**
 * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for
 *       a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
 *       <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface LoggingEnabled {
  __type?: "LoggingEnabled";
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
   * <p>A prefix for all log object keys. If you store log files from multiple Amazon S3
   *       buckets in a single bucket, you can use a prefix to distinguish which log files
   *       came from which bucket.</p>
   */
  TargetPrefix: string | undefined;
}

export namespace LoggingEnabled {
  export const filterSensitiveLog = (obj: LoggingEnabled): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoggingEnabled => __isa(o, "LoggingEnabled");
}

export type MetadataDirective = "COPY" | "REPLACE";

/**
 * <p>A metadata key-value pair to store with an object.</p>
 */
export interface MetadataEntry {
  __type?: "MetadataEntry";
  /**
   * <p>Name of the Object.</p>
   */
  Name?: string;

  /**
   * <p>Value of the Object.</p>
   */
  Value?: string;
}

export namespace MetadataEntry {
  export const filterSensitiveLog = (obj: MetadataEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetadataEntry => __isa(o, "MetadataEntry");
}

/**
 * <p> A container specifying replication metrics-related settings enabling metrics and Amazon S3
 *          events for S3 Replication Time Control (S3 RTC). Must be specified together with a <code>ReplicationTime</code>
 *          block. </p>
 */
export interface Metrics {
  __type?: "Metrics";
  /**
   * <p>
   *     A container specifying the time threshold for emitting the <code>s3:Replication:OperationMissedThreshold</code> event.
   *   </p>
   */
  EventThreshold: ReplicationTimeValue | undefined;

  /**
   * <p>
   *     Specifies whether the replication metrics are enabled.
   *   </p>
   */
  Status: MetricsStatus | string | undefined;
}

export namespace Metrics {
  export const filterSensitiveLog = (obj: Metrics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Metrics => __isa(o, "Metrics");
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator
 *          must have at least two predicates, and an object must match all of the predicates in order for the
 *          filter to apply.</p>
 */
export interface MetricsAndOperator {
  __type?: "MetricsAndOperator";
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
  export const isa = (o: any): o is MetricsAndOperator => __isa(o, "MetricsAndOperator");
}

/**
 * <p>Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID)
 *          from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration.
 *          If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html">
 *             PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface MetricsConfiguration {
  __type?: "MetricsConfiguration";
  /**
   * <p>Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).</p>
   */
  Filter?: MetricsFilter;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;
}

export namespace MetricsConfiguration {
  export const filterSensitiveLog = (obj: MetricsConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetricsConfiguration => __isa(o, "MetricsConfiguration");
}

/**
 * <p>Specifies a metrics configuration filter. The metrics configuration only
 *          includes objects that meet the filter's criteria. A filter must be a prefix, a
 *          tag, or a conjunction (MetricsAndOperator).</p>
 */
export interface MetricsFilter {
  __type?: "MetricsFilter";
  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter. The operator must have at least two predicates, and an object must match all of the predicates in order for the filter to apply.</p>
   */
  And?: MetricsAndOperator;

  /**
   * <p>The prefix used when evaluating a metrics filter.</p>
   */
  Prefix?: string;

  /**
   * <p>The tag used when evaluating a metrics filter.</p>
   */
  Tag?: Tag;
}

export namespace MetricsFilter {
  export const filterSensitiveLog = (obj: MetricsFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetricsFilter => __isa(o, "MetricsFilter");
}

export type MetricsStatus = "Disabled" | "Enabled";

export type MFADelete = "Disabled" | "Enabled";

export type MFADeleteStatus = "Disabled" | "Enabled";

/**
 * <p>Container for the <code>MultipartUpload</code> for the Amazon S3 object.</p>
 */
export interface MultipartUpload {
  __type?: "MultipartUpload";
  /**
   * <p>Date and time at which the multipart upload was initiated.</p>
   */
  Initiated?: Date;

  /**
   * <p>Identifies who initiated the multipart upload.</p>
   */
  Initiator?: Initiator;

  /**
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Specifies the owner of the object that is part of the multipart upload. </p>
   */
  Owner?: Owner;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId?: string;
}

export namespace MultipartUpload {
  export const filterSensitiveLog = (obj: MultipartUpload): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MultipartUpload => __isa(o, "MultipartUpload");
}

/**
 * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions.
 *
 * You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionExpiration {
  __type?: "NoncurrentVersionExpiration";
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon
   *             Simple Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;
}

export namespace NoncurrentVersionExpiration {
  export const filterSensitiveLog = (obj: NoncurrentVersionExpiration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NoncurrentVersionExpiration => __isa(o, "NoncurrentVersionExpiration");
}

/**
 * <p>Container for the transition rule that describes when noncurrent objects transition to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class.
 *
 * If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionTransition {
  __type?: "NoncurrentVersionTransition";
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.  For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
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
  export const isa = (o: any): o is NoncurrentVersionTransition => __isa(o, "NoncurrentVersionTransition");
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
  export const isa = (o: any): o is NoSuchBucket => __isa(o, "NoSuchBucket");
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
  export const isa = (o: any): o is NoSuchKey => __isa(o, "NoSuchKey");
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
  export const isa = (o: any): o is NoSuchUpload => __isa(o, "NoSuchUpload");
}

/**
 * <p>A container for specifying the notification configuration of the bucket. If this element is
 *       empty, notifications are turned off for the bucket.</p>
 */
export interface NotificationConfiguration {
  __type?: "NotificationConfiguration";
  /**
   * <p>Describes the AWS Lambda functions to invoke and the events for which to invoke them.</p>
   */
  LambdaFunctionConfigurations?: LambdaFunctionConfiguration[];

  /**
   * <p>The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.</p>
   */
  QueueConfigurations?: QueueConfiguration[];

  /**
   * <p>The topic to which notifications are sent and the events for which notifications are generated.</p>
   */
  TopicConfigurations?: TopicConfiguration[];
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotificationConfiguration => __isa(o, "NotificationConfiguration");
}

/**
 * <p>Specifies object key name filtering rules. For information about key name filtering, see
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
 *         Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
 *         Guide</i>.</p>
 */
export interface NotificationConfigurationFilter {
  __type?: "NotificationConfigurationFilter";
  /**
   * <p>A container for object key name prefix and suffix filtering rules.</p>
   */
  Key?: S3KeyFilter;
}

export namespace NotificationConfigurationFilter {
  export const filterSensitiveLog = (obj: NotificationConfigurationFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotificationConfigurationFilter => __isa(o, "NotificationConfigurationFilter");
}

/**
 * <p>An object consists of data and its descriptive metadata.</p>
 */
export interface _Object {
  __type?: "Object";
  /**
   * <p>The entity tag is an MD5 hash of the object. ETag reflects only changes
   *          to the contents of an object, not its metadata.</p>
   */
  ETag?: string;

  /**
   * <p>The name that you assign to an object. You use the object key to retrieve the object.</p>
   */
  Key?: string;

  /**
   * <p>The date the Object was Last Modified</p>
   */
  LastModified?: Date;

  /**
   * <p>The owner of the object</p>
   */
  Owner?: Owner;

  /**
   * <p>Size in bytes of the object</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectStorageClass | string;
}

export namespace _Object {
  export const filterSensitiveLog = (obj: _Object): any => ({
    ...obj,
  });
  export const isa = (o: any): o is _Object => __isa(o, "Object");
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
  export const isa = (o: any): o is ObjectAlreadyInActiveTierError => __isa(o, "ObjectAlreadyInActiveTierError");
}

export type ObjectCannedACL =
  | "authenticated-read"
  | "aws-exec-read"
  | "bucket-owner-full-control"
  | "bucket-owner-read"
  | "private"
  | "public-read"
  | "public-read-write";

/**
 * <p>Object Identifier is unique value to identify objects.</p>
 */
export interface ObjectIdentifier {
  __type?: "ObjectIdentifier";
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
  export const isa = (o: any): o is ObjectIdentifier => __isa(o, "ObjectIdentifier");
}

/**
 * <p>The container element for Object Lock configuration parameters.</p>
 */
export interface ObjectLockConfiguration {
  __type?: "ObjectLockConfiguration";
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
  export const isa = (o: any): o is ObjectLockConfiguration => __isa(o, "ObjectLockConfiguration");
}

export type ObjectLockEnabled = "Enabled";

/**
 * <p>A Legal Hold configuration for an object.</p>
 */
export interface ObjectLockLegalHold {
  __type?: "ObjectLockLegalHold";
  /**
   * <p>Indicates whether the specified object has a Legal Hold in place.</p>
   */
  Status?: ObjectLockLegalHoldStatus | string;
}

export namespace ObjectLockLegalHold {
  export const filterSensitiveLog = (obj: ObjectLockLegalHold): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ObjectLockLegalHold => __isa(o, "ObjectLockLegalHold");
}

export type ObjectLockLegalHoldStatus = "OFF" | "ON";

export type ObjectLockMode = "COMPLIANCE" | "GOVERNANCE";

/**
 * <p>A Retention configuration for an object.</p>
 */
export interface ObjectLockRetention {
  __type?: "ObjectLockRetention";
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
  export const isa = (o: any): o is ObjectLockRetention => __isa(o, "ObjectLockRetention");
}

export type ObjectLockRetentionMode = "COMPLIANCE" | "GOVERNANCE";

/**
 * <p>The container element for an Object Lock rule.</p>
 */
export interface ObjectLockRule {
  __type?: "ObjectLockRule";
  /**
   * <p>The default retention period that you want to apply to new objects placed in the specified bucket.</p>
   */
  DefaultRetention?: DefaultRetention;
}

export namespace ObjectLockRule {
  export const filterSensitiveLog = (obj: ObjectLockRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ObjectLockRule => __isa(o, "ObjectLockRule");
}

/**
 * <p>The source object of the COPY operation is not in the active tier and is only stored in Amazon
 *          S3 Glacier.</p>
 */
export interface ObjectNotInActiveTierError extends __SmithyException, $MetadataBearer {
  name: "ObjectNotInActiveTierError";
  $fault: "client";
}

export namespace ObjectNotInActiveTierError {
  export const filterSensitiveLog = (obj: ObjectNotInActiveTierError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ObjectNotInActiveTierError => __isa(o, "ObjectNotInActiveTierError");
}

export type ObjectStorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";

/**
 * <p>The version of an object.</p>
 */
export interface ObjectVersion {
  __type?: "ObjectVersion";
  /**
   * <p>The entity tag is an MD5 hash of that version of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>Specifies the owner of the object.</p>
   */
  Owner?: Owner;

  /**
   * <p>Size in bytes of the object.</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectVersionStorageClass | string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;
}

export namespace ObjectVersion {
  export const filterSensitiveLog = (obj: ObjectVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ObjectVersion => __isa(o, "ObjectVersion");
}

export type ObjectVersionStorageClass = "STANDARD";

/**
 * <p>Describes the location where the restore job's output is stored.</p>
 */
export interface OutputLocation {
  __type?: "OutputLocation";
  /**
   * <p>Describes an S3 location that will receive the results of the restore request.</p>
   */
  S3?: S3Location;
}

export namespace OutputLocation {
  export const filterSensitiveLog = (obj: OutputLocation): any => ({
    ...obj,
    ...(obj.S3 && { S3: S3Location.filterSensitiveLog(obj.S3) }),
  });
  export const isa = (o: any): o is OutputLocation => __isa(o, "OutputLocation");
}

/**
 * <p>Describes how results of the Select job are serialized.</p>
 */
export interface OutputSerialization {
  __type?: "OutputSerialization";
  /**
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   */
  CSV?: CSVOutput;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   */
  JSON?: JSONOutput;
}

export namespace OutputSerialization {
  export const filterSensitiveLog = (obj: OutputSerialization): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OutputSerialization => __isa(o, "OutputSerialization");
}

/**
 * <p>Container for the owner's display name and ID.</p>
 */
export interface Owner {
  __type?: "Owner";
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
  export const isa = (o: any): o is Owner => __isa(o, "Owner");
}

export type OwnerOverride = "Destination";

/**
 * <p>Container for Parquet.</p>
 */
export interface ParquetInput {
  __type?: "ParquetInput";
}

export namespace ParquetInput {
  export const filterSensitiveLog = (obj: ParquetInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ParquetInput => __isa(o, "ParquetInput");
}

/**
 * <p>Container for elements related to a part.</p>
 */
export interface Part {
  __type?: "Part";
  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Date and time at which the part was uploaded.</p>
   */
  LastModified?: Date;

  /**
   * <p>Part number identifying the part. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber?: number;

  /**
   * <p>Size in bytes of the uploaded part data.</p>
   */
  Size?: number;
}

export namespace Part {
  export const filterSensitiveLog = (obj: Part): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Part => __isa(o, "Part");
}

export type Payer = "BucketOwner" | "Requester";

export type Permission = "FULL_CONTROL" | "READ" | "READ_ACP" | "WRITE" | "WRITE_ACP";

/**
 * <p>The container element for a bucket's policy status.</p>
 */
export interface PolicyStatus {
  __type?: "PolicyStatus";
  /**
   * <p>The policy status for this bucket. <code>TRUE</code> indicates that this bucket is public.
   *         <code>FALSE</code> indicates that the bucket is not public.</p>
   */
  IsPublic?: boolean;
}

export namespace PolicyStatus {
  export const filterSensitiveLog = (obj: PolicyStatus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PolicyStatus => __isa(o, "PolicyStatus");
}

/**
 * <p>This data type contains information about progress of an operation.</p>
 */
export interface Progress {
  __type?: "Progress";
  /**
   * <p>The current number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * <p>The current number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;

  /**
   * <p>The current number of object bytes scanned.</p>
   */
  BytesScanned?: number;
}

export namespace Progress {
  export const filterSensitiveLog = (obj: Progress): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Progress => __isa(o, "Progress");
}

/**
 * <p>This data type contains information about the progress event of an operation.</p>
 */
export interface ProgressEvent {
  __type?: "ProgressEvent";
  /**
   * <p>The Progress event details.</p>
   */
  Details?: Progress;
}

export namespace ProgressEvent {
  export const filterSensitiveLog = (obj: ProgressEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProgressEvent => __isa(o, "ProgressEvent");
}

export type Protocol = "http" | "https";

/**
 * <p>The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket. You
 *          can enable the configuration options in any combination. For more information about when
 *          Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer Guide</i>. </p>
 */
export interface PublicAccessBlockConfiguration {
  __type?: "PublicAccessBlockConfiguration";
  /**
   * <p>Specifies whether Amazon S3 should block public access control lists (ACLs) for this
   *       bucket and objects in this bucket. Setting this element to <code>TRUE</code> causes the
   *       following behavior:</p>
   *          <ul>
   *             <li>
   *                <p>PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.</p>
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
   * <p>Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting
   *       this element to <code>TRUE</code> causes Amazon S3 to reject calls to PUT Bucket policy if the
   *       specified bucket policy allows public access. </p>
   *          <p>Enabling this setting doesn't affect existing bucket policies.</p>
   */
  BlockPublicPolicy?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this
   *       bucket. Setting this element to <code>TRUE</code> causes Amazon S3 to ignore all public ACLs
   *       on this bucket and objects in this bucket.</p>
   *          <p>Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't
   *       prevent new public ACLs from being set.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Specifies whether Amazon S3 should restrict public bucket policies for this bucket.
   *       Setting this element to <code>TRUE</code> restricts access to this bucket to only AWS services
   *       and authorized users within this account if the bucket has a public policy.</p>
   *          <p>Enabling this setting doesn't affect previously stored bucket policies, except that public
   *       and cross-account access within any public bucket policy, including non-public delegation to
   *       specific accounts, is blocked.</p>
   */
  RestrictPublicBuckets?: boolean;
}

export namespace PublicAccessBlockConfiguration {
  export const filterSensitiveLog = (obj: PublicAccessBlockConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PublicAccessBlockConfiguration => __isa(o, "PublicAccessBlockConfiguration");
}

export interface PutBucketAccelerateConfigurationRequest {
  __type?: "PutBucketAccelerateConfigurationRequest";
  /**
   * <p>Container for setting the transfer acceleration state.</p>
   */
  AccelerateConfiguration: AccelerateConfiguration | undefined;

  /**
   * <p>Name of the bucket for which the accelerate configuration is set.</p>
   */
  Bucket: string | undefined;
}

export namespace PutBucketAccelerateConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAccelerateConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketAccelerateConfigurationRequest =>
    __isa(o, "PutBucketAccelerateConfigurationRequest");
}

export interface PutBucketAclRequest {
  __type?: "PutBucketAclRequest";
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
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity
   *          check to verify that the request body was not corrupted in transit. For more information, go to
   *          <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.</a>
   *          </p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
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
}

export namespace PutBucketAclRequest {
  export const filterSensitiveLog = (obj: PutBucketAclRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketAclRequest => __isa(o, "PutBucketAclRequest");
}

export interface PutBucketAnalyticsConfigurationRequest {
  __type?: "PutBucketAnalyticsConfigurationRequest";
  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

  /**
   * <p>The name of the bucket to which an analytics configuration is stored.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;
}

export namespace PutBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketAnalyticsConfigurationRequest =>
    __isa(o, "PutBucketAnalyticsConfigurationRequest");
}

export interface PutBucketCorsRequest {
  __type?: "PutBucketCorsRequest";
  /**
   * <p>Specifies the bucket impacted by the <code>cors</code>configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev//cors.html">Enabling Cross-Origin Resource
   *             Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  CORSConfiguration: CORSConfiguration | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity
   *          check to verify that the request body was not corrupted in transit. For more information, go to
   *          <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.</a>
   *          </p>
   */
  ContentMD5?: string;
}

export namespace PutBucketCorsRequest {
  export const filterSensitiveLog = (obj: PutBucketCorsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketCorsRequest => __isa(o, "PutBucketCorsRequest");
}

export interface PutBucketEncryptionRequest {
  __type?: "PutBucketEncryptionRequest";
  /**
   * <p>Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3) or customer master keys stored in AWS KMS (SSE-KMS). For information about the Amazon S3 default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Default Bucket Encryption</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the server-side encryption configuration. This
   *          parameter is auto-populated when using the command from the CLI.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;
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
  export const isa = (o: any): o is PutBucketEncryptionRequest => __isa(o, "PutBucketEncryptionRequest");
}

export interface PutBucketInventoryConfigurationRequest {
  __type?: "PutBucketInventoryConfigurationRequest";
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
}

export namespace PutBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketInventoryConfigurationRequest): any => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }),
  });
  export const isa = (o: any): o is PutBucketInventoryConfigurationRequest =>
    __isa(o, "PutBucketInventoryConfigurationRequest");
}

export interface PutBucketLifecycleConfigurationRequest {
  __type?: "PutBucketLifecycleConfigurationRequest";
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration;
}

export namespace PutBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketLifecycleConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketLifecycleConfigurationRequest =>
    __isa(o, "PutBucketLifecycleConfigurationRequest");
}

export interface PutBucketLoggingRequest {
  __type?: "PutBucketLoggingRequest";
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
   */
  ContentMD5?: string;
}

export namespace PutBucketLoggingRequest {
  export const filterSensitiveLog = (obj: PutBucketLoggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketLoggingRequest => __isa(o, "PutBucketLoggingRequest");
}

export interface PutBucketMetricsConfigurationRequest {
  __type?: "PutBucketMetricsConfigurationRequest";
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
}

export namespace PutBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketMetricsConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketMetricsConfigurationRequest =>
    __isa(o, "PutBucketMetricsConfigurationRequest");
}

export interface PutBucketNotificationConfigurationRequest {
  __type?: "PutBucketNotificationConfigurationRequest";
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A container for specifying the notification configuration of the bucket. If this element is
   *       empty, notifications are turned off for the bucket.</p>
   */
  NotificationConfiguration: NotificationConfiguration | undefined;
}

export namespace PutBucketNotificationConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketNotificationConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketNotificationConfigurationRequest =>
    __isa(o, "PutBucketNotificationConfigurationRequest");
}

export interface PutBucketPolicyRequest {
  __type?: "PutBucketPolicyRequest";
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.</p>
   */
  ConfirmRemoveSelfBucketAccess?: boolean;

  /**
   * <p>The MD5 hash of the request body.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy: string | undefined;
}

export namespace PutBucketPolicyRequest {
  export const filterSensitiveLog = (obj: PutBucketPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketPolicyRequest => __isa(o, "PutBucketPolicyRequest");
}

export interface PutBucketReplicationRequest {
  __type?: "PutBucketReplicationRequest";
  /**
   * <p>The name of the bucket</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *       replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * <p></p>
   */
  Token?: string;
}

export namespace PutBucketReplicationRequest {
  export const filterSensitiveLog = (obj: PutBucketReplicationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketReplicationRequest => __isa(o, "PutBucketReplicationRequest");
}

export interface PutBucketRequestPaymentRequest {
  __type?: "PutBucketRequestPaymentRequest";
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for Payer.</p>
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;
}

export namespace PutBucketRequestPaymentRequest {
  export const filterSensitiveLog = (obj: PutBucketRequestPaymentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketRequestPaymentRequest => __isa(o, "PutBucketRequestPaymentRequest");
}

export interface PutBucketTaggingRequest {
  __type?: "PutBucketTaggingRequest";
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements.</p>
   */
  Tagging: Tagging | undefined;
}

export namespace PutBucketTaggingRequest {
  export const filterSensitiveLog = (obj: PutBucketTaggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketTaggingRequest => __isa(o, "PutBucketTaggingRequest");
}

export interface PutBucketVersioningRequest {
  __type?: "PutBucketVersioningRequest";
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.</p>
   */
  MFA?: string;

  /**
   * <p>Container for setting the versioning state.</p>
   */
  VersioningConfiguration: VersioningConfiguration | undefined;
}

export namespace PutBucketVersioningRequest {
  export const filterSensitiveLog = (obj: PutBucketVersioningRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketVersioningRequest => __isa(o, "PutBucketVersioningRequest");
}

export interface PutBucketWebsiteRequest {
  __type?: "PutBucketWebsiteRequest";
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message integrity check to verify that the request body was not corrupted in transit. For more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the request.</p>
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;
}

export namespace PutBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: PutBucketWebsiteRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutBucketWebsiteRequest => __isa(o, "PutBucketWebsiteRequest");
}

export interface PutObjectAclOutput {
  __type?: "PutObjectAclOutput";
  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectAclOutput {
  export const filterSensitiveLog = (obj: PutObjectAclOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectAclOutput => __isa(o, "PutObjectAclOutput");
}

export interface PutObjectAclRequest {
  __type?: "PutObjectAclRequest";
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *             ACL</a>.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket name that contains the object to which you want to attach the ACL. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message integrity
   *          check to verify that the request body was not corrupted in transit. For more information, go to
   *          <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.></a>
   *          </p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
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
   * <p>Key for which the PUT operation was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;
}

export namespace PutObjectAclRequest {
  export const filterSensitiveLog = (obj: PutObjectAclRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectAclRequest => __isa(o, "PutObjectAclRequest");
}

export interface PutObjectLegalHoldOutput {
  __type?: "PutObjectLegalHoldOutput";
  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLegalHoldOutput {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectLegalHoldOutput => __isa(o, "PutObjectLegalHoldOutput");
}

export interface PutObjectLegalHoldRequest {
  __type?: "PutObjectLegalHoldRequest";
  /**
   * <p>The bucket name containing the object that you want to place a Legal Hold on. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash for the request body.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The key name for the object that you want to place a Legal Hold on.</p>
   */
  Key: string | undefined;

  /**
   * <p>Container element for the Legal Hold configuration you want to apply to the specified object.</p>
   */
  LegalHold?: ObjectLockLegalHold;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID of the object that you want to place a Legal Hold on.</p>
   */
  VersionId?: string;
}

export namespace PutObjectLegalHoldRequest {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectLegalHoldRequest => __isa(o, "PutObjectLegalHoldRequest");
}

export interface PutObjectLockConfigurationOutput {
  __type?: "PutObjectLockConfigurationOutput";
  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLockConfigurationOutput {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectLockConfigurationOutput => __isa(o, "PutObjectLockConfigurationOutput");
}

export interface PutObjectLockConfigurationRequest {
  __type?: "PutObjectLockConfigurationRequest";
  /**
   * <p>The bucket whose Object Lock configuration you want to create or replace.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash for the request body.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The Object Lock configuration that you want to apply to the specified bucket.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;
}

export namespace PutObjectLockConfigurationRequest {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectLockConfigurationRequest => __isa(o, "PutObjectLockConfigurationRequest");
}

export interface PutObjectOutput {
  __type?: "PutObjectOutput";
  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * <p>
   *       If the expiration is configured for the object (see <a>PutBucketLifecycleConfiguration</a>), the response includes this header. It includes the expiry-date and rule-id key-value pairs that provide information about object expiration. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *          (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object. </p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If you specified server-side encryption either with an AWS KMS customer master key (CMK) or Amazon S3-managed encryption key in your PUT request, the response includes this header. It confirms the encryption algorithm that Amazon S3 used to encrypt the object.</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;
}

export namespace PutObjectOutput {
  export const filterSensitiveLog = (obj: PutObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is PutObjectOutput => __isa(o, "PutObjectOutput");
}

export interface PutObjectRequest {
  __type?: "PutObjectRequest";
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>Bucket name to which the PUT operation was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>
   *       Can be used to specify caching behavior along the request/reply chain. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1">http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1</a>.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11</a>.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.  For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13</a>.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to RFC 1864. This header can be used as a message integrity check to verify that the data is the same data that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an end-to-end integrity check. For more information about REST request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A standard MIME type describing the format of the contents. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17</a>.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21</a>.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its metadata.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable object.</p>
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
   * <p>Specifies whether a legal hold will be applied to this object. For more information about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The Object Lock mode that you want to apply to this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when you want this object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *       (AWS KMS) symmetrical customer managed customer master key (CMK) that was used for the object.</p>
   *          <p> If the value of <code>x-amz-server-side-encryption</code> is <code>aws:kms</code>, this
   *          header specifies the ID of the symmetric customer managed AWS KMS CMK that will be used for the object. If you specify
   *             <code>x-amz-server-side-encryption:aws:kms</code>, but do not provide<code>
   *             x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the AWS managed CMK
   *          in AWS to protect the data.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If you don't specify, Standard is the default storage class. Amazon S3 supports other storage classes.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example, "Key1=Value1")</p>
   */
  Tagging?: string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another object
   *          in the same bucket or to an external URL. Amazon S3 stores the value of this header in the
   *          object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a>.</p>
   *
   *          <p>In the following example, the request header sets the redirect to an object (anotherPage.html) in the same bucket:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
   *          </p>
   *
   *          <p>In the following example, the request header sets the object redirect to another website:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
   *          </p>
   *
   *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to Configure Website Page Redirects</a>. </p>
   */
  WebsiteRedirectLocation?: string;
}

export namespace PutObjectRequest {
  export const filterSensitiveLog = (obj: PutObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is PutObjectRequest => __isa(o, "PutObjectRequest");
}

export interface PutObjectRetentionOutput {
  __type?: "PutObjectRetentionOutput";
  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectRetentionOutput {
  export const filterSensitiveLog = (obj: PutObjectRetentionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectRetentionOutput => __isa(o, "PutObjectRetentionOutput");
}

export interface PutObjectRetentionRequest {
  __type?: "PutObjectRetentionRequest";
  /**
   * <p>The bucket name that contains the object you want to apply this Object Retention configuration to. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Indicates whether this operation should bypass Governance-mode restrictions.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>The MD5 hash for the request body.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The key name for the object that you want to apply this Object Retention configuration to.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The container element for the Object Retention configuration.</p>
   */
  Retention?: ObjectLockRetention;

  /**
   * <p>The version ID for the object that you want to apply this Object Retention configuration to.</p>
   */
  VersionId?: string;
}

export namespace PutObjectRetentionRequest {
  export const filterSensitiveLog = (obj: PutObjectRetentionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectRetentionRequest => __isa(o, "PutObjectRetentionRequest");
}

export interface PutObjectTaggingOutput {
  __type?: "PutObjectTaggingOutput";
  /**
   * <p>The versionId of the object the tag-set was added to.</p>
   */
  VersionId?: string;
}

export namespace PutObjectTaggingOutput {
  export const filterSensitiveLog = (obj: PutObjectTaggingOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectTaggingOutput => __isa(o, "PutObjectTaggingOutput");
}

export interface PutObjectTaggingRequest {
  __type?: "PutObjectTaggingRequest";
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash for the request body.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Name of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements</p>
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be added to.</p>
   */
  VersionId?: string;
}

export namespace PutObjectTaggingRequest {
  export const filterSensitiveLog = (obj: PutObjectTaggingRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutObjectTaggingRequest => __isa(o, "PutObjectTaggingRequest");
}

export interface PutPublicAccessBlockRequest {
  __type?: "PutPublicAccessBlockRequest";
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you
   *       want to set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body. </p>
   */
  ContentMD5?: string;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *       bucket. You can enable the configuration options in any combination. For more information
   *       about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer
   *         Guide</i>.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;
}

export namespace PutPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: PutPublicAccessBlockRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutPublicAccessBlockRequest => __isa(o, "PutPublicAccessBlockRequest");
}

/**
 * <p>Specifies the configuration for publishing messages to an Amazon Simple
 *       Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.</p>
 */
export interface QueueConfiguration {
  __type?: "QueueConfiguration";
  /**
   * <p>A collection of bucket events for which to send notifications</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *         Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *         Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;

  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you don't
   *       provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a
   *       message when it detects events of the specified type.</p>
   */
  QueueArn: string | undefined;
}

export namespace QueueConfiguration {
  export const filterSensitiveLog = (obj: QueueConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueueConfiguration => __isa(o, "QueueConfiguration");
}

export enum QuoteFields {
  ALWAYS = "ALWAYS",
  ASNEEDED = "ASNEEDED",
}

/**
 * <p>The container for the records event.</p>
 */
export interface RecordsEvent {
  __type?: "RecordsEvent";
  /**
   * <p>The byte array of partial, one or more result records.</p>
   */
  Payload?: Uint8Array;
}

export namespace RecordsEvent {
  export const filterSensitiveLog = (obj: RecordsEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecordsEvent => __isa(o, "RecordsEvent");
}

/**
 * <p>Specifies how requests are redirected. In the event of an error, you can specify a different error code to return.</p>
 */
export interface Redirect {
  __type?: "Redirect";
  /**
   * <p>The host name to use in the redirect request.</p>
   */
  HostName?: string;

  /**
   * <p>The HTTP redirect code to use on the response. Not required if one of the siblings is present.</p>
   */
  HttpRedirectCode?: string;

  /**
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in the original request.</p>
   */
  Protocol?: Protocol | string;

  /**
   * <p>The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix <code>docs/</code> (objects in the <code>docs/</code> folder) to <code>documents/</code>, you can set a condition block with <code>KeyPrefixEquals</code> set to <code>docs/</code> and in the Redirect set <code>ReplaceKeyPrefixWith</code> to <code>/documents</code>. Not required if one of the siblings is present. Can be present only if <code>ReplaceKeyWith</code> is not provided.</p>
   */
  ReplaceKeyPrefixWith?: string;

  /**
   * <p>The specific object key to use in the redirect request. For example, redirect request to <code>error.html</code>. Not required if one of the siblings is present. Can be present only if <code>ReplaceKeyPrefixWith</code> is not provided.</p>
   */
  ReplaceKeyWith?: string;
}

export namespace Redirect {
  export const filterSensitiveLog = (obj: Redirect): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Redirect => __isa(o, "Redirect");
}

/**
 * <p>Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.</p>
 */
export interface RedirectAllRequestsTo {
  __type?: "RedirectAllRequestsTo";
  /**
   * <p>Name of the host where requests are redirected.</p>
   */
  HostName: string | undefined;

  /**
   * <p>Protocol to use when redirecting requests. The default is the protocol that is used in the original request.</p>
   */
  Protocol?: Protocol | string;
}

export namespace RedirectAllRequestsTo {
  export const filterSensitiveLog = (obj: RedirectAllRequestsTo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RedirectAllRequestsTo => __isa(o, "RedirectAllRequestsTo");
}

/**
 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
 *       replication configuration is 2 MB.</p>
 */
export interface ReplicationConfiguration {
  __type?: "ReplicationConfiguration";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes
   *       when replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Role: string | undefined;

  /**
   * <p>A container for one or more replication rules. A replication configuration must have at
   *       least one rule and can contain a maximum of 1,000 rules. </p>
   */
  Rules: ReplicationRule[] | undefined;
}

export namespace ReplicationConfiguration {
  export const filterSensitiveLog = (obj: ReplicationConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReplicationConfiguration => __isa(o, "ReplicationConfiguration");
}

/**
 * <p>Specifies which Amazon S3 objects to replicate and where to store the replicas.</p>
 */
export interface ReplicationRule {
  __type?: "ReplicationRule";
  /**
   * <p>Specifies whether Amazon S3 replicates the delete markers. If you specify a <code>Filter</code>, you must specify this element. However, in the latest version of replication configuration (when <code>Filter</code> is specified), Amazon S3 doesn't replicate delete markers. Therefore, the <code>DeleteMarkerReplication</code> element can contain only <Status>Disabled</Status>. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>.
   *      </p>
   *
   *          <note>
   *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the replication
   *             configuration is the earlier version, V1. In the earlier version, Amazon S3 handled
   *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
   *          </note>
   */
  DeleteMarkerReplication?: DeleteMarkerReplication;

  /**
   * <p>A container for information about the replication destination
   *      and its configurations including enabling the S3 Replication Time Control (S3 RTC).</p>
   */
  Destination: Destination | undefined;

  /**
   * <p></p>
   */
  ExistingObjectReplication?: ExistingObjectReplication;

  /**
   * <p>A filter that identifies the subset of objects to which the replication rule applies. A
   *         <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an
   *         <code>And</code> child element.</p>
   */
  Filter?: ReplicationRuleFilter;

  /**
   * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>An object key name prefix that identifies the object or objects to which the rule applies.
   *          The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify
   *          an empty string. </p>
   */
  Prefix?: string;

  /**
   * <p>The priority associated with the rule. If you specify multiple rules in a replication
   *       configuration, Amazon S3 prioritizes the rules to prevent conflicts when filtering. If two or
   *       more rules identify the same object based on a specified filter, the rule with higher priority
   *       takes precedence. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Same object quality prefix-based filter criteria if prefixes you specified in multiple rules
   *                overlap </p>
   *             </li>
   *             <li>
   *                <p>Same object qualify tag-based filter criteria specified in multiple rules</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the <i>Amazon Simple Storage Service Developer
   *             Guide</i>.</p>
   */
  Priority?: number;

  /**
   * <p>A container that describes additional filters for identifying the source objects that you
   *       want to replicate. You can choose to enable or disable the replication of these objects.
   *       Currently, Amazon S3 supports only the filter that you can specify for objects created with
   *       server-side encryption using a customer master key (CMK) stored in AWS Key Management Service (SSE-KMS).</p>
   */
  SourceSelectionCriteria?: SourceSelectionCriteria;

  /**
   * <p>Specifies whether the rule is enabled.</p>
   */
  Status: ReplicationRuleStatus | string | undefined;
}

export namespace ReplicationRule {
  export const filterSensitiveLog = (obj: ReplicationRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReplicationRule => __isa(o, "ReplicationRule");
}

/**
 * <p>A container for specifying rule filters. The filters determine the subset of objects to which the rule
 *          applies. This element is required only if you specify more than one filter. </p>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in
 *                an <code>And</code> tag. </p>
 *             </li>
 *             <li>
 *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code>
 *                elements in an <code>And</code> tag</p>
 *             </li>
 *          </ul>
 */
export interface ReplicationRuleAndOperator {
  __type?: "ReplicationRuleAndOperator";
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
  export const isa = (o: any): o is ReplicationRuleAndOperator => __isa(o, "ReplicationRuleAndOperator");
}

/**
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A
 *         <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or an
 *         <code>And</code> child element.</p>
 */
export interface ReplicationRuleFilter {
  __type?: "ReplicationRuleFilter";
  /**
   * <p>A container for specifying rule filters. The filters determine the subset of objects to
   *       which the rule applies. This element is required only if you specify more than one filter. For
   *       example: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter,  wrap these filters
   *           in an <code>And</code> tag.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an
   *             <code>And</code> tag.</p>
   *             </li>
   *          </ul>
   */
  And?: ReplicationRuleAndOperator;

  /**
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  Prefix?: string;

  /**
   * <p>A container for specifying a tag key and value. </p>
   *          <p>The rule applies only to objects that have the tag in their tag set.</p>
   */
  Tag?: Tag;
}

export namespace ReplicationRuleFilter {
  export const filterSensitiveLog = (obj: ReplicationRuleFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReplicationRuleFilter => __isa(o, "ReplicationRuleFilter");
}

export type ReplicationRuleStatus = "Disabled" | "Enabled";

export type ReplicationStatus = "COMPLETE" | "FAILED" | "PENDING" | "REPLICA";

/**
 * <p>
 *      A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on
 *      objects must be replicated. Must be specified together with a <code>Metrics</code> block.
 *   </p>
 */
export interface ReplicationTime {
  __type?: "ReplicationTime";
  /**
   * <p>
   *     Specifies whether the replication time is enabled.
   *   </p>
   */
  Status: ReplicationTimeStatus | string | undefined;

  /**
   * <p> A container specifying the time by which replication should be complete for all objects and
   *          operations on objects. </p>
   */
  Time: ReplicationTimeValue | undefined;
}

export namespace ReplicationTime {
  export const filterSensitiveLog = (obj: ReplicationTime): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReplicationTime => __isa(o, "ReplicationTime");
}

export type ReplicationTimeStatus = "Disabled" | "Enabled";

/**
 * <p>
 *      A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics <code>EventThreshold</code>.
 *   </p>
 */
export interface ReplicationTimeValue {
  __type?: "ReplicationTimeValue";
  /**
   * <p>
   *     Contains an integer specifying time in minutes.
   *     </p>
   *          <p> Valid values: 15 minutes. </p>
   */
  Minutes?: number;
}

export namespace ReplicationTimeValue {
  export const filterSensitiveLog = (obj: ReplicationTimeValue): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReplicationTimeValue => __isa(o, "ReplicationTimeValue");
}

export type RequestCharged = "requester";

export type RequestPayer = "requester";

/**
 * <p>Container for Payer.</p>
 */
export interface RequestPaymentConfiguration {
  __type?: "RequestPaymentConfiguration";
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer: Payer | string | undefined;
}

export namespace RequestPaymentConfiguration {
  export const filterSensitiveLog = (obj: RequestPaymentConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RequestPaymentConfiguration => __isa(o, "RequestPaymentConfiguration");
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be
 *          sent.</p>
 */
export interface RequestProgress {
  __type?: "RequestProgress";
  /**
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE, FALSE. Default value: FALSE.</p>
   */
  Enabled?: boolean;
}

export namespace RequestProgress {
  export const filterSensitiveLog = (obj: RequestProgress): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RequestProgress => __isa(o, "RequestProgress");
}

export interface RestoreObjectOutput {
  __type?: "RestoreObjectOutput";
  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Indicates the path in the provided S3 output location where Select results will be restored to.</p>
   */
  RestoreOutputPath?: string;
}

export namespace RestoreObjectOutput {
  export const filterSensitiveLog = (obj: RestoreObjectOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RestoreObjectOutput => __isa(o, "RestoreObjectOutput");
}

export interface RestoreObjectRequest {
  __type?: "RestoreObjectRequest";
  /**
   * <p>The bucket name or containing the object to restore. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation using an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the operation was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Container for restore job parameters.</p>
   */
  RestoreRequest?: RestoreRequest;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;
}

export namespace RestoreObjectRequest {
  export const filterSensitiveLog = (obj: RestoreObjectRequest): any => ({
    ...obj,
    ...(obj.RestoreRequest && { RestoreRequest: RestoreRequest.filterSensitiveLog(obj.RestoreRequest) }),
  });
  export const isa = (o: any): o is RestoreObjectRequest => __isa(o, "RestoreObjectRequest");
}

/**
 * <p>Container for restore job parameters.</p>
 */
export interface RestoreRequest {
  __type?: "RestoreRequest";
  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   */
  Days?: number;

  /**
   * <p>The optional description for the job.</p>
   */
  Description?: string;

  /**
   * <p>Glacier related parameters pertaining to this job. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   */
  GlacierJobParameters?: GlacierJobParameters;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   */
  OutputLocation?: OutputLocation;

  /**
   * <p>Describes the parameters for Select job types.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * <p>Glacier retrieval tier at which the restore will be processed.</p>
   */
  Tier?: Tier | string;

  /**
   * <p>Type of restore request.</p>
   */
  Type?: RestoreRequestType | string;
}

export namespace RestoreRequest {
  export const filterSensitiveLog = (obj: RestoreRequest): any => ({
    ...obj,
    ...(obj.OutputLocation && { OutputLocation: OutputLocation.filterSensitiveLog(obj.OutputLocation) }),
  });
  export const isa = (o: any): o is RestoreRequest => __isa(o, "RestoreRequest");
}

export enum RestoreRequestType {
  SELECT = "SELECT",
}

/**
 * <p>Specifies the redirect behavior and when a redirect is applied.</p>
 */
export interface RoutingRule {
  __type?: "RoutingRule";
  /**
   * <p>A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the <code>/docs</code> folder, redirect to the <code>/documents</code> folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.</p>
   */
  Condition?: Condition;

  /**
   * <p>Container for redirect information. You can redirect requests to another host, to another
   *       page, or with another protocol. In the event of an error, you can specify a different error
   *       code to return.</p>
   */
  Redirect: Redirect | undefined;
}

export namespace RoutingRule {
  export const filterSensitiveLog = (obj: RoutingRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RoutingRule => __isa(o, "RoutingRule");
}

/**
 * <p>A container for object key name prefix and suffix filtering rules.</p>
 */
export interface S3KeyFilter {
  __type?: "S3KeyFilter";
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
  export const isa = (o: any): o is S3KeyFilter => __isa(o, "S3KeyFilter");
}

/**
 * <p>Describes an Amazon S3 location that will receive the results of the restore request.</p>
 */
export interface S3Location {
  __type?: "S3Location";
  /**
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Grant[];

  /**
   * <p>The name of the bucket where the restore results will be placed.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>The canned ACL to apply to the restore results.</p>
   */
  CannedACL?: ObjectCannedACL | string;

  /**
   * <p>Contains the type of server-side encryption used.</p>
   */
  Encryption?: Encryption;

  /**
   * <p>The prefix that is prepended to the restore results for this request.</p>
   */
  Prefix: string | undefined;

  /**
   * <p>The class of storage used to store the restore results.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The tag-set that is applied to the restore results.</p>
   */
  Tagging?: Tagging;

  /**
   * <p>A list of metadata to store with the restore results in S3.</p>
   */
  UserMetadata?: MetadataEntry[];
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
    ...(obj.Encryption && { Encryption: Encryption.filterSensitiveLog(obj.Encryption) }),
  });
  export const isa = (o: any): o is S3Location => __isa(o, "S3Location");
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional,
 *          but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
 */
export interface ScanRange {
  __type?: "ScanRange";
  /**
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values: non-negative
   *          integers. The default value is one less than the size of the object being queried. If only
   *          the End parameter is supplied, it is interpreted to mean scan the last N bytes of the file.
   *          For example, <code><scanrange><end>50</end></scanrange></code>
   *          means scan the last 50 bytes.</p>
   */
  End?: number;

  /**
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values: non-negative integers. The default value is 0.
   *       If only start is supplied, it means scan from that point to the end of the file.For example; <code><scanrange><start>50</start></scanrange></code> means scan from byte 50 until the end of the file.</p>
   */
  Start?: number;
}

export namespace ScanRange {
  export const filterSensitiveLog = (obj: ScanRange): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ScanRange => __isa(o, "ScanRange");
}

/**
 * <p>The container for selecting objects from a content event stream.</p>
 */
export type SelectObjectContentEventStream =
  | SelectObjectContentEventStream.ContMember
  | SelectObjectContentEventStream.EndMember
  | SelectObjectContentEventStream.ProgressMember
  | SelectObjectContentEventStream.RecordsMember
  | SelectObjectContentEventStream.StatsMember
  | SelectObjectContentEventStream.$UnknownMember;

export namespace SelectObjectContentEventStream {
  interface $Base {
    __type?: "SelectObjectContentEventStream";
  }
  /**
   * <p>The Continuation Event.</p>
   */
  export interface ContMember extends $Base {
    Cont: ContinuationEvent;
    End?: never;
    Progress?: never;
    Records?: never;
    Stats?: never;
    $unknown?: never;
  }
  /**
   * <p>The End Event.</p>
   */
  export interface EndMember extends $Base {
    Cont?: never;
    End: EndEvent;
    Progress?: never;
    Records?: never;
    Stats?: never;
    $unknown?: never;
  }
  /**
   * <p>The Progress Event.</p>
   */
  export interface ProgressMember extends $Base {
    Cont?: never;
    End?: never;
    Progress: ProgressEvent;
    Records?: never;
    Stats?: never;
    $unknown?: never;
  }
  /**
   * <p>The Records Event.</p>
   */
  export interface RecordsMember extends $Base {
    Cont?: never;
    End?: never;
    Progress?: never;
    Records: RecordsEvent;
    Stats?: never;
    $unknown?: never;
  }
  /**
   * <p>The Stats Event.</p>
   */
  export interface StatsMember extends $Base {
    Cont?: never;
    End?: never;
    Progress?: never;
    Records?: never;
    Stats: StatsEvent;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    Cont?: never;
    End?: never;
    Progress?: never;
    Records?: never;
    Stats?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    Cont: (value: ContinuationEvent) => T;
    End: (value: EndEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Records: (value: RecordsEvent) => T;
    Stats: (value: StatsEvent) => T;
    _: (name: string, value: any) => T;
  }
  export const visit = <T>(value: SelectObjectContentEventStream, visitor: Visitor<T>): T => {
    if (value.Cont !== undefined) return visitor.Cont(value.Cont);
    if (value.End !== undefined) return visitor.End(value.End);
    if (value.Progress !== undefined) return visitor.Progress(value.Progress);
    if (value.Records !== undefined) return visitor.Records(value.Records);
    if (value.Stats !== undefined) return visitor.Stats(value.Stats);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export interface SelectObjectContentOutput {
  __type?: "SelectObjectContentOutput";
  /**
   * <p>The array of results.</p>
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream>;
}

export namespace SelectObjectContentOutput {
  export const filterSensitiveLog = (obj: SelectObjectContentOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SelectObjectContentOutput => __isa(o, "SelectObjectContentOutput");
}

/**
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query
 *       Language (SQL) statement. In the request, along with the SQL expression, you must specify a
 *       data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object
 *       data into records. It returns only records that match the specified SQL expression. You must
 *       also specify the data serialization format for the response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API
 *         Documentation</a>.</p>
 */
export interface SelectObjectContentRequest {
  __type?: "SelectObjectContentRequest";
  /**
   * <p>The S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>Describes the format of the data in the object that is being queried.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * <p>Specifies if periodic request progress information should be enabled.</p>
   */
  RequestProgress?: RequestProgress;

  /**
   * <p>The SSE Algorithm used to encrypt the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>The SSE Customer Key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKey?: string;

  /**
   * <p>The SSE Customer Key MD5. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the byte range of the object to get the records from. A record is processed when its first byte is contained by the range. This parameter is optional,
   *       but when specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code> - process only the records starting between the bytes 50 and 100 (inclusive, counting from zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> - process only the records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> - process only the records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   */
  ScanRange?: ScanRange;
}

export namespace SelectObjectContentRequest {
  export const filterSensitiveLog = (obj: SelectObjectContentRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is SelectObjectContentRequest => __isa(o, "SelectObjectContentRequest");
}

/**
 * <p>Describes the parameters for Select job types.</p>
 */
export interface SelectParameters {
  __type?: "SelectParameters";
  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>Describes the serialization format of the object.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>Describes how the results of the Select job are serialized.</p>
   */
  OutputSerialization: OutputSerialization | undefined;
}

export namespace SelectParameters {
  export const filterSensitiveLog = (obj: SelectParameters): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SelectParameters => __isa(o, "SelectParameters");
}

export type ServerSideEncryption = "AES256" | "aws:kms";

/**
 * <p>Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface ServerSideEncryptionByDefault {
  __type?: "ServerSideEncryptionByDefault";
  /**
   * <p>KMS master key ID to use for the default encryption. This parameter is allowed if and only if <code>SSEAlgorithm</code> is set to <code>aws:kms</code>.</p>
   */
  KMSMasterKeyID?: string;

  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm: ServerSideEncryption | string | undefined;
}

export namespace ServerSideEncryptionByDefault {
  export const filterSensitiveLog = (obj: ServerSideEncryptionByDefault): any => ({
    ...obj,
    ...(obj.KMSMasterKeyID && { KMSMasterKeyID: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ServerSideEncryptionByDefault => __isa(o, "ServerSideEncryptionByDefault");
}

/**
 * <p>Specifies the default server-side-encryption configuration.</p>
 */
export interface ServerSideEncryptionConfiguration {
  __type?: "ServerSideEncryptionConfiguration";
  /**
   * <p>Container for information about a particular server-side encryption configuration rule.</p>
   */
  Rules: ServerSideEncryptionRule[] | undefined;
}

export namespace ServerSideEncryptionConfiguration {
  export const filterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ServerSideEncryptionRule.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ServerSideEncryptionConfiguration => __isa(o, "ServerSideEncryptionConfiguration");
}

/**
 * <p>Specifies the default server-side encryption configuration.</p>
 */
export interface ServerSideEncryptionRule {
  __type?: "ServerSideEncryptionRule";
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
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
  export const isa = (o: any): o is ServerSideEncryptionRule => __isa(o, "ServerSideEncryptionRule");
}

/**
 * <p>A container that describes additional filters for identifying the source objects that you
 *       want to replicate. You can choose to enable or disable the replication of these objects.
 *       Currently, Amazon S3 supports only the filter that you can specify for objects created with
 *       server-side encryption using a customer master key (CMK) stored in AWS Key Management Service (SSE-KMS).</p>
 */
export interface SourceSelectionCriteria {
  __type?: "SourceSelectionCriteria";
  /**
   * <p> A container for filter information for the selection of Amazon S3 objects encrypted with AWS
   *       KMS.  If you include <code>SourceSelectionCriteria</code> in the replication configuration,
   *       this element is required. </p>
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
}

export namespace SourceSelectionCriteria {
  export const filterSensitiveLog = (obj: SourceSelectionCriteria): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SourceSelectionCriteria => __isa(o, "SourceSelectionCriteria");
}

/**
 * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
 */
export interface SSEKMS {
  __type?: "SSEKMS";
  /**
   * <p>Specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) to use
   *          for encrypting inventory reports.</p>
   */
  KeyId: string | undefined;
}

export namespace SSEKMS {
  export const filterSensitiveLog = (obj: SSEKMS): any => ({
    ...obj,
    ...(obj.KeyId && { KeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is SSEKMS => __isa(o, "SSEKMS");
}

/**
 * <p>A container for filter information for the selection of S3 objects encrypted with AWS
 *       KMS.</p>
 */
export interface SseKmsEncryptedObjects {
  __type?: "SseKmsEncryptedObjects";
  /**
   * <p>Specifies whether Amazon S3 replicates objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service.</p>
   */
  Status: SseKmsEncryptedObjectsStatus | string | undefined;
}

export namespace SseKmsEncryptedObjects {
  export const filterSensitiveLog = (obj: SseKmsEncryptedObjects): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SseKmsEncryptedObjects => __isa(o, "SseKmsEncryptedObjects");
}

export type SseKmsEncryptedObjectsStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
 */
export interface SSES3 {
  __type?: "SSES3";
}

export namespace SSES3 {
  export const filterSensitiveLog = (obj: SSES3): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SSES3 => __isa(o, "SSES3");
}

/**
 * <p>Container for the stats details.</p>
 */
export interface Stats {
  __type?: "Stats";
  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * <p>The total number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;

  /**
   * <p>The total number of object bytes scanned.</p>
   */
  BytesScanned?: number;
}

export namespace Stats {
  export const filterSensitiveLog = (obj: Stats): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Stats => __isa(o, "Stats");
}

/**
 * <p>Container for the Stats Event.</p>
 */
export interface StatsEvent {
  __type?: "StatsEvent";
  /**
   * <p>The Stats event details.</p>
   */
  Details?: Stats;
}

export namespace StatsEvent {
  export const filterSensitiveLog = (obj: StatsEvent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StatsEvent => __isa(o, "StatsEvent");
}

export type StorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";

/**
 * <p>Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.</p>
 */
export interface StorageClassAnalysis {
  __type?: "StorageClassAnalysis";
  /**
   * <p>Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.</p>
   */
  DataExport?: StorageClassAnalysisDataExport;
}

export namespace StorageClassAnalysis {
  export const filterSensitiveLog = (obj: StorageClassAnalysis): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StorageClassAnalysis => __isa(o, "StorageClassAnalysis");
}

/**
 * <p>Container for data related to the storage class analysis for an Amazon S3 bucket for export.</p>
 */
export interface StorageClassAnalysisDataExport {
  __type?: "StorageClassAnalysisDataExport";
  /**
   * <p>The place to store the data for an analysis.</p>
   */
  Destination: AnalyticsExportDestination | undefined;

  /**
   * <p>The version of the output schema to use when exporting data. Must be <code>V_1</code>.</p>
   */
  OutputSchemaVersion: StorageClassAnalysisSchemaVersion | string | undefined;
}

export namespace StorageClassAnalysisDataExport {
  export const filterSensitiveLog = (obj: StorageClassAnalysisDataExport): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StorageClassAnalysisDataExport => __isa(o, "StorageClassAnalysisDataExport");
}

export type StorageClassAnalysisSchemaVersion = "V_1";

/**
 * <p>A container of a key value name pair.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>Name of the tag.</p>
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
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>Container for <code>TagSet</code> elements.</p>
 */
export interface Tagging {
  __type?: "Tagging";
  /**
   * <p>A collection for a set of tags</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace Tagging {
  export const filterSensitiveLog = (obj: Tagging): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tagging => __isa(o, "Tagging");
}

export type TaggingDirective = "COPY" | "REPLACE";

/**
 * <p>Container for granting information.</p>
 */
export interface TargetGrant {
  __type?: "TargetGrant";
  /**
   * <p>Container for the person being granted permissions.</p>
   */
  Grantee?: Grantee;

  /**
   * <p>Logging permissions assigned to the Grantee for the bucket.</p>
   */
  Permission?: BucketLogsPermission | string;
}

export namespace TargetGrant {
  export const filterSensitiveLog = (obj: TargetGrant): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TargetGrant => __isa(o, "TargetGrant");
}

export type Tier = "Bulk" | "Expedited" | "Standard";

/**
 * <p>A container for specifying the configuration for publication of messages to an Amazon Simple
 *       Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.</p>
 */
export interface TopicConfiguration {
  __type?: "TopicConfiguration";
  /**
   * <p>The Amazon S3 bucket event about which to send notifications. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event
   *             Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *         Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *         Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;

  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you don't
   *       provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a
   *       message when it detects events of the specified type.</p>
   */
  TopicArn: string | undefined;
}

export namespace TopicConfiguration {
  export const filterSensitiveLog = (obj: TopicConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TopicConfiguration => __isa(o, "TopicConfiguration");
}

/**
 * <p>Specifies when an object transitions to a specified storage class.</p>
 */
export interface Transition {
  __type?: "Transition";
  /**
   * <p>Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.</p>
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
  export const isa = (o: any): o is Transition => __isa(o, "Transition");
}

export type TransitionStorageClass = "DEEP_ARCHIVE" | "GLACIER" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA";

export type Type = "AmazonCustomerByEmail" | "CanonicalUser" | "Group";

export interface UploadPartCopyOutput {
  __type?: "UploadPartCopyOutput";
  /**
   * <p>Container for all response elements.</p>
   */
  CopyPartResult?: CopyPartResult;

  /**
   * <p>The version of the source object that was copied, if you have enabled versioning on the source bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;
}

export namespace UploadPartCopyOutput {
  export const filterSensitiveLog = (obj: UploadPartCopyOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UploadPartCopyOutput => __isa(o, "UploadPartCopyOutput");
}

export interface UploadPartCopyRequest {
  __type?: "UploadPartCopyRequest";
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name of the source bucket and key name of the source object, separated by a slash (/). Must be URL-encoded.</p>
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
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *          bytes=first-last, where the first and last are the zero-based byte offsets to copy. For
   *          example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You
   *          can copy a range only if the source object is greater than 5 MB.</p>
   */
  CopySourceRange?: string;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example, AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being copied. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm</code> header. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   */
  UploadId: string | undefined;
}

export namespace UploadPartCopyRequest {
  export const filterSensitiveLog = (obj: UploadPartCopyRequest): any => ({
    ...obj,
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UploadPartCopyRequest => __isa(o, "UploadPartCopyRequest");
}

export interface UploadPartOutput {
  __type?: "UploadPartOutput";
  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response
   *          will include this header to provide round-trip message integrity verification of the
   *          customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key
   *          (CMK) was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;
}

export namespace UploadPartOutput {
  export const filterSensitiveLog = (obj: UploadPartOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UploadPartOutput => __isa(o, "UploadPartOutput");
}

export interface UploadPartRequest {
  __type?: "UploadPartRequest";
  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined automatically.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when
   *          using the command from the CLI. This parameter is required if object lock parameters are
   *          specified.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being uploaded. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requestor Pays Buckets</a> in the
   *             <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example, AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side​-encryption​-customer-algorithm header</code>. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   */
  UploadId: string | undefined;
}

export namespace UploadPartRequest {
  export const filterSensitiveLog = (obj: UploadPartRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UploadPartRequest => __isa(o, "UploadPartRequest");
}

/**
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket versioning</a> in the
 *          <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface VersioningConfiguration {
  __type?: "VersioningConfiguration";
  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only returned if the bucket has been configured with MFA delete. If the bucket has never been so configured, this element is not returned.</p>
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
  export const isa = (o: any): o is VersioningConfiguration => __isa(o, "VersioningConfiguration");
}

/**
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 */
export interface WebsiteConfiguration {
  __type?: "WebsiteConfiguration";
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
  export const isa = (o: any): o is WebsiteConfiguration => __isa(o, "WebsiteConfiguration");
}
