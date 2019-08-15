import { _BundleIdStringList } from "./_BundleIdStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBundleTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BundleIds: {
      shape: _BundleIdStringList,
      locationName: "BundleId"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
