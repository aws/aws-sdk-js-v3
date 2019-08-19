import { ModifySpotFleetRequestInput } from "../shapes/ModifySpotFleetRequestInput";
import { ModifySpotFleetRequestOutput } from "../shapes/ModifySpotFleetRequestOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifySpotFleetRequest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifySpotFleetRequest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifySpotFleetRequestInput
  },
  output: {
    shape: ModifySpotFleetRequestOutput
  },
  errors: []
};
