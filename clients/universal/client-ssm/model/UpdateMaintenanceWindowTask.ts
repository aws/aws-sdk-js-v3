import { UpdateMaintenanceWindowTaskInput } from "./UpdateMaintenanceWindowTaskInput";
import { UpdateMaintenanceWindowTaskOutput } from "./UpdateMaintenanceWindowTaskOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
