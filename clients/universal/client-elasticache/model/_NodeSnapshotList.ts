import { List as _List_ } from "@aws-sdk/types";
import { _NodeSnapshot } from "./_NodeSnapshot";

export const _NodeSnapshotList: _List_ = {
  type: "list",
  member: {
    shape: _NodeSnapshot,
    locationName: "NodeSnapshot"
  }
};
