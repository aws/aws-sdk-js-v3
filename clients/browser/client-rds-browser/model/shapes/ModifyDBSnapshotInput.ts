import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DBSnapshotIdentifier"],
  members: {
    DBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    OptionGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
