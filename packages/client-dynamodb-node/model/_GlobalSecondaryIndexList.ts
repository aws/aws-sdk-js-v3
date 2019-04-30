import { List as _List_ } from "@aws-sdk/types";
import { _GlobalSecondaryIndex } from "./_GlobalSecondaryIndex";

export const _GlobalSecondaryIndexList: _List_ = {
  type: "list",
  member: {
    shape: _GlobalSecondaryIndex
  }
};
