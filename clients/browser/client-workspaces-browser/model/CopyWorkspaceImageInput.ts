import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyWorkspaceImageInput: _Structure_ = {
  type: "structure",
  required: ["Name", "SourceImageId", "SourceRegion"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SourceImageId: {
      shape: {
        type: "string"
      }
    },
    SourceRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
