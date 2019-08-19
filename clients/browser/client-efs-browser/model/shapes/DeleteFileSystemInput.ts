import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFileSystemInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId"],
  members: {
    FileSystemId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FileSystemId"
    }
  }
};
