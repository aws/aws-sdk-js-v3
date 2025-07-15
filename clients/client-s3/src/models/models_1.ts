// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { StreamingBlobTypes } from "@smithy/types";

import {
  AccelerateConfiguration,
  AccessControlPolicy,
  AnalyticsConfiguration,
  BucketCannedACL,
  BucketVersioningStatus,
  ChecksumAlgorithm,
  ChecksumType,
  CommonPrefix,
  CORSRule,
  EncodingType,
  ErrorDocument,
  Grant,
  IndexDocument,
  Initiator,
  IntelligentTieringConfiguration,
  InventoryConfiguration,
  InventoryConfigurationFilterSensitiveLog,
  InventoryConfigurationState,
  LifecycleRule,
  LoggingEnabled,
  MetadataTableEncryptionConfiguration,
  MetricsConfiguration,
  NotificationConfiguration,
  ObjectCannedACL,
  ObjectLockConfiguration,
  ObjectLockLegalHold,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetention,
  Owner,
  OwnershipControls,
  Payer,
  PublicAccessBlockConfiguration,
  RecordExpiration,
  RedirectAllRequestsTo,
  ReplicationConfiguration,
  ReplicationStatus,
  RequestCharged,
  RequestPayer,
  RestoreStatus,
  RoutingRule,
  ServerSideEncryption,
  ServerSideEncryptionConfiguration,
  ServerSideEncryptionConfigurationFilterSensitiveLog,
  StorageClass,
  Tag,
  TransitionDefaultMinimumObjectSize,
} from "./models_0";

import { S3ServiceException as __BaseException } from "./S3ServiceException";

/**
 * @public
 * @enum
 */
export const ObjectStorageClass = {
  DEEP_ARCHIVE: "DEEP_ARCHIVE",
  EXPRESS_ONEZONE: "EXPRESS_ONEZONE",
  FSX_OPENZFS: "FSX_OPENZFS",
  GLACIER: "GLACIER",
  GLACIER_IR: "GLACIER_IR",
  INTELLIGENT_TIERING: "INTELLIGENT_TIERING",
  ONEZONE_IA: "ONEZONE_IA",
  OUTPOSTS: "OUTPOSTS",
  REDUCED_REDUNDANCY: "REDUCED_REDUNDANCY",
  SNOW: "SNOW",
  STANDARD: "STANDARD",
  STANDARD_IA: "STANDARD_IA",
} as const;

/**
 * @public
 */
export type ObjectStorageClass = (typeof ObjectStorageClass)[keyof typeof ObjectStorageClass];

/**
 * <p>An object consists of data and its descriptive metadata.</p>
 * @public
 */
export interface _Object {
  /**
   * <p>The name that you assign to an object. You use the object key to retrieve the object.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Creation date of the object.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object,
   *       not its metadata. The ETag may or may not be an MD5 digest of the object data. Whether or not it is
   *       depends on how the object was created and how it is encrypted as described below:</p>
   *          <ul>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services
   *           Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are an MD5 digest of
   *           their object data.</p>
   *             </li>
   *             <li>
   *                <p>Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services
   *           Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are not an MD5 digest of
   *           their object data.</p>
   *             </li>
   *             <li>
   *                <p>If an object is created by either the Multipart Upload or Part Copy operation, the ETag is not
   *           an MD5 digest, regardless of the method of encryption. If an object is larger than 16 MB, the Amazon Web Services
   *           Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag
   *           will not be an MD5 digest.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - MD5 is not supported by directory buckets.</p>
   *          </note>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The algorithm that was used to create a checksum of the object.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm[] | undefined;

  /**
   * <p>The checksum type that is used to calculate the object’s checksum value. For more information, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
   *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * <p>Size in bytes of the object</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The class of storage used to store the object.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> -
   *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
   *          </note>
   * @public
   */
  StorageClass?: ObjectStorageClass | undefined;

  /**
   * <p>The owner of the object</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - The bucket owner is returned as the
   *         object owner.</p>
   *          </note>
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * <p>Specifies the restoration status of an object. Objects in certain storage classes must be restored
   *       before they can be retrieved. For more information about these storage classes and how to work with
   *       archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html">
   *         Working with archived objects</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets. Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
   *          </note>
   * @public
   */
  RestoreStatus?: RestoreStatus | undefined;
}

/**
 * @public
 */
export interface ListObjectsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *       criteria.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>Indicates where in the bucket listing begins. Marker is included in the response if it was sent with
   *       the request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>When the response is truncated (the <code>IsTruncated</code> element value in the response is
   *         <code>true</code>), you can use the key name in this field as the <code>marker</code> parameter in the
   *       subsequent request to get the next set of objects. Amazon S3 lists objects in alphabetical order. </p>
   *          <note>
   *             <p>This element is returned only if you have the <code>delimiter</code> request parameter specified.
   *         If the response does not include the <code>NextMarker</code> element and it is truncated, you can use
   *         the value of the last <code>Key</code> element in the response as the <code>marker</code> parameter in
   *         the subsequent request to get the next set of object keys.</p>
   *          </note>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>Metadata about each object returned.</p>
   * @public
   */
  Contents?: _Object[] | undefined;

  /**
   * <p>The bucket name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Keys that begin with the indicated prefix.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Causes keys that contain the same string between the prefix and the first occurrence of the
   *       delimiter to be rolled up into a single result element in the <code>CommonPrefixes</code> collection.
   *       These rolled-up keys are not returned elsewhere in the response. Each rolled-up result counts as only
   *       one return against the <code>MaxKeys</code> value.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The maximum number of keys returned in the response body.</p>
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * <p>All of the keys (up to 1,000) rolled up in a common prefix count as a single return when calculating
   *       the number of returns. </p>
   *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> contains all (if there are any) keys between <code>Prefix</code> and the
   *       next occurrence of the string specified by the delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory specified by
   *         <code>Prefix</code>.</p>
   *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash (<code>/</code>), as
   *       in <code>notes/summer/july</code>, the common prefix is <code>notes/summer/</code>. All of the keys that
   *       roll up into a common prefix count as a single return when calculating the number of returns.</p>
   * @public
   */
  CommonPrefixes?: CommonPrefix[] | undefined;

  /**
   * <p>Encoding type used by Amazon S3 to encode the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html">object keys</a> in the response. Responses are
   *       encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser
   *       can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that
   *       aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the
   *       response. For more information about characters to avoid in object key names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines">Object key
   *         naming guidelines</a>.</p>
   *          <note>
   *             <p>When using the URL encoding type, non-ASCII characters that are used in an object's key name will
   *         be percent-encoded according to UTF-8 code values. For example, the object
   *           <code>test_file(3).png</code> will appear as <code>test_file%283%29.png</code>.</p>
   *          </note>
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 * @enum
 */
export const OptionalObjectAttributes = {
  RESTORE_STATUS: "RestoreStatus",
} as const;

/**
 * @public
 */
export type OptionalObjectAttributes = (typeof OptionalObjectAttributes)[keyof typeof OptionalObjectAttributes];

/**
 * @public
 */
export interface ListObjectsRequest {
  /**
   * <p>The name of the bucket containing the objects.</p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character that you use to group keys.</p>
   *          <p>
   *             <code>CommonPrefixes</code> is filtered out from results if it is not lexicographically greater than
   *       the key-marker.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>Encoding type used by Amazon S3 to encode the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html">object keys</a> in the response. Responses are
   *       encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser
   *       can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that
   *       aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the
   *       response. For more information about characters to avoid in object key names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines">Object key
   *         naming guidelines</a>.</p>
   *          <note>
   *             <p>When using the URL encoding type, non-ASCII characters that are used in an object's key name will
   *         be percent-encoded according to UTF-8 code values. For example, the object
   *           <code>test_file(3).png</code> will appear as <code>test_file%283%29.png</code>.</p>
   *          </note>
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * <p>Marker is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified
   *       key. Marker can be any key in the bucket.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000
   *       key names. The response might contain fewer keys but will never contain more. </p>
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects request.
   *       Bucket owners need not specify this parameter in their requests.</p>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Specifies the optional fields that you want returned in the response. Fields that you do not specify
   *       are not returned.</p>
   * @public
   */
  OptionalObjectAttributes?: OptionalObjectAttributes[] | undefined;
}

/**
 * @public
 */
export interface ListObjectsV2Output {
  /**
   * <p>Set to <code>false</code> if all of the results were returned. Set to <code>true</code> if more keys
   *       are available to return. If the number of results exceeds that specified by <code>MaxKeys</code>, all of
   *       the results might not be returned.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>Metadata about each object returned.</p>
   * @public
   */
  Contents?: _Object[] | undefined;

  /**
   * <p>The bucket name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Keys that begin with the indicated prefix.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - For directory buckets, only prefixes that end in a delimiter (<code>/</code>) are supported.</p>
   *          </note>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Causes keys that contain the same string between the <code>prefix</code> and the first occurrence of
   *       the delimiter to be rolled up into a single result element in the <code>CommonPrefixes</code>
   *       collection. These rolled-up keys are not returned elsewhere in the response. Each rolled-up result
   *       counts as only one return against the <code>MaxKeys</code> value.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - For directory buckets, <code>/</code> is the only supported delimiter.</p>
   *          </note>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000
   *       key names. The response might contain fewer keys but will never contain more.</p>
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * <p>All of the keys (up to 1,000) that share the same prefix are grouped together. When counting the
   *       total numbers of returns by this API operation, this group of keys is considered as one item.</p>
   *          <p>A response can contain <code>CommonPrefixes</code> only if you specify a delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> contains all (if there are any) keys between <code>Prefix</code> and the
   *       next occurrence of the string specified by a delimiter.</p>
   *          <p>
   *             <code>CommonPrefixes</code> lists keys that act like subdirectories in the directory specified by
   *         <code>Prefix</code>.</p>
   *          <p>For example, if the prefix is <code>notes/</code> and the delimiter is a slash (<code>/</code>) as
   *       in <code>notes/summer/july</code>, the common prefix is <code>notes/summer/</code>. All of the keys that
   *       roll up into a common prefix count as a single return when calculating the number of returns. </p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>Directory buckets</b> - For directory buckets, only prefixes that end in a delimiter (<code>/</code>) are supported.</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>Directory buckets </b> - When you query
   *               <code>ListObjectsV2</code> with a delimiter during in-progress multipart uploads, the
   *               <code>CommonPrefixes</code> response parameter contains the prefixes that are associated with
   *             the in-progress multipart uploads. For more information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart Upload
   *               Overview</a> in the <i>Amazon S3 User Guide</i>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  CommonPrefixes?: CommonPrefix[] | undefined;

  /**
   * <p>Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this element in the
   *       response, and returns encoded key name values in the following response elements:</p>
   *          <p>
   *             <code>Delimiter, Prefix, Key,</code> and <code>StartAfter</code>.</p>
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * <p>
   *             <code>KeyCount</code> is the number of keys returned with this request. <code>KeyCount</code> will
   *       always be less than or equal to the <code>MaxKeys</code> field. For example, if you ask for 50 keys,
   *       your result will include 50 keys or fewer.</p>
   * @public
   */
  KeyCount?: number | undefined;

