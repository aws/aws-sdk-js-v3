import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MinimumEngineVersionPerAllowedValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllowedValue: {
      shape: {
        type: "string"
      }
    },
    MinimumEngineVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
