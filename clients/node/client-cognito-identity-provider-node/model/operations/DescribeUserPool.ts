import { DescribeUserPoolInput } from "../shapes/DescribeUserPoolInput";
import { DescribeUserPoolOutput } from "../shapes/DescribeUserPoolOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserPoolTaggingException } from "../shapes/UserPoolTaggingException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUserPool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserPool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserPoolInput
  },
  output: {
    shape: DescribeUserPoolOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserPoolTaggingException
    },
    {
      shape: InternalErrorException
    }
  ]
};
