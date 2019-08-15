import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGlobalClusterInput: _Structure_ = {
  type: "structure",
  required: ["GlobalClusterIdentifier"],
  members: {
    GlobalClusterIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
