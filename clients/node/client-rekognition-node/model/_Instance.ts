import { _BoundingBox } from "./_BoundingBox";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Instance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BoundingBox: {
      shape: _BoundingBox
    },
    Confidence: {
      shape: {
        type: "float"
      }
    }
  }
};
