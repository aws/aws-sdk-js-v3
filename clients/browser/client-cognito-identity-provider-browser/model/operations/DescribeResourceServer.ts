import { DescribeResourceServerInput } from "../shapes/DescribeResourceServerInput";
import { DescribeResourceServerOutput } from "../shapes/DescribeResourceServerOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeResourceServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeResourceServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeResourceServerInput
  },
  output: {
    shape: DescribeResourceServerOutput
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
