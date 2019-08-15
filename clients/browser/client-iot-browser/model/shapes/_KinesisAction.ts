import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisAction: _Structure_ = {
  type: "structure",
  required: ["roleArn", "streamName"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    streamName: {
      shape: {
        type: "string"
      }
    },
    partitionKey: {
      shape: {
        type: "string"
      }
    }
  }
};
