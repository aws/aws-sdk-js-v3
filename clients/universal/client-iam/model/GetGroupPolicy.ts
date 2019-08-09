import { GetGroupPolicyInput } from "./GetGroupPolicyInput";
import { GetGroupPolicyOutput } from "./GetGroupPolicyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroupPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroupPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetGroupPolicyInput
  },
  output: {
    shape: GetGroupPolicyOutput,
    resultWrapper: "GetGroupPolicyResult"
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
