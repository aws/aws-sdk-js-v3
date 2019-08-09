import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LocationListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LocationArn: {
      shape: {
        type: "string"
      }
    },
    LocationUri: {
      shape: {
        type: "string"
      }
    }
  }
};
