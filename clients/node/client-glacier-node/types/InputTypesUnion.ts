import { AbortMultipartUploadInput } from "./AbortMultipartUploadInput";
import { AbortVaultLockInput } from "./AbortVaultLockInput";
import { AddTagsToVaultInput } from "./AddTagsToVaultInput";
import { CompleteMultipartUploadInput } from "./CompleteMultipartUploadInput";
import { CompleteVaultLockInput } from "./CompleteVaultLockInput";
import { CreateVaultInput } from "./CreateVaultInput";
import { DeleteArchiveInput } from "./DeleteArchiveInput";
import { DeleteVaultInput } from "./DeleteVaultInput";
import { DeleteVaultAccessPolicyInput } from "./DeleteVaultAccessPolicyInput";
import { DeleteVaultNotificationsInput } from "./DeleteVaultNotificationsInput";
import { DescribeJobInput } from "./DescribeJobInput";
import { DescribeVaultInput } from "./DescribeVaultInput";
import { GetDataRetrievalPolicyInput } from "./GetDataRetrievalPolicyInput";
import { GetJobOutputInput } from "./GetJobOutputInput";
import { GetVaultAccessPolicyInput } from "./GetVaultAccessPolicyInput";
import { GetVaultLockInput } from "./GetVaultLockInput";
import { GetVaultNotificationsInput } from "./GetVaultNotificationsInput";
import { InitiateJobInput } from "./InitiateJobInput";
import { InitiateMultipartUploadInput } from "./InitiateMultipartUploadInput";
import { InitiateVaultLockInput } from "./InitiateVaultLockInput";
import { ListJobsInput } from "./ListJobsInput";
import { ListMultipartUploadsInput } from "./ListMultipartUploadsInput";
import { ListPartsInput } from "./ListPartsInput";
import { ListProvisionedCapacityInput } from "./ListProvisionedCapacityInput";
import { ListTagsForVaultInput } from "./ListTagsForVaultInput";
import { ListVaultsInput } from "./ListVaultsInput";
import { PurchaseProvisionedCapacityInput } from "./PurchaseProvisionedCapacityInput";
import { RemoveTagsFromVaultInput } from "./RemoveTagsFromVaultInput";
import { SetDataRetrievalPolicyInput } from "./SetDataRetrievalPolicyInput";
import { SetVaultAccessPolicyInput } from "./SetVaultAccessPolicyInput";
import { SetVaultNotificationsInput } from "./SetVaultNotificationsInput";
import { UploadArchiveInput } from "./UploadArchiveInput";
import { UploadMultipartPartInput } from "./UploadMultipartPartInput";
export type InputTypesUnion =
  | AbortMultipartUploadInput
  | AbortVaultLockInput
  | AddTagsToVaultInput
  | CompleteMultipartUploadInput
  | CompleteVaultLockInput
  | CreateVaultInput
  | DeleteArchiveInput
  | DeleteVaultInput
  | DeleteVaultAccessPolicyInput
  | DeleteVaultNotificationsInput
  | DescribeJobInput
  | DescribeVaultInput
  | GetDataRetrievalPolicyInput
  | GetJobOutputInput
  | GetVaultAccessPolicyInput
  | GetVaultLockInput
  | GetVaultNotificationsInput
  | InitiateJobInput
  | InitiateMultipartUploadInput
  | InitiateVaultLockInput
  | ListJobsInput
  | ListMultipartUploadsInput
  | ListPartsInput
  | ListProvisionedCapacityInput
  | ListTagsForVaultInput
  | ListVaultsInput
  | PurchaseProvisionedCapacityInput
  | RemoveTagsFromVaultInput
  | SetDataRetrievalPolicyInput
  | SetVaultAccessPolicyInput
  | SetVaultNotificationsInput
  | UploadArchiveInput
  | UploadMultipartPartInput;
