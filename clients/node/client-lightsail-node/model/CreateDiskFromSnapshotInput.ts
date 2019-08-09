import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDiskFromSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["diskName", "diskSnapshotName", "availabilityZone", "sizeInGb"],
  members: {
    diskName: {
      shape: {
        type: "string"
      }
    },
    diskSnapshotName: {
      shape: {
        type: "string"
      }
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
    },
    sizeInGb: {
      shape: {
        type: "integer"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
