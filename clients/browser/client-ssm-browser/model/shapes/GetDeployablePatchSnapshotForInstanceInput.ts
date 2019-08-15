import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeployablePatchSnapshotForInstanceInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "SnapshotId"],
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
    }
  }
};
