import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StateEnteredEventDetails: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    input: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
