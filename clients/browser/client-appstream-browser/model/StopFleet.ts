import { StopFleetInput } from "./StopFleetInput";
import { StopFleetOutput } from "./StopFleetOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
