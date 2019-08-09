import { _UnmarshalledActiveViolation } from "./_ActiveViolation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListActiveViolationsOutput shape
 */
export interface ListActiveViolationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of active violations.</p>
   */
  activeViolations?: Array<_UnmarshalledActiveViolation>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
