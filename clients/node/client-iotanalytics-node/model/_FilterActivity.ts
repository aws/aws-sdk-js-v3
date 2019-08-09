import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FilterActivity: _Structure_ = {
  type: "structure",
  required: ["name", "filter"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filter: {
      shape: {
        type: "string",
        min: 1
      }
    },
    next: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
