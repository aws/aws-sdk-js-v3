import { List as _List_ } from "@aws-sdk/types";
import { _HandshakeParty } from "./_HandshakeParty";

export const _HandshakeParties: _List_ = {
  type: "list",
  member: {
    shape: _HandshakeParty
  }
};
