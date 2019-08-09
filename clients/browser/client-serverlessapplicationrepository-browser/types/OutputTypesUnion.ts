import { CreateApplicationOutput } from "./CreateApplicationOutput";
import { CreateApplicationVersionOutput } from "./CreateApplicationVersionOutput";
import { CreateCloudFormationChangeSetOutput } from "./CreateCloudFormationChangeSetOutput";
import { CreateCloudFormationTemplateOutput } from "./CreateCloudFormationTemplateOutput";
import { DeleteApplicationOutput } from "./DeleteApplicationOutput";
import { GetApplicationOutput } from "./GetApplicationOutput";
import { GetApplicationPolicyOutput } from "./GetApplicationPolicyOutput";
import { GetCloudFormationTemplateOutput } from "./GetCloudFormationTemplateOutput";
import { ListApplicationDependenciesOutput } from "./ListApplicationDependenciesOutput";
import { ListApplicationVersionsOutput } from "./ListApplicationVersionsOutput";
import { ListApplicationsOutput } from "./ListApplicationsOutput";
import { PutApplicationPolicyOutput } from "./PutApplicationPolicyOutput";
import { UpdateApplicationOutput } from "./UpdateApplicationOutput";
export type OutputTypesUnion =
  | CreateApplicationOutput
  | CreateApplicationVersionOutput
  | CreateCloudFormationChangeSetOutput
  | CreateCloudFormationTemplateOutput
  | DeleteApplicationOutput
  | GetApplicationOutput
  | GetApplicationPolicyOutput
  | GetCloudFormationTemplateOutput
  | ListApplicationDependenciesOutput
  | ListApplicationVersionsOutput
  | ListApplicationsOutput
  | PutApplicationPolicyOutput
  | UpdateApplicationOutput;
