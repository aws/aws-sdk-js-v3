import { _Task } from "./_Task";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    task: {
      shape: _Task
    }
  }
};
