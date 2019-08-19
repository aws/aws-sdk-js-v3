import { StartMaintenanceInput } from "../shapes/StartMaintenanceInput";
import { StartMaintenanceOutput } from "../shapes/StartMaintenanceOutput";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartMaintenance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartMaintenance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartMaintenanceInput
  },
  output: {
    shape: StartMaintenanceOutput
  },
  errors: [
    {
      shape: InvalidStateException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
