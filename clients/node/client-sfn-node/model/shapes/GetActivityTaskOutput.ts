import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetActivityTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    input: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
