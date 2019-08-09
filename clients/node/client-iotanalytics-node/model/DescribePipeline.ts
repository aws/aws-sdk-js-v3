import { DescribePipelineInput } from "./DescribePipelineInput";
import { DescribePipelineOutput } from "./DescribePipelineOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePipeline",
  http: {
    method: "GET",
    requestUri: "/pipelines/{pipelineName}"
  },
  input: {
    shape: DescribePipelineInput
  },
  output: {
    shape: DescribePipelineOutput
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
