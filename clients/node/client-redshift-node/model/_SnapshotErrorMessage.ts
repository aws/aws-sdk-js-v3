import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotErrorMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    FailureCode: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
