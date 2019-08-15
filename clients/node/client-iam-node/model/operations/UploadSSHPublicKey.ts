import { UploadSSHPublicKeyInput } from "../shapes/UploadSSHPublicKeyInput";
import { UploadSSHPublicKeyOutput } from "../shapes/UploadSSHPublicKeyOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidPublicKeyException } from "../shapes/InvalidPublicKeyException";
import { DuplicateSSHPublicKeyException } from "../shapes/DuplicateSSHPublicKeyException";
import { UnrecognizedPublicKeyEncodingException } from "../shapes/UnrecognizedPublicKeyEncodingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
