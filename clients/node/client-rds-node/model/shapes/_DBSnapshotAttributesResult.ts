import { _DBSnapshotAttributeList } from "./_DBSnapshotAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBSnapshotAttributesResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBSnapshotAttributes: {
      shape: _DBSnapshotAttributeList
    }
  }
};
