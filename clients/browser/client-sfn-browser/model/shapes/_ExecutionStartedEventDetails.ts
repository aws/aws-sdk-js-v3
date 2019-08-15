import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExecutionStartedEventDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    input: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
