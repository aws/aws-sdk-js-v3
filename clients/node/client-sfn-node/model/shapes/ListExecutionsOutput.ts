import { _ExecutionList } from "./_ExecutionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListExecutionsOutput: _Structure_ = {
  type: "structure",
  required: ["executions"],
  members: {
    executions: {
      shape: _ExecutionList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
