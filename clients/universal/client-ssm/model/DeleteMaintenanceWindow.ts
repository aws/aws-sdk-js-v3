import { DeleteMaintenanceWindowInput } from "./DeleteMaintenanceWindowInput";
import { DeleteMaintenanceWindowOutput } from "./DeleteMaintenanceWindowOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteMaintenanceWindow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMaintenanceWindow",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMaintenanceWindowInput
  },
  output: {
    shape: DeleteMaintenanceWindowOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
