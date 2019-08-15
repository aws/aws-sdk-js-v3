import { UpdateApplicationVersionInput } from "../shapes/UpdateApplicationVersionInput";
import { UpdateApplicationVersionOutput } from "../shapes/UpdateApplicationVersionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApplicationVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplicationVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateApplicationVersionInput
  },
  output: {
    shape: UpdateApplicationVersionOutput,
    resultWrapper: "UpdateApplicationVersionResult"
  },
  errors: []
};
