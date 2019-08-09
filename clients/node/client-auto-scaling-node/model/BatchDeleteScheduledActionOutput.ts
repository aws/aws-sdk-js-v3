import { _FailedScheduledUpdateGroupActionRequests } from "./_FailedScheduledUpdateGroupActionRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteScheduledActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedScheduledActions: {
      shape: _FailedScheduledUpdateGroupActionRequests
    }
  }
};
