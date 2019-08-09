import { List as _List_ } from "@aws-sdk/types";
import { _Queue } from "./_Queue";

export const _QueueList: _List_ = {
  type: "list",
  member: {
    shape: _Queue
  }
};
