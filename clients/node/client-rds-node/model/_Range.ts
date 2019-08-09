import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Range: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    From: {
      shape: {
        type: "integer"
      }
    },
    To: {
      shape: {
        type: "integer"
      }
    },
    Step: {
      shape: {
        type: "integer"
      }
    }
  }
};
