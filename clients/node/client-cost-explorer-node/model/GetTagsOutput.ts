import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTagsOutput: _Structure_ = {
  type: "structure",
  required: ["Tags", "ReturnSize", "TotalSize"],
  members: {
    NextPageToken: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    ReturnSize: {
      shape: {
        type: "integer"
      }
    },
    TotalSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
