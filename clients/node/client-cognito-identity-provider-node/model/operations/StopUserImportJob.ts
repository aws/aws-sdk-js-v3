import { StopUserImportJobInput } from "../shapes/StopUserImportJobInput";
import { StopUserImportJobOutput } from "../shapes/StopUserImportJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
