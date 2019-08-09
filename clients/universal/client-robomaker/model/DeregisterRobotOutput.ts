import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterRobotOutput: _Structure_ = {
  type: "structure",
  required: [],
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
