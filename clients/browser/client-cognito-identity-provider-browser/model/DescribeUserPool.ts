import { DescribeUserPoolInput } from "./DescribeUserPoolInput";
import { DescribeUserPoolOutput } from "./DescribeUserPoolOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserPoolTaggingException } from "./UserPoolTaggingException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
