import { DescribeIdentityInput } from "./DescribeIdentityInput";
import { DescribeIdentityOutput } from "./DescribeIdentityOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
