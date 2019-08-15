import { GetContextKeysForCustomPolicyInput } from "../shapes/GetContextKeysForCustomPolicyInput";
import { GetContextKeysForCustomPolicyOutput } from "../shapes/GetContextKeysForCustomPolicyOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetContextKeysForCustomPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetContextKeysForCustomPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetContextKeysForCustomPolicyInput
  },
  output: {
    shape: GetContextKeysForCustomPolicyOutput,
    resultWrapper: "GetContextKeysForCustomPolicyResult"
  },
  errors: [
    {
      shape: InvalidInputException
    }
  ]
};
