import { RetrieveEnvironmentInfoInput } from "../shapes/RetrieveEnvironmentInfoInput";
import { RetrieveEnvironmentInfoOutput } from "../shapes/RetrieveEnvironmentInfoOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RetrieveEnvironmentInfo: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RetrieveEnvironmentInfo",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RetrieveEnvironmentInfoInput
  },
  output: {
    shape: RetrieveEnvironmentInfoOutput,
    resultWrapper: "RetrieveEnvironmentInfoResult"
  },
  errors: []
};
