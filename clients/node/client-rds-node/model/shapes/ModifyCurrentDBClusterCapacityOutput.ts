import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyCurrentDBClusterCapacityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    PendingCapacity: {
      shape: {
        type: "integer"
      }
    },
    CurrentCapacity: {
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
