import { DeleteServiceSpecificCredentialInput } from "./DeleteServiceSpecificCredentialInput";
import { DeleteServiceSpecificCredentialOutput } from "./DeleteServiceSpecificCredentialOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteServiceSpecificCredential: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServiceSpecificCredential",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServiceSpecificCredentialInput
  },
  output: {
    shape: DeleteServiceSpecificCredentialOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    }
  ]
};
