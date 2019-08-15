import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "SnapshotName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SnapshotName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
