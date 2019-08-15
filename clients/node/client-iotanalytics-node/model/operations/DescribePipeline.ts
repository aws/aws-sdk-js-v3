import { DescribePipelineInput } from "../shapes/DescribePipelineInput";
import { DescribePipelineOutput } from "../shapes/DescribePipelineOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
