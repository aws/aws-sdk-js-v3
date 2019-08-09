import { GetUserPolicyInput } from "./GetUserPolicyInput";
import { GetUserPolicyOutput } from "./GetUserPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUserPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUserPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUserPolicyInput
  },
  output: {
    shape: GetUserPolicyOutput,
    resultWrapper: "GetUserPolicyResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
