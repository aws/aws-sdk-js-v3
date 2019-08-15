import { List as _List_ } from "@aws-sdk/types";
import { _SnapshotErrorMessage } from "./_SnapshotErrorMessage";

export const _BatchSnapshotOperationErrorList: _List_ = {
  type: "list",
  member: {
    shape: _SnapshotErrorMessage,
    locationName: "SnapshotErrorMessage"
  }
};
