import { DescribeStreamInput } from "../shapes/DescribeStreamInput";
import { DescribeStreamOutput } from "../shapes/DescribeStreamOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
