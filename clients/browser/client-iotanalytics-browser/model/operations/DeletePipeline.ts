import { DeletePipelineInput } from "../shapes/DeletePipelineInput";
import { DeletePipelineOutput } from "../shapes/DeletePipelineOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePipeline",
  http: {
    method: "DELETE",
    requestUri: "/pipelines/{pipelineName}"
  },
  input: {
    shape: DeletePipelineInput
  },
  output: {
    shape: DeletePipelineOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
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
