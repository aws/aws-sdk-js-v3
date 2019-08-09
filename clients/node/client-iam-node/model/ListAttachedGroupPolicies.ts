import { ListAttachedGroupPoliciesInput } from "./ListAttachedGroupPoliciesInput";
import { ListAttachedGroupPoliciesOutput } from "./ListAttachedGroupPoliciesOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAttachedGroupPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAttachedGroupPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAttachedGroupPoliciesInput
  },
  output: {
    shape: ListAttachedGroupPoliciesOutput,
    resultWrapper: "ListAttachedGroupPoliciesResult"
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
