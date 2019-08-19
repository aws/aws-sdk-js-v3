import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRobotInput: _Structure_ = {
  type: "structure",
  required: ["robot"],
  members: {
    robot: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
