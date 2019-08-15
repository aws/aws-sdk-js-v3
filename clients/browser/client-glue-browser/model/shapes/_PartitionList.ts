import { List as _List_ } from "@aws-sdk/types";
import { _Partition } from "./_Partition";

export const _PartitionList: _List_ = {
  type: "list",
  member: {
    shape: _Partition
  }
};
