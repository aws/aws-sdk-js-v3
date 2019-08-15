import { List as _List_ } from "@aws-sdk/types";
import { _DhcpOptions } from "./_DhcpOptions";

export const _DhcpOptionsList: _List_ = {
  type: "list",
  member: {
    shape: _DhcpOptions,
    locationName: "item"
  }
};
