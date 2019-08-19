import { StopFleetInput } from "../shapes/StopFleetInput";
import { StopFleetOutput } from "../shapes/StopFleetOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopFleetInput
  },
  output: {
    shape: StopFleetOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
