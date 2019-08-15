import { _TaskOverride } from "./_TaskOverride";
import { _StringList } from "./_StringList";
import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartTaskInput: _Structure_ = {
  type: "structure",
  required: ["taskDefinition", "containerInstances"],
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
    containerInstances: {
      shape: _StringList
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
