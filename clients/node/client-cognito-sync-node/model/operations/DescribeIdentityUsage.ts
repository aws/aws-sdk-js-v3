import { DescribeIdentityUsageInput } from "../shapes/DescribeIdentityUsageInput";
import { DescribeIdentityUsageOutput } from "../shapes/DescribeIdentityUsageOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIdentityUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIdentityUsage",
  http: {
    method: "GET",
    requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}"
  },
  input: {
    shape: DescribeIdentityUsageInput
  },
  output: {
    shape: DescribeIdentityUsageOutput
  },
  errors: [
    {
      shape: NotAuthorizedException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
