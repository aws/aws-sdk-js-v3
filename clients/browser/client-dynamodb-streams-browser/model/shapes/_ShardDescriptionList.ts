import { List as _List_ } from "@aws-sdk/types";
import { _Shard } from "./_Shard";

export const _ShardDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _Shard
  }
};
