import { _SimulationJobs } from "./_SimulationJobs";
import { _Arns } from "./_Arns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDescribeSimulationJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobs: {
      shape: _SimulationJobs
    },
    unprocessedJobs: {
      shape: _Arns
    }
  }
};
