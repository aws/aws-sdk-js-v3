import { DeleteRepositoryInput } from "../shapes/DeleteRepositoryInput";
import { DeleteRepositoryOutput } from "../shapes/DeleteRepositoryOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { RepositoryNotEmptyException } from "../shapes/RepositoryNotEmptyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRepository: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRepository",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRepositoryInput
  },
  output: {
    shape: DeleteRepositoryOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: RepositoryNotFoundException
    },
    {
      shape: RepositoryNotEmptyException
    }
  ]
};
