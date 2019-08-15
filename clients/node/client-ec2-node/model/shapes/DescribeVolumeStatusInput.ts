import { _FilterList } from "./_FilterList";
import { _VolumeIdStringList } from "./_VolumeIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumeStatusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
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
    }
  }
};
