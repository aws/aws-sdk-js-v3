import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceHealthSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NoData: {
      shape: {
        type: "integer"
      }
    },
    Unknown: {
      shape: {
        type: "integer"
      }
    },
    Pending: {
      shape: {
        type: "integer"
      }
    },
    Ok: {
      shape: {
        type: "integer"
      }
    },
    Info: {
      shape: {
        type: "integer"
      }
    },
    Warning: {
      shape: {
        type: "integer"
      }
    },
    Degraded: {
      shape: {
        type: "integer"
      }
    },
    Severe: {
      shape: {
        type: "integer"
      }
    }
  }
};
