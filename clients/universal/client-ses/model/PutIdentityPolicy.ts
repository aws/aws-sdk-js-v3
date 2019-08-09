import { PutIdentityPolicyInput } from "./PutIdentityPolicyInput";
import { PutIdentityPolicyOutput } from "./PutIdentityPolicyOutput";
import { InvalidPolicyException } from "./InvalidPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutIdentityPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutIdentityPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutIdentityPolicyInput
  },
  output: {
    shape: PutIdentityPolicyOutput,
    resultWrapper: "PutIdentityPolicyResult"
  },
  errors: [
    {
      shape: InvalidPolicyException
    }
  ]
};
