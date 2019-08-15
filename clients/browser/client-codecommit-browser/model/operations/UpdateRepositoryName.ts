import { UpdateRepositoryNameInput } from "../shapes/UpdateRepositoryNameInput";
import { UpdateRepositoryNameOutput } from "../shapes/UpdateRepositoryNameOutput";
import { RepositoryDoesNotExistException } from "../shapes/RepositoryDoesNotExistException";
import { RepositoryNameExistsException } from "../shapes/RepositoryNameExistsException";
import { RepositoryNameRequiredException } from "../shapes/RepositoryNameRequiredException";
import { InvalidRepositoryNameException } from "../shapes/InvalidRepositoryNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRepositoryName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRepositoryName",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRepositoryNameInput
  },
  output: {
    shape: UpdateRepositoryNameOutput
  },
  errors: [
    {
      shape: RepositoryDoesNotExistException
    },
    {
      shape: RepositoryNameExistsException
    },
    {
      shape: RepositoryNameRequiredException
    },
    {
      shape: InvalidRepositoryNameException
    }
  ]
};
