import { DescribeUserPoolClientInput } from "../shapes/DescribeUserPoolClientInput";
import { DescribeUserPoolClientOutput } from "../shapes/DescribeUserPoolClientOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUserPoolClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserPoolClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserPoolClientInput
  },
  output: {
    shape: DescribeUserPoolClientOutput
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
      shape: InternalErrorException
    }
  ]
};
