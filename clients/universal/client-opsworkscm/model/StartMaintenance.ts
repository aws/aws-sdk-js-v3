import { StartMaintenanceInput } from "./StartMaintenanceInput";
import { StartMaintenanceOutput } from "./StartMaintenanceOutput";
import { InvalidStateException } from "./InvalidStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
