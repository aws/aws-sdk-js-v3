import { UpdateMaintenanceStartTimeInput } from "../shapes/UpdateMaintenanceStartTimeInput";
import { UpdateMaintenanceStartTimeOutput } from "../shapes/UpdateMaintenanceStartTimeOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMaintenanceStartTime: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMaintenanceStartTime",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMaintenanceStartTimeInput
  },
  output: {
    shape: UpdateMaintenanceStartTimeOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
