import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetUtilization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    ActiveServerProcessCount: {
      shape: {
        type: "integer"
      }
    },
    ActiveGameSessionCount: {
      shape: {
        type: "integer"
      }
    },
    CurrentPlayerSessionCount: {
      shape: {
        type: "integer"
      }
    },
    MaximumPlayerSessionCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
