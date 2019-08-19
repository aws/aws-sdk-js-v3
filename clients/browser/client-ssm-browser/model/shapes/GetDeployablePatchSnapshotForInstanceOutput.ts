import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeployablePatchSnapshotForInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    SnapshotId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    SnapshotDownloadUrl: {
      shape: {
        type: "string"
      }
    },
    Product: {
      shape: {
        type: "string"
      }
    }
  }
};
