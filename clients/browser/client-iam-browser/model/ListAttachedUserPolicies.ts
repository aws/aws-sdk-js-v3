import { ListAttachedUserPoliciesInput } from "./ListAttachedUserPoliciesInput";
import { ListAttachedUserPoliciesOutput } from "./ListAttachedUserPoliciesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAttachedUserPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAttachedUserPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAttachedUserPoliciesInput
  },
  output: {
    shape: ListAttachedUserPoliciesOutput,
    resultWrapper: "ListAttachedUserPoliciesResult"
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
