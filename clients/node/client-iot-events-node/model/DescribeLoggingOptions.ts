import { DescribeLoggingOptionsInput } from "./DescribeLoggingOptionsInput";
import { DescribeLoggingOptionsOutput } from "./DescribeLoggingOptionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
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
