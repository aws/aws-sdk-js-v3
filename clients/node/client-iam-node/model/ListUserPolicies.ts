import { ListUserPoliciesInput } from "./ListUserPoliciesInput";
import { ListUserPoliciesOutput } from "./ListUserPoliciesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
