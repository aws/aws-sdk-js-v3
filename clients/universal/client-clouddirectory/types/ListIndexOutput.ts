import { _UnmarshalledIndexAttachment } from "./_IndexAttachment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListIndexOutput shape
 */
export interface ListIndexOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: Array<_UnmarshalledIndexAttachment>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
