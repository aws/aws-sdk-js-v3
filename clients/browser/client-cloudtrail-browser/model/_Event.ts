import { _ResourceList } from "./_ResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventId: {
      shape: {
        type: "string"
      }
    },
    EventName: {
      shape: {
        type: "string"
      }
    },
    ReadOnly: {
      shape: {
        type: "string"
      }
    },
    AccessKeyId: {
      shape: {
        type: "string"
      }
    },
    EventTime: {
      shape: {
        type: "timestamp"
      }
    },
    EventSource: {
      shape: {
        type: "string"
      }
    },
    Username: {
      shape: {
        type: "string"
      }
    },
    Resources: {
      shape: _ResourceList
    },
    CloudTrailEvent: {
      shape: {
        type: "string"
      }
    }
  }
};
