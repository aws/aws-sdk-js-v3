import { _VpcEndpointConnectionSet } from "./_VpcEndpointConnectionSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointConnectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcEndpointConnections: {
      shape: _VpcEndpointConnectionSet,
      locationName: "vpcEndpointConnectionSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
