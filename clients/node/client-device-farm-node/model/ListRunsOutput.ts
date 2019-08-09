import { _Runs } from "./_Runs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRunsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    runs: {
      shape: _Runs
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
