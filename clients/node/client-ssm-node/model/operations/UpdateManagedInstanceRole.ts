import { UpdateManagedInstanceRoleInput } from "../shapes/UpdateManagedInstanceRoleInput";
import { UpdateManagedInstanceRoleOutput } from "../shapes/UpdateManagedInstanceRoleOutput";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
