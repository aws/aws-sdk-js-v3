import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelCountersForWorkteam: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HumanLabeled: {
      shape: {
        type: "integer"
      }
    },
    PendingHuman: {
      shape: {
        type: "integer"
      }
    },
    Total: {
      shape: {
        type: "integer"
      }
    }
  }
};
