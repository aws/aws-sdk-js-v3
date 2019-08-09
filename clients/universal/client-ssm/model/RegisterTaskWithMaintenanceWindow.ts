import { RegisterTaskWithMaintenanceWindowInput } from "./RegisterTaskWithMaintenanceWindowInput";
import { RegisterTaskWithMaintenanceWindowOutput } from "./RegisterTaskWithMaintenanceWindowOutput";
import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { DoesNotExistException } from "./DoesNotExistException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { FeatureNotAvailableException } from "./FeatureNotAvailableException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
