import { GetMaintenanceWindowExecutionTaskInput } from "../shapes/GetMaintenanceWindowExecutionTaskInput";
import { GetMaintenanceWindowExecutionTaskOutput } from "../shapes/GetMaintenanceWindowExecutionTaskOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMaintenanceWindowExecutionTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMaintenanceWindowExecutionTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMaintenanceWindowExecutionTaskInput
  },
  output: {
    shape: GetMaintenanceWindowExecutionTaskOutput
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
