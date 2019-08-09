import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEmailIdentityFeedbackAttributesInput: _Structure_ = {
  type: "structure",
  required: ["EmailIdentity"],
  members: {
    EmailIdentity: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "EmailIdentity"
    },
    EmailForwardingEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
