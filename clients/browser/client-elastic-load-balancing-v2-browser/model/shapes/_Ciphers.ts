import { List as _List_ } from "@aws-sdk/types";
import { _Cipher } from "./_Cipher";

export const _Ciphers: _List_ = {
  type: "list",
  member: {
    shape: _Cipher
  }
};
