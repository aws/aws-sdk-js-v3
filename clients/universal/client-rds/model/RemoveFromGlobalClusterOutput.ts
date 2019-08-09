import { _GlobalCluster } from "./_GlobalCluster";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveFromGlobalClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalCluster: {
      shape: _GlobalCluster
    }
  }
};
