import { _UnmarshalledAuditFinding } from "./_AuditFinding";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAuditFindingsOutput shape
 */
export interface ListAuditFindingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The findings (results) of the audit.</p>
   */
  findings?: Array<_UnmarshalledAuditFinding>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
