import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EcsParameters: _Structure_ = {
  type: "structure",
  required: ["TaskDefinitionArn"],
  members: {
    TaskDefinitionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TaskCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    LaunchType: {
      shape: {
        type: "string"
      }
    },
    NetworkConfiguration: {
      shape: _NetworkConfiguration
    },
    PlatformVersion: {
      shape: {
        type: "string"
      }
    },
    Group: {
      shape: {
        type: "string"
      }
    }
  }
};
