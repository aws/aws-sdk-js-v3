import { RegisterTaskWithMaintenanceWindowInput } from "../shapes/RegisterTaskWithMaintenanceWindowInput";
import { RegisterTaskWithMaintenanceWindowOutput } from "../shapes/RegisterTaskWithMaintenanceWindowOutput";
import { IdempotentParameterMismatch } from "../shapes/IdempotentParameterMismatch";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { FeatureNotAvailableException } from "../shapes/FeatureNotAvailableException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterTaskWithMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterTaskWithMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterTaskWithMaintenanceWindowInput
  },
  output: {
    shape: RegisterTaskWithMaintenanceWindowOutput
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
      shape: FeatureNotAvailableException
    },
    {
      shape: InternalServerError
    }
  ]
};
