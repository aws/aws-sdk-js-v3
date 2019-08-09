import { DescribeResourceServerInput } from "./DescribeResourceServerInput";
import { DescribeResourceServerOutput } from "./DescribeResourceServerOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
