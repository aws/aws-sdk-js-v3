import { GetAccountPasswordPolicyInput } from "../shapes/GetAccountPasswordPolicyInput";
import { GetAccountPasswordPolicyOutput } from "../shapes/GetAccountPasswordPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
