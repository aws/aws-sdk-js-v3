import { DeregisterImageInput } from "./DeregisterImageInput";
import { DeregisterImageOutput } from "./DeregisterImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeregisterImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterImageInput
  },
  output: {
    shape: DeregisterImageOutput
  },
  errors: []
};
