import { _UnmarshalledAuditMitigationActionExecutionMetadata } from "./_AuditMitigationActionExecutionMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAuditMitigationActionsExecutionsOutput shape
 */
export interface ListAuditMitigationActionsExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.</p>
   */
  actionsExecutions?: Array<
    _UnmarshalledAuditMitigationActionExecutionMetadata
  >;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
