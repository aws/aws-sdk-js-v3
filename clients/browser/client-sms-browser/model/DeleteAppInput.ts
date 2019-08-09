import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAppInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    appId: {
      shape: {
        type: "string"
      }
    },
    forceStopAppReplication: {
      shape: {
        type: "boolean"
      }
    },
    forceTerminateApp: {
      shape: {
        type: "boolean"
      }
    }
  }
};
