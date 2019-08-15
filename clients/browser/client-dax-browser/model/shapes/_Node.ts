import { _Endpoint } from "./_Endpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Node: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeId: {
      shape: {
        type: "string"
      }
    },
    Endpoint: {
      shape: _Endpoint
    },
    NodeCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    NodeStatus: {
      shape: {
        type: "string"
      }
    },
    ParameterGroupStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
