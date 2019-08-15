import { DescribePipelinesInput } from "../shapes/DescribePipelinesInput";
import { DescribePipelinesOutput } from "../shapes/DescribePipelinesOutput";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribePipelines: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePipelines",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePipelinesInput
  },
  output: {
    shape: DescribePipelinesOutput
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
