import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogSubscription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    LogGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubscriptionCreatedDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
