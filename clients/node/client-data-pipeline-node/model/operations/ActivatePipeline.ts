import { ActivatePipelineInput } from "../shapes/ActivatePipelineInput";
import { ActivatePipelineOutput } from "../shapes/ActivatePipelineOutput";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
