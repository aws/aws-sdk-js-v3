import { _Sources } from "./_Sources";
import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRobotApplicationOutput: _Structure_ = {
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
    version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sources: {
      shape: _Sources
    },
    robotSoftwareSuite: {
      shape: _RobotSoftwareSuite
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    revisionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
