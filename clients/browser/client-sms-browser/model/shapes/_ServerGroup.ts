import { _ServerList } from "./_ServerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    serverGroupId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    serverList: {
      shape: _ServerList
    }
  }
};
