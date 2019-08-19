import { CancelJobInput } from "./CancelJobInput";
import { CreateJobInput } from "./CreateJobInput";
import { CreatePipelineInput } from "./CreatePipelineInput";
import { CreatePresetInput } from "./CreatePresetInput";
import { DeletePipelineInput } from "./DeletePipelineInput";
import { DeletePresetInput } from "./DeletePresetInput";
import { ListJobsByPipelineInput } from "./ListJobsByPipelineInput";
import { ListJobsByStatusInput } from "./ListJobsByStatusInput";
import { ListPipelinesInput } from "./ListPipelinesInput";
import { ListPresetsInput } from "./ListPresetsInput";
import { ReadJobInput } from "./ReadJobInput";
import { ReadPipelineInput } from "./ReadPipelineInput";
import { ReadPresetInput } from "./ReadPresetInput";
import { TestRoleInput } from "./TestRoleInput";
import { UpdatePipelineInput } from "./UpdatePipelineInput";
import { UpdatePipelineNotificationsInput } from "./UpdatePipelineNotificationsInput";
import { UpdatePipelineStatusInput } from "./UpdatePipelineStatusInput";
export type InputTypesUnion =
  | CancelJobInput
  | CreateJobInput
  | CreatePipelineInput
  | CreatePresetInput
  | DeletePipelineInput
  | DeletePresetInput
  | ListJobsByPipelineInput
  | ListJobsByStatusInput
  | ListPipelinesInput
  | ListPresetsInput
  | ReadJobInput
  | ReadPipelineInput
  | ReadPresetInput
  | TestRoleInput
  | UpdatePipelineInput
  | UpdatePipelineNotificationsInput
  | UpdatePipelineStatusInput;
