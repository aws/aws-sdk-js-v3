import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobQueueOutput: _Structure_ = {
  type: "structure",
  required: ["jobQueueName", "jobQueueArn"],
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
