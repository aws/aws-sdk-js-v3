import { DescribeIndexInput } from "../shapes/DescribeIndexInput";
import { DescribeIndexOutput } from "../shapes/DescribeIndexOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIndex: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIndex",
  http: {
    method: "GET",
    requestUri: "/indices/{indexName}"
  },
  input: {
    shape: DescribeIndexInput
  },
  output: {
    shape: DescribeIndexOutput
  },
  errors: [
    {
      shape: InvalidRequestException
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
