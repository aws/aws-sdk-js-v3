import { CreateRepositoryInput } from "./CreateRepositoryInput";
import { CreateRepositoryOutput } from "./CreateRepositoryOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidTagParameterException } from "./InvalidTagParameterException";
import { TooManyTagsException } from "./TooManyTagsException";
import { RepositoryAlreadyExistsException } from "./RepositoryAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
