import { _NatGatewayList } from "./_NatGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNatGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NatGateways: {
      shape: _NatGatewayList,
      locationName: "natGatewaySet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
