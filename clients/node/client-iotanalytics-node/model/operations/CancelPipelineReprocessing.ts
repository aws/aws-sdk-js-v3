import { CancelPipelineReprocessingInput } from "../shapes/CancelPipelineReprocessingInput";
import { CancelPipelineReprocessingOutput } from "../shapes/CancelPipelineReprocessingOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelPipelineReprocessing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelPipelineReprocessing",
  http: {
    method: "DELETE",
    requestUri: "/pipelines/{pipelineName}/reprocessing/{reprocessingId}"
  },
  input: {
    shape: CancelPipelineReprocessingInput
  },
  output: {
    shape: CancelPipelineReprocessingOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ThrottlingException
    }
  ]
};
