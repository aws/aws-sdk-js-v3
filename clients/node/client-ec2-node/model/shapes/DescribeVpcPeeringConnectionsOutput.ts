import { _VpcPeeringConnectionList } from "./_VpcPeeringConnectionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcPeeringConnectionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcPeeringConnections: {
      shape: _VpcPeeringConnectionList,
      locationName: "vpcPeeringConnectionSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
