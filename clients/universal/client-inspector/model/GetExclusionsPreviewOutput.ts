import { _ExclusionPreviewList } from "./_ExclusionPreviewList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExclusionsPreviewOutput: _Structure_ = {
  type: "structure",
  required: ["previewStatus"],
  members: {
    previewStatus: {
      shape: {
        type: "string"
      }
    },
    exclusionPreviews: {
      shape: _ExclusionPreviewList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
