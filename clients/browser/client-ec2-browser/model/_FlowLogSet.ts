import { List as _List_ } from "@aws-sdk/types";
import { _FlowLog } from "./_FlowLog";

export const _FlowLogSet: _List_ = {
  type: "list",
  member: {
    shape: _FlowLog,
    locationName: "item"
  }
};
