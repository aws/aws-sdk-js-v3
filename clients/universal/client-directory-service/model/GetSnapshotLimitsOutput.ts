import { _SnapshotLimits } from "./_SnapshotLimits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSnapshotLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotLimits: {
      shape: _SnapshotLimits
    }
  }
};
