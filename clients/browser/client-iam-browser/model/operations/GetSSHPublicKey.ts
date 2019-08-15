import { GetSSHPublicKeyInput } from "../shapes/GetSSHPublicKeyInput";
import { GetSSHPublicKeyOutput } from "../shapes/GetSSHPublicKeyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { UnrecognizedPublicKeyEncodingException } from "../shapes/UnrecognizedPublicKeyEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
