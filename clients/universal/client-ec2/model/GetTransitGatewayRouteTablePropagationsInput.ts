import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTransitGatewayRouteTablePropagationsInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayRouteTableId"],
  members: {
    TransitGatewayRouteTableId: {
      shape: {
        type: "string"
      }
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
