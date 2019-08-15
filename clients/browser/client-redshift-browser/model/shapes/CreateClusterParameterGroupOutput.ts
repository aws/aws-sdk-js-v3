import { _ClusterParameterGroup } from "./_ClusterParameterGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterParameterGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterParameterGroup: {
      shape: _ClusterParameterGroup
    }
  }
};
