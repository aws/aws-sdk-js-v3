import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MethodSnapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authorizationType: {
      shape: {
        type: "string"
      }
    },
    apiKeyRequired: {
      shape: {
        type: "boolean"
      }
    }
  }
};
