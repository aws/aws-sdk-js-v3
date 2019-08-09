import { List as _List_ } from "@aws-sdk/types";
import { _BGPPeer } from "./_BGPPeer";

export const _BGPPeerList: _List_ = {
  type: "list",
  member: {
    shape: _BGPPeer
  }
};
