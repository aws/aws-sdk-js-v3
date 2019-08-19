import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceGroupTimeline: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    ReadyDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
