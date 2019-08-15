import { _FilterList } from "./_FilterList";
import { _ReservedInstancesIdStringList } from "./_ReservedInstancesIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    OfferingClass: {
      shape: {
        type: "string"
      }
    },
    ReservedInstancesIds: {
      shape: _ReservedInstancesIdStringList,
      locationName: "ReservedInstancesId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    OfferingType: {
      shape: {
        type: "string"
      },
      locationName: "offeringType"
    }
  }
};
