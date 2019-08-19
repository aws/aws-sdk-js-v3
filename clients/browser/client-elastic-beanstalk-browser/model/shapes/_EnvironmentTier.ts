import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentTier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};
