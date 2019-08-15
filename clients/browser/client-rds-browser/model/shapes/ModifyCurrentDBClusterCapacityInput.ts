import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyCurrentDBClusterCapacityInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    Capacity: {
      shape: {
        type: "integer"
      }
    },
    SecondsBeforeTimeout: {
      shape: {
        type: "integer"
      }
    },
    TimeoutAction: {
      shape: {
        type: "string"
      }
    }
  }
};
