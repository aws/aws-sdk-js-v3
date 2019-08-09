import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
