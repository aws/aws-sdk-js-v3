import { DeleteSSHPublicKeyInput } from "./DeleteSSHPublicKeyInput";
import { DeleteSSHPublicKeyOutput } from "./DeleteSSHPublicKeyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSSHPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSSHPublicKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSSHPublicKeyInput
  },
  output: {
    shape: DeleteSSHPublicKeyOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    }
  ]
};
