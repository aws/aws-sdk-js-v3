import { SetInstanceHealthInput } from "./SetInstanceHealthInput";
import { SetInstanceHealthOutput } from "./SetInstanceHealthOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetInstanceHealth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetInstanceHealth",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetInstanceHealthInput
  },
  output: {
    shape: SetInstanceHealthOutput
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
