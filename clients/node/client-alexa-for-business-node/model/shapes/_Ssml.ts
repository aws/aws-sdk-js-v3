import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ssml: _Structure_ = {
  type: "structure",
  required: ["Locale", "Value"],
  members: {
    Locale: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
