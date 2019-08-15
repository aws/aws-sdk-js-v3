import { _EC2SecurityGroupList } from "./_EC2SecurityGroupList";
import { _IPRangeList } from "./_IPRangeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBSecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OwnerId: {
      shape: {
        type: "string"
      }
    },
    DBSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    DBSecurityGroupDescription: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
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
    DBSecurityGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
