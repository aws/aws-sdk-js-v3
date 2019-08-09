import { ReportTaskProgressInput } from "./ReportTaskProgressInput";
import { ReportTaskProgressOutput } from "./ReportTaskProgressOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { TaskNotFoundException } from "./TaskNotFoundException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
