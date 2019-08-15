import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EC2InstanceCounts: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DESIRED: {
      shape: {
        type: "integer"
      }
    },
    MINIMUM: {
      shape: {
        type: "integer"
      }
    },
    MAXIMUM: {
      shape: {
        type: "integer"
      }
    },
    PENDING: {
      shape: {
        type: "integer"
      }
    },
    ACTIVE: {
      shape: {
        type: "integer"
      }
    },
    IDLE: {
      shape: {
        type: "integer"
      }
    },
    TERMINATING: {
      shape: {
        type: "integer"
      }
    }
  }
};
