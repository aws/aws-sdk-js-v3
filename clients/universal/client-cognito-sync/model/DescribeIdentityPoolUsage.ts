import { DescribeIdentityPoolUsageInput } from "./DescribeIdentityPoolUsageInput";
import { DescribeIdentityPoolUsageOutput } from "./DescribeIdentityPoolUsageOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
