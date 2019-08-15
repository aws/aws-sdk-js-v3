import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimerDefinition: _Structure_ = {
  type: "structure",
  required: ["name", "seconds"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    seconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
