import { _ValueStringList } from "./_ValueStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnEndpointsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpointIds: {
      shape: _ValueStringList,
      locationName: "ClientVpnEndpointId"
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
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
