import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventSubscription: _Structure_ = {
  type: "structure",
  required: ["event", "subscribedAt"],
  members: {
    event: {
      shape: {
        type: "string"
      }
    },
    subscribedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
