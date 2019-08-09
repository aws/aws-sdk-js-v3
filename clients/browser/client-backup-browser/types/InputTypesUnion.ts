import { CreateBackupPlanInput } from "./CreateBackupPlanInput";
import { CreateBackupSelectionInput } from "./CreateBackupSelectionInput";
import { CreateBackupVaultInput } from "./CreateBackupVaultInput";
import { DeleteBackupPlanInput } from "./DeleteBackupPlanInput";
import { DeleteBackupSelectionInput } from "./DeleteBackupSelectionInput";
import { DeleteBackupVaultInput } from "./DeleteBackupVaultInput";
import { DeleteBackupVaultAccessPolicyInput } from "./DeleteBackupVaultAccessPolicyInput";
import { DeleteBackupVaultNotificationsInput } from "./DeleteBackupVaultNotificationsInput";
import { DeleteRecoveryPointInput } from "./DeleteRecoveryPointInput";
import { DescribeBackupJobInput } from "./DescribeBackupJobInput";
import { DescribeBackupVaultInput } from "./DescribeBackupVaultInput";
import { DescribeProtectedResourceInput } from "./DescribeProtectedResourceInput";
import { DescribeRecoveryPointInput } from "./DescribeRecoveryPointInput";
import { DescribeRestoreJobInput } from "./DescribeRestoreJobInput";
import { ExportBackupPlanTemplateInput } from "./ExportBackupPlanTemplateInput";
import { GetBackupPlanInput } from "./GetBackupPlanInput";
import { GetBackupPlanFromJSONInput } from "./GetBackupPlanFromJSONInput";
import { GetBackupPlanFromTemplateInput } from "./GetBackupPlanFromTemplateInput";
import { GetBackupSelectionInput } from "./GetBackupSelectionInput";
import { GetBackupVaultAccessPolicyInput } from "./GetBackupVaultAccessPolicyInput";
import { GetBackupVaultNotificationsInput } from "./GetBackupVaultNotificationsInput";
import { GetRecoveryPointRestoreMetadataInput } from "./GetRecoveryPointRestoreMetadataInput";
import { GetSupportedResourceTypesInput } from "./GetSupportedResourceTypesInput";
import { ListBackupJobsInput } from "./ListBackupJobsInput";
import { ListBackupPlanTemplatesInput } from "./ListBackupPlanTemplatesInput";
import { ListBackupPlanVersionsInput } from "./ListBackupPlanVersionsInput";
import { ListBackupPlansInput } from "./ListBackupPlansInput";
import { ListBackupSelectionsInput } from "./ListBackupSelectionsInput";
import { ListBackupVaultsInput } from "./ListBackupVaultsInput";
import { ListProtectedResourcesInput } from "./ListProtectedResourcesInput";
import { ListRecoveryPointsByBackupVaultInput } from "./ListRecoveryPointsByBackupVaultInput";
import { ListRecoveryPointsByResourceInput } from "./ListRecoveryPointsByResourceInput";
import { ListRestoreJobsInput } from "./ListRestoreJobsInput";
import { ListTagsInput } from "./ListTagsInput";
import { PutBackupVaultAccessPolicyInput } from "./PutBackupVaultAccessPolicyInput";
import { PutBackupVaultNotificationsInput } from "./PutBackupVaultNotificationsInput";
import { StartBackupJobInput } from "./StartBackupJobInput";
import { StartRestoreJobInput } from "./StartRestoreJobInput";
import { StopBackupJobInput } from "./StopBackupJobInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateBackupPlanInput } from "./UpdateBackupPlanInput";
import { UpdateRecoveryPointLifecycleInput } from "./UpdateRecoveryPointLifecycleInput";
export type InputTypesUnion =
  | CreateBackupPlanInput
  | CreateBackupSelectionInput
  | CreateBackupVaultInput
  | DeleteBackupPlanInput
  | DeleteBackupSelectionInput
  | DeleteBackupVaultInput
  | DeleteBackupVaultAccessPolicyInput
  | DeleteBackupVaultNotificationsInput
  | DeleteRecoveryPointInput
  | DescribeBackupJobInput
  | DescribeBackupVaultInput
  | DescribeProtectedResourceInput
  | DescribeRecoveryPointInput
  | DescribeRestoreJobInput
  | ExportBackupPlanTemplateInput
  | GetBackupPlanInput
  | GetBackupPlanFromJSONInput
  | GetBackupPlanFromTemplateInput
  | GetBackupSelectionInput
  | GetBackupVaultAccessPolicyInput
  | GetBackupVaultNotificationsInput
  | GetRecoveryPointRestoreMetadataInput
  | GetSupportedResourceTypesInput
  | ListBackupJobsInput
  | ListBackupPlanTemplatesInput
  | ListBackupPlanVersionsInput
  | ListBackupPlansInput
  | ListBackupSelectionsInput
  | ListBackupVaultsInput
  | ListProtectedResourcesInput
  | ListRecoveryPointsByBackupVaultInput
  | ListRecoveryPointsByResourceInput
  | ListRestoreJobsInput
  | ListTagsInput
  | PutBackupVaultAccessPolicyInput
  | PutBackupVaultNotificationsInput
  | StartBackupJobInput
  | StartRestoreJobInput
  | StopBackupJobInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateBackupPlanInput
  | UpdateRecoveryPointLifecycleInput;
