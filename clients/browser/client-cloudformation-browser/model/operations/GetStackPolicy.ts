import { GetStackPolicyInput } from "../shapes/GetStackPolicyInput";
import { GetStackPolicyOutput } from "../shapes/GetStackPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetStackPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStackPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetStackPolicyInput
  },
  output: {
    shape: GetStackPolicyOutput,
    resultWrapper: "GetStackPolicyResult"
  },
  errors: []
};
