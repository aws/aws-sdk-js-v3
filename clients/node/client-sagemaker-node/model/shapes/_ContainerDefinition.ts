import { _EnvironmentMap } from "./_EnvironmentMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerDefinition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContainerHostname: {
      shape: {
        type: "string"
      }
    },
    Image: {
      shape: {
        type: "string"
      }
    },
    ModelDataUrl: {
      shape: {
        type: "string"
      }
    },
    Environment: {
      shape: _EnvironmentMap
    },
    ModelPackageName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
