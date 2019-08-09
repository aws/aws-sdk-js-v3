import { GetMaintenanceWindowExecutionInput } from "./GetMaintenanceWindowExecutionInput";
import { GetMaintenanceWindowExecutionOutput } from "./GetMaintenanceWindowExecutionOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
