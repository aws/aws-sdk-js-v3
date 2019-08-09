import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDBClusterInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
