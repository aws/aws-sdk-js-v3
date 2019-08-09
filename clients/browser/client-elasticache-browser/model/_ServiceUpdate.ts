import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceUpdateName: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateReleaseDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceUpdateEndDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceUpdateSeverity: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateRecommendedApplyByDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceUpdateStatus: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateDescription: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateType: {
      shape: {
        type: "string"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    AutoUpdateAfterRecommendedApplyByDate: {
      shape: {
        type: "boolean"
      }
    },
    EstimatedUpdateTime: {
      shape: {
        type: "string"
      }
    }
  }
};
