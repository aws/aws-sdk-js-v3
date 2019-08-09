import { CancelSpotFleetRequestsInput } from "./CancelSpotFleetRequestsInput";
import { CancelSpotFleetRequestsOutput } from "./CancelSpotFleetRequestsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelSpotFleetRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelSpotFleetRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelSpotFleetRequestsInput
  },
  output: {
    shape: CancelSpotFleetRequestsOutput
  },
  errors: []
};
