import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBClusterEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterEndpointIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterEndpointResourceIdentifier: {
      shape: {
        type: "string"
      }
    },
    Endpoint: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    CustomEndpointType: {
      shape: {
        type: "string"
      }
    },
    StaticMembers: {
      shape: _StringList
    },
    ExcludedMembers: {
      shape: _StringList
    },
    DBClusterEndpointArn: {
      shape: {
        type: "string"
      }
    }
  }
};
