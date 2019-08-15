import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeResourceServerInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Identifier"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Identifier: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
