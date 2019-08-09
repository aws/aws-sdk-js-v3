import { List as _List_ } from "@aws-sdk/types";
import { _PortRange } from "./_PortRange";

export const _PortRanges: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _PortRange
  }
};
