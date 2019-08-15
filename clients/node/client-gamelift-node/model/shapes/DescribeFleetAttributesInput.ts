import { _FleetIdList } from "./_FleetIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetAttributesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetIds: {
      shape: _FleetIdList
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
