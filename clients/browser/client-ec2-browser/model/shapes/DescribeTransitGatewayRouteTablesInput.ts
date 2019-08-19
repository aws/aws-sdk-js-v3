import { _TransitGatewayRouteTableIdStringList } from "./_TransitGatewayRouteTableIdStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransitGatewayRouteTablesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayRouteTableIds: {
      shape: _TransitGatewayRouteTableIdStringList
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
