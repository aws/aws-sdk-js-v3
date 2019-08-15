import { _Statistics } from "./_Statistics";
import { _Tags } from "./_Tags";
import { _ClusterSettings } from "./_ClusterSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Cluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clusterArn: {
      shape: {
        type: "string"
      }
    },
    clusterName: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    registeredContainerInstancesCount: {
      shape: {
        type: "integer"
      }
    },
    runningTasksCount: {
      shape: {
        type: "integer"
      }
    },
    pendingTasksCount: {
      shape: {
        type: "integer"
      }
    },
    activeServicesCount: {
      shape: {
        type: "integer"
      }
    },
    statistics: {
      shape: _Statistics
    },
    tags: {
      shape: _Tags
    },
    settings: {
      shape: _ClusterSettings
    }
  }
};
