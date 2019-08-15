import { _VpcList } from "./_VpcList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Vpcs: {
      shape: _VpcList,
      locationName: "vpcSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
