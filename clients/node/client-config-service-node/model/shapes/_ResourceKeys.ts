import { List as _List_ } from "@aws-sdk/types";
import { _ResourceKey } from "./_ResourceKey";

export const _ResourceKeys: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ResourceKey
  }
};
