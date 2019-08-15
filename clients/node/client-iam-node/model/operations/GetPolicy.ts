import { GetPolicyInput } from "../shapes/GetPolicyInput";
import { GetPolicyOutput } from "../shapes/GetPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
