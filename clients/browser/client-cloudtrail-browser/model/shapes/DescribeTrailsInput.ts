import { _TrailNameList } from "./_TrailNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrailsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    trailNameList: {
      shape: _TrailNameList
    },
    includeShadowTrails: {
      shape: {
        type: "boolean"
      }
    }
  }
};
