import { EnableVgwRoutePropagationInput } from "../shapes/EnableVgwRoutePropagationInput";
import { EnableVgwRoutePropagationOutput } from "../shapes/EnableVgwRoutePropagationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableVgwRoutePropagation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableVgwRoutePropagation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableVgwRoutePropagationInput
  },
  output: {
    shape: EnableVgwRoutePropagationOutput
  },
  errors: []
};
