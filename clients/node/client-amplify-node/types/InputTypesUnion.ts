import { CreateAppInput } from "./CreateAppInput";
import { CreateBranchInput } from "./CreateBranchInput";
import { CreateDeploymentInput } from "./CreateDeploymentInput";
import { CreateDomainAssociationInput } from "./CreateDomainAssociationInput";
import { CreateWebhookInput } from "./CreateWebhookInput";
import { DeleteAppInput } from "./DeleteAppInput";
import { DeleteBranchInput } from "./DeleteBranchInput";
import { DeleteDomainAssociationInput } from "./DeleteDomainAssociationInput";
import { DeleteJobInput } from "./DeleteJobInput";
import { DeleteWebhookInput } from "./DeleteWebhookInput";
import { GetAppInput } from "./GetAppInput";
import { GetBranchInput } from "./GetBranchInput";
import { GetDomainAssociationInput } from "./GetDomainAssociationInput";
import { GetJobInput } from "./GetJobInput";
import { GetWebhookInput } from "./GetWebhookInput";
import { ListAppsInput } from "./ListAppsInput";
import { ListBranchesInput } from "./ListBranchesInput";
import { ListDomainAssociationsInput } from "./ListDomainAssociationsInput";
import { ListJobsInput } from "./ListJobsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListWebhooksInput } from "./ListWebhooksInput";
import { StartDeploymentInput } from "./StartDeploymentInput";
import { StartJobInput } from "./StartJobInput";
import { StopJobInput } from "./StopJobInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateAppInput } from "./UpdateAppInput";
import { UpdateBranchInput } from "./UpdateBranchInput";
import { UpdateDomainAssociationInput } from "./UpdateDomainAssociationInput";
import { UpdateWebhookInput } from "./UpdateWebhookInput";
export type InputTypesUnion =
  | CreateAppInput
  | CreateBranchInput
  | CreateDeploymentInput
  | CreateDomainAssociationInput
  | CreateWebhookInput
  | DeleteAppInput
  | DeleteBranchInput
  | DeleteDomainAssociationInput
  | DeleteJobInput
  | DeleteWebhookInput
  | GetAppInput
  | GetBranchInput
  | GetDomainAssociationInput
  | GetJobInput
  | GetWebhookInput
  | ListAppsInput
  | ListBranchesInput
  | ListDomainAssociationsInput
  | ListJobsInput
  | ListTagsForResourceInput
  | ListWebhooksInput
  | StartDeploymentInput
  | StartJobInput
  | StopJobInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateAppInput
  | UpdateBranchInput
  | UpdateDomainAssociationInput
  | UpdateWebhookInput;
