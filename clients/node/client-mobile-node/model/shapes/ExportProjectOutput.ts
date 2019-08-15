import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportProjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    downloadUrl: {
      shape: {
        type: "string"
      }
    },
    shareUrl: {
      shape: {
        type: "string"
      }
    },
    snapshotId: {
      shape: {
        type: "string"
      }
    }
  }
};
