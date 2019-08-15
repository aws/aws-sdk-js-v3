import { _ScheduledUpdateGroupActionRequests } from "./_ScheduledUpdateGroupActionRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchPutScheduledUpdateGroupActionInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName", "ScheduledUpdateGroupActions"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledUpdateGroupActions: {
      shape: _ScheduledUpdateGroupActionRequests
    }
  }
};
