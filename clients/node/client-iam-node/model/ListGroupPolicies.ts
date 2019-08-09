import { ListGroupPoliciesInput } from "./ListGroupPoliciesInput";
import { ListGroupPoliciesOutput } from "./ListGroupPoliciesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGroupPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGroupPoliciesInput
  },
  output: {
    shape: ListGroupPoliciesOutput,
    resultWrapper: "ListGroupPoliciesResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
