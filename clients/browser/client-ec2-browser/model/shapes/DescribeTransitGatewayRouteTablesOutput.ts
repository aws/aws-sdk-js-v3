import { _TransitGatewayRouteTableList } from "./_TransitGatewayRouteTableList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransitGatewayRouteTablesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayRouteTables: {
      shape: _TransitGatewayRouteTableList,
      locationName: "transitGatewayRouteTables"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
