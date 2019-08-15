import { _SubnetIds } from "./_SubnetIds";
import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { _Tags } from "./_Tags";
import { _CreateFileSystemWindowsConfiguration } from "./_CreateFileSystemWindowsConfiguration";
import { _CreateFileSystemLustreConfiguration } from "./_CreateFileSystemLustreConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFileSystemInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemType", "StorageCapacity", "SubnetIds"],
  members: {
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FileSystemType: {
      shape: {
        type: "string"
      }
    },
    StorageCapacity: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIds
    },
    Tags: {
      shape: _Tags
    },
    KmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WindowsConfiguration: {
      shape: _CreateFileSystemWindowsConfiguration
    },
    LustreConfiguration: {
      shape: _CreateFileSystemLustreConfiguration
    }
  }
};
