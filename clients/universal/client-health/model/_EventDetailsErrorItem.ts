import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventDetailsErrorItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventArn: {
      shape: {
        type: "string"
      }
    },
    errorName: {
      shape: {
        type: "string"
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
