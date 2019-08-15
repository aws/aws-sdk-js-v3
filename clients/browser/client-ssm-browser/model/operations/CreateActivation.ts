import { CreateActivationInput } from "../shapes/CreateActivationInput";
import { CreateActivationOutput } from "../shapes/CreateActivationOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
