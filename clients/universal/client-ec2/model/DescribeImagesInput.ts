import { _ExecutableByStringList } from "./_ExecutableByStringList";
import { _FilterList } from "./_FilterList";
import { _ImageIdStringList } from "./_ImageIdStringList";
import { _OwnerStringList } from "./_OwnerStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImagesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExecutableUsers: {
      shape: _ExecutableByStringList,
      locationName: "ExecutableBy"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    ImageIds: {
      shape: _ImageIdStringList,
      locationName: "ImageId"
    },
    Owners: {
      shape: _OwnerStringList,
      locationName: "Owner"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
