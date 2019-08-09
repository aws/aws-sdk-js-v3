import { _ShareTarget } from "./_ShareTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ShareDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "ShareTarget", "ShareMethod"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    ShareNotes: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    ShareTarget: {
      shape: _ShareTarget
    },
    ShareMethod: {
      shape: {
        type: "string"
      }
    }
  }
};
