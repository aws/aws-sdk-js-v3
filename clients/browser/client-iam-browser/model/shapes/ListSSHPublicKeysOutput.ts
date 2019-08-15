import { _SSHPublicKeyListType } from "./_SSHPublicKeyListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSSHPublicKeysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SSHPublicKeys: {
      shape: _SSHPublicKeyListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
