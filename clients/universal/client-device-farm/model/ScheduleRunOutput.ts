import { _Run } from "./_Run";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ScheduleRunOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    run: {
      shape: _Run
    }
  }
};
