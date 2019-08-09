import { GetMaintenanceWindowInput } from "./GetMaintenanceWindowInput";
import { GetMaintenanceWindowOutput } from "./GetMaintenanceWindowOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMaintenanceWindowInput
  },
  output: {
    shape: GetMaintenanceWindowOutput
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