  /**
   * <p> If <code>ContinuationToken</code> was sent with the request, it is included in the response. You
   *       can use the returned <code>ContinuationToken</code> for pagination of the list response.</p>
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * <p>
   *             <code>NextContinuationToken</code> is sent when <code>isTruncated</code> is true, which means there
   *       are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with
   *       this <code>NextContinuationToken</code>. <code>NextContinuationToken</code> is obfuscated and is not a
   *       real key</p>
   * @public
   */
  NextContinuationToken?: string | undefined;

  /**
   * <p>If StartAfter was sent with the request, it is included in the response.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  StartAfter?: string | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface ListObjectsV2Request {
  /**
   * <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character that you use to group keys.</p>
   *          <p>
   *             <code>CommonPrefixes</code> is filtered out from results if it is not lexicographically greater than
   *       the <code>StartAfter</code> value.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>Directory buckets</b> - For directory buckets, <code>/</code> is the only supported delimiter.</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>Directory buckets </b> - When you query
   *               <code>ListObjectsV2</code> with a delimiter during in-progress multipart uploads, the
   *               <code>CommonPrefixes</code> response parameter contains the prefixes that are associated with
   *             the in-progress multipart uploads. For more information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html">Multipart Upload
   *               Overview</a> in the <i>Amazon S3 User Guide</i>.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>Encoding type used by Amazon S3 to encode the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html">object keys</a> in the response. Responses are
   *       encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser
   *       can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that
   *       aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the
   *       response. For more information about characters to avoid in object key names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines">Object key
   *         naming guidelines</a>.</p>
   *          <note>
   *             <p>When using the URL encoding type, non-ASCII characters that are used in an object's key name will
   *         be percent-encoded according to UTF-8 code values. For example, the object
   *           <code>test_file(3).png</code> will appear as <code>test_file%283%29.png</code>.</p>
   *          </note>
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000
   *       key names. The response might contain fewer keys but will never contain more.</p>
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - For directory buckets, only prefixes that end in a delimiter (<code>/</code>) are supported.</p>
   *          </note>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>
   *             <code>ContinuationToken</code> indicates to Amazon S3 that the list is being continued on this bucket
   *       with a token. <code>ContinuationToken</code> is obfuscated and is not a real key. You can use this
   *         <code>ContinuationToken</code> for pagination of the list results. </p>
   * @public
   */
  ContinuationToken?: string | undefined;

  /**
   * <p>The owner field is not present in <code>ListObjectsV2</code> by default. If you want to return the
   *       owner field with each key in the result, then set the <code>FetchOwner</code> field to
   *       <code>true</code>.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - For directory buckets, the bucket
   *         owner is returned as the object owner for all objects.</p>
   *          </note>
   * @public
   */
  FetchOwner?: boolean | undefined;

  /**
   * <p>StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified
   *       key. StartAfter can be any key in the bucket.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  StartAfter?: string | undefined;

  /**
   * <p>Confirms that the requester knows that she or he will be charged for the list objects request in V2
   *       style. Bucket owners need not specify this parameter in their requests.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Specifies the optional fields that you want returned in the response. Fields that you do not specify
   *       are not returned.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  OptionalObjectAttributes?: OptionalObjectAttributes[] | undefined;
}

/**
 * <p>Information about the delete marker.</p>
 * @public
 */
export interface DeleteMarkerEntry {
  /**
   * <p>The account that created the delete marker. </p>
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * <p>The object key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Version ID of an object.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an object. </p>
   * @public
   */
  IsLatest?: boolean | undefined;

  /**
   * <p>Date and time when the object was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ObjectVersionStorageClass = {
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ObjectVersionStorageClass = (typeof ObjectVersionStorageClass)[keyof typeof ObjectVersionStorageClass];

/**
 * <p>The version of an object.</p>
 * @public
 */
export interface ObjectVersion {
  /**
   * <p>The entity tag is an MD5 hash of that version of the object.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The algorithm that was used to create a checksum of the object.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm[] | undefined;

  /**
   * <p>The checksum type that is used to calculate the object’s checksum value. For more information, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
   *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * <p>Size in bytes of the object.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The class of storage used to store the object.</p>
   * @public
   */
  StorageClass?: ObjectVersionStorageClass | undefined;

  /**
   * <p>The object key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Version ID of an object.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an object.</p>
   * @public
   */
  IsLatest?: boolean | undefined;

  /**
   * <p>Date and time when the object was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>Specifies the owner of the object.</p>
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * <p>Specifies the restoration status of an object. Objects in certain storage classes must be restored
   *       before they can be retrieved. For more information about these storage classes and how to work with
   *       archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html">
   *         Working with archived objects</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  RestoreStatus?: RestoreStatus | undefined;
}

/**
 * @public
 */
export interface ListObjectVersionsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search criteria.
   *       If your results were truncated, you can make a follow-up paginated request by using the
   *         <code>NextKeyMarker</code> and <code>NextVersionIdMarker</code> response parameters as a starting
   *       place in another request to return the rest of the results.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>Marks the last key returned in a truncated response.</p>
   * @public
   */
  KeyMarker?: string | undefined;

  /**
   * <p>Marks the last version of the key returned in a truncated response.</p>
   * @public
   */
  VersionIdMarker?: string | undefined;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>, <code>NextKeyMarker</code>
   *       specifies the first key not returned that satisfies the search criteria. Use this value for the
   *       key-marker request parameter in a subsequent request.</p>
   * @public
   */
  NextKeyMarker?: string | undefined;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *         <code>NextVersionIdMarker</code> specifies the first object version not returned that satisfies the
   *       search criteria. Use this value for the <code>version-id-marker</code> request parameter in a subsequent
   *       request.</p>
   * @public
   */
  NextVersionIdMarker?: string | undefined;

  /**
   * <p>Container for version information.</p>
   * @public
   */
  Versions?: ObjectVersion[] | undefined;

  /**
   * <p>Container for an object that is a delete marker. To learn more about delete markers, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html">Working with delete
   *         markers</a>.</p>
   * @public
   */
  DeleteMarkers?: DeleteMarkerEntry[] | undefined;

  /**
   * <p>The bucket name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Selects objects that start with the value supplied by this parameter.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The delimiter grouping the included keys. A delimiter is a character that you specify to group keys.
   *       All keys that contain the same string between the prefix and the first occurrence of the delimiter are
   *       grouped under a single result element in <code>CommonPrefixes</code>. These groups are counted as one
   *       result against the <code>max-keys</code> limitation. These keys are not returned elsewhere in the
   *       response.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>Specifies the maximum number of objects to return.</p>
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating the number
   *       of returns.</p>
   * @public
   */
  CommonPrefixes?: CommonPrefix[] | undefined;

  /**
   * <p> Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *          <p>If you specify the <code>encoding-type</code> request parameter, Amazon S3 includes this element in the
   *       response, and returns encoded key name values in the following response elements:</p>
   *          <p>
   *             <code>KeyMarker, NextKeyMarker, Prefix, Key</code>, and <code>Delimiter</code>.</p>
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface ListObjectVersionsRequest {
  /**
   * <p>The bucket name that contains the objects. </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character that you specify to group keys. All keys that contain the same string
   *       between the <code>prefix</code> and the first occurrence of the delimiter are grouped under a single
   *       result element in <code>CommonPrefixes</code>. These groups are counted as one result against the
   *         <code>max-keys</code> limitation. These keys are not returned elsewhere in the response.</p>
   *          <p>
   *             <code>CommonPrefixes</code> is filtered out from results if it is not lexicographically greater than
   *       the key-marker.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>Encoding type used by Amazon S3 to encode the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html">object keys</a> in the response. Responses are
   *       encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser
   *       can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that
   *       aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the
   *       response. For more information about characters to avoid in object key names, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-guidelines">Object key
   *         naming guidelines</a>.</p>
   *          <note>
   *             <p>When using the URL encoding type, non-ASCII characters that are used in an object's key name will
   *         be percent-encoded according to UTF-8 code values. For example, the object
   *           <code>test_file(3).png</code> will appear as <code>test_file%283%29.png</code>.</p>
   *          </note>
   * @public
   */
  EncodingType?: EncodingType | undefined;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   * @public
   */
  KeyMarker?: string | undefined;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000
   *       key names. The response might contain fewer keys but will never contain more. If additional keys satisfy
   *       the search criteria, but were not returned because <code>max-keys</code> was exceeded, the response
   *       contains <code><isTruncated>true</isTruncated></code>. To return the additional keys, see
   *         <code>key-marker</code> and <code>version-id-marker</code>.</p>
   * @public
   */
  MaxKeys?: number | undefined;

  /**
   * <p>Use this parameter to select only those keys that begin with the specified prefix. You can use
   *       prefixes to separate a bucket into different groupings of keys. (You can think of using
   *         <code>prefix</code> to make groups in the same way that you'd use a folder in a file system.) You can
   *       use <code>prefix</code> with <code>delimiter</code> to roll up numerous objects into a single result
   *       under <code>CommonPrefixes</code>. </p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>Specifies the object version you want to start listing from.</p>
   * @public
   */
  VersionIdMarker?: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>Specifies the optional fields that you want returned in the response. Fields that you do not specify
   *       are not returned.</p>
   * @public
   */
  OptionalObjectAttributes?: OptionalObjectAttributes[] | undefined;
}

/**
 * <p>Container for elements related to a part.</p>
 * @public
 */
export interface Part {
  /**
   * <p>Part number identifying the part. This is a positive integer between 1 and 10,000.</p>
   * @public
   */
  PartNumber?: number | undefined;

  /**
   * <p>Date and time at which the part was uploaded.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>Size in bytes of the uploaded part data.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32</code> checksum of the part. This checksum is present if the
   *       object was uploaded with the <code>CRC32</code> checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the part. This checksum is present if the
   *       object was uploaded with the <code>CRC32C</code> checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the part. This checksum is present if
   *       the multipart upload request was created with the <code>CRC64NVME</code> checksum algorithm, or if the
   *       object was uploaded without a checksum (and Amazon S3 added the default checksum, <code>CRC64NVME</code>, to
   *       the uploaded object). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>The Base64 encoded, 160-bit <code>SHA1</code> checksum of the part. This checksum is present if the
   *       object was uploaded with the <code>SHA1</code> checksum algorithm. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>The Base64 encoded, 256-bit <code>SHA256</code> checksum of the part. This checksum is present if
   *       the object was uploaded with the <code>SHA256</code> checksum algorithm. For more information, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking
   *         object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;
}

/**
 * @public
 */
export interface ListPartsOutput {
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete multipart uploads
   *       and the prefix in the lifecycle rule matches the object name in the request, then the response includes
   *       this header indicating when the initiated multipart upload will become eligible for abort operation. For
   *       more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting
   *         Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration</a>.</p>
   *          <p>The response will also include the <code>x-amz-abort-rule-id</code> header that will provide the ID
   *       of the lifecycle configuration rule that defines this action.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  AbortDate?: Date | undefined;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It identifies
   *       applicable lifecycle configuration rule that defines the action to abort incomplete multipart
   *       uploads.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  AbortRuleId?: string | undefined;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated. Does not return the access point ARN or
   *       access point alias if used.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   * @public
   */
  UploadId?: string | undefined;

  /**
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers will be
   *       listed.</p>
   * @public
   */
  PartNumberMarker?: string | undefined;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as the value to
   *       use for the <code>part-number-marker</code> request parameter in a subsequent request.</p>
   * @public
   */
  NextPartNumberMarker?: string | undefined;

  /**
   * <p>Maximum number of parts that were allowed in the response.</p>
   * @public
   */
  MaxParts?: number | undefined;

