import { GetGroupPolicyInput } from "../shapes/GetGroupPolicyInput";
import { GetGroupPolicyOutput } from "../shapes/GetGroupPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
