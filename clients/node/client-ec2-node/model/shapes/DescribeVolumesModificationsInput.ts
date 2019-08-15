import { _VolumeIdStringList } from "./_VolumeIdStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVolumesModificationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    VolumeIds: {
      shape: _VolumeIdStringList,
      locationName: "VolumeId"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
