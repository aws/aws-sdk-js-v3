import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdFormat: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Deadline: {
      shape: {
        type: "timestamp"
      },
      locationName: "deadline"
    },
    Resource: {
      shape: {
        type: "string"
      },
      locationName: "resource"
    },
    UseLongIds: {
      shape: {
        type: "boolean"
      },
      locationName: "useLongIds"
    }
  }
};
