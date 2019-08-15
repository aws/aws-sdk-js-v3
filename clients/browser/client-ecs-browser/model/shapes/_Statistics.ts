import { List as _List_ } from "@aws-sdk/types";
import { _KeyValuePair } from "./_KeyValuePair";

export const _Statistics: _List_ = {
  type: "list",
  member: {
    shape: _KeyValuePair
  }
};
