import { _InstanceSnapshot } from "./_InstanceSnapshot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstanceSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceSnapshot: {
      shape: _InstanceSnapshot
    }
  }
};
