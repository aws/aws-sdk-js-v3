import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBClusterEndpointInput: _Structure_ = {
  type: "structure",
  required: [
    "DBClusterIdentifier",
    "DBClusterEndpointIdentifier",
    "EndpointType"
  ],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterEndpointIdentifier: {
      shape: {
        type: "string"
      }
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    StaticMembers: {
      shape: _StringList
    },
    ExcludedMembers: {
      shape: _StringList
    }
  }
};
