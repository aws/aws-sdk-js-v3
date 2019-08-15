import { _RetentionPeriod } from "./_RetentionPeriod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateChannelOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    channelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    channelArn: {
      shape: {
        type: "string"
      }
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    }
  }
};
