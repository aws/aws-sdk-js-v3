import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN"],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    ResourceARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
