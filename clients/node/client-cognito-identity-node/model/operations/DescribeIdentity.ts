import { DescribeIdentityInput } from "../shapes/DescribeIdentityInput";
import { DescribeIdentityOutput } from "../shapes/DescribeIdentityOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeIdentityInput
  },
  output: {
    shape: DescribeIdentityOutput
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
