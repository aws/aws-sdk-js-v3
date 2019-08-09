import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    }
  }
};
