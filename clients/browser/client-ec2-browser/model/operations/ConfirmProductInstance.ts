import { ConfirmProductInstanceInput } from "../shapes/ConfirmProductInstanceInput";
import { ConfirmProductInstanceOutput } from "../shapes/ConfirmProductInstanceOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ConfirmProductInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmProductInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmProductInstanceInput
  },
  output: {
    shape: ConfirmProductInstanceOutput
  },
  errors: []
};
