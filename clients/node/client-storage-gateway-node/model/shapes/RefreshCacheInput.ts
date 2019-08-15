import { _FolderList } from "./_FolderList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RefreshCacheInput: _Structure_ = {
  type: "structure",
  required: ["FileShareARN"],
  members: {
    FileShareARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    FolderList: {
      shape: _FolderList
    },
    Recursive: {
      shape: {
        type: "boolean"
      }
    }
  }
};
