import { _SimulationApplicationNames } from "./_SimulationApplicationNames";
import { _RobotApplicationNames } from "./_RobotApplicationNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SimulationJobSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
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
    name: {
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
    simulationApplicationNames: {
      shape: _SimulationApplicationNames
    },
    robotApplicationNames: {
      shape: _RobotApplicationNames
    }
  }
};
