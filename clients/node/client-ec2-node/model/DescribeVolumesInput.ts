import { _FilterList } from "./_FilterList";
import { _VolumeIdStringList } from "./_VolumeIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    VolumeIds: {
      shape: _VolumeIdStringList,
      locationName: "VolumeId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
