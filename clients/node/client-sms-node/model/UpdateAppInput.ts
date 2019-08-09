import { _ServerGroups } from "./_ServerGroups";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAppInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    roleName: {
      shape: {
        type: "string"
      }
    },
    serverGroups: {
      shape: _ServerGroups
    },
    tags: {
      shape: _Tags
    }
  }
};
