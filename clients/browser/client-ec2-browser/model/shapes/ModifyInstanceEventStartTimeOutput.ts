import { _InstanceStatusEvent } from "./_InstanceStatusEvent";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceEventStartTimeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Event: {
      shape: _InstanceStatusEvent,
      locationName: "event"
    }
  }
};
