import { _SecurityGroupList } from "./_SecurityGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroups: {
      shape: _SecurityGroupList,
      locationName: "securityGroupInfo"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
