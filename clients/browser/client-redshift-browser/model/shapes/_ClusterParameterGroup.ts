import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterParameterGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
