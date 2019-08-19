import { CancelJobOutput } from "./CancelJobOutput";
import { CreateJobOutput } from "./CreateJobOutput";
import { CreatePipelineOutput } from "./CreatePipelineOutput";
import { CreatePresetOutput } from "./CreatePresetOutput";
import { DeletePipelineOutput } from "./DeletePipelineOutput";
import { DeletePresetOutput } from "./DeletePresetOutput";
import { ListJobsByPipelineOutput } from "./ListJobsByPipelineOutput";
import { ListJobsByStatusOutput } from "./ListJobsByStatusOutput";
import { ListPipelinesOutput } from "./ListPipelinesOutput";
import { ListPresetsOutput } from "./ListPresetsOutput";
import { ReadJobOutput } from "./ReadJobOutput";
import { ReadPipelineOutput } from "./ReadPipelineOutput";
import { ReadPresetOutput } from "./ReadPresetOutput";
import { TestRoleOutput } from "./TestRoleOutput";
import { UpdatePipelineOutput } from "./UpdatePipelineOutput";
import { UpdatePipelineNotificationsOutput } from "./UpdatePipelineNotificationsOutput";
import { UpdatePipelineStatusOutput } from "./UpdatePipelineStatusOutput";
export type OutputTypesUnion =
  | CancelJobOutput
  | CreateJobOutput
  | CreatePipelineOutput
  | CreatePresetOutput
  | DeletePipelineOutput
  | DeletePresetOutput
  | ListJobsByPipelineOutput
  | ListJobsByStatusOutput
  | ListPipelinesOutput
  | ListPresetsOutput
  | ReadJobOutput
  | ReadPipelineOutput
  | ReadPresetOutput
  | TestRoleOutput
  | UpdatePipelineOutput
  | UpdatePipelineNotificationsOutput
  | UpdatePipelineStatusOutput;
