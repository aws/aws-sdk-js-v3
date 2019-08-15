import { SetTaskStatusInput } from "../shapes/SetTaskStatusInput";
import { SetTaskStatusOutput } from "../shapes/SetTaskStatusOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { TaskNotFoundException } from "../shapes/TaskNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
