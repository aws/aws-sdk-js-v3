import { ___listOfNodeInfo } from "./___listOfNodeInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNodesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    NodeInfoList: {
      shape: ___listOfNodeInfo,
      locationName: "nodeInfoList"
    }
  }
};
