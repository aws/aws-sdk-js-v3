import { _DirectoryConfig } from "./_DirectoryConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDirectoryConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryConfig: {
      shape: _DirectoryConfig
    }
  }
};
