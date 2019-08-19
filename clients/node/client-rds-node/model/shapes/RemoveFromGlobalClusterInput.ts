import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveFromGlobalClusterInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DbClusterIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
