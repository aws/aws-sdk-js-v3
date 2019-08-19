import { _SimulationJobSummaries } from "./_SimulationJobSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSimulationJobsOutput: _Structure_ = {
  type: "structure",
  required: ["simulationJobSummaries"],
  members: {
    simulationJobSummaries: {
      shape: _SimulationJobSummaries
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
