import { _ValueStringList } from "./_ValueStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnTargetNetworksInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    AssociationIds: {
      shape: _ValueStringList
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
