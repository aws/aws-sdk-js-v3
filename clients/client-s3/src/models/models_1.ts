// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { StreamingBlobTypes } from "@smithy/types";

import {
  AccessControlPolicy,
  BucketVersioningStatus,
  ChecksumAlgorithm,
  ErrorDocument,
  Grant,
  IndexDocument,
  ObjectCannedACL,
  ObjectLockConfiguration,
  ObjectLockLegalHold,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetention,
  Payer,
  PublicAccessBlockConfiguration,
  RedirectAllRequestsTo,
  ReplicationConfiguration,
  ReplicationStatus,
  RequestCharged,
  RequestPayer,
  RoutingRule,
  ServerSideEncryption,
  StorageClass,
  Tag,
} from "./models_0";

import { S3ServiceException as __BaseException } from "./S3ServiceException";

/**
 * @public
 */
export interface PutBucketReplicationRequest {
  /**
   * <p>The name of the bucket</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   * @public
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   * @public
   */
  Token?: string;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * <p>Container for Payer.</p>
 * @public
 */
export interface RequestPaymentConfiguration {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   * @public
   */
  Payer: Payer | undefined;
}

/**
 * @public
 */
export interface PutBucketRequestPaymentRequest {
  /**
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>Container for Payer.</p>
   * @public
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * <p>Container for <code>TagSet</code> elements.</p>
 * @public
 */
export interface Tagging {
  /**
   * <p>A collection for a set of tags</p>
   * @public
   */
  TagSet: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBucketTaggingRequest {
  /**
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements.</p>
   * @public
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 * @enum
 */
export const MFADelete = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type MFADelete = (typeof MFADelete)[keyof typeof MFADelete];

/**
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT
 *             Bucket versioning</a> in the <i>Amazon S3 API Reference</i>.</p>
 * @public
 */
export interface VersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is only returned if the bucket has been configured with MFA delete. If the bucket
   *          has never been so configured, this element is not returned.</p>
   * @public
   */
  MFADelete?: MFADelete;

  /**
   * <p>The versioning state of the bucket.</p>
   * @public
   */
  Status?: BucketVersioningStatus;
}

/**
 * @public
 */
export interface PutBucketVersioningRequest {
  /**
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   * @public
   */
  MFA?: string;

  /**
   * <p>Container for setting the versioning state.</p>
   * @public
   */
  VersioningConfiguration: VersioningConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 * @public
 */
export interface WebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   * @public
   */
  ErrorDocument?: ErrorDocument;

  /**
   * <p>The name of the index document for the website.</p>
   * @public
   */
  IndexDocument?: IndexDocument;

  /**
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p>
   *          <important>
   *             <p>If you specify this property, you can't specify any other property.</p>
   *          </important>
   * @public
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   * @public
   */
  RoutingRules?: RoutingRule[];
}

/**
 * @public
 */
export interface PutBucketWebsiteRequest {
  /**
   * <p>The bucket name.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>Container for the request.</p>
   * @public
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectOutput {
  /**
   * <p>If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>) in the <i>Amazon S3 User Guide</i>, the response includes this header. It
   *          includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs that provide
   *          information about object expiration. The value of the <code>rule-id</code> is
   *          URL-encoded.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  Expiration?: string;

  /**
   * <p>Entity tag for the uploaded object.</p>
   *          <p>
   *             <b>General purpose buckets </b> - To ensure that data is not corrupted traversing the network,
   *          for objects where the
   *          ETag is the MD5 digest of the object, you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to
   *       the calculated MD5 value.</p>
   *          <p>
   *             <b>Directory buckets </b> - The ETag for the object in a directory bucket isn't the MD5 digest of the object.</p>
   * @public
   */
  ETag?: string;

