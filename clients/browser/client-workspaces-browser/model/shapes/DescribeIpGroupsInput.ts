import { _IpGroupIdList } from "./_IpGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIpGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupIds: {
      shape: _IpGroupIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
