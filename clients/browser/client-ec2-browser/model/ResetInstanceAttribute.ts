import { ResetInstanceAttributeInput } from "./ResetInstanceAttributeInput";
import { ResetInstanceAttributeOutput } from "./ResetInstanceAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetInstanceAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetInstanceAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetInstanceAttributeInput
  },
  output: {
    shape: ResetInstanceAttributeOutput
  },
  errors: []
};
