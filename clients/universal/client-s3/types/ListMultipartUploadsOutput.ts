import { _UnmarshalledMultipartUpload } from "./_MultipartUpload";
import { _UnmarshalledCommonPrefix } from "./_CommonPrefix";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMultipartUploadsOutput shape
 */
export interface ListMultipartUploadsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
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
   * <p>When a list is truncated, this element specifies the value that should be used for the key-marker request parameter in a subsequent request.</p>
   */
  NextKeyMarker?: string;

  /**
   * <p>When a prefix is provided in the request, this field contains the specified prefix. The result contains only keys starting with the specified prefix.</p>
   */
  Prefix?: string;

  /**
   * <p/>
   */
  Delimiter?: string;

  /**
   * <p>When a list is truncated, this element specifies the value that should be used for the upload-id-marker request parameter in a subsequent request.</p>
   */
  NextUploadIdMarker?: string;

  /**
   * <p>Maximum number of multipart uploads that could have been included in the response.</p>
   */
  MaxUploads?: number;

  /**
   * <p>Indicates whether the returned list of multipart uploads is truncated. A value of true indicates that the list was truncated. The list can be truncated if the number of multipart uploads exceeds the limit allowed or specified by max uploads.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p/>
   */
  Uploads?: Array<_UnmarshalledMultipartUpload>;

  /**
   * <p/>
   */
  CommonPrefixes?: Array<_UnmarshalledCommonPrefix>;

  /**
   * <p>Encoding type used by Amazon S3 to encode object keys in the response.</p>
   */
  EncodingType?: "url" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
