import { _TaskOverride } from "./_TaskOverride";
import { _PlacementConstraints } from "./_PlacementConstraints";
import { _PlacementStrategies } from "./_PlacementStrategies";
import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunTaskInput: _Structure_ = {
  type: "structure",
  required: ["taskDefinition"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    taskDefinition: {
      shape: {
        type: "string"
      }
    },
    overrides: {
      shape: _TaskOverride
    },
    count: {
      shape: {
        type: "integer"
      }
    },
    startedBy: {
      shape: {
        type: "string"
      }
    },
    group: {
      shape: {
        type: "string"
      }
    },
    placementConstraints: {
      shape: _PlacementConstraints
    },
    placementStrategy: {
      shape: _PlacementStrategies
    },
    launchType: {
      shape: {
        type: "string"
      }
    },
    platformVersion: {
      shape: {
        type: "string"
      }
    },
    networkConfiguration: {
      shape: _NetworkConfiguration
    },
    tags: {
      shape: _Tags
    },
    enableECSManagedTags: {
      shape: {
        type: "boolean"
      }
    },
    propagateTags: {
      shape: {
        type: "string"
      }
    }
  }
};
