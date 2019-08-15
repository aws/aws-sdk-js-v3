import { _WorkspaceProperties } from "./_WorkspaceProperties";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkspaceRequest: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "UserName", "BundleId"],
  members: {
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
    BundleId: {
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
    Tags: {
      shape: _TagList
    }
  }
};
