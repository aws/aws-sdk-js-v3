import { DeregisterTargetFromMaintenanceWindowInput } from "../shapes/DeregisterTargetFromMaintenanceWindowInput";
import { DeregisterTargetFromMaintenanceWindowOutput } from "../shapes/DeregisterTargetFromMaintenanceWindowOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { TargetInUseException } from "../shapes/TargetInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterTargetFromMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterTargetFromMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterTargetFromMaintenanceWindowInput
  },
  output: {
    shape: DeregisterTargetFromMaintenanceWindowOutput
  },
  errors: [
    {
      shape: DoesNotExistException
    },
    {
      shape: InternalServerError
    },
    {
      shape: TargetInUseException
    }
  ]
};
