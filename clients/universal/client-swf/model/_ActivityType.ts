import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityType: _Structure_ = {
  type: "structure",
  required: ["name", "version"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
