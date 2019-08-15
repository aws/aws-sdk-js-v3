import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchTransitGatewayRoutesInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayRouteTableId", "Filters"],
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
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
