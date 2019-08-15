import { _TaskObject } from "./_TaskObject";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskObject: {
      shape: _TaskObject
    }
  }
};
