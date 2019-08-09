import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableDirectoryOutput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      }
    }
  }
};
