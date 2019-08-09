import { ListAttachedRolePoliciesInput } from "./ListAttachedRolePoliciesInput";
import { ListAttachedRolePoliciesOutput } from "./ListAttachedRolePoliciesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
