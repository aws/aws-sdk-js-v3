import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsToStreamInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "Tags"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagMap
    }
  }
};
