import { _PersonDetail } from "./_PersonDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PersonDetection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "integer"
      }
    },
    Person: {
      shape: _PersonDetail
    }
  }
};
