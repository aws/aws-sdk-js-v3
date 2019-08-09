import { _DBSnapshotAttributesResult } from "./_DBSnapshotAttributesResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBSnapshotAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSnapshotAttributesResult: {
      shape: _DBSnapshotAttributesResult
    }
  }
};
