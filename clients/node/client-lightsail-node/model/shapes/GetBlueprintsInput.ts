import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBlueprintsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    includeInactive: {
      shape: {
        type: "boolean"
      }
    },
    pageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
