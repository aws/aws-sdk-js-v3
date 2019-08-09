import { _UnmarshalledBackupPlan } from "./_BackupPlan";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBackupPlanFromJSONOutput shape
 */
export interface GetBackupPlanFromJSONOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or more sets of <code>Rules</code>.</p>
   */
  BackupPlan?: _UnmarshalledBackupPlan;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
