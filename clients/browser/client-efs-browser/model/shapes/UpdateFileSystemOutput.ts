import { _FileSystemSize } from "./_FileSystemSize";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFileSystemOutput: _Structure_ = {
  type: "structure",
  required: [
    "OwnerId",
    "CreationToken",
    "FileSystemId",
    "CreationTime",
    "LifeCycleState",
    "NumberOfMountTargets",
    "SizeInBytes",
    "PerformanceMode",
    "Tags"
  ],
  members: {
    OwnerId: {
      shape: {
        type: "string"
      }
    },
    CreationToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FileSystemId: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LifeCycleState: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    NumberOfMountTargets: {
      shape: {
        type: "integer"
      }
    },
    SizeInBytes: {
      shape: _FileSystemSize
    },
    PerformanceMode: {
      shape: {
        type: "string"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ThroughputMode: {
      shape: {
        type: "string"
      }
    },
    ProvisionedThroughputInMibps: {
      shape: {
        type: "float",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
