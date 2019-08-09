import { _UnmarshalledChild } from "./_Child";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListChildrenOutput shape
 */
export interface ListChildrenOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of children of the specified parent container.</p>
   */
  Children?: Array<_UnmarshalledChild>;

  /**
   * <p>If present, this value indicates that there is more output available than is included in the current response. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back as <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
