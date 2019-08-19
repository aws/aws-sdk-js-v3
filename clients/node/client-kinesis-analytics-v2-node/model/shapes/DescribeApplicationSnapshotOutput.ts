import { _SnapshotDetails } from "./_SnapshotDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationSnapshotOutput: _Structure_ = {
  type: "structure",
  required: ["SnapshotDetails"],
  members: {
    SnapshotDetails: {
      shape: _SnapshotDetails
    }
  }
};
