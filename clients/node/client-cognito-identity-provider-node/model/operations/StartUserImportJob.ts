import { StartUserImportJobInput } from "../shapes/StartUserImportJobInput";
import { StartUserImportJobOutput } from "../shapes/StartUserImportJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
