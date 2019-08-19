import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsToResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN", "Tags"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
