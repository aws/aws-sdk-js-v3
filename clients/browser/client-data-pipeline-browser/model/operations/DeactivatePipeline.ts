import { DeactivatePipelineInput } from "../shapes/DeactivatePipelineInput";
import { DeactivatePipelineOutput } from "../shapes/DeactivatePipelineOutput";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
