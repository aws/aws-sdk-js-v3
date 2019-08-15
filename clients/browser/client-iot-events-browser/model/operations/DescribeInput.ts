import { DescribeInputInput } from "../shapes/DescribeInputInput";
import { DescribeInputOutput } from "../shapes/DescribeInputOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInput: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInput",
  http: {
    method: "GET",
    requestUri: "/inputs/{inputName}"
  },
  input: {
    shape: DescribeInputInput
  },
  output: {
    shape: DescribeInputOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
