import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Latency: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    P999: {
      shape: {
        type: "float"
      }
    },
    P99: {
      shape: {
        type: "float"
      }
    },
    P95: {
      shape: {
        type: "float"
      }
    },
    P90: {
      shape: {
        type: "float"
      }
    },
    P85: {
      shape: {
        type: "float"
      }
    },
    P75: {
      shape: {
        type: "float"
      }
    },
    P50: {
      shape: {
        type: "float"
      }
    },
    P10: {
      shape: {
        type: "float"
      }
    }
  }
};
