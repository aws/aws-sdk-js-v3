import { CreateUserImportJobInput } from "./CreateUserImportJobInput";
import { CreateUserImportJobOutput } from "./CreateUserImportJobOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
