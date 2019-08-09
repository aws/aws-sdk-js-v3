import { _UnmarshalledPart } from "./_Part";
import { _UnmarshalledInitiator } from "./_Initiator";
import { _UnmarshalledOwner } from "./_Owner";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPartsOutput shape
 */
export interface ListPartsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Date when multipart upload will become eligible for abort operation by lifecycle.</p>
   */
  AbortDate?: Date;

  /**
   * <p>Id of the lifecycle rule that makes a multipart upload eligible for abort operation.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
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
   * <p>Part number after which listing begins.</p>
   */
  PartNumberMarker?: number;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as the value to use for the part-number-marker request parameter in a subsequent request.</p>
   */
  NextPartNumberMarker?: number;

  /**
   * <p>Maximum number of parts that were allowed in the response.</p>
   */
  MaxParts?: number;

  /**
   * <p>Indicates whether the returned list of parts is truncated.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p/>
   */
  Parts?: Array<_UnmarshalledPart>;

  /**
   * <p>Identifies who initiated the multipart upload.</p>
   */
  Initiator?: _UnmarshalledInitiator;

  /**
   * <p/>
   */
  Owner?: _UnmarshalledOwner;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?:
    | "STANDARD"
    | "REDUCED_REDUNDANCY"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "GLACIER"
    | "DEEP_ARCHIVE"
    | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: "requester" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
