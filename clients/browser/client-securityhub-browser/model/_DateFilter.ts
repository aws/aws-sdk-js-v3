import { _DateRange } from "./_DateRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DateFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Start: {
      shape: {
        type: "string"
      }
    },
    End: {
      shape: {
        type: "string"
      }
    },
    DateRange: {
      shape: _DateRange
    }
  }
};
