import { DescribeIdentityUsageInput } from "./DescribeIdentityUsageInput";
import { DescribeIdentityUsageOutput } from "./DescribeIdentityUsageOutput";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
