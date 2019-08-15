import { _ClusterParameterStatusList } from "./_ClusterParameterStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterParameterGroupStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterApplyStatus: {
      shape: {
        type: "string"
      }
    },
    ClusterParameterStatusList: {
      shape: _ClusterParameterStatusList
    }
  }
};
