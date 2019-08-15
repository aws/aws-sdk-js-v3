import { _stringList } from "./_stringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "tagKeys"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tagKeys: {
      shape: _stringList
    }
  }
};
