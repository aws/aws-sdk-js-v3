import { CreateMaintenanceWindowInput } from "./CreateMaintenanceWindowInput";
import { CreateMaintenanceWindowOutput } from "./CreateMaintenanceWindowOutput";
import { IdempotentParameterMismatch } from "./IdempotentParameterMismatch";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateMaintenanceWindowInput
  },
  output: {
    shape: CreateMaintenanceWindowOutput
  },
  errors: [
    {
      shape: IdempotentParameterMismatch
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InternalServerError
    }
  ]
};
