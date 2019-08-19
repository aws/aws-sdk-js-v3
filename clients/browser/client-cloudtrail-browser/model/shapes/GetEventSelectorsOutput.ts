import { _EventSelectors } from "./_EventSelectors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEventSelectorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrailARN: {
      shape: {
        type: "string"
      }
    },
    EventSelectors: {
      shape: _EventSelectors
    }
  }
};
