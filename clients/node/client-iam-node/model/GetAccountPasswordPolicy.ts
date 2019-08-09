import { GetAccountPasswordPolicyInput } from "./GetAccountPasswordPolicyInput";
import { GetAccountPasswordPolicyOutput } from "./GetAccountPasswordPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAccountPasswordPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountPasswordPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAccountPasswordPolicyInput
  },
  output: {
    shape: GetAccountPasswordPolicyOutput,
    resultWrapper: "GetAccountPasswordPolicyResult"
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
