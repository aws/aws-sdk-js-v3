import { DescribeObjectsInput } from "./DescribeObjectsInput";
import { DescribeObjectsOutput } from "./DescribeObjectsOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
