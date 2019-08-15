import { List as _List_ } from "@aws-sdk/types";
import { _ResponsePartitionKey } from "./_ResponsePartitionKey";

export const _ResponsePartitionKeyList: _List_ = {
  type: "list",
  member: {
    shape: _ResponsePartitionKey
  }
};
