import { ___listOfClusterInfo } from "./___listOfClusterInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterInfoList: {
      shape: ___listOfClusterInfo,
      locationName: "clusterInfoList"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
