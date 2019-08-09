import { DescribeStreamInput } from "./DescribeStreamInput";
import { DescribeStreamOutput } from "./DescribeStreamOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStream",
  http: {
    method: "GET",
    requestUri: "/streams/{streamId}"
  },
  input: {
    shape: DescribeStreamInput
  },
  output: {
    shape: DescribeStreamOutput
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
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
