import { GetPolicyInput } from "./GetPolicyInput";
import { GetPolicyOutput } from "./GetPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPolicyInput
  },
  output: {
    shape: GetPolicyOutput,
    resultWrapper: "GetPolicyResult"
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
