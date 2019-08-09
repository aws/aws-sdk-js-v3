import { _BoundingBox } from "./_BoundingBox";
import { _Polygon } from "./_Polygon";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Geometry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BoundingBox: {
      shape: _BoundingBox
    },
    Polygon: {
      shape: _Polygon
    }
  }
};
