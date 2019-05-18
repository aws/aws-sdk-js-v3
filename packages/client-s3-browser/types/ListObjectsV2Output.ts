import { _UnmarshalledObject } from "./_Object";
import { _UnmarshalledCommonPrefix } from "./_CommonPrefix";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectsV2Output shape
 */
export interface ListObjectsV2Output extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A flag that indicates whether or not Amazon S3 returned all of the results that satisfied the search criteria.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Metadata about each object returned.</p>
   */
  Contents?: Array<_UnmarshalledObject>;

  /**
   * <p>Name of the bucket to list.</p>
   */
  Name?: string;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p>A delimiter is a character you use to group keys.</p>
   */
  Delimiter?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. The response might contain fewer keys but will never contain more.</p>
   */
  MaxKeys?: number;

  /**
   * <p>CommonPrefixes contains all (if there are any) keys between Prefix and the next occurrence of the string specified by delimiter</p>
   */
  CommonPrefixes?: Array<_UnmarshalledCommonPrefix>;

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: "url" | string;

  /**
   * <p>KeyCount is the number of keys returned with this request. KeyCount will always be less than equals to MaxKeys field. Say you ask for 50 keys, your result will include less than equals 50 keys </p>
   */
  KeyCount?: number;

  /**
   * <p>ContinuationToken indicates Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key</p>
   */
  ContinuationToken?: string;

  /**
   * <p>NextContinuationToken is sent when isTruncated is true which means there are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with this NextContinuationToken. NextContinuationToken is obfuscated and is not a real key</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket</p>
   */
  StartAfter?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
