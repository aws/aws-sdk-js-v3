import { _UnmarshalledIndexAttachment } from "./_IndexAttachment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAttachedIndicesOutput shape
 */
export interface ListAttachedIndicesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The indices attached to the specified object.</p>
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
