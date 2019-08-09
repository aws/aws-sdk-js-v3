import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeHook: _Structure_ = {
  type: "structure",
  required: ["uri", "messageVersion"],
  members: {
    uri: {
      shape: {
        type: "string",
        min: 20
      }
    },
    messageVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
