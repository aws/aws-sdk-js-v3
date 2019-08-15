import { _SourceRegionList } from "./_SourceRegionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSourceRegionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    SourceRegions: {
      shape: _SourceRegionList
    }
  }
};
