import { DescribeIdentityPoolUsageInput } from "../shapes/DescribeIdentityPoolUsageInput";
import { DescribeIdentityPoolUsageOutput } from "../shapes/DescribeIdentityPoolUsageOutput";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIdentityPoolUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIdentityPoolUsage",
  http: {
    method: "GET",
    requestUri: "/identitypools/{IdentityPoolId}"
  },
  input: {
    shape: DescribeIdentityPoolUsageInput
  },
  output: {
    shape: DescribeIdentityPoolUsageOutput
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
