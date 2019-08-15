import { _DBSubnetGroups } from "./_DBSubnetGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBSubnetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroups: {
      shape: _DBSubnetGroups
    }
  }
};
