import { DeregisterTargetFromMaintenanceWindowInput } from "./DeregisterTargetFromMaintenanceWindowInput";
import { DeregisterTargetFromMaintenanceWindowOutput } from "./DeregisterTargetFromMaintenanceWindowOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { TargetInUseException } from "./TargetInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
