import { UpdateMaintenanceWindowTaskInput } from "../shapes/UpdateMaintenanceWindowTaskInput";
import { UpdateMaintenanceWindowTaskOutput } from "../shapes/UpdateMaintenanceWindowTaskOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMaintenanceWindowTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMaintenanceWindowTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMaintenanceWindowTaskInput
  },
  output: {
    shape: UpdateMaintenanceWindowTaskOutput
  },
  errors: [
    {
      shape: DoesNotExistException
    },
    {
      shape: InternalServerError
    }
  ]
};
