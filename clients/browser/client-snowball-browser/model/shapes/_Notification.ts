import { _JobStateList } from "./_JobStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Notification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnsTopicARN: {
      shape: {
        type: "string"
      }
    },
    JobStatesToNotify: {
      shape: _JobStateList
    },
    NotifyAll: {
      shape: {
        type: "boolean"
      }
    }
  }
};
