import { _Robots } from "./_Robots";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    robots: {
      shape: _Robots
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastDeploymentStatus: {
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
    },
    tags: {
      shape: _TagMap
    }
  }
};
