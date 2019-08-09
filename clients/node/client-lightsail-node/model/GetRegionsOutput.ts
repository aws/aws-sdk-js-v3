import { _RegionList } from "./_RegionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRegionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    regions: {
      shape: _RegionList
    }
  }
};
