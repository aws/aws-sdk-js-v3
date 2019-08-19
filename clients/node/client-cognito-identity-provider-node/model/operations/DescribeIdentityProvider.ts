import { DescribeIdentityProviderInput } from "../shapes/DescribeIdentityProviderInput";
import { DescribeIdentityProviderOutput } from "../shapes/DescribeIdentityProviderOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIdentityProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIdentityProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeIdentityProviderInput
  },
  output: {
    shape: DescribeIdentityProviderOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
