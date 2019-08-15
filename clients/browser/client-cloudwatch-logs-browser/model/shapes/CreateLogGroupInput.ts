import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLogGroupInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    kmsKeyId: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
