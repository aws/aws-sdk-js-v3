import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddSourceIdentifierToSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["SubscriptionName", "SourceIdentifier"],
  members: {
    SubscriptionName: {
      shape: {
        type: "string"
      }
    },
    SourceIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
