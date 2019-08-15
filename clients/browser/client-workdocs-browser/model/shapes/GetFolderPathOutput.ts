import { _ResourcePath } from "./_ResourcePath";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFolderPathOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: _ResourcePath
    }
  }
};
