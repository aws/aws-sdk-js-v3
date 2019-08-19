import { RequestSpotFleetInput } from "../shapes/RequestSpotFleetInput";
import { RequestSpotFleetOutput } from "../shapes/RequestSpotFleetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RequestSpotFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RequestSpotFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RequestSpotFleetInput
  },
  output: {
    shape: RequestSpotFleetOutput
  },
  errors: []
};
