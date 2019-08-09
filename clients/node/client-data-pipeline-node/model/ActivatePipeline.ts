import { ActivatePipelineInput } from "./ActivatePipelineInput";
import { ActivatePipelineOutput } from "./ActivatePipelineOutput";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ActivatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ActivatePipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ActivatePipelineInput
  },
  output: {
    shape: ActivatePipelineOutput
  },
  errors: [
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
