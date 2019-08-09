import { GetSSHPublicKeyInput } from "./GetSSHPublicKeyInput";
import { GetSSHPublicKeyOutput } from "./GetSSHPublicKeyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnrecognizedPublicKeyEncodingException } from "./UnrecognizedPublicKeyEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSSHPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSSHPublicKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSSHPublicKeyInput
  },
  output: {
    shape: GetSSHPublicKeyOutput,
    resultWrapper: "GetSSHPublicKeyResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: UnrecognizedPublicKeyEncodingException
    }
  ]
};
