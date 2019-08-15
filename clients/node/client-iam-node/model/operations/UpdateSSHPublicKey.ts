import { UpdateSSHPublicKeyInput } from "../shapes/UpdateSSHPublicKeyInput";
import { UpdateSSHPublicKeyOutput } from "../shapes/UpdateSSHPublicKeyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSSHPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSSHPublicKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSSHPublicKeyInput
  },
  output: {
    shape: UpdateSSHPublicKeyOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    }
  ]
};
