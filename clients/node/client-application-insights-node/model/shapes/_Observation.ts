import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Observation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    SourceARN: {
      shape: {
        type: "string"
      }
    },
    LogGroup: {
      shape: {
        type: "string"
      }
    },
    LineTime: {
      shape: {
        type: "timestamp"
      }
    },
    LogText: {
      shape: {
        type: "string"
      }
    },
    LogFilter: {
      shape: {
        type: "string"
      }
    },
    MetricNamespace: {
      shape: {
        type: "string"
      }
    },
    MetricName: {
      shape: {
        type: "string"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "float"
      }
    }
  }
};
