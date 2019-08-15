import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NumberFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Gte: {
      shape: {
        type: "float"
      }
    },
    Lte: {
      shape: {
        type: "float"
      }
    },
    Eq: {
      shape: {
        type: "float"
      }
    }
  }
};
