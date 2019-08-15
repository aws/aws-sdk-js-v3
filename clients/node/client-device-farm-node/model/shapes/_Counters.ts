import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Counters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    total: {
      shape: {
        type: "integer"
      }
    },
    passed: {
      shape: {
        type: "integer"
      }
    },
    failed: {
      shape: {
        type: "integer"
      }
    },
    warned: {
      shape: {
        type: "integer"
      }
    },
    errored: {
      shape: {
        type: "integer"
      }
    },
    stopped: {
      shape: {
        type: "integer"
      }
    },
    skipped: {
      shape: {
        type: "integer"
      }
    }
  }
};
