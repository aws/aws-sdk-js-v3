import { _Cluster } from "./_Cluster";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cluster: {
      shape: _Cluster
    }
  }
};
