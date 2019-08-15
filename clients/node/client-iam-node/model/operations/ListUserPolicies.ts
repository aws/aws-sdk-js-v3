import { ListUserPoliciesInput } from "../shapes/ListUserPoliciesInput";
import { ListUserPoliciesOutput } from "../shapes/ListUserPoliciesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUserPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUserPoliciesInput
  },
  output: {
    shape: ListUserPoliciesOutput,
    resultWrapper: "ListUserPoliciesResult"
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
