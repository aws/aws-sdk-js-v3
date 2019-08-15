import { _EcsClusters } from "./_EcsClusters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEcsClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EcsClusters: {
      shape: _EcsClusters
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
