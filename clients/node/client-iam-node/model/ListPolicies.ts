import { ListPoliciesInput } from "./ListPoliciesInput";
import { ListPoliciesOutput } from "./ListPoliciesOutput";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPoliciesInput
  },
  output: {
    shape: ListPoliciesOutput,
    resultWrapper: "ListPoliciesResult"
  },
  errors: [
    {
      shape: ServiceFailureException
    }
  ]
};
