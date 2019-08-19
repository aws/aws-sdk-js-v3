import { CreateRouteInput } from "../shapes/CreateRouteInput";
import { CreateRouteOutput } from "../shapes/CreateRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRouteInput
  },
  output: {
    shape: CreateRouteOutput
  },
  errors: []
};
