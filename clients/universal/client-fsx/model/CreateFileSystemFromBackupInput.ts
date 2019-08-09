import { _SubnetIds } from "./_SubnetIds";
import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { _Tags } from "./_Tags";
import { _CreateFileSystemWindowsConfiguration } from "./_CreateFileSystemWindowsConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFileSystemFromBackupInput: _Structure_ = {
  type: "structure",
  required: ["BackupId", "SubnetIds"],
  members: {
    BackupId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
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
    WindowsConfiguration: {
      shape: _CreateFileSystemWindowsConfiguration
    }
  }
};
