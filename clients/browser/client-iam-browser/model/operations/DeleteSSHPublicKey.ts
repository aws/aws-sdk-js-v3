import { DeleteSSHPublicKeyInput } from "../shapes/DeleteSSHPublicKeyInput";
import { DeleteSSHPublicKeyOutput } from "../shapes/DeleteSSHPublicKeyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
