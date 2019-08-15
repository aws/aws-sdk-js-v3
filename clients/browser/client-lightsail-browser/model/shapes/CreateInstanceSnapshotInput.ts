import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstanceSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["instanceSnapshotName", "instanceName"],
  members: {
    instanceSnapshotName: {
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
