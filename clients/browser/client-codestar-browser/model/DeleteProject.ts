import { DeleteProjectInput } from "./DeleteProjectInput";
import { DeleteProjectOutput } from "./DeleteProjectOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ValidationException } from "./ValidationException";
import { InvalidServiceRoleException } from "./InvalidServiceRoleException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
