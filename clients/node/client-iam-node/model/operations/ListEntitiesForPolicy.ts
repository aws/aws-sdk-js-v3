import { ListEntitiesForPolicyInput } from "../shapes/ListEntitiesForPolicyInput";
import { ListEntitiesForPolicyOutput } from "../shapes/ListEntitiesForPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListEntitiesForPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEntitiesForPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEntitiesForPolicyInput
  },
  output: {
    shape: ListEntitiesForPolicyOutput,
    resultWrapper: "ListEntitiesForPolicyResult"
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
