import { ListPolicyVersionsInput } from "./ListPolicyVersionsInput";
import { ListPolicyVersionsOutput } from "./ListPolicyVersionsOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
