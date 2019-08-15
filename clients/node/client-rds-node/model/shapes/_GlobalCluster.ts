import { _GlobalClusterMemberList } from "./_GlobalClusterMemberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GlobalCluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    GlobalClusterResourceId: {
      shape: {
        type: "string"
      }
    },
    GlobalClusterArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    DatabaseName: {
      shape: {
        type: "string"
      }
    },
    StorageEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    },
    GlobalClusterMembers: {
      shape: _GlobalClusterMemberList
    }
  }
};
