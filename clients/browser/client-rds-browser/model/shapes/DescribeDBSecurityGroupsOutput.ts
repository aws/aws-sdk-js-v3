import { _DBSecurityGroups } from "./_DBSecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBSecurityGroups: {
      shape: _DBSecurityGroups
    }
  }
};
