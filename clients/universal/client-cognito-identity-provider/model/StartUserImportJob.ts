import { StartUserImportJobInput } from "./StartUserImportJobInput";
import { StartUserImportJobOutput } from "./StartUserImportJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartUserImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartUserImportJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartUserImportJobInput
  },
  output: {
    shape: StartUserImportJobOutput
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
      shape: InternalErrorException
    },
    {
      shape: PreconditionNotMetException
    },
    {
      shape: NotAuthorizedException
    }
  ]
};
