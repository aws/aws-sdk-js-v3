import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRobotOutput: _Structure_ = {
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
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    greengrassGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    architecture: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagMap
    }
  }
};
