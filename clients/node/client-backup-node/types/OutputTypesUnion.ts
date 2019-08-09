import { CreateBackupPlanOutput } from "./CreateBackupPlanOutput";
import { CreateBackupSelectionOutput } from "./CreateBackupSelectionOutput";
import { CreateBackupVaultOutput } from "./CreateBackupVaultOutput";
import { DeleteBackupPlanOutput } from "./DeleteBackupPlanOutput";
import { DeleteBackupSelectionOutput } from "./DeleteBackupSelectionOutput";
import { DeleteBackupVaultOutput } from "./DeleteBackupVaultOutput";
import { DeleteBackupVaultAccessPolicyOutput } from "./DeleteBackupVaultAccessPolicyOutput";
import { DeleteBackupVaultNotificationsOutput } from "./DeleteBackupVaultNotificationsOutput";
import { DeleteRecoveryPointOutput } from "./DeleteRecoveryPointOutput";
import { DescribeBackupJobOutput } from "./DescribeBackupJobOutput";
import { DescribeBackupVaultOutput } from "./DescribeBackupVaultOutput";
import { DescribeProtectedResourceOutput } from "./DescribeProtectedResourceOutput";
import { DescribeRecoveryPointOutput } from "./DescribeRecoveryPointOutput";
import { DescribeRestoreJobOutput } from "./DescribeRestoreJobOutput";
import { ExportBackupPlanTemplateOutput } from "./ExportBackupPlanTemplateOutput";
import { GetBackupPlanOutput } from "./GetBackupPlanOutput";
import { GetBackupPlanFromJSONOutput } from "./GetBackupPlanFromJSONOutput";
import { GetBackupPlanFromTemplateOutput } from "./GetBackupPlanFromTemplateOutput";
import { GetBackupSelectionOutput } from "./GetBackupSelectionOutput";
import { GetBackupVaultAccessPolicyOutput } from "./GetBackupVaultAccessPolicyOutput";
import { GetBackupVaultNotificationsOutput } from "./GetBackupVaultNotificationsOutput";
import { GetRecoveryPointRestoreMetadataOutput } from "./GetRecoveryPointRestoreMetadataOutput";
import { GetSupportedResourceTypesOutput } from "./GetSupportedResourceTypesOutput";
import { ListBackupJobsOutput } from "./ListBackupJobsOutput";
import { ListBackupPlanTemplatesOutput } from "./ListBackupPlanTemplatesOutput";
import { ListBackupPlanVersionsOutput } from "./ListBackupPlanVersionsOutput";
import { ListBackupPlansOutput } from "./ListBackupPlansOutput";
import { ListBackupSelectionsOutput } from "./ListBackupSelectionsOutput";
import { ListBackupVaultsOutput } from "./ListBackupVaultsOutput";
import { ListProtectedResourcesOutput } from "./ListProtectedResourcesOutput";
import { ListRecoveryPointsByBackupVaultOutput } from "./ListRecoveryPointsByBackupVaultOutput";
import { ListRecoveryPointsByResourceOutput } from "./ListRecoveryPointsByResourceOutput";
import { ListRestoreJobsOutput } from "./ListRestoreJobsOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { PutBackupVaultAccessPolicyOutput } from "./PutBackupVaultAccessPolicyOutput";
import { PutBackupVaultNotificationsOutput } from "./PutBackupVaultNotificationsOutput";
import { StartBackupJobOutput } from "./StartBackupJobOutput";
import { StartRestoreJobOutput } from "./StartRestoreJobOutput";
import { StopBackupJobOutput } from "./StopBackupJobOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateBackupPlanOutput } from "./UpdateBackupPlanOutput";
import { UpdateRecoveryPointLifecycleOutput } from "./UpdateRecoveryPointLifecycleOutput";
export type OutputTypesUnion =
  | CreateBackupPlanOutput
  | CreateBackupSelectionOutput
  | CreateBackupVaultOutput
  | DeleteBackupPlanOutput
  | DeleteBackupSelectionOutput
  | DeleteBackupVaultOutput
  | DeleteBackupVaultAccessPolicyOutput
  | DeleteBackupVaultNotificationsOutput
  | DeleteRecoveryPointOutput
  | DescribeBackupJobOutput
  | DescribeBackupVaultOutput
  | DescribeProtectedResourceOutput
  | DescribeRecoveryPointOutput
  | DescribeRestoreJobOutput
  | ExportBackupPlanTemplateOutput
  | GetBackupPlanOutput
  | GetBackupPlanFromJSONOutput
  | GetBackupPlanFromTemplateOutput
  | GetBackupSelectionOutput
  | GetBackupVaultAccessPolicyOutput
  | GetBackupVaultNotificationsOutput
  | GetRecoveryPointRestoreMetadataOutput
  | GetSupportedResourceTypesOutput
  | ListBackupJobsOutput
  | ListBackupPlanTemplatesOutput
  | ListBackupPlanVersionsOutput
  | ListBackupPlansOutput
  | ListBackupSelectionsOutput
  | ListBackupVaultsOutput
  | ListProtectedResourcesOutput
  | ListRecoveryPointsByBackupVaultOutput
  | ListRecoveryPointsByResourceOutput
  | ListRestoreJobsOutput
  | ListTagsOutput
  | PutBackupVaultAccessPolicyOutput
  | PutBackupVaultNotificationsOutput
  | StartBackupJobOutput
  | StartRestoreJobOutput
  | StopBackupJobOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateBackupPlanOutput
  | UpdateRecoveryPointLifecycleOutput;
