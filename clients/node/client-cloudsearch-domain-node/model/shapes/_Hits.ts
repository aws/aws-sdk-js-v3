import { _HitList } from "./_HitList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Hits: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    found: {
      shape: {
        type: "integer"
      }
    },
    start: {
      shape: {
        type: "integer"
      }
    },
    cursor: {
      shape: {
        type: "string"
      }
    },
    hit: {
      shape: _HitList
    }
  }
};