  /**
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string;

  /**
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string;

  /**
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string;

  /**
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string;

  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   *          <note>
   *             <p>For directory buckets, only server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) is supported.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>Version ID of the object.</p>
   *          <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID
   *          for the object being stored. Amazon S3 returns this ID in the response. When you enable
   *          versioning for a bucket, if Amazon S3 receives multiple write requests for the same object
   *          simultaneously, it stores all of the objects. For more information about versioning, see
   *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to
   *             Versioning-Enabled Buckets</a> in the <i>Amazon S3
   *                User Guide</i>. For information about returning the versioning state
   *          of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  VersionId?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide the round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> has a valid value of <code>aws:kms</code>
   *          or <code>aws:kms:dsse</code>, this header indicates the ID of the Key Management Service (KMS)
   *          symmetric encryption customer managed key that was used for the object. </p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs. This value is stored as object metadata and automatically gets
   *          passed on to Amazon Web Services KMS for future <code>GetObject</code> or <code>CopyObject</code>
   *          operations on this object.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface PutObjectRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *          ACL</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>When adding a new object, you can use headers to grant ACL-based permissions to
   *          individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are
   *          then added to the ACL on the object. By default, all objects are private. Only the owner
   *          has full access control. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List (ACL) Overview</a>
   *          and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing
   *             ACLs Using the REST API</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If the bucket that you're uploading objects to uses the bucket owner enforced setting
   *          for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that
   *          use this setting only accept PUT requests that don't specify an ACL or PUT requests that
   *          specify bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code>
   *          canned ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that
   *          contain other ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a
   *          <code>400</code> error with the error code <code>AccessControlListNotSupported</code>.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling ownership of
   *             objects and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This functionality is not supported for directory buckets.</p>
   *                </li>
   *                <li>
   *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ACL?: ObjectCannedACL;

  /**
   * <p>Object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes;

  /**
   * <p>The bucket name to which the PUT action was initiated. </p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Availability Zone. Bucket names must follow the format <code>
   *                <i>bucket_base_name</i>--<i>az-id</i>--x-s3</code> (for example, <code>
   *                <i>DOC-EXAMPLE-BUCKET</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Access points and Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Can be used to specify caching behavior along the request/reply chain. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   * @public
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc6266#section-4">https://www.rfc-editor.org/rfc/rfc6266#section-4</a>.</p>
   * @public
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding">https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding</a>.</p>
   * @public
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   * @public
   */
  ContentLanguage?: string;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length</a>.</p>
   * @public
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to
   *          RFC 1864. This header can be used as a message integrity check to verify that the data is
   *          the same data that was originally sent. Although it is optional, we recommend using the
   *          Content-MD5 mechanism as an end-to-end integrity check. For more information about REST
   *          request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>.</p>
   *          <note>
   *             <p>The <code>Content-MD5</code> header is required for any request to upload an
   *          object with a retention period configured using Amazon S3 Object Lock. For more
   *          information about Amazon S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html">Amazon S3 Object Lock
   *             Overview</a> in the <i>Amazon S3 User Guide</i>. </p>
   *          </note>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>A standard MIME type describing the format of the contents. For more information, see
   *             <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type</a>.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum-<i>algorithm</i>
   *             </code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>.</p>
   *          <p>For the <code>x-amz-checksum-<i>algorithm</i>
   *             </code> header, replace <code>
   *                <i>algorithm</i>
   *             </code> with the supported algorithm from the following list: </p>
   *          <ul>
   *             <li>
   *                <p>CRC32</p>
   *             </li>
   *             <li>
   *                <p>CRC32C</p>
   *             </li>
   *             <li>
   *                <p>SHA1</p>
   *             </li>
   *             <li>
   *                <p>SHA256</p>
   *             </li>
   *          </ul>
   *          <p>For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If the individual checksum value you provide through <code>x-amz-checksum-<i>algorithm</i>
   *             </code> doesn't match the checksum algorithm you set through <code>x-amz-sdk-checksum-algorithm</code>,  Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter and uses the checksum algorithm that matches the provided value in <code>x-amz-checksum-<i>algorithm</i>
   *             </code>.</p>
   *          <note>
   *             <p>For directory buckets, when you use Amazon Web Services SDKs, <code>CRC32</code> is the default checksum algorithm that's used for performance.</p>
   *          </note>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable. For more information, see
   *             <a href="https://www.rfc-editor.org/rfc/rfc7234#section-5.3">https://www.rfc-editor.org/rfc/rfc7234#section-5.3</a>.</p>
   * @public
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the object.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This functionality is not supported for directory buckets.</p>
   *                </li>
   *                <li>
   *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its metadata.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This functionality is not supported for directory buckets.</p>
   *                </li>
   *                <li>
   *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This functionality is not supported for directory buckets.</p>
   *                </li>
   *                <li>
   *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable object.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>This functionality is not supported for directory buckets.</p>
   *                </li>
   *                <li>
   *                   <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  GrantWriteACP?: string;

  /**
   * <p>Object key for which the PUT action was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   * @public
   */
  Metadata?: Record<string, string>;

  /**
   * <p>The server-side encryption algorithm that was used when you store this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>, <code>aws:kms:dsse</code>).</p>
   *          <p>
   *             <b>General purpose buckets </b> - You have four mutually exclusive options to protect data using server-side encryption in
   *                Amazon S3, depending on how you choose to manage the encryption keys. Specifically, the
   *                encryption key options are Amazon S3 managed keys (SSE-S3), Amazon Web Services KMS keys (SSE-KMS or
   *                DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with server-side
   *                encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3 to
   *                encrypt data at rest by using server-side encryption with other key options. For more
   *                information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side
   *                   Encryption</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Directory buckets </b> - For directory buckets, only the server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) value is supported.</p>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
   *             <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>For directory buckets, only the S3 Express One Zone storage class is supported to store newly created objects.</p>
   *                </li>
   *                <li>
   *                   <p>Amazon S3 on Outposts only uses
   *                the OUTPOSTS Storage Class.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  StorageClass?: StorageClass;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3
   *                User Guide</i>.</p>
   *          <p>In the following example, the request header sets the redirect to an object
   *          (anotherPage.html) in the same bucket:</p>
   *          <p>
   *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
   *          </p>
   *          <p>In the following example, the request header sets the object redirect to another
   *          website:</p>
   *          <p>
   *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
   *          </p>
   *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to
   *                Configure Website Page Redirects</a> in the <i>Amazon S3
   *                   User Guide</i>. </p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example,
   *          <code>AES256</code>).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If <code>x-amz-server-side-encryption</code> has a valid value of <code>aws:kms</code>
   *          or <code>aws:kms:dsse</code>, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the Key Management Service (KMS)
   *          symmetric encryption customer managed key that was used for the object. If you specify
   *             <code>x-amz-server-side-encryption:aws:kms</code> or
   *             <code>x-amz-server-side-encryption:aws:kms:dsse</code>, but do not provide<code>
   *             x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the Amazon Web Services managed key
   *             (<code>aws/s3</code>) to protect the data. If the KMS key does not exist in the same
   *          account that's issuing the command, you must use the full ARN and not just the ID. </p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
   *          this header is a base64-encoded UTF-8 string holding JSON with the encryption context
   *          key-value pairs. This value is stored as object metadata and automatically gets passed on
   *          to Amazon Web Services KMS for future <code>GetObject</code> or <code>CopyObject</code> operations on
   *          this object. This value must be explicitly added during <code>CopyObject</code> operations.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Key Management Service (KMS) keys (SSE-KMS). Setting this header to
   *             <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with
   *          SSE-KMS.</p>
   *          <p>Specifying this header with a PUT action doesn’t affect bucket-level settings for S3
   *          Bucket Key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For
   *          example, "Key1=Value1")</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  Tagging?: string;

  /**
   * <p>The Object Lock mode that you want to apply to this object.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockMode?: ObjectLockMode;

  /**
   * <p>The date and time when you want this object's Object Lock to expire. Must be formatted
   *          as a timestamp parameter.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether a legal hold will be applied to this object. For more information
   *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectAclOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface PutObjectAclRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *             ACL</a>.</p>
   * @public
   */
  ACL?: ObjectCannedACL;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   * @public
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket name that contains the object to which you want to attach the ACL. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.></a>
   *          </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create new objects in the bucket.</p>
   *          <p>For the bucket and object owners of existing objects, also allows deletions and
   *          overwrites of those objects.</p>
   * @public
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantWriteACP?: string;

