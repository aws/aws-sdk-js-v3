import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DisableRemoteControl: {
      shape: {
        type: "boolean"
      }
    },
    EnableDialOut: {
      shape: {
        type: "boolean"
      }
    }
  }
};
