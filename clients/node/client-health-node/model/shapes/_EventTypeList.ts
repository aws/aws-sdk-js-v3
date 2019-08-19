import { List as _List_ } from "@aws-sdk/types";
import { _EventType } from "./_EventType";

export const _EventTypeList: _List_ = {
  type: "list",
  member: {
    shape: _EventType
  }
};
