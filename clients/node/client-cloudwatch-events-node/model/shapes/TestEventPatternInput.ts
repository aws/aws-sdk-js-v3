import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestEventPatternInput: _Structure_ = {
  type: "structure",
  required: ["EventPattern", "Event"],
  members: {
    EventPattern: {
      shape: {
        type: "string"
      }
    },
    Event: {
      shape: {
        type: "string"
      }
    }
  }
};
