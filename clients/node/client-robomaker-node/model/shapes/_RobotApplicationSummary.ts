import { _RobotSoftwareSuite } from "./_RobotSoftwareSuite";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RobotApplicationSummary: _Structure_ = {
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
    version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    robotSoftwareSuite: {
      shape: _RobotSoftwareSuite
    }
  }
};
