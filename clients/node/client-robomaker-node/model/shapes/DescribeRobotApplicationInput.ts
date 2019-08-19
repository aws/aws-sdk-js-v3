import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRobotApplicationInput: _Structure_ = {
  type: "structure",
  required: ["application"],
  members: {
    application: {
      shape: {
        type: "string",
        min: 1
      }
    },
    applicationVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
