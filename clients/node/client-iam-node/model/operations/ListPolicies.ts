import { ListPoliciesInput } from "../shapes/ListPoliciesInput";
import { ListPoliciesOutput } from "../shapes/ListPoliciesOutput";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
