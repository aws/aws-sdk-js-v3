import { _FilterList } from "./_FilterList";
import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNatGatewaysInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _FilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NatGatewayIds: {
      shape: _ValueStringList,
      locationName: "NatGatewayId"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
