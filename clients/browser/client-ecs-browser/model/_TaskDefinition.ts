import { _ContainerDefinitions } from "./_ContainerDefinitions";
import { _VolumeList } from "./_VolumeList";
import { _RequiresAttributes } from "./_RequiresAttributes";
import { _TaskDefinitionPlacementConstraints } from "./_TaskDefinitionPlacementConstraints";
import { _CompatibilityList } from "./_CompatibilityList";
import { _ProxyConfiguration } from "./_ProxyConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskDefinition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskDefinitionArn: {
      shape: {
        type: "string"
      }
    },
    containerDefinitions: {
      shape: _ContainerDefinitions
    },
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
    revision: {
      shape: {
        type: "integer"
      }
    },
    volumes: {
      shape: _VolumeList
    },
    status: {
      shape: {
        type: "string"
      }
    },
    requiresAttributes: {
      shape: _RequiresAttributes
    },
    placementConstraints: {
      shape: _TaskDefinitionPlacementConstraints
    },
    compatibilities: {
      shape: _CompatibilityList
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
