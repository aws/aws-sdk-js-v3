import { List as _List_ } from "@aws-sdk/types";
import { _PartitionValueList } from "./_PartitionValueList";

export const _BatchGetPartitionValueList: _List_ = {
  type: "list",
  member: {
    shape: _PartitionValueList
  }
};
