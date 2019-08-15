import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventSource: {
      shape: {
        type: "string"
      }
    },
    MessageType: {
      shape: {
        type: "string"
      }
    },
    MaximumExecutionFrequency: {
      shape: {
        type: "string"
      }
    }
  }
};
