import { _Resources } from "./_Resources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionType: {
      shape: {
        type: "string"
      }
    },
    resources: {
      shape: _Resources
    }
  }
};
