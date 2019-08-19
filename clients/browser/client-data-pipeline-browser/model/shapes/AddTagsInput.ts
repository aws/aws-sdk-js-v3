import { _tagList } from "./_tagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "tags"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _tagList
    }
  }
};
