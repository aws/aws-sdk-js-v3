import { CancelSpotInstanceRequestsInput } from "./CancelSpotInstanceRequestsInput";
import { CancelSpotInstanceRequestsOutput } from "./CancelSpotInstanceRequestsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelSpotInstanceRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelSpotInstanceRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelSpotInstanceRequestsInput
  },
  output: {
    shape: CancelSpotInstanceRequestsOutput
  },
  errors: []
};
