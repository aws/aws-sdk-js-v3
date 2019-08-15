import { DeleteServiceSpecificCredentialInput } from "../shapes/DeleteServiceSpecificCredentialInput";
import { DeleteServiceSpecificCredentialOutput } from "../shapes/DeleteServiceSpecificCredentialOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
