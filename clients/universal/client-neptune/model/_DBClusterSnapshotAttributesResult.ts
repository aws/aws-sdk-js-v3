import { _DBClusterSnapshotAttributeList } from "./_DBClusterSnapshotAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBClusterSnapshotAttributesResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterSnapshotAttributes: {
      shape: _DBClusterSnapshotAttributeList
    }
  }
};
