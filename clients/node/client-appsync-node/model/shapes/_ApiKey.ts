import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApiKey: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    expires: {
      shape: {
        type: "integer"
      }
    }
  }
};
