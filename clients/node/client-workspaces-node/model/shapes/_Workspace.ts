import { _WorkspaceProperties } from "./_WorkspaceProperties";
import { _ModificationStateList } from "./_ModificationStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Workspace: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkspaceId: {
      shape: {
        type: "string"
      }
    },
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    BundleId: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ComputerName: {
      shape: {
        type: "string"
      }
    },
    VolumeEncryptionKey: {
      shape: {
        type: "string"
      }
    },
    UserVolumeEncryptionEnabled: {
      shape: {
        type: "boolean"
      }
    },
    RootVolumeEncryptionEnabled: {
      shape: {
        type: "boolean"
      }
    },
    WorkspaceProperties: {
      shape: _WorkspaceProperties
    },
    ModificationStates: {
      shape: _ModificationStateList
    }
  }
};
