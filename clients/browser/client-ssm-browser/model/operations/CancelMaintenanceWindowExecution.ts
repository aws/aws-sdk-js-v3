import { CancelMaintenanceWindowExecutionInput } from "../shapes/CancelMaintenanceWindowExecutionInput";
import { CancelMaintenanceWindowExecutionOutput } from "../shapes/CancelMaintenanceWindowExecutionOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelMaintenanceWindowExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelMaintenanceWindowExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelMaintenanceWindowExecutionInput
  },
  output: {
    shape: CancelMaintenanceWindowExecutionOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: DoesNotExistException
    }
  ]
};
