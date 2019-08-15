import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResponseTimeRootCauseEntity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Coverage: {
      shape: {
        type: "float"
      }
    },
    Remote: {
      shape: {
        type: "boolean"
      }
    }
  }
};
