import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsToResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
