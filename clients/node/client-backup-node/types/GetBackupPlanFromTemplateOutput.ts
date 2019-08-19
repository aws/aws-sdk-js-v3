import { _UnmarshalledBackupPlan } from "./_BackupPlan";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBackupPlanFromTemplateOutput shape
 */
export interface GetBackupPlanFromTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns the body of a backup plan based on the target template, including the name, rules, and backup vault of the plan.</p>
   */
  BackupPlanDocument?: _UnmarshalledBackupPlan;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
