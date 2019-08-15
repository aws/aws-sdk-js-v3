import { _Tasks } from "./_Tasks";
import { _Failures } from "./_Failures";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tasks: {
      shape: _Tasks
    },
    failures: {
      shape: _Failures
    }
  }
};
