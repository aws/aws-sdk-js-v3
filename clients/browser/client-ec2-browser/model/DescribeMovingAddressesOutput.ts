import { _MovingAddressStatusSet } from "./_MovingAddressStatusSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMovingAddressesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MovingAddressStatuses: {
      shape: _MovingAddressStatusSet,
      locationName: "movingAddressStatusSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
