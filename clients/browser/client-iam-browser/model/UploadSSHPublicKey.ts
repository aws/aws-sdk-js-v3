import { UploadSSHPublicKeyInput } from "./UploadSSHPublicKeyInput";
import { UploadSSHPublicKeyOutput } from "./UploadSSHPublicKeyOutput";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidPublicKeyException } from "./InvalidPublicKeyException";
import { DuplicateSSHPublicKeyException } from "./DuplicateSSHPublicKeyException";
import { UnrecognizedPublicKeyEncodingException } from "./UnrecognizedPublicKeyEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UploadSSHPublicKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UploadSSHPublicKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UploadSSHPublicKeyInput
  },
  output: {
    shape: UploadSSHPublicKeyOutput,
    resultWrapper: "UploadSSHPublicKeyResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidPublicKeyException
    },
    {
      shape: DuplicateSSHPublicKeyException
    },
    {
      shape: UnrecognizedPublicKeyEncodingException
    }
  ]
};
