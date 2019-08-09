import { GetPolicyVersionInput } from "./GetPolicyVersionInput";
import { GetPolicyVersionOutput } from "./GetPolicyVersionOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
