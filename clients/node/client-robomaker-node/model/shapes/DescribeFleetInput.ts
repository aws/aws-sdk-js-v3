import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetInput: _Structure_ = {
  type: "structure",
  required: ["fleet"],
  members: {
    fleet: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
