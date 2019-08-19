import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBClusterEndpointInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterEndpointIdentifier"],
  members: {
    DBClusterEndpointIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
