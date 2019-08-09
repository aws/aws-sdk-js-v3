import { CreateApplicationInput } from "./CreateApplicationInput";
import { CreateApplicationVersionInput } from "./CreateApplicationVersionInput";
import { CreateCloudFormationChangeSetInput } from "./CreateCloudFormationChangeSetInput";
import { CreateCloudFormationTemplateInput } from "./CreateCloudFormationTemplateInput";
import { DeleteApplicationInput } from "./DeleteApplicationInput";
import { GetApplicationInput } from "./GetApplicationInput";
import { GetApplicationPolicyInput } from "./GetApplicationPolicyInput";
import { GetCloudFormationTemplateInput } from "./GetCloudFormationTemplateInput";
import { ListApplicationDependenciesInput } from "./ListApplicationDependenciesInput";
import { ListApplicationVersionsInput } from "./ListApplicationVersionsInput";
import { ListApplicationsInput } from "./ListApplicationsInput";
import { PutApplicationPolicyInput } from "./PutApplicationPolicyInput";
import { UpdateApplicationInput } from "./UpdateApplicationInput";
export type InputTypesUnion =
  | CreateApplicationInput
  | CreateApplicationVersionInput
  | CreateCloudFormationChangeSetInput
  | CreateCloudFormationTemplateInput
  | DeleteApplicationInput
  | GetApplicationInput
  | GetApplicationPolicyInput
  | GetCloudFormationTemplateInput
  | ListApplicationDependenciesInput
  | ListApplicationVersionsInput
  | ListApplicationsInput
  | PutApplicationPolicyInput
  | UpdateApplicationInput;
