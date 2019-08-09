import { ListIdentityPoliciesInput } from "./ListIdentityPoliciesInput";
import { ListIdentityPoliciesOutput } from "./ListIdentityPoliciesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListIdentityPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIdentityPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListIdentityPoliciesInput
  },
  output: {
    shape: ListIdentityPoliciesOutput,
    resultWrapper: "ListIdentityPoliciesResult"
  },
  errors: []
};
