import { GetIdentityPoliciesInput } from "../shapes/GetIdentityPoliciesInput";
import { GetIdentityPoliciesOutput } from "../shapes/GetIdentityPoliciesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetIdentityPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetIdentityPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetIdentityPoliciesInput
  },
  output: {
    shape: GetIdentityPoliciesOutput,
    resultWrapper: "GetIdentityPoliciesResult"
  },
  errors: []
};
