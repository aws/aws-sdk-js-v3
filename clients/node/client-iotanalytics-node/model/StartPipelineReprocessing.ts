import { StartPipelineReprocessingInput } from "./StartPipelineReprocessingInput";
import { StartPipelineReprocessingOutput } from "./StartPipelineReprocessingOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
