import { StartPipelineReprocessingInput } from "../shapes/StartPipelineReprocessingInput";
import { StartPipelineReprocessingOutput } from "../shapes/StartPipelineReprocessingOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartPipelineReprocessing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartPipelineReprocessing",
  http: {
    method: "POST",
    requestUri: "/pipelines/{pipelineName}/reprocessing"
  },
  input: {
    shape: StartPipelineReprocessingInput
  },
  output: {
    shape: StartPipelineReprocessingOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
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
