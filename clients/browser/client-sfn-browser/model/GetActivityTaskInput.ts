import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetActivityTaskInput: _Structure_ = {
  type: "structure",
  required: ["activityArn"],
  members: {
    activityArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    workerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
