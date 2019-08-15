import { _Destinations } from "./_Destinations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDestinationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    destinations: {
      shape: _Destinations
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
