import { DeleteRepositoryInput } from "./DeleteRepositoryInput";
import { DeleteRepositoryOutput } from "./DeleteRepositoryOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { RepositoryNotEmptyException } from "./RepositoryNotEmptyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
