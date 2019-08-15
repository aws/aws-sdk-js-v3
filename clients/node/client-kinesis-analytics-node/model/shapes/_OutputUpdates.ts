import { List as _List_ } from "@aws-sdk/types";
import { _OutputUpdate } from "./_OutputUpdate";

export const _OutputUpdates: _List_ = {
  type: "list",
  member: {
    shape: _OutputUpdate
  }
};
