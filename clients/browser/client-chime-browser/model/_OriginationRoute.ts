import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginationRoute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Host: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    Priority: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Weight: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
