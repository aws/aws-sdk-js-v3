import { _NodeGroupUpdateStatusList } from "./_NodeGroupUpdateStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
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
    ServiceUpdateSeverity: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateStatus: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateRecommendedApplyByDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceUpdateType: {
      shape: {
        type: "string"
      }
    },
    UpdateActionAvailableDate: {
      shape: {
        type: "timestamp"
      }
    },
    UpdateActionStatus: {
      shape: {
        type: "string"
      }
    },
    NodesUpdated: {
      shape: {
        type: "string"
      }
    },
    UpdateActionStatusModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    SlaMet: {
      shape: {
        type: "string"
      }
    },
    NodeGroupUpdateStatus: {
      shape: _NodeGroupUpdateStatusList
    },
    EstimatedUpdateTime: {
      shape: {
        type: "string"
      }
    }
  }
};
