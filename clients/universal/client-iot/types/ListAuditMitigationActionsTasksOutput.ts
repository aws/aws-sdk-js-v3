import { _UnmarshalledAuditMitigationActionsTaskMetadata } from "./_AuditMitigationActionsTaskMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAuditMitigationActionsTasksOutput shape
 */
export interface ListAuditMitigationActionsTasksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
   */
  tasks?: Array<_UnmarshalledAuditMitigationActionsTaskMetadata>;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
