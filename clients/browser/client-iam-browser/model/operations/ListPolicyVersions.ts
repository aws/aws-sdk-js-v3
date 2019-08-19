import { ListPolicyVersionsInput } from "../shapes/ListPolicyVersionsInput";
import { ListPolicyVersionsOutput } from "../shapes/ListPolicyVersionsOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPolicyVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPolicyVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPolicyVersionsInput
  },
  output: {
    shape: ListPolicyVersionsOutput,
    resultWrapper: "ListPolicyVersionsResult"
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
