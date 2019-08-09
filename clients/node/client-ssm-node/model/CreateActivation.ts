import { CreateActivationInput } from "./CreateActivationInput";
import { CreateActivationOutput } from "./CreateActivationOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateActivation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateActivation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateActivationInput
  },
  output: {
    shape: CreateActivationOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
