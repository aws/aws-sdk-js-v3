import { _FilterList } from "./_FilterList";
import { _ZoneNameStringList } from "./_ZoneNameStringList";
import { _ZoneIdStringList } from "./_ZoneIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAvailabilityZonesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    ZoneNames: {
      shape: _ZoneNameStringList,
      locationName: "ZoneName"
    },
    ZoneIds: {
      shape: _ZoneIdStringList,
      locationName: "ZoneId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
