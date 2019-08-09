import { _EC2SecurityGroupList } from "./_EC2SecurityGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheSecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OwnerId: {
      shape: {
        type: "string"
      }
    },
    CacheSecurityGroupName: {
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
    }
  }
};
