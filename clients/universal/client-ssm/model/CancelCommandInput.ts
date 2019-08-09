import { _InstanceIdList } from "./_InstanceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelCommandInput: _Structure_ = {
  type: "structure",
  required: ["CommandId"],
  members: {
    CommandId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    InstanceIds: {
      shape: _InstanceIdList
    }
  }
};
