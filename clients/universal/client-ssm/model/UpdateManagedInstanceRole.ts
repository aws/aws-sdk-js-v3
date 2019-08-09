import { UpdateManagedInstanceRoleInput } from "./UpdateManagedInstanceRoleInput";
import { UpdateManagedInstanceRoleOutput } from "./UpdateManagedInstanceRoleOutput";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateManagedInstanceRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateManagedInstanceRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateManagedInstanceRoleInput
  },
  output: {
    shape: UpdateManagedInstanceRoleOutput
  },
  errors: [
    {
      shape: InvalidInstanceId
    },
    {
      shape: InternalServerError
    }
  ]
};
