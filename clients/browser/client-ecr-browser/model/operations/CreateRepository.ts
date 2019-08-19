import { CreateRepositoryInput } from "../shapes/CreateRepositoryInput";
import { CreateRepositoryOutput } from "../shapes/CreateRepositoryOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidTagParameterException } from "../shapes/InvalidTagParameterException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { RepositoryAlreadyExistsException } from "../shapes/RepositoryAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRepository: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRepository",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRepositoryInput
  },
  output: {
    shape: CreateRepositoryOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidTagParameterException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: RepositoryAlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
