import { List as _List_ } from "@aws-sdk/types";
import { _LocalSecondaryIndexInfo } from "./_LocalSecondaryIndexInfo";

export const _LocalSecondaryIndexes: _List_ = {
  type: "list",
  member: {
    shape: _LocalSecondaryIndexInfo
  }
};
