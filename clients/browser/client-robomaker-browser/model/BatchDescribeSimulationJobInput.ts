import { _Arns } from "./_Arns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDescribeSimulationJobInput: _Structure_ = {
  type: "structure",
  required: ["jobs"],
  members: {
    jobs: {
      shape: _Arns
    }
  }
};
