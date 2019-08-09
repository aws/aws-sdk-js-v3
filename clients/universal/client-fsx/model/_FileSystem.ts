import { _FileSystemFailureDetails } from "./_FileSystemFailureDetails";
import { _SubnetIds } from "./_SubnetIds";
import { _NetworkInterfaceIds } from "./_NetworkInterfaceIds";
import { _Tags } from "./_Tags";
import { _WindowsFileSystemConfiguration } from "./_WindowsFileSystemConfiguration";
import { _LustreFileSystemConfiguration } from "./_LustreFileSystemConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileSystem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OwnerId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    FileSystemId: {
      shape: {
        type: "string",
        min: 11
      }
    },
    FileSystemType: {
      shape: {
        type: "string"
      }
    },
    Lifecycle: {
      shape: {
        type: "string"
      }
    },
    FailureDetails: {
      shape: _FileSystemFailureDetails
    },
    StorageCapacity: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    VpcId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    },
    NetworkInterfaceIds: {
      shape: _NetworkInterfaceIds
    },
    DNSName: {
      shape: {
        type: "string",
        min: 16
      }
    },
    KmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceARN: {
      shape: {
        type: "string",
        min: 8
      }
    },
    Tags: {
      shape: _Tags
    },
    WindowsConfiguration: {
      shape: _WindowsFileSystemConfiguration
    },
    LustreConfiguration: {
      shape: _LustreFileSystemConfiguration
    }
  }
};
