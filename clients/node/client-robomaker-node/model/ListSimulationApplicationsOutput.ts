import { _SimulationApplicationSummaries } from "./_SimulationApplicationSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSimulationApplicationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    simulationApplicationSummaries: {
      shape: _SimulationApplicationSummaries
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
