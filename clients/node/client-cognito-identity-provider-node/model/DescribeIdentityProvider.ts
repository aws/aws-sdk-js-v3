import { DescribeIdentityProviderInput } from "./DescribeIdentityProviderInput";
import { DescribeIdentityProviderOutput } from "./DescribeIdentityProviderOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
