import { _TaskExecutionList } from "./_TaskExecutionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTaskExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TaskExecutions: {
      shape: _TaskExecutionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
