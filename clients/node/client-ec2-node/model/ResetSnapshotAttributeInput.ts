import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetSnapshotAttributeInput: _Structure_ = {
  type: "structure",
  required: ["Attribute", "SnapshotId"],
  members: {
    Attribute: {
      shape: {
        type: "string"
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
