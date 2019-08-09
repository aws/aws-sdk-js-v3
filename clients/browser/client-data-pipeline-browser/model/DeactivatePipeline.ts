import { DeactivatePipelineInput } from "./DeactivatePipelineInput";
import { DeactivatePipelineOutput } from "./DeactivatePipelineOutput";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeactivatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeactivatePipeline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeactivatePipelineInput
  },
  output: {
    shape: DeactivatePipelineOutput
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
