import { List as _List_ } from "@aws-sdk/types";
import { _ReplicaGlobalSecondaryIndexSettingsUpdate } from "./_ReplicaGlobalSecondaryIndexSettingsUpdate";

export const _ReplicaGlobalSecondaryIndexSettingsUpdateList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ReplicaGlobalSecondaryIndexSettingsUpdate
  }
};
