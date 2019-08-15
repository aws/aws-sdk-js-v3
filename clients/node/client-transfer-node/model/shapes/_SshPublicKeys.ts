import { List as _List_ } from "@aws-sdk/types";
import { _SshPublicKey } from "./_SshPublicKey";

export const _SshPublicKeys: _List_ = {
  type: "list",
  member: {
    shape: _SshPublicKey
  }
};
