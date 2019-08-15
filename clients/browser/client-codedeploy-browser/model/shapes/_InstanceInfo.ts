import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceName: {
      shape: {
        type: "string"
      }
    },
    iamSessionArn: {
      shape: {
        type: "string"
      }
    },
    iamUserArn: {
      shape: {
        type: "string"
      }
    },
    instanceArn: {
      shape: {
        type: "string"
      }
    },
    registerTime: {
      shape: {
        type: "timestamp"
      }
    },
    deregisterTime: {
      shape: {
        type: "timestamp"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
