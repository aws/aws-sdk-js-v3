import { DeleteIdentityPolicyInput } from "./DeleteIdentityPolicyInput";
import { DeleteIdentityPolicyOutput } from "./DeleteIdentityPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteIdentityPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIdentityPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIdentityPolicyInput
  },
  output: {
    shape: DeleteIdentityPolicyOutput,
    resultWrapper: "DeleteIdentityPolicyResult"
  },
  errors: []
};
