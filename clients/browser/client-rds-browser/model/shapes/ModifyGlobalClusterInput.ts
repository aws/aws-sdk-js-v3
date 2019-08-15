import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyGlobalClusterInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    NewGlobalClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    }
  }
};
