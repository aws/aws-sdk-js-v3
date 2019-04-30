import { List as _List_ } from "@aws-sdk/types";
import { _GlobalTableGlobalSecondaryIndexSettingsUpdate } from "./_GlobalTableGlobalSecondaryIndexSettingsUpdate";

export const _GlobalTableGlobalSecondaryIndexSettingsUpdateList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _GlobalTableGlobalSecondaryIndexSettingsUpdate
  }
};
