import { ListRolePoliciesInput } from "./ListRolePoliciesInput";
import { ListRolePoliciesOutput } from "./ListRolePoliciesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRolePolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRolePolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRolePoliciesInput
  },
  output: {
    shape: ListRolePoliciesOutput,
    resultWrapper: "ListRolePoliciesResult"
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
