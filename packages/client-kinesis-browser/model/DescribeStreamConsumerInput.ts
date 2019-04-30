import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStreamConsumerInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConsumerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConsumerARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
