import { ListGroupPoliciesInput } from "../shapes/ListGroupPoliciesInput";
import { ListGroupPoliciesOutput } from "../shapes/ListGroupPoliciesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
