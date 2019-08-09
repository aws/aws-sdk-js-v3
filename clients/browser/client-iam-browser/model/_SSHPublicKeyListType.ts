import { List as _List_ } from "@aws-sdk/types";
import { _SSHPublicKeyMetadata } from "./_SSHPublicKeyMetadata";

export const _SSHPublicKeyListType: _List_ = {
  type: "list",
  member: {
    shape: _SSHPublicKeyMetadata
  }
};
