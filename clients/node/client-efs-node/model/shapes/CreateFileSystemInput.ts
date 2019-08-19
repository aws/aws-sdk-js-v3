import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFileSystemInput: _Structure_ = {
  type: "structure",
  required: ["CreationToken"],
  members: {
    CreationToken: {
      shape: {
        type: "string",
        min: 1
      }
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
