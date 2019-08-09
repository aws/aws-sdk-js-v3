import { _ArrayJobStatusSummary } from "./_ArrayJobStatusSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArrayPropertiesDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    statusSummary: {
      shape: _ArrayJobStatusSummary
    },
    size: {
      shape: {
        type: "integer"
      }
    },
    index: {
      shape: {
        type: "integer"
      }
    }
  }
};
