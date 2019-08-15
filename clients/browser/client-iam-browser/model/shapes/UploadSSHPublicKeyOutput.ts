import { _SSHPublicKey } from "./_SSHPublicKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadSSHPublicKeyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SSHPublicKey: {
      shape: _SSHPublicKey
    }
  }
};
