import { _Cluster } from "./_Cluster";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableSnapshotCopyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Cluster: {
      shape: _Cluster
    }
  }
};
