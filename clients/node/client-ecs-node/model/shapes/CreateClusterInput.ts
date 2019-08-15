import { _Tags } from "./_Tags";
import { _ClusterSettings } from "./_ClusterSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clusterName: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    },
    settings: {
      shape: _ClusterSettings
    }
  }
};
