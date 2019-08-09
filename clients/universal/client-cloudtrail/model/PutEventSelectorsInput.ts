import { _EventSelectors } from "./_EventSelectors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventSelectorsInput: _Structure_ = {
  type: "structure",
  required: ["TrailName", "EventSelectors"],
  members: {
    TrailName: {
      shape: {
        type: "string"
      }
    },
    EventSelectors: {
      shape: _EventSelectors
    }
  }
};
