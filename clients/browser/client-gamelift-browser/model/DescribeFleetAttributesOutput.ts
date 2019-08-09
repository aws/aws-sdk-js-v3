import { _FleetAttributesList } from "./_FleetAttributesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetAttributes: {
      shape: _FleetAttributesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
