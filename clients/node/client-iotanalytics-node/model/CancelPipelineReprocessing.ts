import { CancelPipelineReprocessingInput } from "./CancelPipelineReprocessingInput";
import { CancelPipelineReprocessingOutput } from "./CancelPipelineReprocessingOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
