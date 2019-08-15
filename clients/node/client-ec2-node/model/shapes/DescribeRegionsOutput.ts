import { _RegionList } from "./_RegionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRegionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Regions: {
      shape: _RegionList,
      locationName: "regionInfo"
    }
  }
};
