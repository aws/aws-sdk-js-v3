import { GetPolicyVersionInput } from "../shapes/GetPolicyVersionInput";
import { GetPolicyVersionOutput } from "../shapes/GetPolicyVersionOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPolicyVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPolicyVersionInput
  },
  output: {
    shape: GetPolicyVersionOutput,
    resultWrapper: "GetPolicyVersionResult"
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
