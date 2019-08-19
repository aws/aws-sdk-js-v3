import { _UnmarshalledAuditTaskMetadata } from "./_AuditTaskMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAuditTasksOutput shape
 */
export interface ListAuditTasksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The audits that were performed during the specified time period.</p>
   */
  tasks?: Array<_UnmarshalledAuditTaskMetadata>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
