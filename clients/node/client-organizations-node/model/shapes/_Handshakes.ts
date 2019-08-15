import { List as _List_ } from "@aws-sdk/types";
import { _Handshake } from "./_Handshake";

export const _Handshakes: _List_ = {
  type: "list",
  member: {
    shape: _Handshake
  }
};
