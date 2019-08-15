import { _SubnetList } from "./_SubnetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubnetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Subnets: {
      shape: _SubnetList,
      locationName: "subnetSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
