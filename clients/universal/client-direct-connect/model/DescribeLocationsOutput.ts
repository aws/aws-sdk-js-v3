import { _LocationList } from "./_LocationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLocationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    locations: {
      shape: _LocationList
    }
  }
};
