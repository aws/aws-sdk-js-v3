import { ModifyFleetInput } from "./ModifyFleetInput";
import { ModifyFleetOutput } from "./ModifyFleetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