  /**
   * <p> Indicates whether the returned list of parts is truncated. A true value indicates that the list was
   *       truncated. A list can be truncated if the number of parts exceeds the limit returned in the MaxParts
   *       element.</p>
   * @public
   */
  IsTruncated?: boolean | undefined;

  /**
   * <p>Container for elements related to a particular part. A response can contain zero or more
   *         <code>Part</code> elements.</p>
   * @public
   */
  Parts?: Part[] | undefined;

  /**
   * <p>Container element that identifies who initiated the multipart upload. If the initiator is an
   *       Amazon Web Services account, this element provides the same information as the <code>Owner</code> element. If the
   *       initiator is an IAM User, this element provides the user ARN and display name.</p>
   * @public
   */
  Initiator?: Initiator | undefined;

  /**
   * <p>Container element that identifies the object owner, after the object is created. If multipart upload
   *       is initiated by an IAM user, this element provides the parent account ID and display name.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - The bucket owner is returned as the
   *         object owner for all the parts.</p>
   *          </note>
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * <p>The class of storage used to store the uploaded object.</p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> -
   *         Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</p>
   *          </note>
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * <p>The algorithm that was used to create a checksum of the object.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The checksum type, which determines how part-level checksums are combined to create an object-level
   *       checksum for multipart objects. You can use this header response to verify that the checksum type that
   *       is received is the same checksum type that was specified in <code>CreateMultipartUpload</code> request.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
   *         User Guide</a>.</p>
   * @public
   */
  ChecksumType?: ChecksumType | undefined;
}

/**
 * @public
 */
export interface ListPartsRequest {
  /**
   * <p>The name of the bucket to which the parts are being uploaded. </p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Sets the maximum number of parts to return.</p>
   * @public
   */
  MaxParts?: number | undefined;

