import { UpdatePipelineInput } from "./UpdatePipelineInput";
import { UpdatePipelineOutput } from "./UpdatePipelineOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePipeline",
  http: {
    method: "PUT",
    requestUri: "/pipelines/{pipelineName}"
  },
  input: {
    shape: UpdatePipelineInput
  },
  output: {
    shape: UpdatePipelineOutput
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
    },
    {
      shape: LimitExceededException
    }
  ]
};
