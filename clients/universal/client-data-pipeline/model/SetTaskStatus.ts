import { SetTaskStatusInput } from "./SetTaskStatusInput";
import { SetTaskStatusOutput } from "./SetTaskStatusOutput";
import { InternalServiceError } from "./InternalServiceError";
import { TaskNotFoundException } from "./TaskNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetTaskStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetTaskStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetTaskStatusInput
  },
  output: {
    shape: SetTaskStatusOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: TaskNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    }
  ]
};
