import { RegisterTargetWithMaintenanceWindowInput } from "../shapes/RegisterTargetWithMaintenanceWindowInput";
import { RegisterTargetWithMaintenanceWindowOutput } from "../shapes/RegisterTargetWithMaintenanceWindowOutput";
import { IdempotentParameterMismatch } from "../shapes/IdempotentParameterMismatch";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
