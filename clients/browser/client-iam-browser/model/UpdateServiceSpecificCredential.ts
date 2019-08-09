import { UpdateServiceSpecificCredentialInput } from "./UpdateServiceSpecificCredentialInput";
import { UpdateServiceSpecificCredentialOutput } from "./UpdateServiceSpecificCredentialOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateServiceSpecificCredential: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServiceSpecificCredential",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServiceSpecificCredentialInput
  },
  output: {
    shape: UpdateServiceSpecificCredentialOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    }
  ]
};
