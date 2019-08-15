import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityFeedbackForwardingEnabledInput: _Structure_ = {
  type: "structure",
  required: ["Identity", "ForwardingEnabled"],
  members: {
    Identity: {
      shape: {
        type: "string"
      }
    },
    ForwardingEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
