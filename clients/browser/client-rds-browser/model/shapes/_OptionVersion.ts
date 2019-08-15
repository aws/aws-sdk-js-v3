import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Version: {
      shape: {
        type: "string"
      }
    },
    IsDefault: {
      shape: {
        type: "boolean"
      }
    }
  }
};
