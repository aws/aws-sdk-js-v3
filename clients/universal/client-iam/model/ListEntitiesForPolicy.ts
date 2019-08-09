import { ListEntitiesForPolicyInput } from "./ListEntitiesForPolicyInput";
import { ListEntitiesForPolicyOutput } from "./ListEntitiesForPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
