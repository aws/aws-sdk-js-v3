import { _PerformanceMetrics } from "./_PerformanceMetrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Evaluation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EvaluationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MLModelId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EvaluationDataSourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputDataLocationS3: {
      shape: {
        type: "string"
      }
    },
    CreatedByIamUser: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    PerformanceMetrics: {
      shape: _PerformanceMetrics
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    ComputeTime: {
      shape: {
        type: "integer"
      }
    },
    FinishedAt: {
      shape: {
        type: "timestamp"
      }
    },
    StartedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
