import { _DatapointValueMap } from "./_DatapointValueMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Datapoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    SampleCount: {
      shape: {
        type: "float"
      }
    },
    Average: {
      shape: {
        type: "float"
      }
    },
    Sum: {
      shape: {
        type: "float"
      }
    },
    Minimum: {
      shape: {
        type: "float"
      }
    },
    Maximum: {
      shape: {
        type: "float"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    },
    ExtendedStatistics: {
      shape: _DatapointValueMap
    }
  }
};
