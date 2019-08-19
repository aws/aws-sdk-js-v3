import { _ContainerDefinitions } from "./_ContainerDefinitions";
import { _VolumeList } from "./_VolumeList";
import { _TaskDefinitionPlacementConstraints } from "./_TaskDefinitionPlacementConstraints";
import { _CompatibilityList } from "./_CompatibilityList";
import { _Tags } from "./_Tags";
import { _ProxyConfiguration } from "./_ProxyConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterTaskDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["family", "containerDefinitions"],
  members: {
    family: {
      shape: {
        type: "string"
      }
    },
    taskRoleArn: {
      shape: {
        type: "string"
      }
    },
    executionRoleArn: {
      shape: {
        type: "string"
      }
    },
    networkMode: {
      shape: {
        type: "string"
      }
    },
    containerDefinitions: {
      shape: _ContainerDefinitions
    },
    volumes: {
      shape: _VolumeList
    },
    placementConstraints: {
      shape: _TaskDefinitionPlacementConstraints
    },
    requiresCompatibilities: {
      shape: _CompatibilityList
    },
    cpu: {
      shape: {
        type: "string"
      }
    },
    memory: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    },
    pidMode: {
      shape: {
        type: "string"
      }
    },
    ipcMode: {
      shape: {
        type: "string"
      }
    },
    proxyConfiguration: {
      shape: _ProxyConfiguration
    }
  }
};
