import { ReplaceRouteInput } from "../shapes/ReplaceRouteInput";
import { ReplaceRouteOutput } from "../shapes/ReplaceRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReplaceRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReplaceRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReplaceRouteInput
  },
  output: {
    shape: ReplaceRouteOutput
  },
  errors: []
};
