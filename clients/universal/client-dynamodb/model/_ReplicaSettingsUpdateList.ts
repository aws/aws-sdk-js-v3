import { List as _List_ } from "@aws-sdk/types";
import { _ReplicaSettingsUpdate } from "./_ReplicaSettingsUpdate";

export const _ReplicaSettingsUpdateList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ReplicaSettingsUpdate
  }
};
