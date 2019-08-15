import { _SubnetGroupList } from "./_SubnetGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubnetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    SubnetGroups: {
      shape: _SubnetGroupList
    }
  }
};
