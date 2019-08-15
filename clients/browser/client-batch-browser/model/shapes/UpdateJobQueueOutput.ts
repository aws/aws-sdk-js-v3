import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobQueueOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobQueueName: {
      shape: {
        type: "string"
      }
    },
    jobQueueArn: {
      shape: {
        type: "string"
      }
    }
  }
};
