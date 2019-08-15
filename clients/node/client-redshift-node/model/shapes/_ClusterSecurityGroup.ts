import { _EC2SecurityGroupList } from "./_EC2SecurityGroupList";
import { _IPRangeList } from "./_IPRangeList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterSecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    EC2SecurityGroups: {
      shape: _EC2SecurityGroupList
    },
    IPRanges: {
      shape: _IPRangeList
    },
    Tags: {
      shape: _TagList
    }
  }
};
