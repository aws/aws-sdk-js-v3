import { _NotifyWorkersFailureStatusList } from "./_NotifyWorkersFailureStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const NotifyWorkersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NotifyWorkersFailureStatuses: {
      shape: _NotifyWorkersFailureStatusList
    }
  }
};
