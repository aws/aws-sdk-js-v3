import { _NetworkAclList } from "./_NetworkAclList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNetworkAclsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkAcls: {
      shape: _NetworkAclList,
      locationName: "networkAclSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
