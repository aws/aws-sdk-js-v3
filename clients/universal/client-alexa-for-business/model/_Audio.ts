import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Audio: _Structure_ = {
  type: "structure",
  required: ["Locale", "Location"],
  members: {
    Locale: {
      shape: {
        type: "string"
      }
    },
    Location: {
      shape: {
        type: "string"
      }
    }
  }
};
