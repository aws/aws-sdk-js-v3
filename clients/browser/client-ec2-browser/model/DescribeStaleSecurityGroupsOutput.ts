import { _StaleSecurityGroupSet } from "./_StaleSecurityGroupSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStaleSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    StaleSecurityGroupSet: {
      shape: _StaleSecurityGroupSet,
      locationName: "staleSecurityGroupSet"
    }
  }
};
