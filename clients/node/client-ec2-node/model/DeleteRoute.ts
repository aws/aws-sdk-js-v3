import { DeleteRouteInput } from "./DeleteRouteInput";
import { DeleteRouteOutput } from "./DeleteRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRouteInput
  },
  output: {
    shape: DeleteRouteOutput
  },
  errors: []
};
