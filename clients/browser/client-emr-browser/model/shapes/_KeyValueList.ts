import { List as _List_ } from "@aws-sdk/types";
import { _KeyValue } from "./_KeyValue";

export const _KeyValueList: _List_ = {
  type: "list",
  member: {
    shape: _KeyValue
  }
};
