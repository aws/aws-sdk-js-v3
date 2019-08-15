import { GetContextKeysForPrincipalPolicyInput } from "../shapes/GetContextKeysForPrincipalPolicyInput";
import { GetContextKeysForPrincipalPolicyOutput } from "../shapes/GetContextKeysForPrincipalPolicyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetContextKeysForPrincipalPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetContextKeysForPrincipalPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetContextKeysForPrincipalPolicyInput
  },
  output: {
    shape: GetContextKeysForPrincipalPolicyOutput,
    resultWrapper: "GetContextKeysForPrincipalPolicyResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    }
  ]
};
