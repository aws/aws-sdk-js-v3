import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointId: {
      shape: {
        type: "string"
      }
    },
    Weight: {
      shape: {
        type: "integer"
      }
    },
    HealthState: {
      shape: {
        type: "string"
      }
    },
    HealthReason: {
      shape: {
        type: "string"
      }
    }
  }
};
