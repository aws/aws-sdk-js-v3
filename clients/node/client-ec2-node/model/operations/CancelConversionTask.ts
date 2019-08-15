import { CancelConversionTaskInput } from "../shapes/CancelConversionTaskInput";
import { CancelConversionTaskOutput } from "../shapes/CancelConversionTaskOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelConversionTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelConversionTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelConversionTaskInput
  },
  output: {
    shape: CancelConversionTaskOutput
  },
  errors: []
};
