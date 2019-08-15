import { ___listOfClusterOperationInfo } from "./___listOfClusterOperationInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClusterOperationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterOperationInfoList: {
      shape: ___listOfClusterOperationInfo,
      locationName: "clusterOperationInfoList"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
