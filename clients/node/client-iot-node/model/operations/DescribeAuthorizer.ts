import { DescribeAuthorizerInput } from "../shapes/DescribeAuthorizerInput";
import { DescribeAuthorizerOutput } from "../shapes/DescribeAuthorizerOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAuthorizer",
  http: {
    method: "GET",
    requestUri: "/authorizer/{authorizerName}"
  },
  input: {
    shape: DescribeAuthorizerInput
  },
  output: {
    shape: DescribeAuthorizerOutput
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
