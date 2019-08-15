import { DeregisterTaskFromMaintenanceWindowInput } from "../shapes/DeregisterTaskFromMaintenanceWindowInput";
import { DeregisterTaskFromMaintenanceWindowOutput } from "../shapes/DeregisterTaskFromMaintenanceWindowOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterTaskFromMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterTaskFromMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterTaskFromMaintenanceWindowInput
  },
  output: {
    shape: DeregisterTaskFromMaintenanceWindowOutput
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
