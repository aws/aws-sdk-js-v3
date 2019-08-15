import { List as _List_ } from "@aws-sdk/types";
import { _DBSnapshot } from "./_DBSnapshot";

export const _DBSnapshotList: _List_ = {
  type: "list",
  member: {
    shape: _DBSnapshot,
    locationName: "DBSnapshot"
  }
};