  /**
   * <p>Key for which the PUT action was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>Version ID used to reference a specific version of the object.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  VersionId?: string;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectLegalHoldOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface PutObjectLegalHoldRequest {
  /**
   * <p>The bucket name containing the object that you want to place a legal hold on. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to place a legal hold on.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Container element for the legal hold configuration you want to apply to the specified
   *          object.</p>
   * @public
   */
  LegalHold?: ObjectLockLegalHold;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>The version ID of the object that you want to place a legal hold on.</p>
   * @public
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectLockConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface PutObjectLockConfigurationRequest {
  /**
   * <p>The bucket whose Object Lock configuration you want to create or replace.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Object Lock configuration that you want to apply to the specified bucket.</p>
   * @public
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   * @public
   */
  Token?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectRetentionOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface PutObjectRetentionRequest {
  /**
   * <p>The bucket name that contains the object you want to apply this Object Retention
   *          configuration to. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to apply this Object Retention configuration
   *          to.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The container element for the Object Retention configuration.</p>
   * @public
   */
  Retention?: ObjectLockRetention;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>The version ID for the object that you want to apply this Object Retention configuration
   *          to.</p>
   * @public
   */
  VersionId?: string;

  /**
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   * @public
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface PutObjectTaggingOutput {
  /**
   * <p>The versionId of the object the tag-set was added to.</p>
   * @public
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface PutObjectTaggingRequest {
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Name of the object key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be added to.</p>
   * @public
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements</p>
   * @public
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;
}

/**
 * @public
 */
export interface PutPublicAccessBlockRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body. </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          bucket. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * <p>This action is not allowed against this storage tier.</p>
 * @public
 */
export class ObjectAlreadyInActiveTierError extends __BaseException {
  readonly name: "ObjectAlreadyInActiveTierError" = "ObjectAlreadyInActiveTierError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectAlreadyInActiveTierError, __BaseException>) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
  }
}

/**
 * @public
 */
export interface RestoreObjectOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;

  /**
   * <p>Indicates the path in the provided S3 output location where Select results will be
   *          restored to.</p>
   * @public
   */
  RestoreOutputPath?: string;
}

/**
 * @public
 * @enum
 */
export const Tier = {
  Bulk: "Bulk",
  Expedited: "Expedited",
  Standard: "Standard",
} as const;

/**
 * @public
 */
export type Tier = (typeof Tier)[keyof typeof Tier];

/**
 * <p>Container for S3 Glacier job parameters.</p>
 * @public
 */
export interface GlacierJobParameters {
  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   * @public
   */
  Tier: Tier | undefined;
}

/**
 * <p>Contains the type of server-side encryption used.</p>
 * @public
 */
export interface Encryption {
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (for example,
   *          AES256, <code>aws:kms</code>).</p>
   * @public
   */
  EncryptionType: ServerSideEncryption | undefined;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value specifies the ID of
   *          the symmetric encryption customer managed key to use for encryption of job results. Amazon S3 only
   *          supports symmetric encryption KMS keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in KMS</a> in the <i>Amazon Web Services Key Management Service
   *             Developer Guide</i>.</p>
   * @public
   */
  KMSKeyId?: string;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value can be used to
   *          specify the encryption context for the restore results.</p>
   * @public
   */
  KMSContext?: string;
}

/**
 * <p>A metadata key-value pair to store with an object.</p>
 * @public
 */
export interface MetadataEntry {
  /**
   * <p>Name of the object.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Value of the object.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Describes an Amazon S3 location that will receive the results of the restore request.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of the bucket where the restore results will be placed.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The prefix that is prepended to the restore results for this request.</p>
   * @public
   */
  Prefix: string | undefined;

  /**
   * <p>Contains the type of server-side encryption used.</p>
   * @public
   */
  Encryption?: Encryption;

  /**
   * <p>The canned ACL to apply to the restore results.</p>
   * @public
   */
  CannedACL?: ObjectCannedACL;

  /**
   * <p>A list of grants that control access to the staged results.</p>
   * @public
   */
  AccessControlList?: Grant[];

  /**
   * <p>The tag-set that is applied to the restore results.</p>
   * @public
   */
  Tagging?: Tagging;

  /**
   * <p>A list of metadata to store with the restore results in S3.</p>
   * @public
   */
  UserMetadata?: MetadataEntry[];

