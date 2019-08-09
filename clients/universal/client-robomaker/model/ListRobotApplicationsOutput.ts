import { _RobotApplicationSummaries } from "./_RobotApplicationSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRobotApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    robotApplicationSummaries: {
      shape: _RobotApplicationSummaries
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
