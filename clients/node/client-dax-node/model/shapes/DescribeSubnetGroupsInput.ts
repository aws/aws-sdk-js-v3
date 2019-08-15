import { _SubnetGroupNameList } from "./_SubnetGroupNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubnetGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubnetGroupNames: {
      shape: _SubnetGroupNameList
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
