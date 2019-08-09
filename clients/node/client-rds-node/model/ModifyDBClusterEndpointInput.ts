import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBClusterEndpointInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterEndpointIdentifier"],
  members: {
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
