import { StopUserImportJobInput } from "./StopUserImportJobInput";
import { StopUserImportJobOutput } from "./StopUserImportJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopUserImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopUserImportJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopUserImportJobInput
  },
  output: {
    shape: StopUserImportJobOutput
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
