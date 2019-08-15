import { _UpdateFileSystemWindowsConfiguration } from "./_UpdateFileSystemWindowsConfiguration";
import { _UpdateFileSystemLustreConfiguration } from "./_UpdateFileSystemLustreConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFileSystemInput: _Structure_ = {
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
      shape: _UpdateFileSystemWindowsConfiguration
    },
    LustreConfiguration: {
      shape: _UpdateFileSystemLustreConfiguration
    }
  }
};
