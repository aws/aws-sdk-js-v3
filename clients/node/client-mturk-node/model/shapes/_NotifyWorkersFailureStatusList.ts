import { List as _List_ } from "@aws-sdk/types";
import { _NotifyWorkersFailureStatus } from "./_NotifyWorkersFailureStatus";

export const _NotifyWorkersFailureStatusList: _List_ = {
  type: "list",
  member: {
    shape: _NotifyWorkersFailureStatus
  }
};