  /**
   * <p>The class of storage used to store the restore results.</p>
   * @public
   */
  StorageClass?: StorageClass;
}

/**
 * <p>Describes the location where the restore job's output is stored.</p>
 * @public
 */
export interface OutputLocation {
  /**
   * <p>Describes an S3 location that will receive the results of the restore request.</p>
   * @public
   */
  S3?: S3Location;
}

/**
 * @public
 * @enum
 */
export const ExpressionType = {
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type ExpressionType = (typeof ExpressionType)[keyof typeof ExpressionType];

/**
 * @public
 * @enum
 */
export const CompressionType = {
  BZIP2: "BZIP2",
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const FileHeaderInfo = {
  IGNORE: "IGNORE",
  NONE: "NONE",
  USE: "USE",
} as const;

/**
 * @public
 */
export type FileHeaderInfo = (typeof FileHeaderInfo)[keyof typeof FileHeaderInfo];

/**
 * <p>Describes how an uncompressed comma-separated values (CSV)-formatted input object is
 *          formatted.</p>
 * @public
 */
export interface CSVInput {
  /**
   * <p>Describes the first line of input. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: First line is not a header.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IGNORE</code>: First line is a header, but you can't use the header values
   *                to indicate the column in an expression. You can use column position (such as _1, _2,
   *                …) to indicate the column (<code>SELECT s._1 FROM OBJECT s</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Use</code>: First line is a header, and you can use the header value to
   *                identify a column in an expression (<code>SELECT "name" FROM OBJECT</code>). </p>
   *             </li>
   *          </ul>
   * @public
   */
  FileHeaderInfo?: FileHeaderInfo;

  /**
   * <p>A single character used to indicate that a row should be ignored when the character is
   *          present at the start of that row. You can specify any character to indicate a comment line.
   *          The default character is <code>#</code>.</p>
   *          <p>Default: <code>#</code>
   *          </p>
   * @public
   */
  Comments?: string;

  /**
   * <p>A single character used for escaping the quotation mark character inside an already
   *          escaped value. For example, the value <code>""" a , b """</code> is parsed as <code>" a , b
   *             "</code>.</p>
   * @public
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A single character used to separate individual records in the input. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   * @public
   */
  RecordDelimiter?: string;

  /**
   * <p>A single character used to separate individual fields in a record. You can specify an
   *          arbitrary delimiter.</p>
   * @public
   */
  FieldDelimiter?: string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   *          <p>Type: String</p>
   *          <p>Default: <code>"</code>
   *          </p>
   *          <p>Ancestors: <code>CSV</code>
   *          </p>
   * @public
   */
  QuoteCharacter?: string;

  /**
   * <p>Specifies that CSV field values may contain quoted record delimiters and such records
   *          should be allowed. Default value is FALSE. Setting this value to TRUE may lower
   *          performance.</p>
   * @public
   */
  AllowQuotedRecordDelimiter?: boolean;
}

/**
 * @public
 * @enum
 */
export const JSONType = {
  DOCUMENT: "DOCUMENT",
  LINES: "LINES",
} as const;

/**
 * @public
 */
export type JSONType = (typeof JSONType)[keyof typeof JSONType];

/**
 * <p>Specifies JSON as object's input serialization format.</p>
 * @public
 */
export interface JSONInput {
  /**
   * <p>The type of JSON. Valid values: Document, Lines.</p>
   * @public
   */
  Type?: JSONType;
}

/**
 * <p>Container for Parquet.</p>
 * @public
 */
export interface ParquetInput {}

/**
 * <p>Describes the serialization format of the object.</p>
 * @public
 */
export interface InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   * @public
   */
  CSV?: CSVInput;

  /**
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value:
   *          NONE.</p>
   * @public
   */
  CompressionType?: CompressionType;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   * @public
   */
  JSON?: JSONInput;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   * @public
   */
  Parquet?: ParquetInput;
}

/**
 * @public
 * @enum
 */
export const QuoteFields = {
  ALWAYS: "ALWAYS",
  ASNEEDED: "ASNEEDED",
} as const;

/**
 * @public
 */
export type QuoteFields = (typeof QuoteFields)[keyof typeof QuoteFields];

/**
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are
 *          formatted.</p>
 * @public
 */
export interface CSVOutput {
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
   * @public
   */
  QuoteFields?: QuoteFields;

  /**
   * <p>The single character used for escaping the quote character inside an already escaped
   *          value.</p>
   * @public
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A single character used to separate individual records in the output. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   * @public
   */
  RecordDelimiter?: string;

  /**
   * <p>The value used to separate individual fields in a record. You can specify an arbitrary
   *          delimiter.</p>
   * @public
   */
  FieldDelimiter?: string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   * @public
   */
  QuoteCharacter?: string;
}

/**
 * <p>Specifies JSON as request's output serialization format.</p>
 * @public
 */
export interface JSONOutput {
  /**
   * <p>The value used to separate individual records in the output. If no value is specified,
   *          Amazon S3 uses a newline character ('\n').</p>
   * @public
   */
  RecordDelimiter?: string;
}

/**
 * <p>Describes how results of the Select job are serialized.</p>
 * @public
 */
export interface OutputSerialization {
  /**
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   * @public
   */
  CSV?: CSVOutput;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   * @public
   */
  JSON?: JSONOutput;
}

/**
 * <p>Describes the parameters for Select job types.</p>
 * @public
 */
export interface SelectParameters {
  /**
   * <p>Describes the serialization format of the object.</p>
   * @public
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * <p>The expression that is used to query the object.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>Describes how the results of the Select job are serialized.</p>
   * @public
   */
  OutputSerialization: OutputSerialization | undefined;
}

/**
 * @public
 * @enum
 */
export const RestoreRequestType = {
  SELECT: "SELECT",
} as const;

/**
 * @public
 */
export type RestoreRequestType = (typeof RestoreRequestType)[keyof typeof RestoreRequestType];

/**
 * <p>Container for restore job parameters.</p>
 * @public
 */
export interface RestoreRequest {
  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *          requests.</p>
   * @public
   */
  Days?: number;

  /**
   * <p>S3 Glacier related parameters pertaining to this job. Do not use with restores that
   *          specify <code>OutputLocation</code>.</p>
   * @public
   */
  GlacierJobParameters?: GlacierJobParameters;

  /**
   * <p>Type of restore request.</p>
   * @public
   */
  Type?: RestoreRequestType;

  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   * @public
   */
  Tier?: Tier;

  /**
   * <p>The optional description for the job.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Describes the parameters for Select job types.</p>
   * @public
   */
  SelectParameters?: SelectParameters;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   * @public
   */
  OutputLocation?: OutputLocation;
}

/**
 * @public
 */
export interface RestoreObjectRequest {
  /**
   * <p>The bucket name containing the object to restore. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the action was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   * @public
   */
  VersionId?: string;

  /**
   * <p>Container for restore job parameters.</p>
   * @public
   */
  RestoreRequest?: RestoreRequest;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * <p></p>
 * @public
 */
export interface ContinuationEvent {}

/**
 * <p>A message that indicates the request is complete and no more messages will be sent. You
 *          should not assume that the request is complete until the client receives an
 *             <code>EndEvent</code>.</p>
 * @public
 */
export interface EndEvent {}

/**
 * <p>This data type contains information about progress of an operation.</p>
 * @public
 */
export interface Progress {
  /**
   * <p>The current number of object bytes scanned.</p>
   * @public
   */
  BytesScanned?: number;

  /**
   * <p>The current number of uncompressed object bytes processed.</p>
   * @public
   */
  BytesProcessed?: number;

  /**
   * <p>The current number of bytes of records payload data returned.</p>
   * @public
   */
  BytesReturned?: number;
}

/**
 * <p>This data type contains information about the progress event of an operation.</p>
 * @public
 */
export interface ProgressEvent {
  /**
   * <p>The Progress event details.</p>
   * @public
   */
  Details?: Progress;
}

/**
 * <p>The container for the records event.</p>
 * @public
 */
export interface RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records.</p>
   * @public
   */
  Payload?: Uint8Array;
}

/**
 * <p>Container for the stats details.</p>
 * @public
 */
export interface Stats {
  /**
   * <p>The total number of object bytes scanned.</p>
   * @public
   */
  BytesScanned?: number;

  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   * @public
   */
  BytesProcessed?: number;

  /**
   * <p>The total number of bytes of records payload data returned.</p>
   * @public
   */
  BytesReturned?: number;
}

/**
 * <p>Container for the Stats Event.</p>
 * @public
 */
export interface StatsEvent {
  /**
   * <p>The Stats event details.</p>
   * @public
   */
  Details?: Stats;
}

/**
 * <p>The container for selecting objects from a content event stream.</p>
 * @public
 */
export type SelectObjectContentEventStream =
  | SelectObjectContentEventStream.ContMember
  | SelectObjectContentEventStream.EndMember
  | SelectObjectContentEventStream.ProgressMember
  | SelectObjectContentEventStream.RecordsMember
  | SelectObjectContentEventStream.StatsMember
  | SelectObjectContentEventStream.$UnknownMember;

/**
 * @public
 */
export namespace SelectObjectContentEventStream {
  /**
   * <p>The Records Event.</p>
   * @public
   */
  export interface RecordsMember {
    Records: RecordsEvent;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stats Event.</p>
   * @public
   */
  export interface StatsMember {
    Records?: never;
    Stats: StatsEvent;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Progress Event.</p>
   * @public
   */
  export interface ProgressMember {
    Records?: never;
    Stats?: never;
    Progress: ProgressEvent;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Continuation Event.</p>
   * @public
   */
  export interface ContMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont: ContinuationEvent;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The End Event.</p>
   * @public
   */
  export interface EndMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End: EndEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Records: (value: RecordsEvent) => T;
    Stats: (value: StatsEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    End: (value: EndEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelectObjectContentEventStream, visitor: Visitor<T>): T => {
    if (value.Records !== undefined) return visitor.Records(value.Records);
    if (value.Stats !== undefined) return visitor.Stats(value.Stats);
    if (value.Progress !== undefined) return visitor.Progress(value.Progress);
    if (value.Cont !== undefined) return visitor.Cont(value.Cont);
    if (value.End !== undefined) return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SelectObjectContentOutput {
  /**
   * <p>The array of results.</p>
   * @public
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream>;
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be
 *          sent.</p>
 * @public
 */
export interface RequestProgress {
  /**
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE,
   *          FALSE. Default value: FALSE.</p>
   * @public
   */
  Enabled?: boolean;
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed
 *          when its first byte is contained by the range. This parameter is optional, but when
 *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
 *          start and end of the range.</p>
 * @public
 */
export interface ScanRange {
  /**
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is 0. If only <code>start</code> is supplied, it
   *          means scan from that point to the end of the file. For example,
   *             <code><scanrange><start>50</start></scanrange></code> means scan
   *          from byte 50 until the end of the file.</p>
   * @public
   */
  Start?: number;

  /**
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is one less than the size of the object being
   *          queried. If only the End parameter is supplied, it is interpreted to mean scan the last N
   *          bytes of the file. For example,
   *             <code><scanrange><end>50</end></scanrange></code> means scan the
   *          last 50 bytes.</p>
   * @public
   */
  End?: number;
}

/**
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query
 *          Language (SQL) statement. In the request, along with the SQL expression, you must specify a
 *          data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data
 *          into records. It returns only records that match the specified SQL expression. You must
 *          also specify the data serialization format for the response. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
 * @public
 */
export interface SelectObjectContentRequest {
  /**
   * <p>The S3 bucket.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The object key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created
   *     using a checksum algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm.
   *     For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerKey?: string;

  /**
   * <p>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum
   *     algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>The expression that is used to query the object.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   * @public
   */
  ExpressionType: ExpressionType | undefined;

  /**
   * <p>Specifies if periodic request progress information should be enabled.</p>
   * @public
   */
  RequestProgress?: RequestProgress;

  /**
   * <p>Describes the format of the data in the object that is being queried.</p>
   * @public
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   * @public
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * <p>Specifies the byte range of the object to get the records from. A record is processed
   *          when its first byte is contained by the range. This parameter is optional, but when
   *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
   *          start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code>
   *                - process only the records starting between the bytes 50 and 100 (inclusive, counting
   *                from zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> -
   *                process only the records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> -
   *                process only the records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScanRange?: ScanRange;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * @public
 */
export interface UploadPartOutput {
  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>).</p>
   *          <note>
   *             <p>For directory buckets, only server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) is supported.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>Entity tag for the uploaded object.</p>
   * @public
   */
  ETag?: string;

  /**
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string;

  /**
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string;

  /**
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string;

  /**
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide the round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, indicates the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface UploadPartRequest {
  /**
   * <p>Object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Availability Zone. Bucket names must follow the format <code>
   *                <i>bucket_base_name</i>--<i>az-id</i>--x-s3</code> (for example, <code>
   *                <i>DOC-EXAMPLE-BUCKET</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Access points and Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically.</p>
   * @public
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated
   *          when using the command from the CLI. This parameter is required if object lock parameters
   *          are specified.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ContentMD5?: string;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided
   *             <code>ChecksumAlgorithm</code> parameter.</p>
   *          <p>This checksum algorithm must be the same for all parts and it match the checksum value
   *          supplied in the <code>CreateMultipartUpload</code> request.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32 checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 32-bit CRC32C checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 160-bit SHA-1 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the base64-encoded, 256-bit SHA-256 digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being uploaded. This is a positive integer between 1 and
   *          10,000.</p>
   * @public
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   * @public
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example,
   *          AES256).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm header</code>. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;
}

/**
 * <p>Container for all response elements.</p>
 * @public
 */
export interface CopyPartResult {
  /**
   * <p>Entity tag of the object.</p>
   * @public
   */
  ETag?: string;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   * @public
   */
  LastModified?: Date;

  /**
   * <p>The base64-encoded, 32-bit CRC32 checksum of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string;

  /**
   * <p>The base64-encoded, 32-bit CRC32C checksum of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string;

  /**
   * <p>The base64-encoded, 160-bit SHA-1 digest of the object. This will only be present if it was uploaded
   *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string;

  /**
   * <p>The base64-encoded, 256-bit SHA-256 digest of the object. This will only be present if it was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string;
}

/**
 * @public
 */
export interface UploadPartCopyOutput {
  /**
   * <p>The version of the source object that was copied, if you have enabled versioning on the
   *          source bucket.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceVersionId?: string;

  /**
   * <p>Container for all response elements.</p>
   * @public
   */
  CopyPartResult?: CopyPartResult;

  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 (for example,
   *             <code>AES256</code>, <code>aws:kms</code>).</p>
   *          <note>
   *             <p>For directory buckets, only server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) is supported.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide the round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, indicates the ID of the Key Management Service (KMS) symmetric encryption customer managed key
   *          that was used for the object.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption
   *          with Key Management Service (KMS) keys (SSE-KMS).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;
}

/**
 * @public
 */
export interface UploadPartCopyRequest {
  /**
   * <p>The bucket name.</p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Availability Zone. Bucket names must follow the format <code>
   *                <i>bucket_base_name</i>--<i>az-id</i>--x-s3</code> (for example, <code>
   *                <i>DOC-EXAMPLE-BUCKET</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Access points and Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts through the Amazon Web Services SDKs, you provide the Outposts access point ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the source object for the copy operation. You specify the value in one of two
   *          formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">access point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source bucket
   *                and key of the source object, separated by a slash (/). For example, to copy the
   *                object <code>reports/january.pdf</code> from the bucket
   *                <code>awsexamplebucket</code>, use <code>awsexamplebucket/reports/january.pdf</code>.
   *                The value must be URL-encoded.</p>
   *             </li>
   *             <li>
   *                <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p>
   *                <note>
   *                   <ul>
   *                      <li>
   *                         <p>Amazon S3 supports copy operations using Access points only when the source and destination buckets are in the same Amazon Web Services Region.</p>
   *                      </li>
   *                      <li>
   *                         <p>Access points are not supported by directory buckets.</p>
   *                      </li>
   *                   </ul>
   *                </note>
   *                <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL-encoded.  </p>
   *             </li>
   *          </ul>
   *          <p>If your bucket has versioning enabled, you could have multiple versions of the
   *          same object. By default, <code>x-amz-copy-source</code> identifies the current
   *          version of the source object to copy.
   *          To copy a specific version of the source object to copy, append <code>?versionId=<version-id></code>
   *          to the <code>x-amz-copy-source</code> request header (for example,
   *          <code>x-amz-copy-source: /awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>).
   *          </p>
   *          <p>If the current version is a delete marker and you
   *          don't specify a versionId in the <code>x-amz-copy-source</code> request header, Amazon S3 returns a
   *          <code>404 Not Found</code> error, because the object does not exist. If you specify versionId in the
   *          <code>x-amz-copy-source</code> and the versionId is a delete marker, Amazon S3
   *          returns an HTTP <code>400 Bad Request</code> error, because you are not allowed to specify a delete marker
   *          as a version for the <code>x-amz-copy-source</code>. </p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - S3 Versioning isn't enabled and supported for directory buckets.</p>
   *          </note>
   * @public
   */
  CopySource: string | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   *          <p>If both of the
   *       <code>x-amz-copy-source-if-match</code> and
   *       <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the
   *       request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>,
   *          and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to
   *          <code>false</code>;</p>
   *          <p>Amazon S3 returns <code>200 OK</code> and copies the data.
   *          </p>
   * @public
   */
  CopySourceIfMatch?: string;

  /**
   * <p>Copies the object if it has been modified since the specified time.</p>
   *          <p>If both of the
   *       <code>x-amz-copy-source-if-none-match</code> and
   *       <code>x-amz-copy-source-if-modified-since</code> headers are present in the
   *       request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-none-match</code> condition evaluates to
   *          <code>false</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-modified-since</code> condition evaluates to
   *          <code>true</code>;</p>
   *          <p>Amazon S3 returns <code>412 Precondition Failed</code> response code.
   *          </p>
   * @public
   */
  CopySourceIfModifiedSince?: Date;

  /**
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   *          <p>If both of the
   *       <code>x-amz-copy-source-if-none-match</code> and
   *       <code>x-amz-copy-source-if-modified-since</code> headers are present in the
   *       request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-none-match</code> condition evaluates to
   *          <code>false</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-modified-since</code> condition evaluates to
   *          <code>true</code>;</p>
   *          <p>Amazon S3 returns <code>412 Precondition Failed</code> response code.
   *          </p>
   * @public
   */
  CopySourceIfNoneMatch?: string;

  /**
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   *          <p>If both of the
   *          <code>x-amz-copy-source-if-match</code> and
   *          <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the
   *          request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>,
   *          and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to
   *          <code>false</code>;</p>
   *          <p>Amazon S3 returns <code>200 OK</code> and copies the data.
   *          </p>
   * @public
   */
  CopySourceIfUnmodifiedSince?: Date;

  /**
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *          bytes=first-last, where the first and last are the zero-based byte offsets to copy. For
   *          example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You
   *          can copy a range only if the source object is greater than 5 MB.</p>
   * @public
   */
  CopySourceRange?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being copied. This is a positive integer between 1 and
   *          10,000.</p>
   * @public
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   * @public
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example,
   *          AES256).</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *          <code>AES256</code>).</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source
   *          object. The encryption key provided in this header must be one that was used when the
   *          source object was created.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. If either the source or
   *          destination S3 bucket has Requester Pays enabled, the requester will pay for
   *          corresponding charges to copy the object. For information about downloading objects from
   *          Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requester Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer;

  /**
   * <p>The account ID of the expected destination bucket owner. If the account ID that you provide does not match the actual owner of the destination bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedSourceBucketOwner?: string;
}

/**
 * @public
 */
export interface WriteGetObjectResponseRequest {
  /**
   * <p>Route prefix to the HTTP URL generated.</p>
   * @public
   */
  RequestRoute: string | undefined;

  /**
   * <p>A single use encrypted token that maps <code>WriteGetObjectResponse</code> to the end
   *          user <code>GetObject</code> request.</p>
   * @public
   */
  RequestToken: string | undefined;

  /**
   * <p>The object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes;

  /**
   * <p>The integer status code for an HTTP response of a corresponding <code>GetObject</code>
   *          request. The following is a list of status codes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>200 - OK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>206 - Partial Content</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>304 - Not Modified</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>400 - Bad Request</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>401 - Unauthorized</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>403 - Forbidden</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>404 - Not Found</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>405 - Method Not Allowed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>409 - Conflict</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>411 - Length Required</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>412 - Precondition Failed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>416 - Range Not Satisfiable</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>500 - Internal Server Error</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>503 - Service Unavailable</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  StatusCode?: number;

  /**
   * <p>A string that uniquely identifies an error condition. Returned in the <Code> tag
   *          of the error XML response for a corresponding <code>GetObject</code> call. Cannot be used
   *          with a successful <code>StatusCode</code> header or when the transformed object is provided
   *          in the body. All error codes from S3 are sentence-cased. The regular expression (regex)
   *          value is <code>"^[A-Z][a-zA-Z]+$"</code>.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>Contains a generic description of the error condition. Returned in the <Message>
   *          tag of the error XML response for a corresponding <code>GetObject</code> call. Cannot be
   *          used with a successful <code>StatusCode</code> header or when the transformed object is
   *          provided in body.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>Indicates that a range of bytes was specified.</p>
   * @public
   */
  AcceptRanges?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   * @public
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   * @public
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   * @public
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   * @public
   */
  ContentLanguage?: string;

  /**
   * <p>The size of the content body in bytes.</p>
   * @public
   */
  ContentLength?: number;

  /**
   * <p>The portion of the object returned in the response.</p>
   * @public
   */
  ContentRange?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   * @public
   */
  ContentType?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC32
   *          checksum of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   *          <p></p>
   * @public
   */
  ChecksumCRC32?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 32-bit CRC32C
   *          checksum of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   * @public
   */
  ChecksumCRC32C?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 160-bit SHA-1
   *          digest of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   * @public
   */
  ChecksumSHA1?: string;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is
   *          the same data that was originally sent. This specifies the base64-encoded, 256-bit SHA-256
   *          digest of the object returned by the Object Lambda function. This may not match the
   *          checksum for the object stored in Amazon S3. Amazon S3 will perform validation of the checksum values
   *          only when the original <code>GetObject</code> request required checksum validation. For
   *          more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *             integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum
   *          headers, this request will fail.</p>
   * @public
   */
  ChecksumSHA256?: string;

  /**
   * <p>Specifies whether an object stored in Amazon S3 is (<code>true</code>) or is not
   *             (<code>false</code>) a delete marker. </p>
   * @public
   */
  DeleteMarker?: boolean;

  /**
   * <p>An opaque identifier assigned by a web server to a specific version of a resource found
   *          at a URL. </p>
   * @public
   */
  ETag?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   * @public
   */
  Expires?: Date;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes
   *          this header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value
   *          pairs that provide the object expiration information. The value of the <code>rule-id</code>
   *          is URL-encoded. </p>
   * @public
   */
  Expiration?: string;

  /**
   * <p>The date and time that the object was last modified.</p>
   * @public
   */
  LastModified?: Date;

  /**
   * <p>Set to the number of metadata entries not returned in <code>x-amz-meta</code> headers.
   *          This can happen if you create metadata using an API like SOAP that supports more flexible
   *          metadata than the REST API. For example, using SOAP, you can create metadata whose values
   *          are not legal HTTP headers.</p>
   * @public
   */
  MissingMeta?: number;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   * @public
   */
  Metadata?: Record<string, string>;

  /**
   * <p>Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information
   *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html">Object Lock</a>.</p>
   * @public
   */
  ObjectLockMode?: ObjectLockMode;

  /**
   * <p>Indicates whether an object stored in Amazon S3 has an active legal hold.</p>
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus;

  /**
   * <p>The date and time when Object Lock is configured to expire.</p>
   * @public
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>The count of parts this object has.</p>
   * @public
   */
  PartsCount?: number;

  /**
   * <p>Indicates if request involves bucket that is either a source or destination in a
   *          Replication rule. For more information about S3 Replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html">Replication</a>.</p>
   * @public
   */
  ReplicationStatus?: ReplicationStatus;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged;

  /**
   * <p>Provides information about object restoration operation and expiration time of the
   *          restored object copy.</p>
   * @public
   */
  Restore?: string;

  /**
   * <p> The server-side encryption algorithm used when storing requested object in Amazon S3 (for
   *          example, AES256, <code>aws:kms</code>).</p>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption;

  /**
   * <p>Encryption algorithm used if server-side encryption with a customer-provided encryption
   *          key was specified for object stored in Amazon S3.</p>
   * @public
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p> If present, specifies the ID (Key ID, Key ARN, or Key Alias) of the Amazon Web Services Key Management Service (Amazon Web Services KMS) symmetric
   *          encryption customer managed key that was used for stored in Amazon S3 object. </p>
   * @public
   */
  SSEKMSKeyId?: string;

  /**
   * <p> 128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data
   *          stored in S3. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">Protecting data
   *             using server-side encryption with customer-provided encryption keys
   *          (SSE-C)</a>.</p>
   * @public
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
   * @public
   */
  StorageClass?: StorageClass;

  /**
   * <p>The number of tags, if any, on the object.</p>
   * @public
   */
  TagCount?: number;

  /**
   * <p>An ID used to reference a specific version of the object.</p>
   * @public
   */
  VersionId?: string;

  /**
   * <p> Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side
   *          encryption with Amazon Web Services KMS (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean;
}

/**
 * @internal
 */
export const PutObjectOutputFilterSensitiveLog = (obj: PutObjectOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutObjectRequestFilterSensitiveLog = (obj: PutObjectRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EncryptionFilterSensitiveLog = (obj: Encryption): any => ({
  ...obj,
  ...(obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
  ...(obj.Encryption && { Encryption: EncryptionFilterSensitiveLog(obj.Encryption) }),
});

/**
 * @internal
 */
export const OutputLocationFilterSensitiveLog = (obj: OutputLocation): any => ({
  ...obj,
  ...(obj.S3 && { S3: S3LocationFilterSensitiveLog(obj.S3) }),
});

/**
 * @internal
 */
export const RestoreRequestFilterSensitiveLog = (obj: RestoreRequest): any => ({
  ...obj,
  ...(obj.OutputLocation && { OutputLocation: OutputLocationFilterSensitiveLog(obj.OutputLocation) }),
});

/**
 * @internal
 */
export const RestoreObjectRequestFilterSensitiveLog = (obj: RestoreObjectRequest): any => ({
  ...obj,
  ...(obj.RestoreRequest && { RestoreRequest: RestoreRequestFilterSensitiveLog(obj.RestoreRequest) }),
});

/**
 * @internal
 */
export const SelectObjectContentEventStreamFilterSensitiveLog = (obj: SelectObjectContentEventStream): any => {
  if (obj.Records !== undefined) return { Records: obj.Records };
  if (obj.Stats !== undefined) return { Stats: obj.Stats };
  if (obj.Progress !== undefined) return { Progress: obj.Progress };
  if (obj.Cont !== undefined) return { Cont: obj.Cont };
  if (obj.End !== undefined) return { End: obj.End };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SelectObjectContentOutputFilterSensitiveLog = (obj: SelectObjectContentOutput): any => ({
  ...obj,
  ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const SelectObjectContentRequestFilterSensitiveLog = (obj: SelectObjectContentRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartOutputFilterSensitiveLog = (obj: UploadPartOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartRequestFilterSensitiveLog = (obj: UploadPartRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartCopyOutputFilterSensitiveLog = (obj: UploadPartCopyOutput): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadPartCopyRequestFilterSensitiveLog = (obj: UploadPartCopyRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WriteGetObjectResponseRequestFilterSensitiveLog = (obj: WriteGetObjectResponseRequest): any => ({
  ...obj,
  ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
});
