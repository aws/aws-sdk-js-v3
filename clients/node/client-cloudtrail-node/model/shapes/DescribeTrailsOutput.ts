import { _TrailList } from "./_TrailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    trailList: {
      shape: _TrailList
    }
  }
};
