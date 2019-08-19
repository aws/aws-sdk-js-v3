import { DisableVgwRoutePropagationInput } from "../shapes/DisableVgwRoutePropagationInput";
import { DisableVgwRoutePropagationOutput } from "../shapes/DisableVgwRoutePropagationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableVgwRoutePropagation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableVgwRoutePropagation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableVgwRoutePropagationInput
  },
  output: {
    shape: DisableVgwRoutePropagationOutput
  },
  errors: []
};