  /**
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers will be
   *       listed.</p>
   * @public
   */
  PartNumberMarker?: string | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   * @public
   */
  UploadId: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The server-side encryption (SSE) algorithm used to encrypt the object. This parameter is needed only when the object was created
   *     using a checksum algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm.
   *     For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum
   *     algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketAccelerateConfigurationRequest {
  /**
   * <p>The name of the bucket for which the accelerate configuration is set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Container for setting the transfer acceleration state.</p>
   * @public
   */
  AccelerateConfiguration: AccelerateConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutBucketAclRequest {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   * @public
   */
  ACL?: BucketCannedACL | undefined;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   * @public
   */
  AccessControlPolicy?: AccessControlPolicy | undefined;

  /**
   * <p>The bucket to which to apply the ACL.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the data. This header must be used as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.</a>
   *          </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * <p>Allows grantee to create new objects in the bucket.</p>
   *          <p>For the bucket and object owners of existing objects, also allows deletions and overwrites of those
   *       objects.</p>
   * @public
   */
  GrantWrite?: string | undefined;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket to which an analytics configuration is stored.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   * @public
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information,
 *       see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource
 *         Sharing</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface CORSConfiguration {
  /**
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add up to 100
   *       rules to the configuration.</p>
   * @public
   */
  CORSRules: CORSRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketCorsRequest {
  /**
   * <p>Specifies the bucket impacted by the <code>cors</code>configuration.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource
   *         Sharing</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  CORSConfiguration: CORSConfiguration | undefined;

  /**
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the data. This header must be used as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.</a>
   *          </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketEncryptionRequest {
  /**
   * <p>Specifies default encryption for a bucket using server-side encryption with different key
   *       options.</p>
   *          <p>
   *             <b>Directory buckets </b> - When you use this operation with a directory bucket, you must use path-style requests in the format <code>https://s3express-control.<i>region-code</i>.amazonaws.com/<i>bucket-name</i>
   *             </code>. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>DOC-EXAMPLE-BUCKET</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming rules</a> in the <i>Amazon S3 User Guide</i>
   *          </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the server-side encryption
   *       configuration.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   *          <note>
   *             <p>For directory buckets, when you use Amazon Web Services SDKs, <code>CRC32</code> is the default checksum algorithm that's used for performance.</p>
   *          </note>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Specifies the default server-side-encryption configuration.</p>
   * @public
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   *          <note>
   *             <p>For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code
   * <code>501 Not Implemented</code>.</p>
   *          </note>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   * @public
   */
  IntelligentTieringConfiguration: IntelligentTieringConfiguration | undefined;
}

/**
 * @public
 */
export interface PutBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket where the inventory configuration will be stored.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Specifies the inventory configuration.</p>
   * @public
   */
  InventoryConfiguration: InventoryConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationOutput {
  /**
   * <p>Indicates which default minimum object size behavior is applied to the lifecycle
   *       configuration.</p>
   *          <note>
   *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
   *         lifecycle configurations.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>all_storage_classes_128K</code> - Objects smaller than 128 KB will not transition to
   *           any storage class by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>varies_by_storage_class</code> - Objects smaller than 128 KB will transition to Glacier
   *           Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes
   *           will prevent transitions smaller than 128 KB. </p>
   *             </li>
   *          </ul>
   *          <p>To customize the minimum object size for any transition you can add a filter that specifies a custom
   *         <code>ObjectSizeGreaterThan</code> or <code>ObjectSizeLessThan</code> in the body of your transition
   *       rule. Custom filters always take precedence over the default transition behavior.</p>
   * @public
   */
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize | undefined;
}

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle
 *         Management</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export interface BucketLifecycleConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   * @public
   */
  Rules: LifecycleRule[] | undefined;
}

/**
 * @public
 */
export interface PutBucketLifecycleConfigurationRequest {
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   * @public
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   *          <note>
   *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
   *         lifecycle configurations.</p>
   *          </note>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Indicates which default minimum object size behavior is applied to the lifecycle
   *       configuration.</p>
   *          <note>
   *             <p>This parameter applies to general purpose buckets only. It is not supported for directory bucket
   *         lifecycle configurations.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>all_storage_classes_128K</code> - Objects smaller than 128 KB will not transition to
   *           any storage class by default. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>varies_by_storage_class</code> - Objects smaller than 128 KB will transition to Glacier
   *           Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes
   *           will prevent transitions smaller than 128 KB. </p>
   *             </li>
   *          </ul>
   *          <p>To customize the minimum object size for any transition you can add a filter that specifies a custom
   *         <code>ObjectSizeGreaterThan</code> or <code>ObjectSizeLessThan</code> in the body of your transition
   *       rule. Custom filters always take precedence over the default transition behavior.</p>
   * @public
   */
  TransitionDefaultMinimumObjectSize?: TransitionDefaultMinimumObjectSize | undefined;
}

/**
 * <p>Container for logging status information.</p>
 * @public
 */
export interface BucketLoggingStatus {
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a
   *       bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *         <i>Amazon S3 API Reference</i>.</p>
   * @public
   */
  LoggingEnabled?: LoggingEnabled | undefined;
}

/**
 * @public
 */
export interface PutBucketLoggingRequest {
  /**
   * <p>The name of the bucket for which to set the logging parameters.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Container for logging status information.</p>
   * @public
   */
  BucketLoggingStatus: BucketLoggingStatus | undefined;

  /**
   * <p>The MD5 hash of the <code>PutBucketLogging</code> request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket for which the metrics configuration is set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration. The ID has a 64 character limit and can only
   *       contain letters, numbers, periods, dashes, and underscores.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Specifies the metrics configuration.</p>
   * @public
   */
  MetricsConfiguration: MetricsConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutBucketNotificationConfigurationRequest {
  /**
   * <p>The name of the bucket.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>A container for specifying the notification configuration of the bucket. If this element is empty,
   *       notifications are turned off for the bucket.</p>
   * @public
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Skips validation of Amazon SQS, Amazon SNS, and Lambda destinations.
   *       True or false value.</p>
   * @public
   */
  SkipDestinationValidation?: boolean | undefined;
}

/**
 * @public
 */
export interface PutBucketOwnershipControlsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to set.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>OwnershipControls</code> request body. </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The <code>OwnershipControls</code> (BucketOwnerEnforced, BucketOwnerPreferred, or ObjectWriter) that
   *       you want to apply to this Amazon S3 bucket.</p>
   * @public
   */
  OwnershipControls: OwnershipControls | undefined;

  /**
   * <p> Indicates the algorithm used to create the checksum for the object when you use the SDK. This
   *       header will not provide any additional functionality if you don't use the SDK. When you send this
   *       header, there must be a corresponding <code>x-amz-checksum-<i>algorithm</i>
   *             </code> header
   *       sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter. </p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;
}

/**
 * @public
 */
export interface PutBucketPolicyRequest {
  /**
   * <p>The name of the bucket.</p>
   *          <p>
   *             <b>Directory buckets </b> - When you use this operation with a directory bucket, you must use path-style requests in the format <code>https://s3express-control.<i>region-code</i>.amazonaws.com/<i>bucket-name</i>
   *             </code>. Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>DOC-EXAMPLE-BUCKET</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming rules</a> in the <i>Amazon S3 User Guide</i>
   *          </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum-<i>algorithm</i>
   *             </code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>.</p>
   *          <p>For the <code>x-amz-checksum-<i>algorithm</i>
   *             </code> header, replace <code>
   *                <i>algorithm</i>
   *             </code> with the supported algorithm from the following list: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRC32</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRC32C</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRC64NVME</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHA1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHA256</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If the individual checksum value you provide through <code>x-amz-checksum-<i>algorithm</i>
   *             </code> doesn't match the checksum algorithm you set through <code>x-amz-sdk-checksum-algorithm</code>, Amazon S3 fails the request with a <code>BadDigest</code> error.</p>
   *          <note>
   *             <p>For directory buckets, when you use Amazon Web Services SDKs, <code>CRC32</code> is the default checksum algorithm that's used for performance.</p>
   *          </note>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change this bucket
   *       policy in the future.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ConfirmRemoveSelfBucketAccess?: boolean | undefined;

  /**
   * <p>The bucket policy as a JSON document.</p>
   *          <p>For directory buckets, the only IAM action supported in the bucket policy is
   *         <code>s3express:CreateSession</code>.</p>
   * @public
   */
  Policy: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   *          <note>
   *             <p>For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code
   * <code>501 Not Implemented</code>.</p>
   *          </note>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

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
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the data. You must use this header as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication
   *       configuration is 2 MB.</p>
   * @public
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   * @public
   */
  Token?: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
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
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the data. You must use this header as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Container for Payer.</p>
   * @public
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
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
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the data. You must use this header as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements.</p>
   * @public
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
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
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT Bucket
 *         versioning</a> in the <i>Amazon S3 API Reference</i>.</p>
 * @public
 */
export interface VersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This element is only
   *       returned if the bucket has been configured with MFA delete. If the bucket has never been so configured,
   *       this element is not returned.</p>
   * @public
   */
  MFADelete?: MFADelete | undefined;

  /**
   * <p>The versioning state of the bucket.</p>
   * @public
   */
  Status?: BucketVersioningStatus | undefined;
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
   * <p>>The Base64 encoded 128-bit <code>MD5</code> digest of the data. You must use this header as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value that is
   *       displayed on your authentication device.</p>
   * @public
   */
  MFA?: string | undefined;

  /**
   * <p>Container for setting the versioning state.</p>
   * @public
   */
  VersioningConfiguration: VersioningConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
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
  ErrorDocument?: ErrorDocument | undefined;

  /**
   * <p>The name of the index document for the website.</p>
   * @public
   */
  IndexDocument?: IndexDocument | undefined;

  /**
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p>
   *          <important>
   *             <p>If you specify this property, you can't specify any other property.</p>
   *          </important>
   * @public
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo | undefined;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   * @public
   */
  RoutingRules?: RoutingRule[] | undefined;
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
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the data. You must use this header as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Container for the request.</p>
   * @public
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p> The existing object was created with a different encryption type. Subsequent write requests must
 *       include the appropriate encryption parameters in the request or while creating the session. </p>
 * @public
 */
export class EncryptionTypeMismatch extends __BaseException {
  readonly name: "EncryptionTypeMismatch" = "EncryptionTypeMismatch";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionTypeMismatch, __BaseException>) {
    super({
      name: "EncryptionTypeMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionTypeMismatch.prototype);
  }
}

/**
 * <p>You may receive this error in multiple cases. Depending on the reason for the error, you may receive
 *       one of the messages below:</p>
 *          <ul>
 *             <li>
 *                <p>Cannot specify both a write offset value and user-defined object metadata for existing
 *           objects.</p>
 *             </li>
 *             <li>
 *                <p>Checksum Type mismatch occurred, expected checksum Type: sha1, actual checksum Type:
 *           crc32c.</p>
 *             </li>
 *             <li>
 *                <p>Request body cannot be empty when 'write offset' is specified.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidRequest extends __BaseException {
  readonly name: "InvalidRequest" = "InvalidRequest";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequest, __BaseException>) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequest.prototype);
  }
}

/**
 * <p> The write offset value that you specified does not match the current object size. </p>
 * @public
 */
export class InvalidWriteOffset extends __BaseException {
  readonly name: "InvalidWriteOffset" = "InvalidWriteOffset";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWriteOffset, __BaseException>) {
    super({
      name: "InvalidWriteOffset",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWriteOffset.prototype);
  }
}

/**
 * @public
 */
export interface PutObjectOutput {
  /**
   * <p>If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>) in the <i>Amazon S3 User Guide</i>, the response
   *       includes this header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs
   *       that provide information about object expiration. The value of the <code>rule-id</code> is
   *       URL-encoded.</p>
   *          <note>
   *             <p>Object expiration information is not returned in directory buckets and this header returns the
   *         value "<code>NotImplemented</code>" in all responses for directory buckets.</p>
   *          </note>
   * @public
   */
  Expiration?: string | undefined;

  /**
   * <p>Entity tag for the uploaded object.</p>
   *          <p>
   *             <b>General purpose buckets </b> - To ensure that data is not corrupted
   *       traversing the network, for objects where the ETag is the MD5 digest of the object, you can calculate
   *       the MD5 while putting an object to Amazon S3 and compare the returned ETag to the calculated MD5
   *       value.</p>
   *          <p>
   *             <b>Directory buckets </b> - The ETag for the object in a
   *       directory bucket isn't the MD5 digest of the object.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32 checksum</code> of the object. This checksum is only be present if the checksum was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the object. This header is present if
   *       the object was uploaded with the <code>CRC64NVME</code> checksum algorithm, or if it was uploaded
   *       without a checksum (and Amazon S3 added the default checksum, <code>CRC64NVME</code>, to the uploaded
   *       object). For more information about how checksums are calculated with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity in the Amazon S3 User Guide</a>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This will only be present if the object was uploaded
   *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This will only be present if the object was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>This header specifies the checksum type of the object, which determines how part-level checksums are
   *       combined to create an object-level checksum for multipart objects. For <code>PutObject</code> uploads,
   *       the checksum type is always <code>FULL_OBJECT</code>. You can use this header as a data integrity check
   *       to verify that the checksum type that is received is the same checksum that was specified. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumType?: ChecksumType | undefined;

  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
   *          <note>
   *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
   *         encryption option is <code>aws:fsx</code>.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>Version ID of the object.</p>
   *          <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID for the
   *       object being stored. Amazon S3 returns this ID in the response. When you enable versioning for a bucket, if
   *       Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of the objects.
   *       For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to
   *         Versioning-Enabled Buckets</a> in the <i>Amazon S3 User Guide</i>. For information about
   *       returning the versioning state of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to provide the round-trip message integrity verification of the customer-provided
   *       encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p>If present, indicates the Amazon Web Services KMS Encryption Context to use for object encryption. The value of
   *          this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.
   *          This value is stored as object metadata and automatically gets
   *          passed on to Amazon Web Services KMS for future <code>GetObject</code>
   *          operations on this object.</p>
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption with
   *       Key Management Service (KMS) keys (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * <p> The size of the object in bytes. This value is only be present if you append to an object. </p>
   *          <note>
   *             <p>This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in
   *         directory buckets.</p>
   *          </note>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a> in the
   *         <i>Amazon S3 User Guide</i>.</p>
   *          <p>When adding a new object, you can use headers to grant ACL-based permissions to individual
   *       Amazon Web Services accounts or to predefined groups defined by Amazon S3. These permissions are then added to the ACL on
   *       the object. By default, all objects are private. Only the owner has full access control. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control
   *         List (ACL) Overview</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing ACLs Using the REST API</a> in the
   *         <i>Amazon S3 User Guide</i>.</p>
   *          <p>If the bucket that you're uploading objects to uses the bucket owner enforced setting for S3 Object
   *       Ownership, ACLs are disabled and no longer affect permissions. Buckets that use this setting only accept
   *       PUT requests that don't specify an ACL or PUT requests that specify bucket owner full control ACLs, such
   *       as the <code>bucket-owner-full-control</code> canned ACL or an equivalent form of this ACL expressed in
   *       the XML format. PUT requests that contain other ACLs (for example, custom grants to certain
   *       Amazon Web Services accounts) fail and return a <code>400</code> error with the error code
   *         <code>AccessControlListNotSupported</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling ownership of objects and
   *         disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
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
  ACL?: ObjectCannedACL | undefined;

  /**
   * <p>Object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * <p>The bucket name to which the PUT action was initiated. </p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Can be used to specify caching behavior along the request/reply chain. For more information, see
   *         <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>Specifies presentational information for the object. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc6266#section-4">https://www.rfc-editor.org/rfc/rfc6266#section-4</a>.</p>
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms
   *       must be applied to obtain the media-type referenced by the Content-Type header field. For more
   *       information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding">https://www.rfc-editor.org/rfc/rfc9110.html#field.content-encoding</a>.</p>
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * <p>The language the content is in.</p>
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined
   *       automatically. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length</a>.</p>
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the message (without the headers) according to
   *       RFC 1864. This header can be used as a message integrity check to verify that the data is the same data
   *       that was originally sent. Although it is optional, we recommend using the Content-MD5 mechanism as an
   *       end-to-end integrity check. For more information about REST request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST
   *       Authentication</a>.</p>
   *          <note>
   *             <p>The <code>Content-MD5</code> or <code>x-amz-sdk-checksum-algorithm</code> header is required for
   *         any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more
   *         information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-put-object">Uploading objects
   *           to an Object Lock enabled bucket </a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </note>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>A standard MIME type describing the format of the contents. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type">https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type</a>.</p>
   * @public
   */
  ContentType?: string | undefined;

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
   *                <p>
   *                   <code>CRC32</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRC32C</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRC64NVME</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHA1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHA256</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If the individual checksum value you provide through <code>x-amz-checksum-<i>algorithm</i>
   *             </code> doesn't match the checksum algorithm you set through <code>x-amz-sdk-checksum-algorithm</code>, Amazon S3 fails the request with a <code>BadDigest</code> error.</p>
   *          <note>
   *             <p>The <code>Content-MD5</code> or <code>x-amz-sdk-checksum-algorithm</code> header is required for
   *         any request to upload an object with a retention period configured using Amazon S3 Object Lock. For more
   *         information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-put-object">Uploading objects
   *           to an Object Lock enabled bucket </a> in the <i>Amazon S3 User Guide</i>.</p>
   *          </note>
   *          <p>For directory buckets, when you use Amazon Web Services SDKs, <code>CRC32</code> is the default checksum algorithm that's used for performance.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 32-bit <code>CRC32</code> checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
   *       checksum of the object. The <code>CRC64NVME</code> checksum is always a full object checksum. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity in the Amazon S3
   *         User Guide</a>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 160-bit <code>SHA1</code> digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 256-bit <code>SHA256</code> digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>The date and time at which the object is no longer cacheable. For more information, see <a href="https://www.rfc-editor.org/rfc/rfc7234#section-5.3">https://www.rfc-editor.org/rfc/rfc7234#section-5.3</a>.</p>
   * @public
   */
  Expires?: Date | undefined;

  /**
   * <p>Uploads the object only if the ETag (entity tag) value provided during the WRITE operation matches
   *       the ETag of the object in S3. If the ETag values do not match, the operation returns a <code>412
   *         Precondition Failed</code> error.</p>
   *          <p>If a conflicting operation occurs during the upload S3 returns a <code>409
   *         ConditionalRequestConflict</code> response. On a 409 failure you should fetch the object's ETag and
   *       retry the upload.</p>
   *          <p>Expects the ETag value as a string.</p>
   *          <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>, or <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-requests.html">Conditional requests</a> in the
   *         <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  IfMatch?: string | undefined;

  /**
   * <p>Uploads the object only if the object key name does not already exist in the bucket specified.
   *       Otherwise, Amazon S3 returns a <code>412 Precondition Failed</code> error.</p>
   *          <p>If a conflicting operation occurs during the upload S3 returns a <code>409
   *         ConditionalRequestConflict</code> response. On a 409 failure you should retry the upload.</p>
   *          <p>Expects the '*' (asterisk) character.</p>
   *          <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>, or <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/conditional-requests.html">Conditional requests</a> in the
   *         <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  IfNoneMatch?: string | undefined;

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
  GrantFullControl?: string | undefined;

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
  GrantRead?: string | undefined;

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
  GrantReadACP?: string | undefined;

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
  GrantWriteACP?: string | undefined;

  /**
   * <p>Object key for which the PUT action was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p> Specifies the offset for appending data to existing objects in bytes. The offset must be equal to
   *       the size of the existing object being appended to. If no object exists, setting this header to 0 will
   *       create a new object. </p>
   *          <note>
   *             <p>This functionality is only supported for objects in the Amazon S3 Express One Zone storage class in
   *         directory buckets.</p>
   *          </note>
   * @public
   */
  WriteOffsetBytes?: number | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * <p>The server-side encryption algorithm that was used when you store this object in Amazon S3 or
   *       Amazon FSx.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>General purpose buckets </b> - You have four mutually exclusive
   *           options to protect data using server-side encryption in Amazon S3, depending on how you choose to manage
   *           the encryption keys. Specifically, the encryption key options are Amazon S3 managed keys (SSE-S3),
   *           Amazon Web Services KMS keys (SSE-KMS or DSSE-KMS), and customer-provided keys (SSE-C). Amazon S3 encrypts data with
   *           server-side encryption by using Amazon S3 managed keys (SSE-S3) by default. You can optionally tell Amazon S3
   *           to encrypt data at rest by using server-side encryption with other key options. For more
   *           information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side Encryption</a> in
   *           the <i>Amazon S3 User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Directory buckets </b> -
   *           For directory buckets, there are only two supported options for server-side encryption: server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) and server-side encryption with KMS keys (SSE-KMS) (<code>aws:kms</code>). We recommend that the bucket's default encryption uses the desired encryption configuration and you don't override the bucket default encryption in your
   *             <code>CreateSession</code> requests or <code>PUT</code> object requests. Then, new objects
   *  are automatically encrypted with the desired encryption settings. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-serv-side-encryption.html">Protecting data with server-side encryption</a> in the <i>Amazon S3 User Guide</i>. For more information about the encryption overriding behaviors in directory buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-specifying-kms-encryption.html">Specifying server-side encryption with KMS for new object uploads</a>. </p>
   *                <p>In the Zonal endpoint API calls (except <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a>) using the REST API, the encryption request headers must match the encryption settings that are specified in the <code>CreateSession</code> request.
   *                             You can't override the values of the encryption settings (<code>x-amz-server-side-encryption</code>, <code>x-amz-server-side-encryption-aws-kms-key-id</code>, <code>x-amz-server-side-encryption-context</code>, and <code>x-amz-server-side-encryption-bucket-key-enabled</code>) that are specified in the <code>CreateSession</code> request.
   *                             You don't need to explicitly specify these encryption settings values in Zonal endpoint API calls, and
   *                             Amazon S3 will use the encryption settings values from the <code>CreateSession</code> request to protect new objects in the directory bucket.
   *                            </p>
   *                <note>
   *                   <p>When you use the CLI or the Amazon Web Services SDKs, for <code>CreateSession</code>, the session token refreshes automatically to avoid service interruptions when a session expires. The CLI or the Amazon Web Services SDKs use the bucket's default encryption configuration for the
   *                             <code>CreateSession</code> request. It's not supported to override the encryption settings values in the <code>CreateSession</code> request.
   *                             So in the Zonal endpoint API calls (except <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a>),
   *           the encryption request headers must match the default encryption configuration of the directory bucket.
   *
   * </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>S3 access points for Amazon FSx </b> - When accessing data stored in
   *           Amazon FSx file systems using S3 access points, the only valid server side encryption option is
   *             <code>aws:fsx</code>. All Amazon FSx file systems have encryption configured by default and are
   *           encrypted at rest. Data is automatically encrypted before being written to the file system, and
   *           automatically decrypted as it is read. These processes are handled transparently by Amazon FSx.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The STANDARD
   *       storage class provides high durability and high availability. Depending on performance needs, you can
   *       specify a different Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
   *         <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Directory buckets only support <code>EXPRESS_ONEZONE</code> (the S3 Express One Zone storage class) in
   *             Availability Zones and <code>ONEZONE_IA</code> (the S3 One Zone-Infrequent Access storage class) in
   *             Dedicated Local Zones.</p>
   *                </li>
   *                <li>
   *                   <p>Amazon S3 on Outposts only uses the OUTPOSTS Storage Class.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another object in
   *       the same bucket or to an external URL. Amazon S3 stores the value of this header in the object metadata. For
   *       information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a> in the <i>Amazon S3
   *         User Guide</i>.</p>
   *          <p>In the following example, the request header sets the redirect to an object (anotherPage.html) in
   *       the same bucket:</p>
   *          <p>
   *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
   *          </p>
   *          <p>In the following example, the request header sets the object redirect to another website:</p>
   *          <p>
   *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
   *          </p>
   *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to Configure Website Page
   *         Redirects</a> in the <i>Amazon S3 User Guide</i>. </p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  WebsiteRedirectLocation?: string | undefined;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example, <code>AES256</code>).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is
   *       used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must
   *       be appropriate for use with the algorithm specified in the
   *         <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header
   *       for a message integrity check to ensure that the encryption key was transmitted without error.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Specifies the KMS key ID (Key ID, Key ARN, or Key Alias) to use for object encryption. If the KMS key doesn't exist in the same
   *          account that's issuing the command, you must use the full Key ARN not the Key ID.</p>
   *          <p>
   *             <b>General purpose buckets</b> - If you specify <code>x-amz-server-side-encryption</code> with <code>aws:kms</code> or <code>aws:kms:dsse</code>, this header specifies the ID (Key ID, Key ARN, or Key Alias) of the KMS
   *          key to use. If you specify
   *          <code>x-amz-server-side-encryption:aws:kms</code> or
   *          <code>x-amz-server-side-encryption:aws:kms:dsse</code>, but do not provide <code>x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the Amazon Web Services managed key
   *          (<code>aws/s3</code>) to protect the data.</p>
   *          <p>
   *             <b>Directory buckets</b> - To encrypt data using SSE-KMS, it's recommended to specify the
   * <code>x-amz-server-side-encryption</code> header to <code>aws:kms</code>. Then, the <code>x-amz-server-side-encryption-aws-kms-key-id</code> header implicitly uses
   * the bucket's default KMS customer managed key ID. If you want to explicitly set the <code>
   *          x-amz-server-side-encryption-aws-kms-key-id</code> header, it must match the bucket's default customer managed key (using key ID or ARN, not alias). Your SSE-KMS configuration can only support 1 <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed key</a> per directory bucket's lifetime.
   * The <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a> (<code>aws/s3</code>) isn't supported.
   *
   *  Incorrect key specification results in an HTTP <code>400 Bad Request</code> error. </p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services KMS Encryption Context as an additional encryption context to use for object encryption. The value of
   *          this header is a Base64 encoded string of a UTF-8 encoded JSON, which contains the encryption context as key-value pairs.
   *          This value is stored as object metadata and automatically gets passed on
   *          to Amazon Web Services KMS for future <code>GetObject</code> operations on
   *          this object.</p>
   *          <p>
   *             <b>General purpose buckets</b> - This value must be explicitly added during <code>CopyObject</code> operations if you want an additional encryption context for your object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#encryption-context">Encryption context</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Directory buckets</b> - You can optionally provide an explicit encryption context value. The value must match the default encryption context - the bucket Amazon Resource Name (ARN). An additional encryption context value is not supported. </p>
   * @public
   */
  SSEKMSEncryptionContext?: string | undefined;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with
   *          server-side encryption using Key Management Service (KMS) keys (SSE-KMS).</p>
   *          <p>
   *             <b>General purpose buckets</b> - Setting this header to
   *             <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with
   *          SSE-KMS. Also, specifying this header with a PUT action doesn't affect bucket-level settings for S3
   *          Bucket Key.</p>
   *          <p>
   *             <b>Directory buckets</b> - S3 Bucket Keys are always enabled for <code>GET</code> and <code>PUT</code> operations in a directory bucket and can’t be disabled. S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets
   * to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html">UploadPartCopy</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops">the Copy operation in Batch Operations</a>, or
   *                             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job">the import jobs</a>. In this case, Amazon S3 makes a call to KMS every time a copy request is made for a KMS-encrypted object.</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For example,
   *       "Key1=Value1")</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  Tagging?: string | undefined;

  /**
   * <p>The Object Lock mode that you want to apply to this object.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * <p>The date and time when you want this object's Object Lock to expire. Must be formatted as a
   *       timestamp parameter.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * <p>Specifies whether a legal hold will be applied to this object. For more information about S3 Object
   *       Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object Lock</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p> You have attempted to add more parts than the maximum of 10000 that are allowed for this object.
 *       You can use the CopyObject operation to copy this object to another and then add more data to the newly
 *       copied object. </p>
 * @public
 */
export class TooManyParts extends __BaseException {
  readonly name: "TooManyParts" = "TooManyParts";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyParts, __BaseException>) {
    super({
      name: "TooManyParts",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyParts.prototype);
  }
}

/**
 * @public
 */
export interface PutObjectAclOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectAclRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
   * @public
   */
  ACL?: ObjectCannedACL | undefined;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   * @public
   */
  AccessControlPolicy?: AccessControlPolicy | undefined;

  /**
   * <p>The bucket name that contains the object to which you want to attach the ACL. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Base64 encoded 128-bit <code>MD5</code> digest of the data. This header must be used as a
   *       message integrity check to verify that the request body was not corrupted in transit. For more
   *       information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864.></a>
   *          </p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantFullControl?: string | undefined;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantRead?: string | undefined;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantReadACP?: string | undefined;

  /**
   * <p>Allows grantee to create new objects in the bucket.</p>
   *          <p>For the bucket and object owners of existing objects, also allows deletions and overwrites of those
   *       objects.</p>
   * @public
   */
  GrantWrite?: string | undefined;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
   * @public
   */
  GrantWriteACP?: string | undefined;

  /**
   * <p>Key for which the PUT action was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>Version ID used to reference a specific version of the object.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectLegalHoldOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectLegalHoldRequest {
  /**
   * <p>The bucket name containing the object that you want to place a legal hold on. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
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
   * <p>Container element for the legal hold configuration you want to apply to the specified object.</p>
   * @public
   */
  LegalHold?: ObjectLockLegalHold | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The version ID of the object that you want to place a legal hold on.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectLockConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
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
  ObjectLockConfiguration?: ObjectLockConfiguration | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   * @public
   */
  Token?: string | undefined;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectRetentionOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface PutObjectRetentionRequest {
  /**
   * <p>The bucket name that contains the object you want to apply this Object Retention configuration to. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to apply this Object Retention configuration to.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The container element for the Object Retention configuration.</p>
   * @public
   */
  Retention?: ObjectLockRetention | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The version ID for the object that you want to apply this Object Retention configuration to.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   * @public
   */
  BypassGovernanceRetention?: boolean | undefined;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectTaggingOutput {
  /**
   * <p>The versionId of the object the tag-set was added to.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectTaggingRequest {
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
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
  VersionId?: string | undefined;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements</p>
   * @public
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;
}

/**
 * @public
 */
export interface PutPublicAccessBlockRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to
   *       set.</p>
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
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 bucket. You can
   *       enable the configuration options in any combination. For more information about when Amazon S3 considers a
   *       bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p>Parameters on this idempotent request are inconsistent with parameters used in previous request(s). </p>
 *          <p>For a list of error codes and more information on Amazon S3 errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">Error codes</a>.</p>
 *          <note>
 *             <p>Idempotency ensures that an API request completes no more than one time. With an idempotent
 *         request, if the original request completes successfully, any subsequent retries complete successfully
 *         without performing any further actions.</p>
 *          </note>
 * @public
 */
export class IdempotencyParameterMismatch extends __BaseException {
  readonly name: "IdempotencyParameterMismatch" = "IdempotencyParameterMismatch";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyParameterMismatch, __BaseException>) {
    super({
      name: "IdempotencyParameterMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyParameterMismatch.prototype);
  }
}

/**
 * @public
 */
export interface RenameObjectOutput {}

/**
 * @public
 */
export interface RenameObjectRequest {
  /**
   * <p>The bucket name of the directory bucket containing the object.</p>
   *          <p> You must use virtual-hosted-style requests in the format
   *         <code>Bucket-name.s3express-zone-id.region-code.amazonaws.com</code>. Path-style requests are not
   *       supported. Directory bucket names must be unique in the chosen Availability Zone. Bucket names must
   *       follow the format <code>bucket-base-name--zone-id--x-s3 </code> (for example,
   *         <code>amzn-s3-demo-bucket--usw2-az1--x-s3</code>). For information about bucket naming restrictions, see
   *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Key name of the object to rename.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Specifies the source for the rename operation. The value must be URL encoded.</p>
   * @public
   */
  RenameSource: string | undefined;

  /**
   * <p>Renames the object only if the ETag (entity tag) value provided during the operation matches the
   *       ETag of the object in S3. The <code>If-Match</code> header field makes the request method conditional on
   *       ETags. If the ETag values do not match, the operation returns a <code>412 Precondition Failed</code>
   *       error.</p>
   *          <p>Expects the ETag value as a string.</p>
   * @public
   */
  DestinationIfMatch?: string | undefined;

  /**
   * <p> Renames the object only if the destination does not already exist in the specified directory
   *       bucket. If the object does exist when you send a request with <code>If-None-Match:*</code>, the S3 API
   *       will return a <code>412 Precondition Failed</code> error, preventing an overwrite. The
   *         <code>If-None-Match</code> header prevents overwrites of existing data by validating that there's not
   *       an object with the same key name already in your directory bucket.</p>
   *          <p> Expects the <code>*</code> character (asterisk).</p>
   * @public
   */
  DestinationIfNoneMatch?: string | undefined;

  /**
   * <p>Renames the object if the destination exists and if it has been modified since the specified
   *       time.</p>
   * @public
   */
  DestinationIfModifiedSince?: Date | undefined;

  /**
   * <p>Renames the object if it hasn't been modified since the specified time.</p>
   * @public
   */
  DestinationIfUnmodifiedSince?: Date | undefined;

  /**
   * <p>Renames the object if the source exists and if its entity tag (ETag) matches the specified ETag.
   *     </p>
   * @public
   */
  SourceIfMatch?: string | undefined;

  /**
   * <p>Renames the object if the source exists and if its entity tag (ETag) is different than the specified
   *       ETag. If an asterisk (<code>*</code>) character is provided, the operation will fail and return a
   *         <code>412 Precondition Failed</code> error. </p>
   * @public
   */
  SourceIfNoneMatch?: string | undefined;

  /**
   * <p>Renames the object if the source exists and if it has been modified since the specified time.</p>
   * @public
   */
  SourceIfModifiedSince?: Date | undefined;

  /**
   * <p>Renames the object if the source exists and hasn't been modified since the specified time.</p>
   * @public
   */
  SourceIfUnmodifiedSince?: Date | undefined;

  /**
   * <p> A unique string with a max of 64 ASCII characters in the ASCII range of 33 - 126.</p>
   *          <note>
   *             <p>
   *                <code>RenameObject</code> supports idempotency using a client token. To make an idempotent API request
   *         using <code>RenameObject</code>, specify a client token in the request. You should not reuse the same
   *         client token for other API requests. If you retry a request that completed successfully using the same
   *         client token and the same parameters, the retry succeeds without performing any further actions. If
   *         you retry a successful request using the same client token, but one or more of the parameters are
   *         different, the retry fails and an <code>IdempotentParameterMismatch</code> error is returned. </p>
   *          </note>
   * @public
   */
  ClientToken?: string | undefined;
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
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * <p>Indicates the path in the provided S3 output location where Select results will be restored
   *       to.</p>
   * @public
   */
  RestoreOutputPath?: string | undefined;
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
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (for example, AES256,
   *         <code>aws:kms</code>).</p>
   * @public
   */
  EncryptionType: ServerSideEncryption | undefined;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value specifies the ID of the
   *       symmetric encryption customer managed key to use for encryption of job results. Amazon S3 only supports symmetric
   *       encryption KMS keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric keys in KMS</a> in the
   *         <i>Amazon Web Services Key Management Service Developer Guide</i>.</p>
   * @public
   */
  KMSKeyId?: string | undefined;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value can be used to specify the
   *       encryption context for the restore results.</p>
   * @public
   */
  KMSContext?: string | undefined;
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
  Name?: string | undefined;

  /**
   * <p>Value of the object.</p>
   * @public
   */
  Value?: string | undefined;
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
  Encryption?: Encryption | undefined;

  /**
   * <p>The canned ACL to apply to the restore results.</p>
   * @public
   */
  CannedACL?: ObjectCannedACL | undefined;

  /**
   * <p>A list of grants that control access to the staged results.</p>
   * @public
   */
  AccessControlList?: Grant[] | undefined;

  /**
   * <p>The tag-set that is applied to the restore results.</p>
   * @public
   */
  Tagging?: Tagging | undefined;

  /**
   * <p>A list of metadata to store with the restore results in S3.</p>
   * @public
   */
  UserMetadata?: MetadataEntry[] | undefined;

  /**
   * <p>The class of storage used to store the restore results.</p>
   * @public
   */
  StorageClass?: StorageClass | undefined;
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
  S3?: S3Location | undefined;
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
 *       formatted.</p>
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
   *                   <code>IGNORE</code>: First line is a header, but you can't use the header values to indicate the
   *           column in an expression. You can use column position (such as _1, _2, …) to indicate the column
   *             (<code>SELECT s._1 FROM OBJECT s</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Use</code>: First line is a header, and you can use the header value to identify a column
   *           in an expression (<code>SELECT "name" FROM OBJECT</code>). </p>
   *             </li>
   *          </ul>
   * @public
   */
  FileHeaderInfo?: FileHeaderInfo | undefined;

  /**
   * <p>A single character used to indicate that a row should be ignored when the character is present at
   *       the start of that row. You can specify any character to indicate a comment line. The default character
   *       is <code>#</code>.</p>
   *          <p>Default: <code>#</code>
   *          </p>
   * @public
   */
  Comments?: string | undefined;

  /**
   * <p>A single character used for escaping the quotation mark character inside an already escaped value.
   *       For example, the value <code>""" a , b """</code> is parsed as <code>" a , b "</code>.</p>
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * <p>A single character used to separate individual records in the input. Instead of the default value,
   *       you can specify an arbitrary delimiter.</p>
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * <p>A single character used to separate individual fields in a record. You can specify an arbitrary
   *       delimiter.</p>
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For example, if
   *       the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks, as follows: <code>" a ,
   *         b "</code>.</p>
   *          <p>Type: String</p>
   *          <p>Default: <code>"</code>
   *          </p>
   *          <p>Ancestors: <code>CSV</code>
   *          </p>
   * @public
   */
  QuoteCharacter?: string | undefined;

  /**
   * <p>Specifies that CSV field values may contain quoted record delimiters and such records should be
   *       allowed. Default value is FALSE. Setting this value to TRUE may lower performance.</p>
   * @public
   */
  AllowQuotedRecordDelimiter?: boolean | undefined;
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
  Type?: JSONType | undefined;
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
  CSV?: CSVInput | undefined;

  /**
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value: NONE.</p>
   * @public
   */
  CompressionType?: CompressionType | undefined;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   * @public
   */
  JSON?: JSONInput | undefined;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   * @public
   */
  Parquet?: ParquetInput | undefined;
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
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are formatted.</p>
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
  QuoteFields?: QuoteFields | undefined;

  /**
   * <p>The single character used for escaping the quote character inside an already escaped value.</p>
   * @public
   */
  QuoteEscapeCharacter?: string | undefined;

  /**
   * <p>A single character used to separate individual records in the output. Instead of the default value,
   *       you can specify an arbitrary delimiter.</p>
   * @public
   */
  RecordDelimiter?: string | undefined;

  /**
   * <p>The value used to separate individual fields in a record. You can specify an arbitrary
   *       delimiter.</p>
   * @public
   */
  FieldDelimiter?: string | undefined;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For example, if
   *       the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks, as follows: <code>" a ,
   *         b "</code>.</p>
   * @public
   */
  QuoteCharacter?: string | undefined;
}

/**
 * <p>Specifies JSON as request's output serialization format.</p>
 * @public
 */
export interface JSONOutput {
  /**
   * <p>The value used to separate individual records in the output. If no value is specified, Amazon S3 uses a
   *       newline character ('\n').</p>
   * @public
   */
  RecordDelimiter?: string | undefined;
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
  CSV?: CSVOutput | undefined;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   * @public
   */
  JSON?: JSONOutput | undefined;
}

/**
 * <important>
 *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
 *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
 *             </p>
 *          </important>
 *          <p>Describes the parameters for Select job types.</p>
 *          <p>Learn <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">How to
 *         optimize querying your data in Amazon S3</a> using <a href="https://docs.aws.amazon.com/athena/latest/ug/what-is.html">Amazon Athena</a>, <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">S3 Object Lambda</a>, or client-side
 *       filtering.</p>
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
   * <important>
   *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
   *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
   *             </p>
   *          </important>
   *          <p>The expression that is used to query the object.</p>
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
   *         <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *       requests.</p>
   * @public
   */
  Days?: number | undefined;

  /**
   * <p>S3 Glacier related parameters pertaining to this job. Do not use with restores that specify
   *         <code>OutputLocation</code>.</p>
   * @public
   */
  GlacierJobParameters?: GlacierJobParameters | undefined;

  /**
   * <important>
   *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
   *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
   *             </p>
   *          </important>
   *          <p>Type of restore request.</p>
   * @public
   */
  Type?: RestoreRequestType | undefined;

  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   * @public
   */
  Tier?: Tier | undefined;

  /**
   * <p>The optional description for the job.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <important>
   *             <p>Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3 Select can
   *         continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
   *             </p>
   *          </important>
   *          <p>Describes the parameters for Select job types.</p>
   * @public
   */
  SelectParameters?: SelectParameters | undefined;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   * @public
   */
  OutputLocation?: OutputLocation | undefined;
}

/**
 * @public
 */
export interface RestoreObjectRequest {
  /**
   * <p>The bucket name containing the object to restore. </p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
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
  VersionId?: string | undefined;

  /**
   * <p>Container for restore job parameters.</p>
   * @public
   */
  RestoreRequest?: RestoreRequest | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ContinuationEvent {}

/**
 * <p>A message that indicates the request is complete and no more messages will be sent. You should not
 *       assume that the request is complete until the client receives an <code>EndEvent</code>.</p>
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
  BytesScanned?: number | undefined;

  /**
   * <p>The current number of uncompressed object bytes processed.</p>
   * @public
   */
  BytesProcessed?: number | undefined;

  /**
   * <p>The current number of bytes of records payload data returned.</p>
   * @public
   */
  BytesReturned?: number | undefined;
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
  Details?: Progress | undefined;
}

/**
 * <p>The container for the records event.</p>
 * @public
 */
export interface RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records. S3 Select doesn't guarantee that a record
   *       will be self-contained in one record frame. To ensure continuous streaming of data, S3 Select might
   *       split the same record across multiple record frames instead of aggregating the results in memory. Some
   *       S3 clients (for example, the SDKforJava) handle this behavior by creating a
   *         <code>ByteStream</code> out of the response by default. Other clients might not handle this behavior
   *       by default. In those cases, you must aggregate the results on the client side and parse the
   *       response.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;
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
  BytesScanned?: number | undefined;

  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   * @public
   */
  BytesProcessed?: number | undefined;

  /**
   * <p>The total number of bytes of records payload data returned.</p>
   * @public
   */
  BytesReturned?: number | undefined;
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
  Details?: Stats | undefined;
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
  Payload?: AsyncIterable<SelectObjectContentEventStream> | undefined;
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be sent.</p>
 * @public
 */
export interface RequestProgress {
  /**
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE, FALSE. Default
   *       value: FALSE.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed when its first
 *       byte is contained by the range. This parameter is optional, but when specified, it must not be empty.
 *       See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
 * @public
 */
export interface ScanRange {
  /**
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values: non-negative
   *       integers. The default value is 0. If only <code>start</code> is supplied, it means scan from that point
   *       to the end of the file. For example,
   *         <code><scanrange><start>50</start></scanrange></code> means scan from byte 50
   *       until the end of the file.</p>
   * @public
   */
  Start?: number | undefined;

  /**
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values: non-negative
   *       integers. The default value is one less than the size of the object being queried. If only the End
   *       parameter is supplied, it is interpreted to mean scan the last N bytes of the file. For example,
   *         <code><scanrange><end>50</end></scanrange></code> means scan the last 50
   *       bytes.</p>
   * @public
   */
  End?: number | undefined;
}

/**
 * <note>
 *             <p>Learn Amazon S3 Select is no longer available to new customers. Existing customers of Amazon S3
 *         Select can continue to use the feature as usual. <a href="http://aws.amazon.com/blogs/storage/how-to-optimize-querying-your-data-in-amazon-s3/">Learn more</a>
 *             </p>
 *          </note>
 *          <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query Language (SQL)
 *       statement. In the request, along with the SQL expression, you must specify a data serialization format
 *       (JSON or CSV) of the object. Amazon S3 uses this to parse object data into records. It returns only records
 *       that match the specified SQL expression. You must also specify the data serialization format for the
 *       response. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
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
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>The server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum algorithm.
   *     For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>The MD5 server-side encryption (SSE) customer managed key. This parameter is needed only when the object was created using a checksum
   *     algorithm. For more information,
   *     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Protecting data using SSE-C keys</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

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
  RequestProgress?: RequestProgress | undefined;

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
   * <p>Specifies the byte range of the object to get the records from. A record is processed when its first
   *       byte is contained by the range. This parameter is optional, but when specified, it must not be empty.
   *       See RFC 2616, Section 14.35.1 about how to specify the start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code>
   *           - process only the records starting between the bytes 50 and 100 (inclusive, counting from
   *           zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> - process only the
   *           records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> - process only the
   *           records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ScanRange?: ScanRange | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p>
 *       The specified updates to the S3 Metadata inventory table configuration.
 *     </p>
 * @public
 */
export interface InventoryTableConfigurationUpdates {
  /**
   * <p>
   *       The configuration state of the inventory table, indicating whether the inventory table is enabled
   *       or disabled.
   *     </p>
   * @public
   */
  ConfigurationState: InventoryConfigurationState | undefined;

  /**
   * <p>
   *       The encryption configuration for the inventory table.
   *     </p>
   * @public
   */
  EncryptionConfiguration?: MetadataTableEncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateBucketMetadataInventoryTableConfigurationRequest {
  /**
   * <p>
   *       The general purpose bucket that corresponds to the metadata configuration that you want to
   *       enable or disable an inventory table for.
   *     </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>
   *       The <code>Content-MD5</code> header for the inventory table configuration.
   *     </p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>
   *       The checksum algorithm to use with your inventory table configuration.
   *     </p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>
   *       The contents of your inventory table configuration.
   *     </p>
   * @public
   */
  InventoryTableConfiguration: InventoryTableConfigurationUpdates | undefined;

  /**
   * <p>
   *       The expected owner of the general purpose bucket that corresponds to the metadata table
   *       configuration that you want to enable or disable an inventory table for.
   *     </p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * <p>
 *       The specified updates to the S3 Metadata journal table configuration.
 *     </p>
 * @public
 */
export interface JournalTableConfigurationUpdates {
  /**
   * <p>
   *       The journal table record expiration settings for the journal table.
   *     </p>
   * @public
   */
  RecordExpiration: RecordExpiration | undefined;
}

/**
 * @public
 */
export interface UpdateBucketMetadataJournalTableConfigurationRequest {
  /**
   * <p>
   *       The general purpose bucket that corresponds to the metadata configuration that you want to
   *       enable or disable journal table record expiration for.
   *     </p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>
   *       The <code>Content-MD5</code> header for the journal table configuration.
   *     </p>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>
   *       The checksum algorithm to use with your journal table configuration.
   *     </p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>
   *       The contents of your journal table configuration.
   *     </p>
   * @public
   */
  JournalTableConfiguration: JournalTableConfigurationUpdates | undefined;

  /**
   * <p>
   *       The expected owner of the general purpose bucket that corresponds to the metadata table
   *       configuration that you want to enable or disable journal table record expiration for.
   *     </p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UploadPartOutput {
  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
   *          <note>
   *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
   *         encryption option is <code>aws:fsx</code>.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>Entity tag for the uploaded object.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32 checksum</code> of the object. This checksum is only be present if the checksum was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>The Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. This checksum is only present if the checksum was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
   *       checksum of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>The Base64 encoded, 160-bit <code>SHA1</code> digest of the object. This will only be present if the object was uploaded
   *     with the object. When you use the API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>The Base64 encoded, 256-bit <code>SHA256</code> digest of the object. This will only be present if the object was uploaded
   *     with the object. When you use an API operation on an object that was uploaded using multipart uploads, this value may not be a direct checksum value of the full object. Instead, it's a calculation based on the checksum values of each individual part. For more information about how checksums are calculated
   *     with multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#large-object-checksums">
   *     Checking object integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to provide the round-trip message integrity verification of the customer-provided
   *       encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with
   *       Key Management Service (KMS) keys (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface UploadPartRequest {
  /**
   * <p>Object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be determined
   *       automatically.</p>
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * <p>The Base64 encoded 128-bit MD5 digest of the part data. This parameter is auto-populated when using
   *       the command from the CLI. This parameter is required if object lock parameters are specified.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  ContentMD5?: string | undefined;

  /**
   * <p>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any
   *     additional functionality if you don't use the SDK. When you send this header, there must be a corresponding <code>x-amz-checksum</code> or
   *     <code>x-amz-trailer</code> header sent. Otherwise, Amazon S3 fails the request with the HTTP status code <code>400 Bad Request</code>. For more
   *     information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *     the <i>Amazon S3 User Guide</i>.</p>
   *          <p>If you provide an individual checksum, Amazon S3 ignores any provided <code>ChecksumAlgorithm</code>
   *       parameter.</p>
   *          <p>This checksum algorithm must be the same for all parts and it match the checksum value supplied in
   *       the <code>CreateMultipartUpload</code> request.</p>
   * @public
   */
  ChecksumAlgorithm?: ChecksumAlgorithm | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 32-bit <code>CRC32</code> checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 32-bit <code>CRC32C</code> checksum of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
   *       checksum of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 160-bit <code>SHA1</code> digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data that was originally sent.
   *     This header specifies the Base64 encoded, 256-bit <code>SHA256</code> digest of the object. For more information, see
   *     <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in the
   *     <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being uploaded. This is a positive integer between 1 and 10,000.</p>
   * @public
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   * @public
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example, AES256).</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is
   *       used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must
   *       be appropriate for use with the algorithm specified in the
   *         <code>x-amz-server-side-encryption-customer-algorithm header</code>. This must be the same encryption
   *       key specified in the initiate multipart upload request.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header
   *       for a message integrity check to ensure that the encryption key was transmitted without error.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
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
  ETag?: string | undefined;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 32-bit <code>CRC32</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 32-bit <code>CRC32C</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>The Base64 encoded, 64-bit <code>CRC64NVME</code> checksum of the part. This checksum is present if
   *       the multipart upload request was created with the <code>CRC64NVME</code> checksum algorithm to the
   *       uploaded object). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 160-bit <code>SHA1</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 256-bit <code>SHA256</code> checksum
   *       of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;
}

/**
 * @public
 */
export interface UploadPartCopyOutput {
  /**
   * <p>The version of the source object that was copied, if you have enabled versioning on the source
   *       bucket.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceVersionId?: string | undefined;

  /**
   * <p>Container for all response elements.</p>
   * @public
   */
  CopyPartResult?: CopyPartResult | undefined;

  /**
   * <p>The server-side encryption algorithm used when you store this object in Amazon S3 or Amazon FSx.</p>
   *          <note>
   *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
   *         encryption option is <code>aws:fsx</code>.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to confirm the encryption algorithm that's used.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the response will
   *       include this header to provide the round-trip message integrity verification of the customer-provided
   *       encryption key.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>If present, indicates the ID of the KMS key that was used for object encryption.</p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with
   *       Key Management Service (KMS) keys (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;
}

/**
 * @public
 */
export interface UploadPartCopyRequest {
  /**
   * <p>The bucket name.</p>
   *          <p>
   *             <b>Directory buckets</b> - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format <code>
   *                <i>Bucket-name</i>.s3express-<i>zone-id</i>.<i>region-code</i>.amazonaws.com</code>. Path-style requests are not supported.  Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format <code>
   *                <i>bucket-base-name</i>--<i>zone-id</i>--x-s3</code> (for example, <code>
   *                <i>amzn-s3-demo-bucket</i>--<i>usw2-az1</i>--x-s3</code>). For information about bucket naming
   *          restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html">Directory bucket naming
   *             rules</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Copying objects across different Amazon Web Services Regions isn't supported when the source or destination
   *         bucket is in Amazon Web Services Local Zones. The source and destination buckets must have the same parent Amazon Web Services Region.
   *         Otherwise, you get an HTTP <code>400 Bad Request</code> error with the error code
   *           <code>InvalidRequest</code>.</p>
   *          </note>
   *          <p>
   *             <b>Access points</b> - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>Object Lambda access points are not supported by directory buckets.</p>
   *          </note>
   *          <p>
   *             <b>S3 on Outposts</b> - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the
   *                      form <code>
   *                <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com</code>. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">What is S3 on Outposts?</a> in the <i>Amazon S3 User Guide</i>.</p>
   * <p>Note: To supply the Multi-region Access Point (MRAP) to Bucket, you need to install the "@aws-sdk/signature-v4-crt" package to your project dependencies.
   * For more information, please go to https://github.com/aws/aws-sdk-js-v3#known-issues</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the source object for the copy operation. You specify the value in one of two formats,
   *       depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">access point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source bucket and key of the
   *           source object, separated by a slash (/). For example, to copy the object
   *             <code>reports/january.pdf</code> from the bucket <code>awsexamplebucket</code>, use
   *             <code>awsexamplebucket/reports/january.pdf</code>. The value must be URL-encoded.</p>
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
   *          <p>If your bucket has versioning enabled, you could have multiple versions of the same object. By
   *       default, <code>x-amz-copy-source</code> identifies the current version of the source object to copy. To
   *       copy a specific version of the source object to copy, append <code>?versionId=<version-id></code> to
   *       the <code>x-amz-copy-source</code> request header (for example, <code>x-amz-copy-source:
   *         /awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>). </p>
   *          <p>If the current version is a delete marker and you don't specify a versionId in the
   *         <code>x-amz-copy-source</code> request header, Amazon S3 returns a <code>404 Not Found</code> error,
   *       because the object does not exist. If you specify versionId in the <code>x-amz-copy-source</code> and
   *       the versionId is a delete marker, Amazon S3 returns an HTTP <code>400 Bad Request</code> error, because you
   *       are not allowed to specify a delete marker as a version for the <code>x-amz-copy-source</code>. </p>
   *          <note>
   *             <p>
   *                <b>Directory buckets</b> - S3 Versioning isn't enabled and supported for directory buckets.</p>
   *          </note>
   * @public
   */
  CopySource: string | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-match</code> and
   *         <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the request as
   *       follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to <code>false</code>;</p>
   *          <p>Amazon S3 returns <code>200 OK</code> and copies the data.
   *       </p>
   * @public
   */
  CopySourceIfMatch?: string | undefined;

  /**
   * <p>Copies the object if it has been modified since the specified time.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-none-match</code> and
   *         <code>x-amz-copy-source-if-modified-since</code> headers are present in the request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-none-match</code> condition evaluates to <code>false</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-modified-since</code> condition evaluates to <code>true</code>;</p>
   *          <p>Amazon S3 returns <code>412 Precondition Failed</code> response code.
   *       </p>
   * @public
   */
  CopySourceIfModifiedSince?: Date | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-none-match</code> and
   *         <code>x-amz-copy-source-if-modified-since</code> headers are present in the request as follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-none-match</code> condition evaluates to <code>false</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-modified-since</code> condition evaluates to <code>true</code>;</p>
   *          <p>Amazon S3 returns <code>412 Precondition Failed</code> response code.
   *       </p>
   * @public
   */
  CopySourceIfNoneMatch?: string | undefined;

  /**
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   *          <p>If both of the <code>x-amz-copy-source-if-match</code> and
   *         <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the request as
   *       follows:</p>
   *          <p>
   *             <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>, and;</p>
   *          <p>
   *             <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to <code>false</code>;</p>
   *          <p>Amazon S3 returns <code>200 OK</code> and copies the data.
   *       </p>
   * @public
   */
  CopySourceIfUnmodifiedSince?: Date | undefined;

  /**
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *       bytes=first-last, where the first and last are the zero-based byte offsets to copy. For example,
   *       bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You can copy a range only if
   *       the source object is greater than 5 MB.</p>
   * @public
   */
  CopySourceRange?: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being copied. This is a positive integer between 1 and 10,000.</p>
   * @public
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   * @public
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use when encrypting the object (for example, AES256).</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is
   *       used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must
   *       be appropriate for use with the algorithm specified in the
   *         <code>x-amz-server-side-encryption-customer-algorithm</code> header. This must be the same encryption
   *       key specified in the initiate multipart upload request.</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerKey?: string | undefined;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header
   *       for a message integrity check to ensure that the encryption key was transmitted without error.</p>
   *          <note>
   *             <p>This functionality is not supported when the destination bucket is a directory bucket.</p>
   *          </note>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *       <code>AES256</code>).</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerAlgorithm?: string | undefined;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The
   *       encryption key provided in this header must be one that was used when the source object was
   *       created.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerKey?: string | undefined;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header
   *       for a message integrity check to ensure that the encryption key was transmitted without error.</p>
   *          <note>
   *             <p>This functionality is not supported when the source object is in a directory bucket.</p>
   *          </note>
   * @public
   */
  CopySourceSSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket owners need not
   *       specify this parameter in their requests. If either the source or destination S3 bucket has Requester
   *       Pays enabled, the requester will pay for corresponding charges to copy the object. For information about
   *       downloading objects from Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in Requester Pays
   *         Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestPayer?: RequestPayer | undefined;

  /**
   * <p>The account ID of the expected destination bucket owner. If the account ID that you provide does not match the actual owner of the destination bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The account ID of the expected source bucket owner. If the account ID that you provide does not match the actual owner of the source bucket, the request fails with the HTTP status code <code>403 Forbidden</code> (access denied).</p>
   * @public
   */
  ExpectedSourceBucketOwner?: string | undefined;
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
   * <p>A single use encrypted token that maps <code>WriteGetObjectResponse</code> to the end user
   *         <code>GetObject</code> request.</p>
   * @public
   */
  RequestToken: string | undefined;

  /**
   * <p>The object data.</p>
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * <p>The integer status code for an HTTP response of a corresponding <code>GetObject</code> request. The
   *       following is a list of status codes.</p>
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
  StatusCode?: number | undefined;

  /**
   * <p>A string that uniquely identifies an error condition. Returned in the <Code> tag of the error
   *       XML response for a corresponding <code>GetObject</code> call. Cannot be used with a successful
   *         <code>StatusCode</code> header or when the transformed object is provided in the body. All error codes
   *       from S3 are sentence-cased. The regular expression (regex) value is
   *       <code>"^[A-Z][a-zA-Z]+$"</code>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Contains a generic description of the error condition. Returned in the <Message> tag of the
   *       error XML response for a corresponding <code>GetObject</code> call. Cannot be used with a successful
   *         <code>StatusCode</code> header or when the transformed object is provided in body.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Indicates that a range of bytes was specified.</p>
   * @public
   */
  AcceptRanges?: string | undefined;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * <p>Specifies presentational information for the object.</p>
   * @public
   */
  ContentDisposition?: string | undefined;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding mechanisms
   *       must be applied to obtain the media-type referenced by the Content-Type header field.</p>
   * @public
   */
  ContentEncoding?: string | undefined;

  /**
   * <p>The language the content is in.</p>
   * @public
   */
  ContentLanguage?: string | undefined;

  /**
   * <p>The size of the content body in bytes.</p>
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * <p>The portion of the object returned in the response.</p>
   * @public
   */
  ContentRange?: string | undefined;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 32-bit <code>CRC32</code> checksum of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   *          <p></p>
   * @public
   */
  ChecksumCRC32?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 32-bit <code>CRC32C</code> checksum of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   * @public
   */
  ChecksumCRC32C?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This header specifies the Base64 encoded, 64-bit <code>CRC64NVME</code>
   *       checksum of the part. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object integrity</a> in
   *       the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  ChecksumCRC64NVME?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 160-bit <code>SHA1</code> digest of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   * @public
   */
  ChecksumSHA1?: string | undefined;

  /**
   * <p>This header can be used as a data integrity check to verify that the data received is the same data
   *       that was originally sent. This specifies the Base64 encoded, 256-bit <code>SHA256</code> digest of the
   *       object returned by the Object Lambda function. This may not match the checksum for the object stored in
   *       Amazon S3. Amazon S3 will perform validation of the checksum values only when the original <code>GetObject</code>
   *       request required checksum validation. For more information about checksums, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html">Checking object
   *         integrity</a> in the <i>Amazon S3 User Guide</i>.</p>
   *          <p>Only one checksum header can be specified at a time. If you supply multiple checksum headers, this
   *       request will fail.</p>
   * @public
   */
  ChecksumSHA256?: string | undefined;

  /**
   * <p>Specifies whether an object stored in Amazon S3 is (<code>true</code>) or is not (<code>false</code>) a
   *       delete marker. To learn more about delete markers, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeleteMarker.html">Working with delete markers</a>.</p>
   * @public
   */
  DeleteMarker?: boolean | undefined;

  /**
   * <p>An opaque identifier assigned by a web server to a specific version of a resource found at a URL.
   *     </p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   * @public
   */
  Expires?: Date | undefined;

  /**
   * <p>If the object expiration is configured (see PUT Bucket lifecycle), the response includes this
   *       header. It includes the <code>expiry-date</code> and <code>rule-id</code> key-value pairs that provide
   *       the object expiration information. The value of the <code>rule-id</code> is URL-encoded. </p>
   * @public
   */
  Expiration?: string | undefined;

  /**
   * <p>The date and time that the object was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>Set to the number of metadata entries not returned in <code>x-amz-meta</code> headers. This can
   *       happen if you create metadata using an API like SOAP that supports more flexible metadata than the REST
   *       API. For example, using SOAP, you can create metadata whose values are not legal HTTP headers.</p>
   * @public
   */
  MissingMeta?: number | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether an object stored in Amazon S3 has Object Lock enabled. For more information about S3
   *       Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html">Object
   *         Lock</a>.</p>
   * @public
   */
  ObjectLockMode?: ObjectLockMode | undefined;

  /**
   * <p>Indicates whether an object stored in Amazon S3 has an active legal hold.</p>
   * @public
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | undefined;

  /**
   * <p>The date and time when Object Lock is configured to expire.</p>
   * @public
   */
  ObjectLockRetainUntilDate?: Date | undefined;

  /**
   * <p>The count of parts this object has.</p>
   * @public
   */
  PartsCount?: number | undefined;

  /**
   * <p>Indicates if request involves bucket that is either a source or destination in a Replication rule.
   *       For more information about S3 Replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html">Replication</a>.</p>
   * @public
   */
  ReplicationStatus?: ReplicationStatus | undefined;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html">Using Requester Pays buckets for storage transfers and usage</a> in the <i>Amazon Simple
   *         Storage Service user guide</i>.</p>
   *          <note>
   *             <p>This functionality is not supported for directory buckets.</p>
   *          </note>
   * @public
   */
  RequestCharged?: RequestCharged | undefined;

  /**
   * <p>Provides information about object restoration operation and expiration time of the restored object
   *       copy.</p>
   * @public
   */
  Restore?: string | undefined;

  /**
   * <p> The server-side encryption algorithm used when storing requested object in Amazon S3 or Amazon FSx.</p>
   *          <note>
   *             <p>When accessing data stored in Amazon FSx file systems using S3 access points, the only valid server side
   *         encryption option is <code>aws:fsx</code>.</p>
   *          </note>
   * @public
   */
  ServerSideEncryption?: ServerSideEncryption | undefined;

  /**
   * <p>Encryption algorithm used if server-side encryption with a customer-provided encryption key was
   *       specified for object stored in Amazon S3.</p>
   * @public
   */
  SSECustomerAlgorithm?: string | undefined;

  /**
   * <p> If present, specifies the ID (Key ID, Key ARN, or Key Alias) of the Amazon Web Services Key Management Service
   *       (Amazon Web Services KMS) symmetric encryption customer managed key that was used for stored in Amazon S3 object. </p>
   * @public
   */
  SSEKMSKeyId?: string | undefined;

  /**
   * <p> 128-bit MD5 digest of customer-provided encryption key used in Amazon S3 to encrypt data stored in S3.
   *       For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html">Protecting data using
   *         server-side encryption with customer-provided encryption keys (SSE-C)</a>.</p>
   * @public
   */
  SSECustomerKeyMD5?: string | undefined;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all objects except
   *       for S3 Standard storage class objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a>.</p>
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * <p>The number of tags, if any, on the object.</p>
   * @public
   */
  TagCount?: number | undefined;

  /**
   * <p>An ID used to reference a specific version of the object.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p> Indicates whether the object stored in Amazon S3 uses an S3 bucket key for server-side encryption with
   *       Amazon Web Services KMS (SSE-KMS).</p>
   * @public
   */
  BucketKeyEnabled?: boolean | undefined;
}

/**
 * @internal
 */
export const ListPartsRequestFilterSensitiveLog = (obj: ListPartsRequest): any => ({
  ...obj,
  ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutBucketEncryptionRequestFilterSensitiveLog = (obj: PutBucketEncryptionRequest): any => ({
  ...obj,
  ...(obj.ServerSideEncryptionConfiguration && {
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfigurationFilterSensitiveLog(
      obj.ServerSideEncryptionConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const PutBucketInventoryConfigurationRequestFilterSensitiveLog = (
  obj: PutBucketInventoryConfigurationRequest
): any => ({
  ...obj,
  ...(obj.InventoryConfiguration && {
    InventoryConfiguration: InventoryConfigurationFilterSensitiveLog(obj.InventoryConfiguration),
  }),
});

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
