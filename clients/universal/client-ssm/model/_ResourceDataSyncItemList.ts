import { List as _List_ } from "@aws-sdk/types";
import { _ResourceDataSyncItem } from "./_ResourceDataSyncItem";

export const _ResourceDataSyncItemList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceDataSyncItem
  }
};
