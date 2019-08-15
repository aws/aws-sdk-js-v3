import { ReportTaskProgressInput } from "../shapes/ReportTaskProgressInput";
import { ReportTaskProgressOutput } from "../shapes/ReportTaskProgressOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TaskNotFoundException } from "../shapes/TaskNotFoundException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReportTaskProgress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReportTaskProgress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReportTaskProgressInput
  },
  output: {
    shape: ReportTaskProgressOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TaskNotFoundException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    }
  ]
};
