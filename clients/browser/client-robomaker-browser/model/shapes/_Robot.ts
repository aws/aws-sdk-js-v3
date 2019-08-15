import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Robot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    fleetArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    greenGrassGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    architecture: {
      shape: {
        type: "string"
      }
    },
    lastDeploymentJob: {
      shape: {
        type: "string",
        min: 1
      }
    },
    lastDeploymentTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
