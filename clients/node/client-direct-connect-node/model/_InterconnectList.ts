import { List as _List_ } from "@aws-sdk/types";
import { _Interconnect } from "./_Interconnect";

export const _InterconnectList: _List_ = {
  type: "list",
  member: {
    shape: _Interconnect
  }
};
