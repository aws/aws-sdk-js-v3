import { GetMaintenanceWindowTaskInput } from "../shapes/GetMaintenanceWindowTaskInput";
import { GetMaintenanceWindowTaskOutput } from "../shapes/GetMaintenanceWindowTaskOutput";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
