import { CreateMaintenanceWindowInput } from "../shapes/CreateMaintenanceWindowInput";
import { CreateMaintenanceWindowOutput } from "../shapes/CreateMaintenanceWindowOutput";
import { IdempotentParameterMismatch } from "../shapes/IdempotentParameterMismatch";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
