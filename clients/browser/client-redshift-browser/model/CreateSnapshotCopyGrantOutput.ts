import { _SnapshotCopyGrant } from "./_SnapshotCopyGrant";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotCopyGrantOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotCopyGrant: {
      shape: _SnapshotCopyGrant
    }
  }
};
