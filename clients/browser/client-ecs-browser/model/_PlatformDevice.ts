import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlatformDevice: _Structure_ = {
  type: "structure",
  required: ["id", "type"],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    }
  }
};
