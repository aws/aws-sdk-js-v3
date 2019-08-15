import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContentTypeProfile: _Structure_ = {
  type: "structure",
  required: ["Format", "ContentType"],
  members: {
    Format: {
      shape: {
        type: "string"
      }
    },
    ProfileId: {
      shape: {
        type: "string"
      }
    },
    ContentType: {
      shape: {
        type: "string"
      }
    }
  }
};
