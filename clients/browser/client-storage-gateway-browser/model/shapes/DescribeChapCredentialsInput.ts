import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeChapCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["TargetARN"],
  members: {
    TargetARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
