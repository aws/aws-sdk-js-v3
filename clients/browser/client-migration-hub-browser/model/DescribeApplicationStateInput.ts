import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationStateInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
