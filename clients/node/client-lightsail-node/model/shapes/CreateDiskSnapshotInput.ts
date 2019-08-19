import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDiskSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["diskSnapshotName"],
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
    instanceName: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
