import { RequestEnvironmentInfoInput } from "./RequestEnvironmentInfoInput";
import { RequestEnvironmentInfoOutput } from "./RequestEnvironmentInfoOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RequestEnvironmentInfo: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RequestEnvironmentInfo",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RequestEnvironmentInfoInput
  },
  output: {
    shape: RequestEnvironmentInfoOutput
  },
  errors: []
};
