import { DescribeLoggingOptionsInput } from "../shapes/DescribeLoggingOptionsInput";
import { DescribeLoggingOptionsOutput } from "../shapes/DescribeLoggingOptionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
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
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
