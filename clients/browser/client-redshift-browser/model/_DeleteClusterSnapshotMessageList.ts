import { List as _List_ } from "@aws-sdk/types";
import { _DeleteClusterSnapshotMessage } from "./_DeleteClusterSnapshotMessage";

export const _DeleteClusterSnapshotMessageList: _List_ = {
  type: "list",
  member: {
    shape: _DeleteClusterSnapshotMessage,
    locationName: "DeleteClusterSnapshotMessage"
  }
};
