import { List as _List_ } from "@aws-sdk/types";
import { _PublicKey } from "./_PublicKey";

export const _PublicKeyList: _List_ = {
  type: "list",
  member: {
    shape: _PublicKey
  }
};
