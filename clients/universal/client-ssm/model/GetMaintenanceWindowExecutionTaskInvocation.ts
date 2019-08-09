import { GetMaintenanceWindowExecutionTaskInvocationInput } from "./GetMaintenanceWindowExecutionTaskInvocationInput";
import { GetMaintenanceWindowExecutionTaskInvocationOutput } from "./GetMaintenanceWindowExecutionTaskInvocationOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
