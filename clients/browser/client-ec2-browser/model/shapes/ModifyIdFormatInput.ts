import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyIdFormatInput: _Structure_ = {
  type: "structure",
  required: ["Resource", "UseLongIds"],
  members: {
    Resource: {
      shape: {
        type: "string"
      }
    },
    UseLongIds: {
      shape: {
        type: "boolean"
      }
    }
  }
};
