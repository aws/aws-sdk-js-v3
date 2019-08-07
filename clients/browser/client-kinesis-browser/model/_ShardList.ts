import { List as _List_ } from "@aws-sdk/types";
import { _Shard } from "./_Shard";

export const _ShardList: _List_ = {
  type: "list",
  member: {
    shape: _Shard
  }
};
