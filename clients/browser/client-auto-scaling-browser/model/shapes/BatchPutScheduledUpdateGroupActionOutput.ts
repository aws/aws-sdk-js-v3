import { _FailedScheduledUpdateGroupActionRequests } from "./_FailedScheduledUpdateGroupActionRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchPutScheduledUpdateGroupActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedScheduledUpdateGroupActions: {
      shape: _FailedScheduledUpdateGroupActionRequests
    }
  }
};
