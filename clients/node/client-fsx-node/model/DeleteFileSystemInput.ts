import { _DeleteFileSystemWindowsConfiguration } from "./_DeleteFileSystemWindowsConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFileSystemInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId"],
  members: {
    FileSystemId: {
      shape: {
        type: "string",
        min: 11
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WindowsConfiguration: {
      shape: _DeleteFileSystemWindowsConfiguration
    }
  }
};
