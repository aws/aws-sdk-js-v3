import { _TransitGatewayList } from "./_TransitGatewayList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransitGatewaysOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGateways: {
      shape: _TransitGatewayList,
      locationName: "transitGatewaySet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
