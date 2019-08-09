import { DescribeInputInput } from "./DescribeInputInput";
import { DescribeInputOutput } from "./DescribeInputOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
