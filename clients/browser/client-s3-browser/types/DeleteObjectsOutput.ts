import { _UnmarshalledDeletedObject } from "./_DeletedObject";
import { _UnmarshalledError } from "./_Error";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteObjectsOutput shape
 */
export interface DeleteObjectsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  Deleted?: Array<_UnmarshalledDeletedObject>;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: "requester" | string;

  /**
   * <p/>
   */
  Errors?: Array<_UnmarshalledError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
