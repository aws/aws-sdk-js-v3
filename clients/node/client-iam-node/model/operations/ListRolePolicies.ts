import { ListRolePoliciesInput } from "../shapes/ListRolePoliciesInput";
import { ListRolePoliciesOutput } from "../shapes/ListRolePoliciesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
