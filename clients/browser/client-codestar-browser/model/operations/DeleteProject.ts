import { DeleteProjectInput } from "../shapes/DeleteProjectInput";
import { DeleteProjectOutput } from "../shapes/DeleteProjectOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ValidationException } from "../shapes/ValidationException";
import { InvalidServiceRoleException } from "../shapes/InvalidServiceRoleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteProjectInput
  },
  output: {
    shape: DeleteProjectOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ValidationException
    },
    {
      shape: InvalidServiceRoleException
    }
  ]
};
