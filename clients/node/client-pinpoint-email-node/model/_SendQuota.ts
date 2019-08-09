import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SendQuota: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Max24HourSend: {
      shape: {
        type: "float"
      }
    },
    MaxSendRate: {
      shape: {
        type: "float"
      }
    },
    SentLast24Hours: {
      shape: {
        type: "float"
      }
    }
  }
};
