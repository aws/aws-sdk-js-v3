import { GetMaintenanceWindowExecutionInput } from "../shapes/GetMaintenanceWindowExecutionInput";
import { GetMaintenanceWindowExecutionOutput } from "../shapes/GetMaintenanceWindowExecutionOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMaintenanceWindowExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMaintenanceWindowExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMaintenanceWindowExecutionInput
  },
  output: {
    shape: GetMaintenanceWindowExecutionOutput
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
