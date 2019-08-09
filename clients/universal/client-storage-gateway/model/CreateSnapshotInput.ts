import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["VolumeARN", "SnapshotDescription"],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    SnapshotDescription: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
