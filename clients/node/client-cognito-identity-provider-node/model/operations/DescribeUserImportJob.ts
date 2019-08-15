import { DescribeUserImportJobInput } from "../shapes/DescribeUserImportJobInput";
import { DescribeUserImportJobOutput } from "../shapes/DescribeUserImportJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUserImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserImportJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserImportJobInput
  },
  output: {
    shape: DescribeUserImportJobOutput
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
