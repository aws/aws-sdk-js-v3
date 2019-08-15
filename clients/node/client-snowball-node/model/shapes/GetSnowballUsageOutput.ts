import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSnowballUsageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnowballLimit: {
      shape: {
        type: "integer"
      }
    },
    SnowballsInUse: {
      shape: {
        type: "integer"
      }
    }
  }
};
