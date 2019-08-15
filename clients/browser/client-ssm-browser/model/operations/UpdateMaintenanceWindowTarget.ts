import { UpdateMaintenanceWindowTargetInput } from "../shapes/UpdateMaintenanceWindowTargetInput";
import { UpdateMaintenanceWindowTargetOutput } from "../shapes/UpdateMaintenanceWindowTargetOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMaintenanceWindowTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMaintenanceWindowTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMaintenanceWindowTargetInput
  },
  output: {
    shape: UpdateMaintenanceWindowTargetOutput
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
