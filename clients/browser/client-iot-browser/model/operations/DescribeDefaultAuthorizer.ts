import { DescribeDefaultAuthorizerInput } from "../shapes/DescribeDefaultAuthorizerInput";
import { DescribeDefaultAuthorizerOutput } from "../shapes/DescribeDefaultAuthorizerOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDefaultAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDefaultAuthorizer",
  http: {
    method: "GET",
    requestUri: "/default-authorizer"
  },
  input: {
    shape: DescribeDefaultAuthorizerInput
  },
  output: {
    shape: DescribeDefaultAuthorizerOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
    }
  ]
};
