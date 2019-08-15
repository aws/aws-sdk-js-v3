import { List as _List_ } from "@aws-sdk/types";
import { _Nameserver } from "./_Nameserver";

export const _NameserverList: _List_ = {
  type: "list",
  member: {
    shape: _Nameserver
  }
};
