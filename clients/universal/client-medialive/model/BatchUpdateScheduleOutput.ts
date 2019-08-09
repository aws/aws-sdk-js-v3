import { _BatchScheduleActionCreateResult } from "./_BatchScheduleActionCreateResult";
import { _BatchScheduleActionDeleteResult } from "./_BatchScheduleActionDeleteResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchUpdateScheduleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Creates: {
      shape: _BatchScheduleActionCreateResult,
      locationName: "creates"
    },
    Deletes: {
      shape: _BatchScheduleActionDeleteResult,
      locationName: "deletes"
    }
  }
};
