import { DescribeLoggingOptionsInput } from "../shapes/DescribeLoggingOptionsInput";
import { DescribeLoggingOptionsOutput } from "../shapes/DescribeLoggingOptionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLoggingOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoggingOptions",
  http: {
    method: "GET",
    requestUri: "/logging"
  },
  input: {
    shape: DescribeLoggingOptionsInput
  },
  output: {
    shape: DescribeLoggingOptionsOutput
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
