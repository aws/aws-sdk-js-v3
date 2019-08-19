import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventBusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Policy: {
      shape: {
        type: "string"
      }
    }
  }
};
