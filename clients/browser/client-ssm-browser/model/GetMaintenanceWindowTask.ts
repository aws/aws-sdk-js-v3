import { GetMaintenanceWindowTaskInput } from "./GetMaintenanceWindowTaskInput";
import { GetMaintenanceWindowTaskOutput } from "./GetMaintenanceWindowTaskOutput";
import { DoesNotExistException } from "./DoesNotExistException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMaintenanceWindowTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMaintenanceWindowTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetMaintenanceWindowTaskInput
  },
  output: {
    shape: GetMaintenanceWindowTaskOutput
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
