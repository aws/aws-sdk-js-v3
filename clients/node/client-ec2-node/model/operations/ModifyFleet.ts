import { ModifyFleetInput } from "../shapes/ModifyFleetInput";
import { ModifyFleetOutput } from "../shapes/ModifyFleetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyFleetInput
  },
  output: {
    shape: ModifyFleetOutput
  },
  errors: []
};
