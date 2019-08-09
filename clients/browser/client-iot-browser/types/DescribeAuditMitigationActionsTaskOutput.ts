import { _UnmarshalledTaskStatisticsForAuditCheck } from "./_TaskStatisticsForAuditCheck";
import { _UnmarshalledAuditMitigationActionsTaskTarget } from "./_AuditMitigationActionsTaskTarget";
import { _UnmarshalledMitigationAction } from "./_MitigationAction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAuditMitigationActionsTaskOutput shape
 */
export interface DescribeAuditMitigationActionsTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the task.</p>
   */
  taskStatus?: "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELED" | string;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time when the task was completed or canceled.</p>
   */
  endTime?: Date;

  /**
   * <p>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</p>
   */
  taskStatistics?: { [key: string]: _UnmarshalledTaskStatisticsForAuditCheck };

  /**
   * <p>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</p>
   */
  target?: _UnmarshalledAuditMitigationActionsTaskTarget;

  /**
   * <p>Specifies the mitigation actions that should be applied to specific audit checks.</p>
   */
  auditCheckToActionsMapping?: { [key: string]: Array<string> };

  /**
   * <p>Specifies the mitigation actions and their parameters that are applied as part of this task.</p>
   */
  actionsDefinition?: Array<_UnmarshalledMitigationAction>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
