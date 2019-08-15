import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGlobalClusterInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SourceDBClusterIdentifier: {
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
    DeletionProtection: {
      shape: {
        type: "boolean"
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
    }
  }
};
