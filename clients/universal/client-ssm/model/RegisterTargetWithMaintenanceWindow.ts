import { RegisterTargetWithMaintenanceWindowInput } from "./RegisterTargetWithMaintenanceWindowInput";
import { RegisterTargetWithMaintenanceWindowOutput } from "./RegisterTargetWithMaintenanceWindowOutput";
import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { DoesNotExistException } from "./DoesNotExistException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterTargetWithMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterTargetWithMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterTargetWithMaintenanceWindowInput
  },
  output: {
    shape: RegisterTargetWithMaintenanceWindowOutput
  },
  errors: [
    {
      shape: IdempotentParameterMismatch
    },
    {
      shape: DoesNotExistException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
