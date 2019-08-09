import { DescribeDefaultAuthorizerInput } from "./DescribeDefaultAuthorizerInput";
import { DescribeDefaultAuthorizerOutput } from "./DescribeDefaultAuthorizerOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
