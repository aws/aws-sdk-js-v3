import { _FilterList } from "./_FilterList";
import { _RegionNameStringList } from "./_RegionNameStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRegionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    RegionNames: {
      shape: _RegionNameStringList,
      locationName: "RegionName"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    AllRegions: {
      shape: {
        type: "boolean"
      }
    }
  }
};
