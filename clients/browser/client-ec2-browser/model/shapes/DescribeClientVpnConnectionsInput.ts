import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnConnectionsInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    NextToken: {
      shape: {
        type: "string"
      }
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
