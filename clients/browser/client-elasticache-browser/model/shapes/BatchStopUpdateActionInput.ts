import { _ReplicationGroupIdList } from "./_ReplicationGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchStopUpdateActionInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationGroupIds", "ServiceUpdateName"],
  members: {
    ReplicationGroupIds: {
      shape: _ReplicationGroupIdList
    },
    ServiceUpdateName: {
      shape: {
        type: "string"
      }
    }
  }
};
