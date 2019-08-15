import { CreateUserImportJobInput } from "../shapes/CreateUserImportJobInput";
import { CreateUserImportJobOutput } from "../shapes/CreateUserImportJobOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateUserImportJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUserImportJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUserImportJobInput
  },
  output: {
    shape: CreateUserImportJobOutput
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
      shape: PreconditionNotMetException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalErrorException
    }
  ]
};
