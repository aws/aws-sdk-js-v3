import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterRobotInput: _Structure_ = {
  type: "structure",
  required: ["fleet", "robot"],
  members: {
    fleet: {
      shape: {
        type: "string",
        min: 1
      }
    },
    robot: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
