import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThrottleSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    burstLimit: {
      shape: {
        type: "integer"
      }
    },
    rateLimit: {
      shape: {
        type: "float"
      }
    }
  }
};
