import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEmailIdentityDkimAttributesInput: _Structure_ = {
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
    SigningEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
