import { DescribeStreamProcessorInput } from "../shapes/DescribeStreamProcessorInput";
import { DescribeStreamProcessorOutput } from "../shapes/DescribeStreamProcessorOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ProvisionedThroughputExceededException } from "../shapes/ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStreamProcessor: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStreamProcessor",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStreamProcessorInput
  },
  output: {
    shape: DescribeStreamProcessorOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ProvisionedThroughputExceededException
    }
  ]
};
