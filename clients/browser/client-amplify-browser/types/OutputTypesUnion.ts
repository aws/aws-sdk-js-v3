import { CreateAppOutput } from "./CreateAppOutput";
import { CreateBranchOutput } from "./CreateBranchOutput";
import { CreateDeploymentOutput } from "./CreateDeploymentOutput";
import { CreateDomainAssociationOutput } from "./CreateDomainAssociationOutput";
import { CreateWebhookOutput } from "./CreateWebhookOutput";
import { DeleteAppOutput } from "./DeleteAppOutput";
import { DeleteBranchOutput } from "./DeleteBranchOutput";
import { DeleteDomainAssociationOutput } from "./DeleteDomainAssociationOutput";
import { DeleteJobOutput } from "./DeleteJobOutput";
import { DeleteWebhookOutput } from "./DeleteWebhookOutput";
import { GetAppOutput } from "./GetAppOutput";
import { GetBranchOutput } from "./GetBranchOutput";
import { GetDomainAssociationOutput } from "./GetDomainAssociationOutput";
import { GetJobOutput } from "./GetJobOutput";
import { GetWebhookOutput } from "./GetWebhookOutput";
import { ListAppsOutput } from "./ListAppsOutput";
import { ListBranchesOutput } from "./ListBranchesOutput";
import { ListDomainAssociationsOutput } from "./ListDomainAssociationsOutput";
import { ListJobsOutput } from "./ListJobsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListWebhooksOutput } from "./ListWebhooksOutput";
import { StartDeploymentOutput } from "./StartDeploymentOutput";
import { StartJobOutput } from "./StartJobOutput";
import { StopJobOutput } from "./StopJobOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateAppOutput } from "./UpdateAppOutput";
import { UpdateBranchOutput } from "./UpdateBranchOutput";
import { UpdateDomainAssociationOutput } from "./UpdateDomainAssociationOutput";
import { UpdateWebhookOutput } from "./UpdateWebhookOutput";
export type OutputTypesUnion =
  | CreateAppOutput
  | CreateBranchOutput
  | CreateDeploymentOutput
  | CreateDomainAssociationOutput
  | CreateWebhookOutput
  | DeleteAppOutput
  | DeleteBranchOutput
  | DeleteDomainAssociationOutput
  | DeleteJobOutput
  | DeleteWebhookOutput
  | GetAppOutput
  | GetBranchOutput
  | GetDomainAssociationOutput
  | GetJobOutput
  | GetWebhookOutput
  | ListAppsOutput
  | ListBranchesOutput
  | ListDomainAssociationsOutput
  | ListJobsOutput
  | ListTagsForResourceOutput
  | ListWebhooksOutput
  | StartDeploymentOutput
  | StartJobOutput
  | StopJobOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateAppOutput
  | UpdateBranchOutput
  | UpdateDomainAssociationOutput
  | UpdateWebhookOutput;
