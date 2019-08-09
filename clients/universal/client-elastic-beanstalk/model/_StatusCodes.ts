import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StatusCodes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status2xx: {
      shape: {
        type: "integer"
      }
    },
    Status3xx: {
      shape: {
        type: "integer"
      }
    },
    Status4xx: {
      shape: {
        type: "integer"
      }
    },
    Status5xx: {
      shape: {
        type: "integer"
      }
    }
  }
};
