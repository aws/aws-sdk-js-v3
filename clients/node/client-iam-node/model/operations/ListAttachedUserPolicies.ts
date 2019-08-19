import { ListAttachedUserPoliciesInput } from "../shapes/ListAttachedUserPoliciesInput";
import { ListAttachedUserPoliciesOutput } from "../shapes/ListAttachedUserPoliciesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
