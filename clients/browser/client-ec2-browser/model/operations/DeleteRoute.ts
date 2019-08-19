import { DeleteRouteInput } from "../shapes/DeleteRouteInput";
import { DeleteRouteOutput } from "../shapes/DeleteRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
