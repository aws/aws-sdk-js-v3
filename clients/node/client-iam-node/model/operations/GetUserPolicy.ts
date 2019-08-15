import { GetUserPolicyInput } from "../shapes/GetUserPolicyInput";
import { GetUserPolicyOutput } from "../shapes/GetUserPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
