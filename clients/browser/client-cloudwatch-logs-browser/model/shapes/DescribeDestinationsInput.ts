import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDestinationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationNamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
