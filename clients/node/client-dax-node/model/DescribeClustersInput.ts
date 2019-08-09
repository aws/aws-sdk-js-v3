import { _ClusterNameList } from "./_ClusterNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClustersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterNames: {
      shape: _ClusterNameList
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
