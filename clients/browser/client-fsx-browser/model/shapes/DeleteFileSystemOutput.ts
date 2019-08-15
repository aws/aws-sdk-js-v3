import { _DeleteFileSystemWindowsResponse } from "./_DeleteFileSystemWindowsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFileSystemOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileSystemId: {
      shape: {
        type: "string",
        min: 11
      }
    },
    Lifecycle: {
      shape: {
        type: "string"
      }
    },
    WindowsResponse: {
      shape: _DeleteFileSystemWindowsResponse
    }
  }
};
