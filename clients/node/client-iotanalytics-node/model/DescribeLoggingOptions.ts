import { DescribeLoggingOptionsInput } from "./DescribeLoggingOptionsInput";
import { DescribeLoggingOptionsOutput } from "./DescribeLoggingOptionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
