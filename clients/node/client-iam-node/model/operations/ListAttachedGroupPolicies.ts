import { ListAttachedGroupPoliciesInput } from "../shapes/ListAttachedGroupPoliciesInput";
import { ListAttachedGroupPoliciesOutput } from "../shapes/ListAttachedGroupPoliciesOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
