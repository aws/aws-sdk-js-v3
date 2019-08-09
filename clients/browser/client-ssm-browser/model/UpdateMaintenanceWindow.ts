import { UpdateMaintenanceWindowInput } from "./UpdateMaintenanceWindowInput";
import { UpdateMaintenanceWindowOutput } from "./UpdateMaintenanceWindowOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMaintenanceWindowInput
  },
  output: {
    shape: UpdateMaintenanceWindowOutput
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
