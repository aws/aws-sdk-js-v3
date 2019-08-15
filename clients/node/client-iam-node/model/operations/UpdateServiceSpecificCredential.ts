import { UpdateServiceSpecificCredentialInput } from "../shapes/UpdateServiceSpecificCredentialInput";
import { UpdateServiceSpecificCredentialOutput } from "../shapes/UpdateServiceSpecificCredentialOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
