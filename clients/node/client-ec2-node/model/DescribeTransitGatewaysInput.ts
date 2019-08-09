import { _TransitGatewayIdStringList } from "./_TransitGatewayIdStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransitGatewaysInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayIds: {
      shape: _TransitGatewayIdStringList
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
