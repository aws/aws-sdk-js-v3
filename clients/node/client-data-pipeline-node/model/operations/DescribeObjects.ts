import { DescribeObjectsInput } from "../shapes/DescribeObjectsInput";
import { DescribeObjectsOutput } from "../shapes/DescribeObjectsOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeObjects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeObjects",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeObjectsInput
  },
  output: {
    shape: DescribeObjectsOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    }
  ]
};
