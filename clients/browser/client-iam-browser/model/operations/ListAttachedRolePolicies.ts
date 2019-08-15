import { ListAttachedRolePoliciesInput } from "../shapes/ListAttachedRolePoliciesInput";
import { ListAttachedRolePoliciesOutput } from "../shapes/ListAttachedRolePoliciesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAttachedRolePolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAttachedRolePolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAttachedRolePoliciesInput
  },
  output: {
    shape: ListAttachedRolePoliciesOutput,
    resultWrapper: "ListAttachedRolePoliciesResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
