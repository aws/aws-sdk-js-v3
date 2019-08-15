import { _FilterList } from "./_FilterList";
import { _KeyNameStringList } from "./_KeyNameStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeKeyPairsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    KeyNames: {
      shape: _KeyNameStringList,
      locationName: "KeyName"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
