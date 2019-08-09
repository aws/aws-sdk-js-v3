import { DescribePipelinesInput } from "./DescribePipelinesInput";
import { DescribePipelinesOutput } from "./DescribePipelinesOutput";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
