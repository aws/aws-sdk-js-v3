import { BatchDeleteBuildsInput } from "./BatchDeleteBuildsInput";
import { BatchGetBuildsInput } from "./BatchGetBuildsInput";
import { BatchGetProjectsInput } from "./BatchGetProjectsInput";
import { CreateProjectInput } from "./CreateProjectInput";
import { CreateWebhookInput } from "./CreateWebhookInput";
import { DeleteProjectInput } from "./DeleteProjectInput";
import { DeleteSourceCredentialsInput } from "./DeleteSourceCredentialsInput";
import { DeleteWebhookInput } from "./DeleteWebhookInput";
import { ImportSourceCredentialsInput } from "./ImportSourceCredentialsInput";
import { InvalidateProjectCacheInput } from "./InvalidateProjectCacheInput";
import { ListBuildsInput } from "./ListBuildsInput";
import { ListBuildsForProjectInput } from "./ListBuildsForProjectInput";
import { ListCuratedEnvironmentImagesInput } from "./ListCuratedEnvironmentImagesInput";
import { ListProjectsInput } from "./ListProjectsInput";
import { ListSourceCredentialsInput } from "./ListSourceCredentialsInput";
import { StartBuildInput } from "./StartBuildInput";
import { StopBuildInput } from "./StopBuildInput";
import { UpdateProjectInput } from "./UpdateProjectInput";
import { UpdateWebhookInput } from "./UpdateWebhookInput";
export type InputTypesUnion =
  | BatchDeleteBuildsInput
  | BatchGetBuildsInput
  | BatchGetProjectsInput
  | CreateProjectInput
  | CreateWebhookInput
  | DeleteProjectInput
  | DeleteSourceCredentialsInput
  | DeleteWebhookInput
  | ImportSourceCredentialsInput
  | InvalidateProjectCacheInput
  | ListBuildsInput
  | ListBuildsForProjectInput
  | ListCuratedEnvironmentImagesInput
  | ListProjectsInput
  | ListSourceCredentialsInput
  | StartBuildInput
  | StopBuildInput
  | UpdateProjectInput
  | UpdateWebhookInput;
