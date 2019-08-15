import { RegisterImageInput } from "../shapes/RegisterImageInput";
import { RegisterImageOutput } from "../shapes/RegisterImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RegisterImageInput
  },
  output: {
    shape: RegisterImageOutput
  },
  errors: []
};
