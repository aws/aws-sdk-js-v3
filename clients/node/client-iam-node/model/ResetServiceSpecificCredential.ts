import { ResetServiceSpecificCredentialInput } from "./ResetServiceSpecificCredentialInput";
import { ResetServiceSpecificCredentialOutput } from "./ResetServiceSpecificCredentialOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetServiceSpecificCredential: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetServiceSpecificCredential",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetServiceSpecificCredentialInput
  },
  output: {
    shape: ResetServiceSpecificCredentialOutput,
    resultWrapper: "ResetServiceSpecificCredentialResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    }
  ]
};
