import { ListUserImportJobsInput } from "./ListUserImportJobsInput";
import { ListUserImportJobsOutput } from "./ListUserImportJobsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
