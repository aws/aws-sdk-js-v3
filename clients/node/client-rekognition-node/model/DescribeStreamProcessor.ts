import { DescribeStreamProcessorInput } from "./DescribeStreamProcessorInput";
import { DescribeStreamProcessorOutput } from "./DescribeStreamProcessorOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ProvisionedThroughputExceededException } from "./ProvisionedThroughputExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
