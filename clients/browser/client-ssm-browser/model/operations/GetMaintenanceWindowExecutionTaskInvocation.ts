import { GetMaintenanceWindowExecutionTaskInvocationInput } from "../shapes/GetMaintenanceWindowExecutionTaskInvocationInput";
import { GetMaintenanceWindowExecutionTaskInvocationOutput } from "../shapes/GetMaintenanceWindowExecutionTaskInvocationOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetMaintenanceWindowExecutionTaskInvocation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMaintenanceWindowExecutionTaskInvocation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMaintenanceWindowExecutionTaskInvocationInput
  },
  output: {
    shape: GetMaintenanceWindowExecutionTaskInvocationOutput
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
