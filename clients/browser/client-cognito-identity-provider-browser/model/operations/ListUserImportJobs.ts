import { ListUserImportJobsInput } from "../shapes/ListUserImportJobsInput";
import { ListUserImportJobsOutput } from "../shapes/ListUserImportJobsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUserImportJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserImportJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUserImportJobsInput
  },
  output: {
    shape: ListUserImportJobsOutput
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
