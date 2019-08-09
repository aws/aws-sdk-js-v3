import { DescribeUserImportJobInput } from "./DescribeUserImportJobInput";
import { DescribeUserImportJobOutput } from "./DescribeUserImportJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
