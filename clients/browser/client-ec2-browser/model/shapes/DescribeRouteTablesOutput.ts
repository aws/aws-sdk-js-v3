import { _RouteTableList } from "./_RouteTableList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRouteTablesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RouteTables: {
      shape: _RouteTableList,
      locationName: "routeTableSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
