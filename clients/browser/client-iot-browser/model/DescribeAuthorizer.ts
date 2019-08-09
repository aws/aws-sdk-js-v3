import { DescribeAuthorizerInput } from "./DescribeAuthorizerInput";
import { DescribeAuthorizerOutput } from "./DescribeAuthorizerOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
