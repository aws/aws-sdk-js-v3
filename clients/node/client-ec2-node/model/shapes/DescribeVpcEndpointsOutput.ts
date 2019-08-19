import { _VpcEndpointSet } from "./_VpcEndpointSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcEndpoints: {
      shape: _VpcEndpointSet,
      locationName: "vpcEndpointSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
