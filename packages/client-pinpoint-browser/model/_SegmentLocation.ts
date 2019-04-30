import { _SetDimension } from "./_SetDimension";
import { _GPSPointDimension } from "./_GPSPointDimension";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Country: {
      shape: _SetDimension
    },
    GPSPoint: {
      shape: _GPSPointDimension
    }
  }
};
